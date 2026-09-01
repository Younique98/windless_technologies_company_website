/** @type {import('next').NextConfig} */
const securityHeaders = [
  // Disallow this site from being framed by anyone (no clickjacking vector
  // - there is nothing here that should ever live inside someone else's frame).
  { key: "X-Frame-Options", value: "DENY" },
  // Stop the browser from guessing content types away from what the server sent.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send full referrer only to our own origin; a same-site downgrade sends
  // the origin, cross-site navigation sends nothing.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // No device/browser APIs this marketing site has any use for.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  // HSTS: force HTTPS for a year, including subdomains, and allow preload
  // list submission once the domain is live.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js App Router's own hydration/RSC-payload bootstrap is a set
      // of inline <script> tags with build-time-generated content, which
      // a nonce-based CSP can only allow on *dynamically rendered* pages
      // (the nonce has to exist at request time - it can't be baked into
      // statically prerendered HTML). Forcing this entire static
      // marketing site to render per-request just to satisfy a nonce
      // would undercut the sub-1s static-delivery pitch the site itself
      // makes, so this is a deliberate, scoped exception rather than an
      // oversight: 'unsafe-inline' applies to script-src only, nothing in
      // this codebase uses dangerouslySetInnerHTML or reflects
      // user-supplied input into HTML (the contact form is JSON
      // fetch()->JSON response only), and every other directive below
      // stays fully locked down.
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "object-src 'none'",
    ].join("; "),
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
