import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a call with Windless Technologies to talk through your custom website, e-commerce, or mobile app project.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Windless Technologies",
    description:
      "Schedule a call to talk through your custom website, e-commerce, or mobile app project.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="max-w-6xl mx-auto px-6 py-16 sm:py-20 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionEyebrow index="Sheet 04" label="Contact" />
            <h1 className="font-display text-4xl font-semibold text-ink-primary">
              Ready to elevate your business with a custom solution?
            </h1>
            <p className="mt-5 text-ink-secondary leading-relaxed">
              Schedule a call today. Tell us what you&apos;re building and
              we&apos;ll follow up with next steps - typically within one
              business day.
            </p>

            <dl className="mt-10 space-y-5 font-mono text-sm">
              <div>
                <dt className="text-ink-muted uppercase tracking-wider text-xs">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-blueprint hover:underline break-all">
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-ink-muted uppercase tracking-wider text-xs">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${CONTACT_PHONE_HREF}`} className="text-blueprint hover:underline">
                    {CONTACT_PHONE}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="corner-marks rounded-md border border-line bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
