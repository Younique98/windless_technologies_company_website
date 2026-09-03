import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { INTERNSHIP_TRACKS, STRUCTURE, CAREERS_FAQ } from "@/data/careers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers & Internships",
  description:
    "Windless Technologies runs an invite-only internship program giving real-world experience on live client projects, built around a genuinely balanced Tuesday-Thursday work rhythm.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers & Internships | Windless Technologies",
    description:
      "An invite-only internship program giving real-world experience on live client projects.",
    url: "/careers",
  },
};

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="border-b border-line bg-grid">
          <div className="max-w-6xl mx-auto px-6 pt-16 pb-14 sm:pt-20 sm:pb-16">
            <SectionEyebrow index="Sheet 07" label="Careers" />
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink-primary max-w-2xl">
              Real client work. Real mentorship. A genuinely sane schedule.
            </h1>
            <p className="mt-5 text-lg text-ink-secondary max-w-2xl leading-relaxed">
              Windless Technologies runs an invite-only internship program -
              structured like a real job, built on live consulting projects
              for real clients, async-first with a weekly live stand-up.
            </p>
          </div>
        </section>

        {/* Tracks */}
        <section className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
          <SectionEyebrow index="Sheet 07.1" label="Tracks" />
          <h2 className="font-display text-3xl font-semibold text-ink-primary mb-10 max-w-2xl">
            Two tracks
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {INTERNSHIP_TRACKS.map((track) => (
              <div key={track.name} className="corner-marks rounded-md border border-line bg-surface p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold text-ink-primary">
                  {track.name}
                </h3>
                <p className="mt-2 text-sm text-ink-secondary">{track.summary}</p>
                <ul className="mt-5 space-y-2.5 text-sm text-ink-secondary">
                  {track.highlights.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-1 text-blueprint">
                        +
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Structure */}
        <section className="border-y border-line bg-surface-2">
          <div className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
            <SectionEyebrow index="Sheet 07.2" label="Structure" />
            <h2 className="font-display text-3xl font-semibold text-ink-primary mb-10 max-w-2xl">
              Structure
            </h2>
            <dl className="grid gap-8 sm:grid-cols-2">
              {STRUCTURE.map((point) => (
                <div key={point.label}>
                  <dt className="font-mono text-xs uppercase tracking-widest text-blueprint">
                    {point.label}
                  </dt>
                  <dd className="mt-2 text-ink-primary leading-relaxed">{point.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* The Tuesday-Thursday rhythm - the differentiator */}
        <section className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
          <SectionEyebrow index="Sheet 07.3" label="How We Work" />
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-primary max-w-2xl">
            A Tuesday–Thursday core work rhythm
          </h2>
          <p className="mt-5 text-ink-secondary max-w-2xl leading-relaxed">
            Windless is built around a work rhythm inspired by Finland,
            Denmark, Norway, and the Netherlands: real balance, not a
            slogan. <span className="text-ink-primary font-semibold">Monday</span>{" "}
            is open, unscheduled recovery and reflection time - no
            stand-ups, no pings, no obligation.{" "}
            <span className="text-ink-primary font-semibold">
              Tuesday through Thursday
            </span>{" "}
            are the three core days for focused collaboration.{" "}
            <span className="text-ink-primary font-semibold">Friday</span> is
            fully off by default - not a reward for a good week, just how the
            week is built.
          </p>

          <blockquote className="mt-8 border-l-2 border-redline pl-6 max-w-2xl">
            <p className="font-display text-xl text-ink-primary italic">
              &quot;You don&apos;t need to look busy to be valuable - this is
              about outcomes, intention, and balance, not hours.&quot;
            </p>
          </blockquote>

          <div className="mt-10 grid gap-6 sm:grid-cols-3 max-w-3xl">
            <div className="rounded-md border border-line bg-surface p-5">
              <p className="font-mono text-2xl font-semibold text-ink-primary">Mon</p>
              <p className="mt-1 text-sm text-ink-secondary">Open recovery day - no obligations</p>
            </div>
            <div className="rounded-md border border-blueprint bg-surface p-5">
              <p className="font-mono text-2xl font-semibold text-ink-primary">Tue–Thu</p>
              <p className="mt-1 text-sm text-ink-secondary">Core days for focused collaboration</p>
            </div>
            <div className="rounded-md border border-line bg-surface p-5">
              <p className="font-mono text-2xl font-semibold text-ink-primary">Fri</p>
              <p className="mt-1 text-sm text-ink-secondary">Off by default</p>
            </div>
          </div>

          <p className="mt-8 text-ink-secondary max-w-2xl leading-relaxed">
            Interns get 30 guaranteed days off across the year - public
            holidays, seasonal breaks, a birthday day off, plus 2 fully
            flexible personal days that require no explanation.
          </p>
        </section>

        {/* How to apply */}
        <section className="border-y border-line bg-surface-2">
          <div className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
            <SectionEyebrow index="Sheet 07.4" label="How to Apply" />
            <h2 className="font-display text-3xl font-semibold text-ink-primary mb-6 max-w-2xl">
              How to apply
            </h2>
            <p className="text-ink-secondary max-w-2xl leading-relaxed">
              The internship program is invite-only. When a new cohort opens,
              invited applicants submit an application, may complete a short
              skills assessment, and then interview with a team lead or PM.
            </p>
            <p className="mt-4 text-ink-secondary max-w-2xl leading-relaxed">
              Interested in being considered for a future cohort? Reach out
              via{" "}
              <Link href="/contact" className="font-semibold text-blueprint hover:underline">
                our contact page
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
          <SectionEyebrow index="Sheet 07.5" label="FAQ" />
          <h2 className="font-display text-3xl font-semibold text-ink-primary mb-10 max-w-2xl">
            Frequently asked questions
          </h2>
          <div className="max-w-3xl divide-y divide-line border-y border-line">
            {CAREERS_FAQ.map((item) => (
              <div key={item.question} className="py-6">
                <h3 className="font-display text-lg font-semibold text-ink-primary">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm text-ink-secondary leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What's next */}
        <section className="max-w-6xl mx-auto px-6 pb-20 sm:pb-24">
          <div className="corner-marks rounded-md border border-line bg-surface-2 p-6 sm:p-8 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-redline">
              What&apos;s next
            </p>
            <p className="mt-3 text-ink-secondary leading-relaxed">
              As Windless Technologies scales, we plan to open full-time and
              contract roles - Software Engineer, Mobile Developer, UI/UX
              Designer - built out of this internship pipeline. Those
              openings will be announced internally first.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
