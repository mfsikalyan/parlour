import React from "react";
import { ShieldCheck, Award, HeartHandshake, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function TrustHighlights() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Medical Autoclave Sterilization",
      description: "All metal cutting and manicure tools undergo hospital-grade heat sterilization in sealed pouches opened in front of you.",
    },
    {
      icon: Award,
      title: "Vidal Sassoon & Academy Trained",
      description: "Our directors and master stylists hold international credentials in structural cutting and color chemistry.",
    },
    {
      icon: Sparkles,
      title: "100% Genuine Prestige Products",
      description: "Exclusively authenticated formulations from Kérastase Paris, Olaplex, Dyson Pro, and Charlotte Tilbury.",
    },
    {
      icon: HeartHandshake,
      title: "Unrushed Consultations",
      description: "Every appointment includes an in-depth 15-minute diagnosis of your scalp, hair porosity, or skin barrier before scissors touch hair.",
    },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[var(--color-surface,#14161b)] border-y border-[var(--color-border)]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-start p-4 sm:p-6 rounded-[var(--border-radius,8px)] bg-[var(--color-surface-subtle)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-all"
              >
                <div className="p-2.5 sm:p-3 rounded-md bg-[var(--color-badge-bg)] text-[var(--color-primary)] mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-medium text-[var(--color-text)] mb-1.5 sm:mb-2">
                  {h.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {h.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
