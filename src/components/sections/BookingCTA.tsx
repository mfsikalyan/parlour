import React from "react";
import { Sparkles, Calendar, MessageSquare, Phone } from "lucide-react";
import { brandConfig } from "@/config/brand";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function BookingCTA() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-[var(--color-surface,#14161b)] to-[var(--color-background)] border-t border-[var(--color-border)] relative overflow-hidden">
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center max-w-4xl">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] inline-block mb-4">
          Reserve Your Chair
        </span>

        <h2 className="font-heading text-3xl sm:text-5xl font-normal text-[var(--color-text)] tracking-tight text-balance">
          Ready to Elevate Your Everyday Look & Well-Being?
        </h2>

        <p className="mt-4 text-sm sm:text-base text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
          Whether you desire a subtle texturizing cut, dimensional balayage, or an opulent bridal transformation, our master team is ready to welcome you.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/book"
            variant="gold"
            size="lg"
            className="w-full sm:w-auto px-8"
            icon={<Calendar className="w-4 h-4" />}
          >
            Request Appointment Online
          </Button>

          <a
            href={`https://wa.me/${brandConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-[var(--border-radius,8px)] bg-[var(--color-surface-subtle)] text-[var(--color-text)] hover:text-[var(--color-primary)] border border-[var(--color-border)] hover:border-[var(--color-primary)] text-sm font-semibold transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat with Concierge</span>
          </a>

          <a
            href={`tel:${brandConfig.phone}`}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-[var(--border-radius,8px)] bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm font-medium transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call {brandConfig.displayPhone}</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
