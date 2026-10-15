"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  X,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  Sparkles,
  Scissors,
  Crown,
  Sparkle,
  UserCheck,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/ui/Icons";
import { NavItem } from "@/config/navigation";
import { brandConfig } from "@/config/brand";
import { Button } from "@/components/ui/Button";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export function MobileNavigation({
  isOpen,
  onClose,
  navItems,
}: MobileNavigationProps) {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close menu when route changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, onClose]);

  const quickCategories = [
    { label: "Hair & Balayage", href: "/services", icon: Scissors },
    { label: "Bridal Suite", href: "/bridal", icon: Crown },
    { label: "Lookbook", href: "/gallery", icon: Sparkles },
    { label: "Privileges", href: "/offers", icon: Sparkle },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none delay-200"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed inset-y-0 right-0 w-full max-w-[340px] sm:max-w-sm bg-[var(--color-surface,#14161b)] border-l border-[var(--color-border)] h-full overflow-y-auto p-5 sm:p-6 flex flex-col justify-between shadow-2xl z-10 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-[var(--color-border)]">
            <Link href="/" onClick={onClose} className="flex flex-col group">
              <span className="font-heading text-xl font-bold tracking-wider text-[var(--color-primary)]">
                {brandConfig.shortName}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[var(--color-text-muted)]">
                {brandConfig.tagline}
              </span>
            </Link>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-subtle)] border border-[var(--color-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Salon Live Status Pill */}
          <div className="mt-4 p-3 rounded-lg bg-[var(--color-surface-subtle)] border border-[var(--color-border)] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="font-semibold text-emerald-400">Open Today</span>
            </div>
            <span className="text-[var(--color-text-muted)]">09:30 AM – 08:30 PM</span>
          </div>

          {/* Quick Categories Bar */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {quickCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.label}
                  href={cat.href}
                  onClick={onClose}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-[var(--color-surface-subtle)] border border-[var(--color-border)] text-xs text-[var(--color-text)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all"
                >
                  <Icon className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" />
                  <span className="font-medium truncate">{cat.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Navigation Links */}
          <nav className="py-5 space-y-1" aria-label="Mobile drawer links">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between py-3 px-3.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[var(--color-accent-subtle)] text-[var(--color-primary)] font-semibold border-l-2 border-[var(--color-primary)]"
                      : "text-[var(--color-text)] hover:bg-[var(--color-surface-subtle)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  <span className="tracking-wide">{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-[var(--color-badge-bg)] text-[var(--color-primary)] font-semibold border border-[var(--color-border)]">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary Action Button */}
          <div className="pt-2 pb-5 border-b border-[var(--color-border)]">
            <Button
              href="/book"
              variant="gold"
              size="lg"
              className="w-full shadow-lg"
              icon={<Sparkles className="w-4 h-4" />}
            >
              {brandConfig.cta.primaryText}
            </Button>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="pt-5 space-y-4 text-xs text-[var(--color-text-muted)]">
          {/* Address & Directions */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                {brandConfig.address.street}, {brandConfig.address.area}, {brandConfig.address.city}
              </span>
            </div>
            <a
              href={brandConfig.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline shrink-0 flex items-center gap-1 font-semibold"
            >
              <span>Map</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Direct Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={`tel:${brandConfig.phone}`}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[var(--color-surface-subtle)] text-[var(--color-text)] hover:text-[var(--color-primary)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all font-medium text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span>Call Concierge</span>
            </a>
            <a
              href={`https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
                `Hello ${brandConfig.shortName}! I would like to inquire about appointment slots.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[var(--color-surface-subtle)] text-[var(--color-text)] hover:text-emerald-400 border border-[var(--color-border)] hover:border-emerald-500/50 transition-all font-medium text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Social Icons in Drawer */}
          <div className="pt-2 flex items-center justify-center gap-4 text-[var(--color-text-muted)]">
            {brandConfig.socials.instagram && (
              <a
                href={brandConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-subtle)] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            )}
            {brandConfig.socials.facebook && (
              <a
                href={brandConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-subtle)] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            )}
            {brandConfig.socials.youtube && (
              <a
                href={brandConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-subtle)] transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
