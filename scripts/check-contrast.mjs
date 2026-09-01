#!/usr/bin/env node
// Computes WCAG 2.1 contrast ratios for every color pairing used in
// src/app/globals.css, for both the light and dark token sets, and fails
// (non-zero exit) if anything that carries text or is a UI-component
// boundary falls short of its required ratio. Run with:
//   node scripts/check-contrast.mjs

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const bigint = parseInt(h, 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function relativeLuminance([r, g, b]) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const cs = c / 255;
    return cs <= 0.03928 ? cs / 12.92 : Math.pow((cs + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrast(hexA, hexB) {
  const L1 = relativeLuminance(hexToRgb(hexA));
  const L2 = relativeLuminance(hexToRgb(hexB));
  const [lighter, darker] = L1 > L2 ? [L1, L2] : [L2, L1];
  return (lighter + 0.05) / (darker + 0.05);
}

const light = {
  bg: "#f5f6f2",
  surface: "#ffffff",
  surface2: "#ebeee8",
  borderStrong: "#7c868d",
  inkPrimary: "#12181c",
  inkSecondary: "#3d4a4f",
  inkMuted: "#5c6b70",
  blueprint: "#1c4a72",
  blueprintFill: "#153a5a",
  redline: "#a8391a",
  redlineFill: "#a8391a",
  onFill: "#f5f6f2",
  mutedOnFill: "#c7d0d6",
};

const dark = {
  bg: "#0c2038",
  surface: "#122b47",
  surface2: "#173456",
  borderStrong: "#7c8b9f",
  inkPrimary: "#f2f4ee",
  inkSecondary: "#c3d3de",
  inkMuted: "#93aabb",
  blueprint: "#8fc1ea",
  blueprintFill: "#2c5c8a",
  redline: "#f0855a",
  redlineFill: "#c43a18",
  onFill: "#f2f4ee",
  mutedOnFill: "#dbe4ea",
};

// [foreground, background, minimum ratio, label]
function pairs(t) {
  return [
    [t.inkPrimary, t.bg, 4.5, "body text on page background"],
    [t.inkSecondary, t.bg, 4.5, "secondary text on page background"],
    [t.inkMuted, t.bg, 3.0, "muted/large text on page background"],
    [t.inkPrimary, t.surface, 4.5, "body text on card surface"],
    [t.inkSecondary, t.surface, 4.5, "secondary text on card surface"],
    [t.inkPrimary, t.surface2, 4.5, "body text on alt surface"],
    [t.blueprint, t.bg, 4.5, "blueprint link text on page background"],
    [t.blueprint, t.surface, 4.5, "blueprint link text on card surface"],
    [t.redline, t.bg, 4.5, "redline accent text on page background"],
    [t.redline, t.surface, 4.5, "redline accent text on card surface"],
    [t.onFill, t.blueprintFill, 4.5, "button text on blueprint-fill button"],
    [t.onFill, t.redlineFill, 4.5, "button text on redline-fill button"],
    [t.mutedOnFill, t.blueprintFill, 4.5, "muted text on blueprint-fill band"],
    [t.borderStrong, t.bg, 3.0, "form control border on page background"],
    [t.borderStrong, t.surface, 3.0, "form control border on card surface"],
  ];
}

let failures = 0;
for (const [name, theme] of [
  ["LIGHT", light],
  ["DARK", dark],
]) {
  console.log(`\n${name}`);
  for (const [fg, bg, min, label] of pairs(theme)) {
    const ratio = contrast(fg, bg);
    const pass = ratio >= min;
    if (!pass) failures++;
    console.log(
      `  ${pass ? "PASS" : "FAIL"}  ${label.padEnd(38)} ${fg} on ${bg}  ${ratio.toFixed(2)} (need ${min})`,
    );
  }
}

if (failures > 0) {
  console.error(`\n${failures} contrast pairing(s) below WCAG AA minimum.`);
  process.exit(1);
}
console.log("\nAll contrast pairings meet WCAG AA.");
