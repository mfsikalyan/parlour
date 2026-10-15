"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, Sparkles } from "lucide-react";
import { featureFlags } from "@/config/features";
import { announcementBarConfig } from "@/config/navigation";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!featureFlags.announcementBar || !isVisible) {
    return null;
  }

  return (
    <aside
      aria-label="Salon Announcement"
      className="relative z-50 bg-[var(--color-surfaceSubtle,#1b1e26)] border-b border-[var(--color-border)] text-[11px] sm:text-xs text-[var(--color-text)] py-1.5 sm:py-2 px-3 sm:px-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 text-center min-w-0">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[var(--color-primary)] shrink-0 hidden sm:inline" />
          <p className="font-normal text-[var(--color-text-muted)] sm:text-[var(--color-text)] truncate sm:whitespace-normal">
            {announcementBarConfig.text}
          </p>
          {announcementBarConfig.href && (
            <Link
              href={announcementBarConfig.href}
              className="font-semibold text-[var(--color-primary)] underline underline-offset-4 hover:brightness-125 shrink-0 whitespace-nowrap ml-1"
            >
              {announcementBarConfig.linkText} →
            </Link>
          )}
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] p-1 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-primary)]"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
