"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Sparkles } from "lucide-react";
import { brandConfig } from "@/config/brand";
import { getHeaderNav } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { MobileNavigation } from "./MobileNavigation";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navItems = getHeaderNav();

  return (
    <>
      {/* Skip to main content link for screen readers & keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-primary)] focus:text-[var(--color-primary-foreground)] focus:rounded-md focus:shadow-xl focus:font-semibold"
      >
        Skip to main content
      </a>

      <header
        role="banner"
        className="sticky top-0 z-40 w-full bg-[var(--color-background)]/90 backdrop-blur-md border-b border-[var(--color-border)] transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3 xl:gap-6 flex-nowrap">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="flex flex-col group py-1 select-none outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 rounded shrink-0"
          >
            <span className="font-heading text-xl sm:text-2xl font-bold tracking-[0.08em] text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
              {brandConfig.shortName}
            </span>
            <span className="text-[10px] tracking-[0.22em] uppercase text-[var(--color-primary)] font-medium">
              {brandConfig.tagline}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 flex-nowrap shrink-0"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all rounded-md whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 ${
                    isActive
                      ? "text-[var(--color-primary)] font-semibold"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-subtle)]"
                  }`}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[var(--color-badge-bg)] text-[var(--color-primary)] font-semibold border border-[var(--color-border)] whitespace-nowrap shrink-0">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[var(--color-primary)] rounded-full shadow-[0_0_8px_var(--color-primary)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3.5 shrink-0">
            <a
              href={`tel:${brandConfig.phone}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] px-3 py-1.5 rounded-full bg-[var(--color-surface-subtle)] hover:bg-[var(--color-surface-elevated)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all whitespace-nowrap shrink-0 group shadow-sm"
              aria-label={`Call salon concierge at ${brandConfig.displayPhone}`}
              title={`Direct Line: ${brandConfig.displayPhone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[var(--color-primary)] group-hover:scale-110 transition-transform shrink-0" />
              <span>Call Concierge</span>
            </a>

            <Button
              href="/book"
              variant="gold"
              size="sm"
              icon={<Sparkles className="w-3.5 h-3.5" />}
              className="whitespace-nowrap shrink-0 text-xs xl:text-sm px-3.5 py-1.5"
            >
              {brandConfig.cta.primaryText}
            </Button>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="/book"
              variant="primary"
              size="sm"
              className="sm:hidden text-xs px-2.5 py-1.5"
            >
              Book
            </Button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-subtle)] border border-[var(--color-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
              aria-label="Open mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Component */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
