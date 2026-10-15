import React from "react";
import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Car,
  ExternalLink,
  ShieldCheck
} from "lucide-react";
import { brandConfig } from "@/config/brand";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Studio Locations",
  description: `Find address, phone, WhatsApp concierge, and valet parking information for ${brandConfig.name} in Indiranagar and Koramangala.`,
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen py-8 sm:py-12 lg:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Contact & Studios" }]} />

        <div className="my-6 sm:my-8 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] inline-block mb-3">
            Concierge Desk
          </span>
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-text)] tracking-tight">
            Connect With Our Team
          </h1>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            Have questions regarding chemical services, wedding dates, or group bookings? Our concierge team is on hand to assist you promptly.
          </p>
        </div>

        {/* Main Grid: Form (Col 7) + Branch Details (Col 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mt-8 sm:mt-10">
          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <h2 className="font-heading text-lg sm:text-xl font-medium text-[var(--color-text)] mb-4">
              Send an Online Inquiry
            </h2>
            <ContactForm />
          </div>

          {/* Studio Locations & Direct Links */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="p-5 sm:p-8 rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] shadow-xl space-y-5 sm:space-y-6">
              <h2 className="font-heading text-lg sm:text-xl font-semibold text-[var(--color-text)]">
                Direct Contact
              </h2>

              <div className="space-y-3 sm:space-y-4 text-sm">
                <a
                  href={`tel:${brandConfig.phone}`}
                  className="flex items-center gap-3 p-3 rounded-md bg-[var(--color-surface-subtle)] text-[var(--color-text)] hover:text-[var(--color-primary)] border border-[var(--color-border)] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                  <div>
                    <span className="text-xs text-[var(--color-text-muted)] block">Concierge Phone</span>
                    <span className="font-semibold">{brandConfig.displayPhone}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${brandConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-md bg-[var(--color-surface-subtle)] text-[var(--color-text)] hover:text-[var(--color-primary)] border border-[var(--color-border)] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-xs text-[var(--color-text-muted)] block">WhatsApp Desk</span>
                    <span className="font-semibold">{brandConfig.displayWhatsapp}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${brandConfig.email}`}
                  className="flex items-center gap-3 p-3 rounded-md bg-[var(--color-surface-subtle)] text-[var(--color-text)] hover:text-[var(--color-primary)] border border-[var(--color-border)] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-[var(--color-text-muted)] block">Email Enquiries</span>
                    <span className="font-semibold text-xs sm:text-sm break-all">{brandConfig.email}</span>
                  </div>
                </a>
              </div>

              {/* Valet Parking Info */}
              <div className="p-3.5 sm:p-4 rounded-md bg-[var(--color-surface-subtle)] border border-[var(--color-border)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
                <Car className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>
                  <strong>Complimentary Valet Parking:</strong> Available directly outside our Indiranagar Flagship and Koramangala Boutique entrances.
                </span>
              </div>
            </div>

            {/* Branch Cards */}
            {brandConfig.branches.map((branch) => (
              <div
                key={branch.id}
                className="p-5 sm:p-6 rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-[var(--color-text)] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                    <span>{branch.name}</span>
                  </h3>
                  {branch.isPrimary && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[var(--color-badge-bg)] text-[var(--color-badge-text)]">
                      Flagship
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {branch.address}, {branch.locality}, {branch.city} - {branch.pincode}
                </p>

                <div className="pt-2 border-t border-[var(--color-border)] flex items-center justify-between text-xs">
                  <a
                    href={`tel:${branch.phone}`}
                    className="text-[var(--color-primary)] font-semibold hover:underline"
                  >
                    {branch.phone}
                  </a>
                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] underline inline-flex items-center gap-1"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </aside>
        </div>

        {/* Full-width Map Section */}
        <section className="my-12 sm:my-16">
          <h2 className="font-heading text-xl sm:text-2xl font-medium text-[var(--color-text)] mb-4">
            Interactive Salon Map
          </h2>
          <div className="rounded-[var(--border-radius,8px)] overflow-hidden border border-[var(--color-border)] shadow-xl h-64 sm:h-80 md:h-96 w-full bg-[var(--color-surface-subtle)]">
            <iframe
              title={`Location map for ${brandConfig.name}`}
              src={brandConfig.branches[0].mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter invert-[0.9] hue-rotate-[180deg] contrast-[1.2]"
            />
          </div>
        </section>
      </Container>
    </div>
  );
}
