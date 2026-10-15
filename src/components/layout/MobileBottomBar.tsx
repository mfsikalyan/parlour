"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Phone, MessageSquare, Scissors, MapPin } from "lucide-react";
import { brandConfig } from "@/config/brand";

export function MobileBottomBar() {
  const pathname = usePathname();

  // WhatsApp concierge pre-filled message
  const encodedGreeting = encodeURIComponent(
    `Hello ${brandConfig.shortName} Concierge! I would like to inquire about appointments and availability.`
  );
  const whatsappUrl = `https://wa.me/${brandConfig.whatsappNumber}?text=${encodedGreeting}`;

  return (
    <aside
      aria-label="Mobile quick action bar"
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[var(--color-surface,#14161b)]/95 backdrop-blur-xl border-t border-[var(--color-border)] shadow-[0_-8px_30px_rgba(0,0,0,0.6)]"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom, 0.5rem))" }}
    >
      <div className="max-w-md mx-auto px-3 pt-2 grid grid-cols-4 items-center gap-1.5 sm:gap-2">
        {/* Services Menu Tab */}
        <Link
          href="/services"
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-lg transition-colors group ${
            pathname === "/services"
              ? "text-[var(--color-primary)] font-semibold"
              : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
          }`}
          aria-label="Explore Services Menu"
        >
          <div className="p-1 rounded-md group-hover:bg-[var(--color-surface-subtle)] transition-colors">
            <Scissors className="w-5 h-5 text-current" />
          </div>
          <span className="text-[10px] tracking-wide mt-0.5">Services</span>
        </Link>

        {/* WhatsApp Concierge */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-emerald-400 hover:text-emerald-300 transition-colors group"
          aria-label="Chat with Concierge on WhatsApp"
        >
          <div className="p-1 rounded-md group-hover:bg-emerald-950/40 transition-colors relative">
            <span className="absolute top-1 right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <MessageSquare className="w-5 h-5 fill-current" />
          </div>
          <span className="text-[10px] tracking-wide mt-0.5 text-[var(--color-text-muted)] group-hover:text-emerald-400 font-medium">
            WhatsApp
          </span>
        </a>

        {/* Direct Call Line */}
        <a
          href={`tel:${brandConfig.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors group"
          aria-label={`Call salon desk at ${brandConfig.displayPhone}`}
        >
          <div className="p-1 rounded-md group-hover:bg-[var(--color-surface-subtle)] transition-colors">
            <Phone className="w-5 h-5 text-current" />
          </div>
          <span className="text-[10px] tracking-wide mt-0.5">Call Us</span>
        </a>

        {/* Book Now Primary Button */}
        <Link
          href="/book"
          className="col-span-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent,#e6ca65)] text-[var(--color-primary-foreground)] font-bold text-xs shadow-lg active:scale-95 transition-all"
          aria-label="Reserve Salon Appointment"
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span className="tracking-wide">Book</span>
        </Link>
      </div>
    </aside>
  );
}
