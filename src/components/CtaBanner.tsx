import Link from "next/link";

export const CtaBanner = () => (
  <section className="bg-blueprint-fill">
    <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-on-fill mb-4">
        Sheet 05 — Get Started
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-on-fill max-w-2xl mx-auto">
        Ready to elevate your business with a custom solution?
      </h2>
      <p className="mt-4 text-muted-on-fill max-w-xl mx-auto">
        Schedule a call today and let&apos;s talk through what you&apos;re
        building.
      </p>
      <div className="mt-8">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded bg-redline-fill px-7 py-3.5 text-sm font-semibold text-on-fill hover:opacity-90 transition"
        >
          Schedule a call
        </Link>
      </div>
    </div>
  </section>
);
