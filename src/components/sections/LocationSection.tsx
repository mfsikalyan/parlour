import React from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { brandConfig } from "@/config/brand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LocationSection() {
  const primaryBranch = brandConfig.branches[0];

  return (
    <section className="py-20 lg:py-28 bg-[var(--color-surface,#14161b)] border-y border-[var(--color-border)]">
      <Container>
        <SectionHeading
          eyebrow="Visit Our Studios"
          title="Locations, Timings & Valet Hospitality"
          subtitle="Experience our serene sanctuary nestled in Bengaluru's vibrant avenues. Complimentary valet parking provided for all salon patrons."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Branch Details Cards (Col 5) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {brandConfig.branches.map((branch) => (
              <div
                key={branch.id}
                className="p-6 rounded-[var(--border-radius,8px)] bg-[var(--color-surface-subtle)] border border-[var(--color-border)] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-semibold text-[var(--color-text)] flex items-center gap-2">
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

                <div className="pt-2 border-t border-[var(--color-border)] flex flex-wrap items-center gap-4 text-xs">
                  <a
                    href={`tel:${branch.phone}`}
                    className="text-[var(--color-primary)] hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{branch.phone}</span>
                  </a>

                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] inline-flex items-center gap-1 underline"
                  >
                    <span>Google Maps Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}

            {/* Operating Schedule Box */}
            <div className="p-6 rounded-[var(--border-radius,8px)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] space-y-2">
              <h4 className="font-heading text-base font-medium text-[var(--color-text)] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                <span>Operating Timings</span>
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-[var(--color-text-muted)] pt-1">
                <div>
                  <span className="font-semibold text-[var(--color-text)] block">Mon — Thu</span>
                  <span>09:30 AM – 08:30 PM</span>
                </div>
                <div>
                  <span className="font-semibold text-[var(--color-text)] block">Fri — Sun</span>
                  <span>09:00 AM – 09:30 PM</span>
                </div>
              </div>
              <p className="text-[11px] text-[var(--color-primary)] italic pt-2">
                {brandConfig.holidayNotice}
              </p>
            </div>
          </div>

          {/* Interactive Map Embed (Col 7) */}
          <div className="lg:col-span-7 rounded-[var(--border-radius,8px)] overflow-hidden border border-[var(--color-border)] shadow-xl min-h-[380px] bg-[var(--color-surface-subtle)] relative">
            <iframe
              title={`Google Maps location for ${brandConfig.name}`}
              src={primaryBranch.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter invert-[0.9] hue-rotate-[180deg] contrast-[1.2]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
