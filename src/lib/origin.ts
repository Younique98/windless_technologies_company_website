import { SITE_URL } from "@/lib/site";

// The set of origins allowed to POST to same-origin API routes. Derived from
// SITE_URL (which already covers the configured production domain) plus the
// bare apex/www variants, so the check doesn't silently drop requests to a
// domain that differs from SITE_URL only by a "www." prefix.
function buildAllowedOrigins(): Set<string> {
  const origins = new Set<string>();

  try {
    const url = new URL(SITE_URL);
    origins.add(url.origin);

    const host = url.hostname;
    if (host.startsWith("www.")) {
      origins.add(`${url.protocol}//${host.slice(4)}`);
    } else {
      origins.add(`${url.protocol}//www.${host}`);
    }
  } catch {
    // SITE_URL is a compile-time constant with a hardcoded fallback, so this
    // should be unreachable - but fail closed (empty allow-list) rather than
    // throw if it's ever misconfigured.
  }

  return origins;
}

const ALLOWED_ORIGINS = buildAllowedOrigins();

/**
 * Lightweight CSRF defense for unauthenticated, session-less API routes:
 * confirms the request's Origin (falling back to Referer, since some
 * browsers omit Origin on same-origin fetches in edge cases) matches this
 * site's own origin. Not a substitute for token-based CSRF on
 * session/cookie-authenticated endpoints - this route has neither, so an
 * Origin/Referer allow-list is the right-sized check.
 */
export function hasTrustedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (origin) {
    return ALLOWED_ORIGINS.has(origin);
  }

  const referer = request.headers.get("referer");
  if (referer) {
    try {
      return ALLOWED_ORIGINS.has(new URL(referer).origin);
    } catch {
      return false;
    }
  }

  // No Origin and no Referer: reject rather than assume trust. Same-origin
  // browser fetches from the contact form always send one of the two.
  return false;
}
