import React from "react";
import type { Metadata } from "next";
import { brandConfig } from "@/config/brand";
import { bookingConfig } from "@/config/booking";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Cancellation Policy",
  description: `Salon service terms, appointment notice windows, and hygiene policies at ${brandConfig.name}.`,
};

export default function TermsPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen py-12 sm:py-16">
      <Container className="max-w-4xl">
        <Breadcrumbs items={[{ label: "Terms & Cancellation Policy" }]} />

        <div className="my-8">
          <h1 className="font-heading text-3xl sm:text-5xl font-normal text-[var(--color-text)] tracking-tight">
            Terms of Service & Salon Policies
          </h1>
          <p className="mt-2 text-xs text-[var(--color-text-muted)]">
            Applicable to all appointments booked with {brandConfig.name}
          </p>
        </div>

        <article className="prose prose-invert max-w-none space-y-6 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-[var(--color-text)]">
              1. Appointment Requests & Confirmations
            </h2>
            <p>
              Submitting an appointment request on our website initiates a booking review by our concierge desk. An appointment is only confirmed once our desk verifies stylist availability and sends you a written confirmation via WhatsApp or SMS.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-[var(--color-text)]">
              2. Cancellation & Rescheduling Policy
            </h2>
            <p>
              We allocate dedicated uninterrupted chair time for every client. If you must reschedule or cancel:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Standard haircuts and blowouts require at least {bookingConfig.cancellationNoticeHours} hours advance notice.</li>
              <li>Chemical coloring, balayage, or keratin services require at least 24 hours notice.</li>
              <li>Bridal look trials and wedding packages require at least 48 hours notice.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-[var(--color-text)]">
              3. Punctuality & Late Arrivals
            </h2>
            <p>
              Please arrive 10 minutes prior to your appointment time. If you arrive more than 15 minutes past your scheduled slot, we may need to adjust your treatment steps to ensure subsequent clients are not delayed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-[var(--color-text)]">
              4. Skin Allergies & Patch Testing
            </h2>
            <p>
              For first-time color clients and chemical treatments, we gladly provide a complimentary 48-hour patch test upon request. Please notify your stylist of any sensitivities or allergies prior to treatment commencement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-[var(--color-text)]">
              5. Pricing & Payment Methods
            </h2>
            <p>
              Prices listed on our menu include all standard styling products. We accept Cash, UPI (Google Pay, PhonePe, Paytm), Credit Cards, and Debit Cards.
            </p>
          </section>
        </article>
      </Container>
    </div>
  );
}
