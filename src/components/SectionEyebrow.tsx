type Props = {
  index: string;
  label: string;
};

// Small "spec sheet" style label used above section headings - a drafting
// title-block reference number plus the section name, in mono type.
export const SectionEyebrow = ({ index, label }: Props) => (
  <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-blueprint mb-3">
    <span aria-hidden="true" className="h-px w-6 bg-blueprint" />
    <span>
      {index} — {label}
    </span>
  </p>
);
