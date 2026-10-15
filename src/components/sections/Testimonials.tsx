import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { featureFlags } from "@/config/features";
import { testimonialsData } from "@/content/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  if (!featureFlags.testimonials) return null;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[var(--color-surface,#14161b)] border-y border-[var(--color-border)]">
      <Container>
        <SectionHeading
          eyebrow="Guest Impressions"
          title="Words From Our Valued Patrons"
          subtitle="Genuine experiences shared by verified clients who trust our salon with their hair, skin, and milestone wedding days."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {testimonialsData.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between p-5 sm:p-8 rounded-[var(--border-radius,8px)] bg-[var(--color-surface-subtle)] border border-[var(--color-border)] shadow-md"
            >
              <div className="space-y-4">
                {/* Rating & Source badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[var(--color-primary)]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{item.source}</span>
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-[var(--color-text)] font-light leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-heading text-sm sm:text-base font-semibold text-[var(--color-text)]">
                    {item.clientName}
                  </h4>
                  <span className="text-xs text-[var(--color-text-muted)] block">
                    {item.locality}
                  </span>
                </div>
                <div className="sm:text-right">
                  <span className="text-[11px] text-[var(--color-primary)] font-medium block">
                    {item.serviceAvailed}
                  </span>
                  <span className="text-[10px] text-[var(--color-text-muted)]">
                    {item.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
