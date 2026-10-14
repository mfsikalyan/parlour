import React from "react";
import Link from "next/link";
import { Sparkles, Home, Calendar, Phone, ArrowLeft } from "lucide-react";
import { brandConfig } from "@/config/brand";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="bg-[var(--color-background)] min-h-[70vh] flex items-center justify-center py-20">
      <Container className="text-center max-w-xl">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] inline-block mb-4">
          404 — Page Not Found
        </span>

        <h1 className="font-heading text-4xl sm:text-6xl font-normal text-[var(--color-text)] tracking-tight">
          A Moment of Pause
        </h1>

        <p className="mt-4 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
          The page or treatment you are seeking seems to have moved or does not exist. Allow us to guide you back to our sanctuary.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary" icon={<Home className="w-4 h-4" />}>
            Return to Homepage
          </Button>

          <Button href="/services" variant="outline">
            Browse Service Menu
          </Button>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">
          Need assistance? Call concierge directly at{" "}
          <a href={`tel:${brandConfig.phone}`} className="text-[var(--color-primary)] underline font-semibold">
            {brandConfig.displayPhone}
          </a>
        </div>
      </Container>
    </div>
  );
}
