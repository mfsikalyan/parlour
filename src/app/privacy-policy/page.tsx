import React from "react";
import type { Metadata } from "next";
import { brandConfig } from "@/config/brand";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy and client data handling policies of ${brandConfig.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen py-8 sm:py-12 lg:py-16">
      <Container className="max-w-4xl">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <div className="my-6 sm:my-8">
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-text)] tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-[var(--color-text-muted)]">
            Last Updated: January 1, 2026 | Effective for {brandConfig.legalName}
          </p>
        </div>

        <article className="prose prose-invert max-w-none space-y-6 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-[var(--color-text)]">
              1. Information We Collect
            </h2>
            <p>
              When you submit an appointment request, contact inquiry, or consult with our stylists at {brandConfig.name}, we collect only the information necessary to fulfill your appointment and provide safe, customized treatments:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contact details: Name, phone number, email address.</li>
              <li>Appointment preferences: Chosen services, branches, dates, and timeslots.</li>
              <li>Treatment notes: Previous hair coloring history, skin sensitivity notes, or wedding date details.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-[var(--color-text)]">
              2. How We Use Your Data
            </h2>
            <p>
              Your data is strictly utilized to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Coordinate, verify, and confirm appointment requests via WhatsApp or phone.</li>
              <li>Maintain client color formulation cards to ensure consistent dye results.</li>
              <li>Respond to direct concierge inquiries.</li>
            </ul>
            <p className="font-medium text-[var(--color-text)]">
              We never sell, rent, or monetize client personal data to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-[var(--color-text)]">
              3. Data Retention & Security
            </h2>
            <p>
              Appointment information is retained in secure digital salon systems protected by encrypted connections. We review records periodically and delete data upon written request to {brandConfig.email}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-[var(--color-text)]">
              4. Photography & Social Media Consent
            </h2>
            <p>
              We only photograph and share client transformations on our portfolio or social channels with explicit prior verbal and written consent. You may withdraw consent at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-[var(--color-text)]">
              5. Contact Us Regarding Your Rights
            </h2>
            <p>
              For questions concerning your data or to request record deletion, contact our Data Concierge:
            </p>
            <p className="text-[var(--color-text)]">
              Email: <strong>{brandConfig.email}</strong><br />
              Address: {brandConfig.address.street}, {brandConfig.address.city}, Karnataka - {brandConfig.address.pincode}
            </p>
          </section>
        </article>
      </Container>
    </div>
  );
}
