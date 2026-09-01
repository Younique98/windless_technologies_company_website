import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { PricingCard } from "@/components/PricingCard";
import { CtaBanner } from "@/components/CtaBanner";
import { webTiers, mobileTiers, addOns, whyCustomCode } from "@/data/services";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Custom web design and development, e-commerce, and Flutter mobile app packages from Windless Technologies - transparent pricing, no page builders.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services & Pricing | Windless Technologies",
    description:
      "Custom web design and development, e-commerce, and Flutter mobile app packages - transparent pricing, no page builders.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="border-b border-line bg-grid">
          <div className="max-w-6xl mx-auto px-6 pt-16 pb-14 sm:pt-20 sm:pb-16">
            <SectionEyebrow index="Sheet 01" label="Services" />
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink-primary max-w-2xl">
              Web, e-commerce, and mobile - built by hand, priced up front.
            </h1>
            <p className="mt-5 text-lg text-ink-secondary max-w-2xl leading-relaxed">
              Every project is 100% custom-coded. No WordPress, no
              Squarespace, no page builders - just clean, fast, secure
              software built specifically for your business.
            </p>
          </div>
        </section>

        {/* Web */}
        <section className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
          <SectionEyebrow index="Sheet 01.1" label="Web Design & Development" />
          <h2 className="font-display text-3xl font-semibold text-ink-primary mb-10 max-w-2xl">
            Web design &amp; development
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {webTiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
        </section>

        {/* Mobile */}
        <section className="border-y border-line bg-surface-2">
          <div className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
            <SectionEyebrow index="Sheet 01.2" label="Mobile App Development" />
            <div className="max-w-2xl mb-10">
              <h2 className="font-display text-3xl font-semibold text-ink-primary">
                Mobile app development
              </h2>
              <p className="mt-3 text-ink-secondary leading-relaxed">
                Cross-platform iOS and Android apps built in Flutter, from a
                single codebase, submitted to both app stores.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {mobileTiers.map((tier) => (
                <PricingCard key={tier.name} tier={tier} />
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
          <SectionEyebrow index="Sheet 01.3" label="Add-ons" />
          <h2 className="font-display text-3xl font-semibold text-ink-primary mb-10 max-w-2xl">
            Add-ons, for web or mobile
          </h2>
          <div className="overflow-x-auto rounded-md border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface-2 font-mono text-xs uppercase tracking-wider text-ink-muted">
                <tr>
                  <th scope="col" className="px-5 py-3.5">
                    Add-on
                  </th>
                  <th scope="col" className="px-5 py-3.5">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {addOns.map((addOn) => (
                  <tr key={addOn.name}>
                    <td className="px-5 py-3.5 border-t border-line text-ink-primary">
                      {addOn.name}
                    </td>
                    <td className="px-5 py-3.5 border-t border-line font-mono text-ink-primary">
                      {addOn.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Why custom code recap */}
        <section className="border-y border-line bg-surface-2">
          <div className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
            <SectionEyebrow index="Sheet 02" label="Why Custom Code" />
            <div className="grid gap-8 sm:grid-cols-2">
              {whyCustomCode.map((point) => (
                <div key={point.label}>
                  <h3 className="font-display text-lg font-semibold text-ink-primary">
                    {point.label}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-secondary leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-14 text-center">
          <p className="text-ink-secondary">
            Not sure which package fits?{" "}
            <Link href="/contact" className="font-semibold text-blueprint hover:underline">
              Tell us about your project
            </Link>{" "}
            and we&apos;ll recommend one.
          </p>
        </div>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
