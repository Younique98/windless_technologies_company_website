import type { CaseStudy } from "@/data/portfolio";

export const CaseStudyCard = ({ study }: { study: CaseStudy }) => (
  <article className="corner-marks rounded-md border border-line bg-surface p-6 sm:p-7">
    <p className="font-mono text-xs uppercase tracking-widest text-blueprint">
      {study.category}
    </p>
    <h3 className="mt-2 font-display text-2xl font-semibold text-ink-primary">
      {study.name}
    </h3>
    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-sm text-ink-muted">
      <span>{study.price}</span>
      <span aria-hidden="true">·</span>
      <span>{study.timeline}</span>
    </div>
    <p className="mt-4 text-sm text-ink-secondary leading-relaxed">{study.summary}</p>
    <ul className="mt-5 space-y-2 text-sm text-ink-secondary">
      {study.benefits.map((benefit) => (
        <li key={benefit} className="flex gap-2.5">
          <span aria-hidden="true" className="mt-1 text-redline">
            +
          </span>
          <span>{benefit}</span>
        </li>
      ))}
    </ul>
  </article>
);
