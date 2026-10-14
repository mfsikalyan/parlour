import React from "react";
import type { Metadata } from "next";
import { Sparkles, Cpu, ShieldCheck, Microscope, Flame, Calendar, ArrowRight } from "lucide-react";
import { brandConfig } from "@/config/brand";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { TechnologyView } from "@/components/technology/TechnologyView";

export const metadata: Metadata = {
  title: "Advanced Salon Technology & Clinical Equipment",
  description: `Explore the cutting-edge aesthetic technology at ${brandConfig.name}: 200x trichology scalp scanners, Japanese waterfall hydrotherapy, medical-grade hydra vortex extraction, and Class-B autoclave sterilization.`,
};

export default function TechnologyPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen py-10 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Salon Technologies" }]} />

        {/* Hero Section */}
        <section className="my-8 sm:my-12 text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)]">
            <Cpu className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-primary)]">
              Clinical Precision Meets Sensory Luxury
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal text-[var(--color-text)] tracking-tight leading-[1.1] text-balance">
            State-Of-The-Art Salon & Aesthetic Technologies
          </h1>

          <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed text-balance">
            We believe true beauty artistry must be grounded in clinical science. From 200x trichology follicle diagnostics and Japanese halo hydrotherapy to hospital-grade autoclave sterilization, explore the advanced technologies that elevate every Aura Luxe ritual.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-6 border-t border-[var(--color-border)] grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
            <div>
              <span className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-primary)] block">
                200x
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] block mt-1">
                Micro-Camera Trichology
              </span>
            </div>
            <div>
              <span className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-primary)] block">
                134°C
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] block mt-1">
                Class-B Autoclave Sterility
              </span>
            </div>
            <div>
              <span className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-primary)] block">
                4-Micron
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] block mt-1">
                HD Wireless Airbrush
              </span>
            </div>
            <div>
              <span className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-primary)] block">
                Zero Heat
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] block mt-1">
                Ultrasonic Cold Bond Repair
              </span>
            </div>
          </div>
        </section>

        {/* Main Interactive Technology Directory */}
        <section className="my-16">
          <TechnologyView />
        </section>

        {/* Bottom Booking CTA Banner */}
        <section className="my-16 p-8 sm:p-12 rounded-[var(--border-radius,8px)] bg-gradient-to-r from-[var(--color-surface,#14161b)] via-[var(--color-surface-elevated,#1c1f26)] to-[var(--color-surface,#14161b)] border border-[var(--color-primary)] text-center max-w-4xl mx-auto shadow-2xl">
          <Sparkles className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-4" />
          <h2 className="font-heading text-2xl sm:text-4xl font-normal text-[var(--color-text)]">
            Experience Technology-Powered Hair & Skin Rituals
          </h2>
          <p className="mt-3 text-sm text-[var(--color-text-muted)] max-w-xl mx-auto leading-relaxed">
            Begin with a complimentary trichology scalp diagnostic or clinical vortex facial consultation. Experience the Aura Luxe difference.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/book"
              variant="gold"
              size="lg"
              icon={<Calendar className="w-4 h-4" />}
            >
              Book an Appointment
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Treatment Menu
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
