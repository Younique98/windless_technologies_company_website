# Windless Technologies

The marketing website for Windless Technologies - a custom software
consulting company specializing in 100% hand-coded websites, e-commerce
platforms, and mobile apps. No WordPress, no page builders.

Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Pages

- `/` - Home: hero, service pricing, why custom code, featured case studies
- `/services` - Full pricing for web, e-commerce, and mobile app packages, plus add-ons
- `/portfolio` - Case studies: Lunar Mart, Orbit CRM, Stellar App
- `/about` - Mission, vision, core values, leadership
- `/careers` - The invite-only internship program and how to apply
- `/contact` - Project inquiry form
- `/privacy`, `/terms` - Legal

## Design system

Design concept: **drafting paper / blueprint**. Light mode reads as a
drafting table - cream paper, dark graphite ink, a structural blueprint
blue for interactive elements. Dark mode reads as an actual architectural
blueprint print - light ink lines on deep blueprint-blue paper. Both are
literal references to how real blueprints look, not an arbitrary palette
inversion.

- **Type:** IBM Plex Sans Condensed (display/headings), IBM Plex Sans
  (body), IBM Plex Mono (pricing, stats, spec-sheet labels) - chosen for
  the same reason the company sells custom code: precision and technical
  credibility over a generic "safe" sans.
- **Color tokens:** defined in `src/app/globals.css` as CSS custom
  properties, light set on `:root` and a dark set under
  `@media (prefers-color-scheme: dark)`. Every text/background/button
  pairing is verified against the WCAG AA contrast minimums by
  `scripts/check-contrast.mjs` (a small, dependency-free luminance/contrast
  calculator - run it with `node scripts/check-contrast.mjs`).
- **Motif:** blueprint corner brackets (`.corner-marks` in globals.css) on
  cards/panels, a faint drafting grid on hero sections, and mono
  "spec sheet" eyebrow labels above each section.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Validation

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # next lint
npm run build        # production build
node scripts/check-contrast.mjs   # WCAG AA contrast verification
```

## Contact form / email delivery

The contact form (`/contact`) posts to `POST /api/contact`
(`src/app/api/contact/route.ts`), which:

- Validates and sanitizes every field server-side
  (`src/lib/validation.ts`) - required fields, length limits, an email
  format check, and control-character stripping.
- Rate-limits by IP (`src/lib/rateLimit.ts`, 5 requests/minute/IP).
- Sends the submission via [Resend](https://resend.com) using
  `RESEND_API_KEY` and `CONTACT_TO_EMAIL` from the environment.

**To go live, Erica needs to:**

1. Create a Resend account (or another transactional email provider) and
   verify a sending domain.
2. Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL` as environment variables
   in the hosting provider (see `.env.example`).
3. Update the `from` address in `src/app/api/contact/route.ts` (currently
   `onboarding@resend.dev`, Resend's shared sandbox sender) to an address
   on the verified sending domain.

Until those are set, the form still validates correctly and logs
submissions to the server console (`console.warn`) rather than silently
dropping them - nothing is lost, it just isn't emailed yet.

**Also needs Erica's real value before going live:**

- `NEXT_PUBLIC_SITE_URL` (currently `https://windlesstechnologies.com`,
  a placeholder) should be set to the real production domain once
  registered/confirmed - it drives canonical URLs, the sitemap, and
  Open Graph tags.
- No scheduling link (e.g. Calendly) is wired up - "Schedule a call"
  currently routes to the `/contact` form rather than an external
  booking page, since no real link was provided. Swap it in
  `src/components/Hero.tsx`, `Nav.tsx`, and `CtaBanner.tsx` if/when one
  exists.

## Security

- Security headers (HSTS, X-Frame-Options, X-Content-Type-Options,
  Referrer-Policy, Permissions-Policy, a Content-Security-Policy) are set
  in `next.config.js` for every route.
- No secrets are committed; all provider credentials are read from
  environment variables (see `.env.example`).
- Contact form input is validated and sanitized server-side before use.

## SEO / AI crawler infrastructure

- `src/app/robots.ts`, `src/app/sitemap.ts` - real, route-driven.
- `public/llms.txt` - a plain-language summary for AI crawlers/answer
  engines.
- Per-page `metadata` (title, description, canonical, Open Graph) on
  every route.

## Accessibility

Every route was scanned with `@axe-core/playwright` in both light and
dark color schemes during development and came back with zero WCAG
2.0/2.1 A/AA violations. That tooling is a throwaway dev dependency (not
in `package.json`) - re-add it locally with
`npm install --no-save @axe-core/playwright playwright` and run
`node scripts/axe-scan.mjs` (after `npm run build`) to re-verify.
`scripts/check-contrast.mjs` stays in the repo permanently as a
lightweight, dependency-free contrast check for the color tokens.
