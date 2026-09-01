import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CtaBanner } from "@/components/CtaBanner";
import { caseStudies } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies from Windless Technologies: Lunar Mart (e-commerce), Orbit CRM (custom CRM), and Stellar App (cross-platform mobile) - each 100% custom-coded.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | Windless Technologies",
    description:
      "Case studies: Lunar Mart (e-commerce), Orbit CRM (custom CRM), and Stellar App (cross-platform mobile).",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="border-b border-line bg-grid">
          <div className="max-w-6xl mx-auto px-6 pt-16 pb-14 sm:pt-20 sm:pb-16">
            <SectionEyebrow index="Sheet 03" label="Selected Work" />
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink-primary max-w-2xl">
              Three projects, three different problems solved.
            </h1>
            <p className="mt-5 text-lg text-ink-secondary max-w-2xl leading-relaxed">
              A sample of what custom-coded actually looks like in
              production - e-commerce, an internal tool, and a mobile app,
              each built from scratch for the business it serves.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
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
