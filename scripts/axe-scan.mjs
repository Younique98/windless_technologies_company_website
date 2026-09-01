#!/usr/bin/env node
// Throwaway WCAG AA scan using @axe-core/playwright against a production
// build served locally. Scans every real route in both color schemes.
// Not part of the permanent toolchain - removed before the final commit.
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import { spawn } from "node:child_process";

const PORT = 4217;
const BASE_URL = `http://localhost:${PORT}`;
const ROUTES = ["/", "/services", "/portfolio", "/about", "/careers", "/contact", "/privacy", "/terms"];
const SCHEMES = ["light", "dark"];

function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const attempt = async () => {
      try {
        const res = await fetch(url);
        if (res.ok || res.status < 500) return resolve();
      } catch {
        // not up yet
      }
      if (Date.now() - start > timeoutMs) return reject(new Error("Server did not start in time"));
      setTimeout(attempt, 500);
    };
    attempt();
  });
}

async function main() {
  // Spawn next's CLI directly (not via npx) and detached, in its own
  // process group, so it can be killed as a group - "next start" forks a
  // real server child, and killing only the wrapper process leaves that
  // child running and the port held.
  const server = spawn("node_modules/.bin/next", ["start", "-p", String(PORT)], {
    cwd: process.cwd(),
    stdio: "pipe",
    detached: true,
  });
  server.stdout.on("data", () => {});
  server.stderr.on("data", (d) => process.stderr.write(d));

  try {
    await waitForServer(BASE_URL);

    const browser = await chromium.launch({
      executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
      // Chromium's own background network chatter (Google telemetry/update
      // checks) is blocked by the egress proxy and never settles, which
      // starves waitUntil:"networkidle" indefinitely. Disable it outright
      // rather than relying on networkidle to route around it.
      args: [
        "--disable-background-networking",
        "--disable-component-update",
        "--disable-domain-reliability",
        "--disable-client-side-phishing-detection",
        "--disable-sync",
        "--no-first-run",
      ],
    });

    let totalViolations = 0;
    const details = [];

    for (const scheme of SCHEMES) {
      for (const route of ROUTES) {
        const context = await browser.newContext({ colorScheme: scheme });
        const page = await context.newPage();
        await page.goto(`${BASE_URL}${route}`, { waitUntil: "load" });
        await page.waitForLoadState("domcontentloaded");
        const results = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
          .analyze();

        const count = results.violations.length;
        totalViolations += count;
        console.log(`\n[${scheme}] ${route} - ${count} violation(s)`);
        for (const v of results.violations) {
          console.log(`  - ${v.id} (${v.impact}): ${v.help} [${v.nodes.length} node(s)]`);
          for (const node of v.nodes.slice(0, 3)) {
            console.log(`      target: ${node.target.join(" ")}`);
          }
          details.push({ scheme, route, id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length });
        }
        await context.close();
      }
    }

    await browser.close();

    console.log(`\n=== TOTAL VIOLATIONS: ${totalViolations} ===`);
    if (totalViolations > 0) {
      console.log(JSON.stringify(details, null, 2));
      process.exitCode = 1;
    }
  } finally {
    try {
      process.kill(-server.pid, "SIGKILL");
    } catch {
      server.kill("SIGKILL");
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
