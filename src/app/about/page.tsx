import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { CtaBanner } from "@/components/CtaBanner";
import {
  MISSION,
  VISION,
  CORE_VALUES,
  LEADERSHIP,
  OPEN_LEADERSHIP_ROLES,
  WHY_WINDLESS,
} from "@/data/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "Windless Technologies is a technology consulting company specializing in website design, web development, and mobile application development.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Windless Technologies",
    description:
      "Windless Technologies is a technology consulting company specializing in website design, web development, and mobile application development.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="border-b border-line bg-grid">
          <div className="max-w-6xl mx-auto px-6 pt-16 pb-14 sm:pt-20 sm:pb-16">
            <SectionEyebrow index="Sheet 06" label="About" />
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink-primary max-w-2xl">
              A technology consulting company, built to grow talent alongside
              client work.
            </h1>
            <p className="mt-5 text-lg text-ink-secondary max-w-2xl leading-relaxed">
              Windless Technologies specializes in website design, web
              development, and mobile application development - and pairs
              every client engagement with real-world experience for
              technologists building their careers.
            </p>
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="max-w-6xl mx-auto px-6 py-20 sm:py-24 grid gap-10 sm:grid-cols-2">
          <div className="corner-marks rounded-md border border-line bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-blueprint">
              Mission
            </p>
            <p className="mt-3 text-ink-primary leading-relaxed">{MISSION}</p>
          </div>
          <div className="corner-marks rounded-md border border-line bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-redline">
              Vision
            </p>
            <p className="mt-3 text-ink-primary leading-relaxed">{VISION}</p>
          </div>
        </section>

        {/* Core values */}
        <section className="border-y border-line bg-surface-2">
          <div className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
            <SectionEyebrow index="Sheet 06.1" label="Core Values" />
            <h2 className="font-display text-3xl font-semibold text-ink-primary mb-10 max-w-2xl">
              What guides the work
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {CORE_VALUES.map((value, i) => (
                <div key={value.name} className="flex gap-4">
                  <span className="font-mono text-sm text-blueprint pt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink-primary">
                      {value.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
          <SectionEyebrow index="Sheet 06.2" label="Leadership" />
          <h2 className="font-display text-3xl font-semibold text-ink-primary mb-10 max-w-2xl">
            Leadership
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERSHIP.map((member) => (
              <div key={member.name} className="corner-marks rounded-md border border-line bg-surface p-6">
                <h3 className="font-display text-lg font-semibold text-ink-primary">
                  {member.name}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-blueprint">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{member.bio}</p>
              </div>
            ))}
            {OPEN_LEADERSHIP_ROLES.map((role) => (
              <div
                key={role}
                className="rounded-md border border-dashed border-line-strong bg-surface-2 p-6 flex flex-col justify-center"
              >
                <h3 className="font-display text-lg font-semibold text-ink-muted">{role}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink-muted">
                  Open role
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Windless */}
        <section className="border-y border-line bg-surface-2">
          <div className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
            <SectionEyebrow index="Sheet 06.3" label="Why Windless" />
            <h2 className="font-display text-3xl font-semibold text-ink-primary mb-10 max-w-2xl">
              Why Windless
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_WINDLESS.map((point) => (
                <div key={point.name}>
                  <h3 className="font-display text-base font-semibold text-ink-primary">
                    {point.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-secondary leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
