import React from "react";
import type { Metadata } from "next";
import { brandConfig } from "@/config/brand";
import { servicesData } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServicesView } from "@/components/services/ServicesView";

export const metadata: Metadata = {
  title: "Service Menu & Treatment Catalogue",
  description: `Explore all hair styling, French balayage, botanical keratin, hydra facials, men's grooming, and bridal packages at ${brandConfig.name}.`,
};

export default function ServicesPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[var(--color-surface,#14161b)] border-b border-[var(--color-border)] py-12 sm:py-16">
        <Container>
          <Breadcrumbs items={[{ label: "Services Menu" }]} />
          <div className="mt-4 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] inline-block mb-3">
              Full Treatment Menu
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-normal text-[var(--color-text)] tracking-tight">
              Artisan Services & Bespoke Therapies
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              Every appointment is delivered with clinical hygiene, dedicated time, and unhurried consultations using authentic prestige hair and skincare formulations.
            </p>
          </div>
        </Container>
      </section>

      {/* Interactive Filter & Cards View */}
      <ServicesView allServices={servicesData} />
    </div>
  );
}
