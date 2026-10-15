"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  CheckCircle,
  MessageSquare,
  AlertCircle,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { brandConfig } from "@/config/brand";
import { bookingConfig } from "@/config/booking";
import { servicesData } from "@/content/services";
import { teamData } from "@/content/team";
import { formatCurrency } from "@/lib/currency";
import { validateBookingForm, BookingFormInput } from "@/lib/validation";
import { submitBookingRequest, BookingSubmissionResult } from "@/lib/booking-provider";
import { Button } from "@/components/ui/Button";
import { BookingConfirmation } from "./BookingConfirmation";

export function BookingForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<BookingFormInput>({
    serviceSlug: preselectedService || servicesData[0].slug,
    stylistSlug: "",
    branchId: brandConfig.branches[0].id,
    date: "",
    timeSlot: bookingConfig.timeSlots[0],
    fullName: "",
    phone: "",
    email: "",
    notes: "",
    consent: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormInput, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<BookingSubmissionResult | null>(null);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split("T")[0];
    setFormData((prev) => ({ ...prev, date: prev.date || dateString }));
  }, []);

  // Update selected service if query param changes
  useEffect(() => {
    if (preselectedService && servicesData.some((s) => s.slug === preselectedService)) {
      setFormData((prev) => ({ ...prev, serviceSlug: preselectedService }));
    }
  }, [preselectedService]);

  const selectedService = servicesData.find((s) => s.slug === formData.serviceSlug) || servicesData[0];
  const selectedBranch = brandConfig.branches.find((b) => b.id === formData.branchId) || brandConfig.branches[0];

  const handleInputChange = (field: keyof BookingFormInput, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!formData.serviceSlug) {
        setErrors({ serviceSlug: "Please select a service" });
        return;
      }
      if (!formData.branchId) {
        setErrors({ branchId: "Please choose a branch" });
        return;
      }
      setErrors({});
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!formData.date) {
        setErrors({ date: "Please pick an appointment date" });
        return;
      }
      if (!formData.timeSlot) {
        setErrors({ timeSlot: "Please choose a time slot" });
        return;
      }
      setErrors({});
      setCurrentStep(3);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(formData);
    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitBookingRequest(formData);
      setSubmissionResult(result);
    } catch {
      setErrors({ fullName: "Submission encountered an issue. Please try again or reach out on WhatsApp." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submissionResult) {
    return (
      <BookingConfirmation
        result={submissionResult}
        onReset={() => {
          setSubmissionResult(null);
          setCurrentStep(1);
        }}
      />
    );
  }

  // Get min date (today) and max date (30 days from now)
  const todayStr = new Date().toISOString().split("T")[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + bookingConfig.maxAdvanceDays);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  return (
    <div className="max-w-3xl mx-auto bg-[var(--color-surface,#14161b)] rounded-[var(--border-radius,8px)] border border-[var(--color-border)] p-4 sm:p-8 lg:p-10 shadow-xl">
      {/* Wizard Step Indicator */}
      <div className="mb-6 sm:mb-8" aria-label="Booking steps">
        <div className="flex items-center justify-between text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3">
          <span className={currentStep >= 1 ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"}>
            1. <span className="hidden sm:inline">Service & Branch</span><span className="sm:hidden">Service</span>
          </span>
          <span className={currentStep >= 2 ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"}>
            2. <span className="hidden sm:inline">Date & Time</span><span className="sm:hidden">Date</span>
          </span>
          <span className={currentStep >= 3 ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"}>
            3. <span className="hidden sm:inline">Details & Request</span><span className="sm:hidden">Confirm</span>
          </span>
        </div>
        <div className="w-full bg-[var(--color-surface-subtle)] h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-[var(--color-primary)] h-full transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Honest Policy Banner */}
      <div className="mb-6 sm:mb-8 p-3 sm:p-3.5 rounded-md bg-[var(--color-surface-subtle)] border border-[var(--color-border)] text-xs text-[var(--color-text-muted)] flex items-start gap-2.5">
        <ShieldCheck className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
        <span>
          <strong>Honest Booking Mode:</strong> Submitting this form sends an appointment request directly to our concierge desk. We will confirm your exact slot via WhatsApp / SMS within 30 minutes. No payment required upfront.
        </span>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* STEP 1: SERVICE & BRANCH SELECTION */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="font-heading text-lg sm:text-xl font-medium text-[var(--color-text)]">
              Choose Service & Location
            </h3>

            {/* Branch Selector */}
            <div>
              <label htmlFor="branchId" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-2">
                Salon Branch *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {brandConfig.branches.map((b) => {
                  const isSelected = formData.branchId === b.id;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => handleInputChange("branchId", b.id)}
                      className={`text-left p-3.5 sm:p-4 rounded-md border transition-all ${
                        isSelected
                          ? "bg-[var(--color-surface-elevated)] border-[var(--color-primary)] ring-1 ring-[var(--color-primary)]"
                          : "bg-[var(--color-surface-subtle)] border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-[var(--color-text)]">{b.name}</span>
                        {isSelected && <CheckCircle className="w-4 h-4 text-[var(--color-primary)]" />}
                      </div>
                      <p className="text-xs text-[var(--color-text-muted)] mt-1">{b.locality}, {b.city}</p>
                    </button>
                  );
                })}
              </div>
              {errors.branchId && (
                <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.branchId}
                </p>
              )}
            </div>

            {/* Service Dropdown / Selector */}
            <div>
              <label htmlFor="serviceSlug" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-2">
                Treatment / Service *
              </label>
              <select
                id="serviceSlug"
                value={formData.serviceSlug}
                onChange={(e) => handleInputChange("serviceSlug", e.target.value)}
                className="w-full bg-[var(--color-surface-subtle)] text-[var(--color-text)] text-base sm:text-sm rounded-md border border-[var(--color-border)] p-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
              >
                {servicesData.map((s) => (
                  <option key={s.slug} value={s.slug} className="bg-[var(--color-surface)]">
                    {s.title} — {formatCurrency(s.price, { prefixFrom: s.priceFrom })} ({s.durationMinutes} mins)
                  </option>
                ))}
              </select>
              {errors.serviceSlug && (
                <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.serviceSlug}
                </p>
              )}
            </div>

            {/* Service Summary Preview Card */}
            {selectedService && (
              <div className="p-3.5 sm:p-4 rounded-md bg-[var(--color-surface-elevated)] border border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div>
                  <span className="text-[10px] sm:text-xs text-[var(--color-primary)] uppercase tracking-wider font-semibold block">
                    {selectedService.categoryLabel}
                  </span>
                  <span className="font-medium text-xs sm:text-sm text-[var(--color-text)]">
                    {selectedService.title}
                  </span>
                  <span className="text-[11px] sm:text-xs text-[var(--color-text-muted)] block mt-0.5">
                    Estimated Duration: {selectedService.durationMinutes} minutes
                  </span>
                </div>
                <div className="sm:text-right pt-2 sm:pt-0 border-t sm:border-t-0 border-[var(--color-border)]">
                  <span className="text-[10px] sm:text-xs text-[var(--color-text-muted)] block">Investment</span>
                  <span className="font-bold text-[var(--color-primary)] text-sm sm:text-base">
                    {formatCurrency(selectedService.price, { prefixFrom: selectedService.priceFrom })}
                  </span>
                </div>
              </div>
            )}

            <div className="pt-4 flex justify-end">
              <Button type="button" onClick={handleNextStep} icon={<ChevronRight className="w-4 h-4" />} className="w-full sm:w-auto">
                Continue to Date & Time
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2: DATE & TIME SELECTION */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="font-heading text-xl font-medium text-[var(--color-text)]">
              Choose Date & Time Preference
            </h3>

            {/* Date Picker */}
            <div>
              <label htmlFor="booking-date" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-2">
                Preferred Date *
              </label>
              <div className="relative">
                <input
                  id="booking-date"
                  type="date"
                  min={todayStr}
                  max={maxDateStr}
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="w-full bg-[var(--color-surface-subtle)] text-[var(--color-text)] text-base sm:text-sm rounded-md border border-[var(--color-border)] p-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                />
              </div>
              {errors.date && (
                <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.date}
                </p>
              )}
            </div>

            {/* Time Slot Grid */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-2">
                Preferred Time Slot *
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 max-h-48 overflow-y-auto p-1">
                {bookingConfig.timeSlots.map((slot) => {
                  const isSelected = formData.timeSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => handleInputChange("timeSlot", slot)}
                      className={`py-2.5 px-2 sm:px-3 rounded text-xs font-medium border text-center transition-all active:scale-95 ${
                        isSelected
                          ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] border-[var(--color-primary)] font-bold shadow"
                          : "bg-[var(--color-surface-subtle)] text-[var(--color-text-muted)] border-[var(--color-border)] hover:text-[var(--color-text)] hover:border-[var(--color-border-strong)]"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
              {errors.timeSlot && (
                <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.timeSlot}
                </p>
              )}
            </div>

            {/* Stylist Preference (Optional) */}
            <div>
              <label htmlFor="stylistSlug" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-2">
                Preferred Stylist (Optional)
              </label>
              <select
                id="stylistSlug"
                value={formData.stylistSlug}
                onChange={(e) => handleInputChange("stylistSlug", e.target.value)}
                className="w-full bg-[var(--color-surface-subtle)] text-[var(--color-text)] text-base sm:text-sm rounded-md border border-[var(--color-border)] p-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
              >
                <option value="" className="bg-[var(--color-surface)]">
                  First Available Master Specialist
                </option>
                {teamData.filter((t) => t.active).map((stylist) => (
                  <option key={stylist.slug} value={stylist.slug} className="bg-[var(--color-surface)]">
                    {stylist.name} — {stylist.role}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-4 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <Button type="button" variant="ghost" onClick={() => setCurrentStep(1)} className="w-full sm:w-auto">
                ← Back
              </Button>
              <Button type="button" onClick={handleNextStep} icon={<ChevronRight className="w-4 h-4" />} className="w-full sm:w-auto">
                Continue to Client Info
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: CLIENT DETAILS & SUBMIT */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="font-heading text-lg sm:text-xl font-medium text-[var(--color-text)]">
              Your Contact Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="e.g. Ananya Sharma"
                  className="w-full bg-[var(--color-surface-subtle)] text-[var(--color-text)] text-base sm:text-sm rounded-md border border-[var(--color-border)] p-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                />
                {errors.fullName && (
                  <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5">
                  Mobile Number (WhatsApp Preferred) *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full bg-[var(--color-surface-subtle)] text-[var(--color-text)] text-base sm:text-sm rounded-md border border-[var(--color-border)] p-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                />
                {errors.phone && (
                  <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5">
                Email Address (Optional)
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-[var(--color-surface-subtle)] text-[var(--color-text)] text-base sm:text-sm rounded-md border border-[var(--color-border)] p-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
              />
              {errors.email && (
                <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                </p>
              )}
            </div>

            {/* Notes / Special Requests */}
            <div>
              <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5">
                Special Requests or Notes (Optional)
              </label>
              <textarea
                id="notes"
                rows={2}
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                placeholder="Allergies, previous color history, wedding date, or specific requests..."
                className="w-full bg-[var(--color-surface-subtle)] text-[var(--color-text)] text-base sm:text-sm rounded-md border border-[var(--color-border)] p-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => handleInputChange("consent", e.target.checked)}
                  className="mt-0.5 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                />
                <span className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  I agree that this is an appointment request subject to stylist confirmation. I agree to receive appointment notifications on WhatsApp/SMS per the salon&apos;s privacy policy.
                </span>
              </label>
              {errors.consent && (
                <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.consent}
                </p>
              )}
            </div>

            <div className="pt-4 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-[var(--color-border)]">
              <Button type="button" variant="ghost" onClick={() => setCurrentStep(2)} className="w-full sm:w-auto">
                ← Back
              </Button>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                isLoading={isSubmitting}
                icon={<Sparkles className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Send Appointment Request
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
