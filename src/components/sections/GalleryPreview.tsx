import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2 } from "lucide-react";
import { featureFlags } from "@/config/features";
import { getFeaturedGallery } from "@/content/gallery";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function GalleryPreview() {
  if (!featureFlags.gallery) return null;

  const galleryItems = getFeaturedGallery().slice(0, 6);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[var(--color-surface,#14161b)] border-y border-[var(--color-border)]">
      <Container>
        <SectionHeading
          eyebrow="Visual Portfolio"
          title="Real Transformations & Client Artistry"
          subtitle="Explore authentic client looks created on the salon floor—no stock masquerades, just genuine artistry and healthy hair vitality."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {galleryItems.map((item) => (
            <Link
              key={item.id}
              href="/gallery"
              className="group relative aspect-[4/5] rounded-[var(--border-radius,8px)] overflow-hidden bg-[var(--color-surface-subtle)] border border-[var(--color-border)] cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 left-3">
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-md">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="absolute bottom-3 inset-x-3 text-white">
                <h4 className="font-heading text-sm font-medium line-clamp-1">
                  {item.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Button href="/gallery" variant="outline" icon={<ArrowRight className="w-4 h-4" />} className="w-full sm:w-auto">
            <span className="sm:hidden">View Full Portfolio</span>
            <span className="hidden sm:inline">View Full Portfolio & Interactive Lightbox</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
