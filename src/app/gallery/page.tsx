import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brandConfig } from "@/config/brand";
import { featureFlags } from "@/config/features";
import { galleryData } from "@/content/gallery";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Client Portfolio & Visual Gallery",
  description: `Browse real client transformations, balayage hair color, men's fades, Russian manicures, and bridal looks at ${brandConfig.name}.`,
};

export default function GalleryPage() {
  if (!featureFlags.gallery) {
    notFound();
  }

  return (
    <div className="bg-[var(--color-background)] min-h-screen py-8 sm:py-12 lg:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Visual Gallery" }]} />

        <div className="my-6 sm:my-8 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] inline-block mb-3">
            Portfolio of Artistry
          </span>
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-text)] tracking-tight">
            Client Transformations
          </h1>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            Every look is captured under natural studio light. Select any photograph to open the interactive lightbox and explore stylist details.
          </p>
        </div>

        <GalleryGrid initialItems={galleryData} />
      </Container>
    </div>
  );
}
