import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Check, Calendar, ArrowRight, ShieldAlert } from "lucide-react";
import { brandConfig } from "@/config/brand";
import { featureFlags } from "@/config/features";
import { offersData } from "@/content/offers";
import { formatCurrency } from "@/lib/currency";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Seasonal Privileges & Bundled Packages",
  description: `Discover introductory rituals, bridal consultation trials, and groom's luxury packages at ${brandConfig.name}.`,
};

export default function OffersPage() {
  if (!featureFlags.offers) {
    notFound();
  }

  const activeOffers = offersData.filter((o) => o.active);

  return (
    <div className="bg-[var(--color-background)] min-h-screen py-8 sm:py-12 lg:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Special Offers & Packages" }]} />

        <div className="my-6 sm:my-8 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] inline-block mb-3">
            Privileges & Packages
          </span>
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-text)] tracking-tight">
            Curated Seasonal Privileges
          </h1>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            Transparent bundled experiences designed for new guests, wedding preparations, and regular ritual care. No fine print traps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {activeOffers.map((offer) => (
            <article
              key={offer.id}
              className="flex flex-col justify-between rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] transition-all shadow-xl group"
            >
              {offer.image && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-surface-subtle)]">
                  <Image
                    src={offer.image}
                    alt={offer.imageAlt || offer.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface,#14161b)] via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                      {offer.badge}
                    </span>
                  </div>

                  {offer.savingsLabel && (
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                        {offer.savingsLabel}
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5 sm:space-y-3">
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-[var(--color-text)]">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-[var(--color-primary)] font-medium">
                    {offer.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {offer.description}
                  </p>

                  {/* Inclusions */}
                  <div className="pt-3 sm:pt-4 border-t border-[var(--color-border)] space-y-2">
                    <span className="text-[10px] uppercase font-semibold text-[var(--color-text)] block">
                      What&apos;s Included:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[var(--color-text)]">
                      {offer.includedServices.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Terms */}
                  <div className="pt-3 border-t border-[var(--color-border)] text-[11px] text-[var(--color-text-muted)] space-y-1">
                    <span className="font-semibold text-[var(--color-text)] block">Terms & Conditions:</span>
                    {offer.termsAndConditions.map((term, idx) => (
                      <p key={idx}>• {term}</p>
                    ))}
                    <p className="text-[var(--color-primary)] pt-1 italic">{offer.validUntil}</p>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    {offer.originalPrice && (
                      <span className="text-xs text-[var(--color-text-muted)] line-through block">
                        {formatCurrency(offer.originalPrice)}
                      </span>
                    )}
                    <span className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
                      {formatCurrency(offer.offerPrice)}
                    </span>
                  </div>

                  <Button
                    href={`/book?service=${offer.bookingServiceSlug || ""}`}
                    variant="gold"
                    size="md"
                    icon={<Calendar className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    Book Package
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
