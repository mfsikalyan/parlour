import React from "react";
import Image from "next/image";
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { brandConfig } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--color-background)]">
      {/* Background Hero Imagery with Gradient Veil */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury salon interior with master stylist working at elegant workstation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 filter brightness-[0.4] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)]/60 to-transparent" />
        <div className="absolute inset-0 bg-radial from-transparent via-[var(--color-background)]/40 to-[var(--color-background)]" />
      </div>

      <Container className="relative z-10 py-12 sm:py-20 lg:py-28 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[var(--color-surface,#14161b)]/90 backdrop-blur-md border border-[var(--color-border)] text-[11px] sm:text-xs text-[var(--color-primary)] font-semibold tracking-widest uppercase mb-4 sm:mb-6 shadow-lg animate-fade-in">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{brandConfig.businessTypes[0]} & Bridal Suite</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-white max-w-4xl leading-[1.12] text-balance">
          {brandConfig.tagline}
        </h1>

        {/* Brand Positioning Paragraph */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed text-balance px-2">
          {brandConfig.positioning}
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto px-2">
          <Button
            href={brandConfig.cta.primaryHref}
            variant="gold"
            size="lg"
            className="w-full sm:w-auto px-8 py-3.5 shadow-xl"
            icon={<Calendar className="w-4 h-4" />}
          >
            {brandConfig.cta.primaryText}
          </Button>

          <Button
            href={brandConfig.cta.secondaryHref}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-8 py-3.5 bg-black/50 backdrop-blur-md border-white/25 text-white hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            {brandConfig.cta.secondaryText}
          </Button>
        </div>

        {/* Trust Badges Grid - Glass Cards on Mobile */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6 text-center max-w-3xl w-full px-1">
          <div className="p-3 sm:p-4 rounded-xl bg-black/30 backdrop-blur-md border border-white/10">
            <span className="font-heading text-xl sm:text-3xl font-bold text-[var(--color-primary)] block">
              {new Date().getFullYear() - brandConfig.foundedYear}+
            </span>
            <span className="block text-[10px] sm:text-xs text-neutral-400 mt-1 uppercase tracking-wider">
              Years in Bengaluru
            </span>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-black/30 backdrop-blur-md border border-white/10">
            <span className="font-heading text-xl sm:text-3xl font-bold text-[var(--color-primary)] block">
              100%
            </span>
            <span className="block text-[10px] sm:text-xs text-neutral-400 mt-1 uppercase tracking-wider">
              Autoclave Sterile
            </span>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-black/30 backdrop-blur-md border border-white/10">
            <span className="font-heading text-xl sm:text-3xl font-bold text-[var(--color-primary)] block">
              300+
            </span>
            <span className="block text-[10px] sm:text-xs text-neutral-400 mt-1 uppercase tracking-wider">
              Brides Styled
            </span>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-black/30 backdrop-blur-md border border-white/10">
            <div className="flex items-center justify-center gap-1 text-[var(--color-primary)]">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              <span className="font-heading text-xl sm:text-3xl font-bold">4.9</span>
            </div>
            <span className="block text-[10px] sm:text-xs text-neutral-400 mt-1 uppercase tracking-wider">
              Google Verified
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
