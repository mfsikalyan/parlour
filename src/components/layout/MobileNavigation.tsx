"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone, MessageSquare, Clock, MapPin, Sparkles } from "lucide-react";
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
  const menuRef = useRef<HTMLDivElement>(null);

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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={menuRef}
        className="relative w-full max-w-sm bg-[var(--color-surface,#14161b)] border-l border-[var(--color-border)] h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl z-10"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[var(--color-border)]">
            <Link href="/" onClick={onClose} className="flex flex-col">
              <span className="font-heading text-xl font-bold tracking-wider text-[var(--color-primary)]">
                {brandConfig.shortName}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[var(--color-text-muted)]">
                {brandConfig.tagline}
              </span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between py-3 px-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[var(--color-accent-subtle)] text-[var(--color-primary)] font-semibold"
                      : "text-[var(--color-text)] hover:bg-[var(--color-surface-subtle)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] font-semibold border border-[var(--color-border)]">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary Action */}
          <div className="pt-2 pb-6 border-b border-[var(--color-border)]">
            <Button
              href="/book"
              variant="gold"
              size="lg"
              className="w-full"
              icon={<Sparkles className="w-4 h-4" />}
            >
              {brandConfig.cta.primaryText}
            </Button>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="pt-6 space-y-4 text-xs text-[var(--color-text-muted)]">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
            <span>
              {brandConfig.address.street}, {brandConfig.address.area}, {brandConfig.address.city}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
            <span>Mon - Sun: 09:30 AM - 08:30 PM</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href={`tel:${brandConfig.phone}`}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-[var(--color-surface-subtle)] text-[var(--color-text)] hover:text-[var(--color-primary)] border border-[var(--color-border)] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span>Call Us</span>
            </a>
            <a
              href={`https://wa.me/${brandConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-[var(--color-surface-subtle)] text-[var(--color-text)] hover:text-[var(--color-primary)] border border-[var(--color-border)] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
