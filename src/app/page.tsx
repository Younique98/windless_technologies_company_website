import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { PricingCard } from "@/components/PricingCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CtaBanner } from "@/components/CtaBanner";
import { webTiers, whyCustomCode } from "@/data/services";
import { caseStudies } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />

        {/* Services */}
        <section id="services" className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
          <SectionEyebrow index="Sheet 01" label="Web Design & Development" />
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-primary max-w-xl">
              Straightforward pricing for a custom-built site.
            </h2>
            <Link href="/services" className="font-semibold text-blueprint hover:underline">
              See full pricing &amp; mobile app packages →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {webTiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
        </section>

        {/* Why custom code */}
        <section className="border-y border-line bg-surface-2">
          <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
            <SectionEyebrow index="Sheet 02" label="Why Custom Code" />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-primary max-w-xl mb-12">
              No WordPress. No page builders. Here&apos;s why that matters.
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {whyCustomCode.map((point, i) => (
                <div key={point.label} className="flex gap-5">
                  <span className="font-mono text-sm text-blueprint pt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink-primary">
                      {point.label}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-secondary leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
          <SectionEyebrow index="Sheet 03" label="Selected Work" />
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-primary max-w-xl">
              Real projects, real results.
            </h2>
            <Link href="/portfolio" className="font-semibold text-blueprint hover:underline">
              View full case studies →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
