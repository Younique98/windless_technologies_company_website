import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Windless Technologies.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const sectionClass = "mt-10";
const hClass = "font-display text-2xl font-semibold text-ink-primary";
const pClass = "mt-3 text-ink-secondary leading-relaxed";
const listClass = "mt-3 space-y-2 text-ink-secondary leading-relaxed list-disc pl-5";

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-blueprint">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink-primary">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-ink-muted">Last updated: February 5, 2025</p>

          <p className={pClass}>
            Please read these Terms of Service carefully before using the
            Windless Technologies website or engaging Windless Technologies
            for services. Your access to and use of the Service is
            conditioned on Your acceptance of and compliance with these
            Terms.
          </p>

          <section className={sectionClass}>
            <h2 className={hClass}>Services Provided</h2>
            <p className={pClass}>
              Windless Technologies (&quot;the Company&quot;) provides
              custom web design, e-commerce, and mobile app development
              services. The specific scope, deliverables, and timeline for
              any engagement will be set out in a written agreement or
              proposal between the Company and the client, and that
              agreement governs the details of the work performed.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={hClass}>Payment Terms</h2>
            <p className={pClass}>
              Payment terms for each project are set out in the applicable
              written agreement or proposal. Payments are required on time
              as agreed. Late payment may result in suspension of services
              until the account is brought current.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={hClass}>Intellectual Property</h2>
            <p className={pClass}>
              All intellectual property created during a project remains the
              property of Windless Technologies until full payment has been
              received. Upon full payment, the client is granted a
              non-exclusive, perpetual license to use the delivered work. If
              payment is refunded due to a dispute, access to the delivered
              work and any associated licenses may be revoked.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={hClass}>Limitation of Liability</h2>
            <p className={pClass}>
              To the maximum extent permitted by law, Windless Technologies
              is not liable for any indirect, incidental, or consequential
              damages arising from the use of, or inability to use, its
              services. The client&apos;s sole remedy for a claim related to
              the services is a refund of amounts paid for the affected
              work.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={hClass}>Termination</h2>
            <p className={pClass}>
              Windless Technologies may terminate or suspend an engagement
              for breach of these Terms or the applicable agreement,
              non-payment, or conduct that is harmful to the Company or
              others. Termination provisions specific to a project are set
              out in the applicable written agreement.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={hClass}>Governing Law</h2>
            <p className={pClass}>
              These Terms are governed by the laws of the United States and
              the Commonwealth of Virginia, without regard to conflict of
              law provisions. Any disputes arising from these Terms or an
              engagement with Windless Technologies will be resolved in the
              courts located in Virginia.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={hClass}>Updates to These Terms</h2>
            <p className={pClass}>
              We may update these Terms from time to time. We will notify
              You of any changes by posting the new Terms on this page and
              updating the &quot;Last updated&quot; date at the top of these
              Terms.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={hClass}>Contact Us</h2>
            <p className={pClass}>
              If you have any questions about these Terms, You can contact
              us:
            </p>
            <ul className={listClass}>
              <li>
                By email:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-blueprint hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>By phone: {CONTACT_PHONE}</li>
            </ul>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
