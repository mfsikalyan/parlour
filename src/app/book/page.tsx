import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Clock, ShieldCheck, Phone, MessageSquare } from "lucide-react";
import { brandConfig } from "@/config/brand";
import { bookingConfig } from "@/config/booking";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BookingForm } from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Book Appointment Request",
  description: `Reserve your bespoke haircut, balayage, facial, or men's grooming session with master stylists at ${brandConfig.name}.`,
};

export default function BookPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen py-12 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Appointment Request" }]} />

        <div className="my-8 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] inline-block mb-3">
            Concierge Booking
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-normal text-[var(--color-text)] tracking-tight">
            Reserve Your Salon Session
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            Select your preferred treatment, branch, and time slot. Our concierge will verify stylist schedules and confirm your appointment via WhatsApp within 30 minutes.
          </p>
        </div>

        {/* Suspense boundary for useSearchParams */}
        <Suspense
          fallback={
            <div className="text-center py-20 text-[var(--color-text-muted)]">
              Loading appointment scheduler...
            </div>
          }
        >
          <BookingForm />
        </Suspense>

        {/* Appointment policies disclosure */}
        <div className="mt-16 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">
          <div className="space-y-1">
            <span className="font-semibold text-[var(--color-text)] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span>Arrival Time</span>
            </span>
            <p className="leading-relaxed">
              We recommend arriving 10 minutes prior to your scheduled slot to enjoy a complimentary tea or pour-over coffee.
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-semibold text-[var(--color-text)] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span>Rescheduling & Notice</span>
            </span>
            <p className="leading-relaxed">
              Kindly grant at least {bookingConfig.cancellationNoticeHours} hours notice if your schedule changes so another guest may be served.
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-semibold text-[var(--color-text)] flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span>Need Urgent Booking?</span>
            </span>
            <p className="leading-relaxed">
              For same-day appointments within {bookingConfig.minNoticeHours} hours, call our desk directly at {brandConfig.displayPhone}.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
