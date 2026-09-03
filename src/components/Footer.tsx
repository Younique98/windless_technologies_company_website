import Link from "next/link";

export const Footer = () => (
  <footer className="border-t border-line bg-surface">
    <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-3">
      <div>
        <p className="font-display text-base font-semibold text-ink-primary">
          Windless Technologies
        </p>
        <p className="mt-2 text-sm text-ink-secondary max-w-xs">
          Custom-coded websites, e-commerce, and mobile apps. No WordPress,
          no page builders - built by hand, built to scale.
        </p>
      </div>
      <nav aria-label="Site" className="text-sm">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-3">
          Sitemap
        </p>
        <ul className="space-y-2">
          <li>
            <Link href="/about" className="text-ink-secondary hover:text-blueprint">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-ink-secondary hover:text-blueprint">
              Services
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-ink-secondary hover:text-blueprint">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/careers" className="text-ink-secondary hover:text-blueprint">
              Careers
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-ink-secondary hover:text-blueprint">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="text-sm">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-3">
          Contact
        </p>
        <ul className="space-y-2">
          <li>
            <Link href="/contact" className="text-ink-secondary hover:text-blueprint">
              Get in touch
            </Link>
          </li>
        </ul>
        <ul className="mt-4 space-y-2">
          <li>
            <Link href="/privacy" className="text-ink-muted hover:text-blueprint">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-ink-muted hover:text-blueprint">
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-line px-6 py-5">
      <p className="max-w-6xl mx-auto font-mono text-xs text-ink-muted">
        © {new Date().getFullYear()} Windless Technologies. All rights reserved.
      </p>
    </div>
  </footer>
);
