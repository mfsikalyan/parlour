import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { brandConfig } from "@/config/brand";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  const pillars = [
    "Uncompromising hygiene: Single-use biodegradable capes and autoclave steel instruments",
    "Tailored consultation: Analyzing bone structure, growth whorls, and skin undertones",
    "Clean chemical alternatives: Ammonia-free coloring and formaldehyde-free keratin",
    "Sanctuary ambiance: Acoustic sound design, artisan espresso bar, and private VIP suites"
  ];

  return (
    <section className="py-20 lg:py-28 bg-[var(--color-surface,#14161b)] border-y border-[var(--color-border)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Duo Composition */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[var(--border-radius,8px)] overflow-hidden shadow-2xl border border-[var(--color-border)]">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
                alt="Hair stylist hand-painting delicate balayage highlights on client"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Overlapping Floating Inset Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-64 p-5 rounded-[var(--border-radius,8px)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] shadow-2xl hidden sm:block">
              <span className="font-heading text-3xl font-bold text-[var(--color-primary)]">
                {new Date().getFullYear() - brandConfig.foundedYear}+ Years
              </span>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">
                Refining contemporary hair artistry & bridal aesthetics in Bengaluru.
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] inline-block">
              The Aura Philosophy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-text)] leading-tight">
              A Modern Sanctuary for Rejuvenation & Confidence
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              Founded in {brandConfig.foundedYear}, {brandConfig.name} was envisioned as an antidote to noisy, assembly-line salons. We created an intimate studio where each guest receives undivided master attention, bespoke styling consultations, and organic treatments tailored to the South Indian climate.
            </p>

            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-[var(--color-text)]">
              {pillars.map((pillar, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-[var(--color-badge-bg)] text-[var(--color-primary)] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex items-center gap-4">
              <Button href="/about" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Read Our Story & Standards
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
