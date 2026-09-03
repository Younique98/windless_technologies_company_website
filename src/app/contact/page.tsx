import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { ContactForm } from "@/components/ContactForm";
import { BookACall } from "@/components/BookACall";

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
  // NEXT_PUBLIC_CALENDLY_URL is unset until Erica creates her own free
  // Calendly account and adds her personal scheduling link. Until then this
  // stays empty and the "book a call" option below is skipped entirely -
  // the page never shows an empty/broken widget in the meantime.
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();

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
          </div>

          <div className="corner-marks rounded-md border border-line bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </section>

        {calendlyUrl && (
          <section className="max-w-6xl mx-auto px-6 pb-16 sm:pb-20">
            <BookACall calendlyUrl={calendlyUrl} />
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
