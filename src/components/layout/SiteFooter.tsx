import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/ui/Icons";
import { brandConfig } from "@/config/brand";
import { getFooterNavGroups } from "@/config/navigation";

export function SiteFooter() {
  const footerGroups = getFooterNavGroups();

  return (
    <footer
      role="contentinfo"
      className="bg-[var(--color-surface,#14161b)] text-[var(--color-text)] border-t border-[var(--color-border)] pt-16 pb-12 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand + Navigation columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-14 border-b border-[var(--color-border)]">
          {/* Brand & Positioning Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-wider text-[var(--color-text)]">
                {brandConfig.name}
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)] font-medium mt-1">
                {brandConfig.tagline}
              </p>
            </Link>

            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-sm">
              {brandConfig.positioning}
            </p>

            <div className="pt-2 flex items-center gap-3">
              {brandConfig.socials.instagram && (
                <a
                  href={brandConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[var(--color-surface-subtle)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-elevated)] border border-[var(--color-border)] transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {brandConfig.socials.facebook && (
                <a
                  href={brandConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[var(--color-surface-subtle)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-elevated)] border border-[var(--color-border)] transition-colors"
                  aria-label="Like us on Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
              {brandConfig.socials.youtube && (
                <a
                  href={brandConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[var(--color-surface-subtle)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-elevated)] border border-[var(--color-border)] transition-colors"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="pt-2 text-xs text-[var(--color-text-muted)] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
              <span>Certified Autoclave Sterilization & 100% Genuine Products</span>
            </div>
          </div>

          {/* Dynamic Navigation Groups (Span 4) */}
          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <h3 className="font-heading text-sm font-semibold tracking-wider uppercase text-[var(--color-text)]">
                {group.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section: Salon Hours & Branch Locations */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-[var(--color-border)] text-sm">
          {/* Flagship Branch */}
          <div className="space-y-2">
            <h4 className="font-semibold text-[var(--color-text)] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
              <span>Flagship Indiranagar</span>
            </h4>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              {brandConfig.address.street}, {brandConfig.address.area}, {brandConfig.address.city} - {brandConfig.address.pincode}
            </p>
            <div className="pt-1 flex items-center gap-4 text-xs">
              <a
                href={`tel:${brandConfig.phone}`}
                className="text-[var(--color-primary)] hover:underline inline-flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>{brandConfig.displayPhone}</span>
              </a>
              <a
                href={brandConfig.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] underline"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Koramangala Studio */}
          <div className="space-y-2">
            <h4 className="font-semibold text-[var(--color-text)] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
              <span>Koramangala Boutique</span>
            </h4>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              88, 5th Block, 80ft Main Road, Koramangala, Bengaluru - 560095
            </p>
            <div className="pt-1 flex items-center gap-4 text-xs">
              <a
                href="tel:+919876543211"
                className="text-[var(--color-primary)] hover:underline inline-flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>+91 98765 43211</span>
              </a>
              <Link
                href="/contact"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] underline"
              >
                Branch Info
              </Link>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-2">
            <h4 className="font-semibold text-[var(--color-text)] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--color-primary)]" />
              <span>Salon Working Hours</span>
            </h4>
            <p className="text-xs text-[var(--color-text-muted)]">
              Mon – Thu: 09:30 AM – 08:30 PM
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              Fri – Sun: 09:00 AM – 09:30 PM
            </p>
            <p className="text-[11px] text-[var(--color-primary)] italic pt-1">
              {brandConfig.holidayNotice}
            </p>
          </div>
        </div>

        {/* Bottom Section: Legal, GST & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-muted)] text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {brandConfig.legal.copyrightHolder}. All rights reserved.
            {brandConfig.legal.gstNumber && ` | GSTIN: ${brandConfig.legal.gstNumber}`}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-[var(--color-primary)] transition-colors py-1">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--color-primary)] transition-colors py-1">
              Terms & Cancellation
            </Link>
            <Link href="/contact" className="hover:text-[var(--color-primary)] transition-colors py-1">
              Concierge Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
