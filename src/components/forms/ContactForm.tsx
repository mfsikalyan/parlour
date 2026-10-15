"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { brandConfig } from "@/config/brand";
import { validateContactForm, ContactFormInput } from "@/lib/validation";
import { submitContactInquiry } from "@/lib/contact-provider";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormInput>({
    fullName: "",
    phone: "",
    email: "",
    branchId: brandConfig.branches[0].id,
    subject: "Appointment Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (field: keyof ContactFormInput, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitContactInquiry(formData);
      setIsSuccess(true);
      setStatusMessage(result.message);
    } catch {
      setErrors({ message: "Unable to send message right now. Please call or WhatsApp our concierge directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[var(--color-surface,#14161b)] p-8 rounded-[var(--border-radius,8px)] border border-[var(--color-border)] text-center space-y-4">
        <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading text-2xl font-medium text-[var(--color-text)]">
          Message Dispatched
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] max-w-md mx-auto leading-relaxed">
          {statusMessage}
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              fullName: "",
              phone: "",
              email: "",
              branchId: brandConfig.branches[0].id,
              subject: "Appointment Inquiry",
              message: "",
            });
          }}
          className="text-xs text-[var(--color-primary)] hover:underline pt-2 inline-block font-semibold"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-[var(--color-surface,#14161b)] p-4 sm:p-8 rounded-[var(--border-radius,8px)] border border-[var(--color-border)] shadow-xl space-y-4 sm:space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5">
            Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="e.g. Priya Sharma"
            className="w-full bg-[var(--color-surface-subtle)] text-[var(--color-text)] text-base sm:text-sm rounded-md border border-[var(--color-border)] p-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
          />
          {errors.fullName && (
            <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5">
            Phone Number *
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Address */}
        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5">
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="name@example.com"
            className="w-full bg-[var(--color-surface-subtle)] text-[var(--color-text)] text-base sm:text-sm rounded-md border border-[var(--color-border)] p-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
          />
          {errors.email && (
            <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
            </p>
          )}
        </div>

        {/* Target Branch */}
        <div>
          <label htmlFor="contact-branch" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5">
            Preferred Branch
          </label>
          <select
            id="contact-branch"
            value={formData.branchId}
            onChange={(e) => handleChange("branchId", e.target.value)}
            className="w-full bg-[var(--color-surface-subtle)] text-[var(--color-text)] text-base sm:text-sm rounded-md border border-[var(--color-border)] p-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
          >
            {brandConfig.branches.map((b) => (
              <option key={b.id} value={b.id} className="bg-[var(--color-surface)]">
                {b.name} ({b.locality})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Inquiry Subject */}
      <div>
        <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5">
          Subject *
        </label>
        <select
          id="contact-subject"
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className="w-full bg-[var(--color-surface-subtle)] text-[var(--color-text)] text-base sm:text-sm rounded-md border border-[var(--color-border)] p-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
        >
          <option value="Appointment Inquiry">Appointment & Slot Inquiry</option>
          <option value="Bridal Consultation">Bridal Suite & Trial Consultation</option>
          <option value="Special Packages">Special Packages & Corporate Booking</option>
          <option value="Careers & Styling Positions">Careers & Styling Audition</option>
          <option value="General Question">General Feedback or Question</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1.5">
          Message *
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="How can our concierge assist your salon experience?"
          className="w-full bg-[var(--color-surface-subtle)] text-[var(--color-text)] text-base sm:text-sm rounded-md border border-[var(--color-border)] p-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
        />
        {errors.message && (
          <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="w-full"
          isLoading={isSubmitting}
          icon={<Send className="w-4 h-4" />}
        >
          Transmit Inquiry to Concierge
        </Button>
      </div>
    </form>
  );
}
