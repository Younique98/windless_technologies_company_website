import type { PricingTier } from "@/data/services";

export const PricingCard = ({ tier }: { tier: PricingTier }) => (
  <div
    className={`corner-marks flex flex-col rounded-md border p-6 sm:p-7 bg-surface ${
      tier.highlight ? "border-blueprint" : "border-line"
    }`}
  >
    {tier.highlight && (
      <span className="mb-3 inline-flex w-fit items-center rounded-full bg-blueprint-fill px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-on-fill">
        Most popular
      </span>
    )}
    <h3 className="font-display text-xl font-semibold text-ink-primary">{tier.name}</h3>
    <p className="mt-3 flex items-baseline gap-1 font-mono text-ink-primary">
      <span className="text-3xl font-semibold">{tier.price}</span>
      {tier.cadence && <span className="text-sm text-ink-muted">{tier.cadence}</span>}
    </p>
    <p className="mt-3 text-sm text-ink-secondary">{tier.description}</p>
    <ul className="mt-5 space-y-2.5 text-sm text-ink-secondary flex-1">
      {tier.features.map((feature) => (
        <li key={feature} className="flex gap-2.5">
          <span aria-hidden="true" className="mt-1 text-blueprint">
            +
          </span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);
