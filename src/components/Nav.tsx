import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
];

export const Nav = () => (
  <header className="w-full border-b border-line bg-bg sticky top-0 z-30">
    <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      <Link
        href="/"
        className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-ink-primary"
      >
        <span
          aria-hidden="true"
          className="inline-block h-4 w-4 rounded-sm border-2 border-blueprint"
        />
        <span>
          Windless <span className="text-blueprint">Technologies</span>
        </span>
      </Link>
      <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hidden md:inline-block px-3 py-2 text-sm font-semibold text-ink-secondary hover:text-ink-primary transition rounded"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="px-4 py-2 rounded text-sm font-semibold bg-blueprint-fill text-on-fill hover:opacity-90 transition"
        >
          Schedule a call
        </Link>
      </nav>
    </div>
  </header>
);
