"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, Sparkles } from "lucide-react";
import { GalleryItem, galleryCategories } from "@/content/gallery";
import { Lightbox } from "./Lightbox";

interface GalleryGridProps {
  initialItems: GalleryItem[];
}

export function GalleryGrid({ initialItems }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === "all"
    ? initialItems
    : initialItems.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div
        className="w-full max-w-full flex items-center sm:justify-center overflow-x-auto no-scrollbar scroll-smooth overscroll-x-contain gap-2 pb-2 px-1 sm:flex-wrap mb-8 sm:mb-10"
        role="tablist"
        aria-label="Portfolio categories"
      >
        {galleryCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer border whitespace-nowrap shrink-0 ${
                isActive
                  ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] border-[var(--color-primary)] shadow-sm"
                  : "bg-[var(--color-surface,#14161b)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Responsive Gallery Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 px-4 bg-[var(--color-surface,#14161b)] rounded-lg border border-[var(--color-border)]">
          <p className="text-[var(--color-text-muted)] text-sm">
            No portfolio items in this category yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveItem(item);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View enlarged photo: ${item.title}`}
              className="group relative aspect-[4/5] rounded-[var(--border-radius,8px)] overflow-hidden bg-[var(--color-surface-subtle)] border border-[var(--color-border)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Zoom Icon indicator */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption Info */}
              <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <h3 className="font-heading text-base sm:text-lg font-medium text-white">
                  {item.title}
                </h3>
                {item.caption && (
                  <p className="mt-1 text-xs text-gray-300 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Accessible Lightbox Modal */}
      <Lightbox
        item={activeItem}
        items={filteredItems}
        isOpen={Boolean(activeItem)}
        onClose={() => setActiveItem(null)}
        onSelect={(item) => setActiveItem(item)}
      />
    </div>
  );
}
