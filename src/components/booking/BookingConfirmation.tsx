import React from "react";
import Link from "next/link";
import { CheckCircle2, MessageSquare, Calendar, Clock, MapPin, User, ArrowRight, ShieldCheck } from "lucide-react";
import { BookingSubmissionResult } from "@/lib/booking-provider";
import { formatCurrency } from "@/lib/currency";
import { Button } from "@/components/ui/Button";

interface BookingConfirmationProps {
  result: BookingSubmissionResult;
  onReset: () => void;
}

export function BookingConfirmation({ result, onReset }: BookingConfirmationProps) {
  const { referenceId, summary, whatsappUrl, message } = result;

  return (
    <div className="max-w-2xl mx-auto bg-[var(--color-surface,#14161b)] rounded-[var(--border-radius,8px)] border border-[var(--color-border)] p-6 sm:p-10 shadow-xl">
      {/* Success Icon & Notice */}
      <div className="text-center space-y-3 pb-8 border-b border-[var(--color-border)]">
        <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="block text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">
          Appointment Request Logged
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-medium text-[var(--color-text)]">
          Thank You, {summary.clientName}!
        </h2>
        <div className="inline-block px-3 py-1 rounded bg-[var(--color-surface-subtle)] border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-muted)]">
          Reference Code: <strong className="text-[var(--color-primary)] font-semibold">{referenceId}</strong>
        </div>
        <p className="text-sm text-[var(--color-text-muted)] max-w-lg mx-auto leading-relaxed pt-2">
          {message}
        </p>
      </div>

      {/* Appointment Summary Box */}
      <div className="py-6 space-y-4 text-sm border-b border-[var(--color-border)]">
        <h3 className="font-heading text-base font-semibold uppercase tracking-wider text-[var(--color-text)]">
          Request Summary
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="flex items-start gap-3 p-3 rounded-md bg-[var(--color-surface-subtle)] border border-[var(--color-border)]">
            <Calendar className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-[var(--color-text-muted)] block">Requested Date</span>
              <span className="font-medium text-[var(--color-text)]">{summary.date}</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-md bg-[var(--color-surface-subtle)] border border-[var(--color-border)]">
            <Clock className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-[var(--color-text-muted)] block">Time Preference</span>
              <span className="font-medium text-[var(--color-text)]">{summary.timeSlot}</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-md bg-[var(--color-surface-subtle)] border border-[var(--color-border)]">
            <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-[var(--color-text-muted)] block">Salon Branch</span>
              <span className="font-medium text-[var(--color-text)]">{summary.branchName}</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-md bg-[var(--color-surface-subtle)] border border-[var(--color-border)]">
            <User className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-[var(--color-text-muted)] block">Selected Stylist</span>
              <span className="font-medium text-[var(--color-text)]">
                {summary.stylistName || "First available specialist"}
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-elevated)] border border-[var(--color-border)] flex items-center justify-between">
          <div>
            <span className="text-xs text-[var(--color-text-muted)] block">Service Requested</span>
            <span className="font-semibold text-[var(--color-text)] text-base">{summary.serviceName}</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-[var(--color-text-muted)] block">Est. Investment</span>
            <span className="font-bold text-[var(--color-primary)] text-lg">
              {formatCurrency(summary.estimatedPrice)}
            </span>
          </div>
        </div>
      </div>

      {/* Honest Status Note & WhatsApp Fast-Track */}
      <div className="pt-6 space-y-5">
        <div className="p-4 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong>Honest Policy:</strong> To prevent double-booking our master stylists, appointment slots are confirmed only after our concierge verifies the salon floor diary. No charges are collected online.
          </span>
        </div>

        {whatsappUrl && (
          <div className="p-4 rounded-md bg-[var(--color-surface-subtle)] border border-[var(--color-border)] text-center space-y-3">
            <p className="text-xs text-[var(--color-text-muted)]">
              Want immediate priority confirmation? Send your pre-filled request directly to our concierge on WhatsApp:
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-md bg-[#25D366] text-white font-semibold text-sm hover:brightness-110 shadow transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Fast-Track Confirmation on WhatsApp</span>
            </a>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <button
            onClick={onReset}
            className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] underline"
          >
            ← Request Another Appointment
          </button>
          <Button href="/services" variant="outline" size="sm">
            Explore More Services
          </Button>
        </div>
      </div>
    </div>
  );
}
