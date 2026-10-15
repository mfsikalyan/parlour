"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { brandConfig } from "@/config/brand";
import { featureFlags } from "@/config/features";

export function WhatsAppWidget() {
  if (!featureFlags.whatsappFloatingButton) {
    return null;
  }

  const encodedGreeting = encodeURIComponent(
    `Hello ${brandConfig.shortName} Concierge! I'd like to inquire about appointments and available slots.`
  );
  const whatsappUrl = `https://wa.me/${brandConfig.whatsappNumber}?text=${encodedGreeting}`;

  return (
    <aside aria-label="Quick WhatsApp assistance">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
        aria-label="Chat directly with salon concierge on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Chat with Concierge
        </span>
      </a>
    </aside>
  );
}
