import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Check, ArrowRight, Clock } from "lucide-react";
import { featureFlags } from "@/config/features";
import { offersData } from "@/content/offers";
import { formatCurrency } from "@/lib/currency";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function OffersSection() {
  if (!featureFlags.offers) return null;

  const activeOffers = offersData.filter((o) => o.active && o.featured);

  return (
    <section className="py-20 lg:py-28 bg-[var(--color-background)]">
      <Container>
        <SectionHeading
          eyebrow="Special Packages"
          title="Curated Seasonal Rituals & Packages"
          subtitle="Transparent, bundled services offering dedicated attention at special seasonal rates. Clear terms with zero hidden fees."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeOffers.map((offer) => (
            <article
              key={offer.id}
              className="flex flex-col justify-between bg-[var(--color-surface,#14161b)] rounded-[var(--border-radius,8px)] border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] transition-all duration-300 relative group shadow-xl"
            >
              {/* Photo Header */}
              {offer.image && (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-surface-subtle)]">
                  <Image
                    src={offer.image}
                    alt={offer.imageAlt || offer.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface,#14161b)] via-black/20 to-transparent" />
                  
                  {/* Badge on Photo */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                      {offer.badge}
                    </span>
                  </div>

                  {offer.savingsLabel && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                        {offer.savingsLabel}
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                      {offer.title}
                    </h3>
                    <p className="text-xs text-[var(--color-primary)] font-medium">
                      {offer.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed pt-1">
                      {offer.description}
                    </p>
                  </div>

              {/* Included steps list */}
              <div className="py-5 my-5 border-y border-[var(--color-border)] space-y-2">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text)] block">
                  Package Inclusions:
                </span>
                <ul className="space-y-1.5 text-xs text-[var(--color-text-muted)]">
                  {offer.includedServices.map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

                {/* Price & Action */}
                <div className="pt-2 flex items-center justify-between gap-4">
                  <div>
                    {offer.originalPrice && (
                      <span className="text-xs text-[var(--color-text-muted)] line-through block">
                        {formatCurrency(offer.originalPrice)}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-[var(--color-primary)]">
                      {formatCurrency(offer.offerPrice)}
                    </span>
                  </div>

                  <Button
                    href={`/book?service=${offer.bookingServiceSlug || ""}`}
                    variant="gold"
                    size="sm"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Book Package
                  </Button>
                </div>
              </div>
            </div>
          </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/offers" variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
            View All Packages & Seasonal Privileges
          </Button>
        </div>
      </Container>
    </section>
  );
}
