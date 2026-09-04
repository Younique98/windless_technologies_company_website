"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

type Props = {
  calendlyUrl: string;
};

// Bakes the site's own blueprint palette into Calendly's embed via its
// documented background_color / text_color / primary_color query params
// (hex, no "#"), rather than letting the widget fall back to Calendly's
// default styling. These only accept static values, so the light/dark
// choice is made once on mount from the visitor's OS preference - matching
// how the rest of the site's own light/dark tokens are driven by
// prefers-color-scheme (see globals.css).
const LIGHT = { background: "ffffff", text: "12181c", primary: "153a5a" };
const DARK = { background: "122b47", text: "f2f4ee", primary: "8fc1ea" };

function buildThemedUrl(calendlyUrl: string): string {
  try {
    const url = new URL(calendlyUrl);
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const colors = prefersDark ? DARK : LIGHT;
    url.searchParams.set("background_color", colors.background);
    url.searchParams.set("text_color", colors.text);
    url.searchParams.set("primary_color", colors.primary);
    return url.toString();
  } catch {
    // Malformed URL (e.g. a placeholder value someone typo'd) - fall back to
    // it unmodified rather than throwing and taking the whole page down.
    return calendlyUrl;
  }
}

export const BookACall = ({ calendlyUrl }: Props) => {
  // Computed client-side only, so the embed always reflects the visitor's
  // own light/dark preference rather than whatever was true at build time.
  const [themedUrl, setThemedUrl] = useState<string | null>(null);

  useEffect(() => {
    setThemedUrl(buildThemedUrl(calendlyUrl));
  }, [calendlyUrl]);

  return (
    <div className="corner-marks rounded-md border border-line bg-surface p-6 sm:p-8">
      <h2 className="font-display text-xl font-semibold text-ink-primary">
        Prefer to talk it through? Book a call directly.
      </h2>
      <p className="mt-2 text-ink-secondary">
        Pick a time that works for you and we&apos;ll hop on a call - no form
        required.
      </p>

      <div className="mt-6 overflow-hidden rounded border border-line">
        <div
          className="calendly-inline-widget"
          data-url={themedUrl ?? calendlyUrl}
          style={{ minWidth: "280px", height: "700px" }}
          role="group"
          aria-label="Calendly scheduling widget: pick a date and time to book a call"
        />
      </div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <p className="mt-3 text-sm text-ink-muted">
        Scheduler not loading?{" "}
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-ink-primary"
        >
          Open it in a new tab
        </a>
        .
      </p>
    </div>
  );
};
