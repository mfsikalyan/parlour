import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brandConfig } from "@/config/brand";
import { featureFlags } from "@/config/features";
import { faqsData } from "@/content/faqs";
import { generateFAQSchema } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQDirectoryView } from "@/components/faq/FAQDirectoryView";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Answers regarding appointments, walk-ins, chemical services, bridal bookings, and autoclave sterilization at ${brandConfig.name}.`,
};

export default function FAQPage() {
  if (!featureFlags.faq) {
    notFound();
  }

  const faqSchema = generateFAQSchema(faqsData);

  return (
    <div className="bg-[var(--color-background)] min-h-screen py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container>
        <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

        <div className="my-8 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] inline-block mb-3">
            Knowledge Base
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-normal text-[var(--color-text)] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            Clear, honest answers to help you prepare for your visit to our salons.
          </p>
        </div>

        <FAQDirectoryView faqs={faqsData} />
      </Container>
    </div>
  );
}
