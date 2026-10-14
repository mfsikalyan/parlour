"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { featureFlags } from "@/config/features";
import { faqsData } from "@/content/faqs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function FAQSection() {
  if (!featureFlags.faq) return null;

  const [openId, setOpenId] = useState<string | null>(faqsData[0]?.id || null);
  const displayedFaqs = faqsData.slice(0, 5);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-28 bg-[var(--color-background)]">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Common Inquiries"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our booking process, walk-in availability, salon hygiene, and chemical treatments."
        />

        <div className="space-y-4">
          {displayedFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-heading text-base sm:text-lg font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--color-primary)] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)] pt-4"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button href="/faq" variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
            Read All Answers in FAQ Directory
          </Button>
        </div>
      </Container>
    </section>
  );
}
