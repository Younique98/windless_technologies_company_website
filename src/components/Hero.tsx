import Link from "next/link";

export const Hero = () => (
  <section className="relative overflow-hidden border-b border-line bg-grid">
    <div className="absolute inset-0 hero-fade" aria-hidden="true" />
    <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-blueprint mb-5">
        Windless Technologies — Custom Software Consulting
      </p>
      <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-ink-primary max-w-3xl text-balance">
        100% custom-coded software. No WordPress. No page builders.
      </h1>
      <p className="mt-6 text-lg text-ink-secondary max-w-2xl leading-relaxed">
        Windless Technologies designs and hand-codes websites, e-commerce
        platforms, and mobile apps for businesses that want it built right -
        faster, more secure, and built to scale with you, not around a
        template.
      </p>
      <div className="mt-9 flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded bg-redline-fill px-7 py-3.5 text-sm font-semibold text-on-fill hover:opacity-90 transition"
        >
          Schedule a call
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded border border-line-strong px-7 py-3.5 text-sm font-semibold text-ink-primary hover:border-blueprint hover:text-blueprint transition"
        >
          View pricing
        </Link>
      </div>
      <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl font-mono">
        <div>
          <dt className="text-xs uppercase tracking-wider text-ink-muted">Load time</dt>
          <dd className="mt-1 text-2xl font-semibold text-ink-primary">&lt;1s</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-ink-muted">Plugin CVEs</dt>
          <dd className="mt-1 text-2xl font-semibold text-ink-primary">0</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-ink-muted">Platforms</dt>
          <dd className="mt-1 text-2xl font-semibold text-ink-primary">iOS + Android</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-ink-muted">Code owned by</dt>
          <dd className="mt-1 text-2xl font-semibold text-ink-primary">You</dd>
        </div>
      </dl>
    </div>
  </section>
);
