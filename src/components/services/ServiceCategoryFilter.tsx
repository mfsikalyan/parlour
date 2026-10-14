"use client";

import React from "react";
import { Search, X } from "lucide-react";
import { serviceCategories } from "@/content/services";

interface ServiceCategoryFilterProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function ServiceCategoryFilter({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: ServiceCategoryFilterProps) {
  return (
    <div className="space-y-6 mb-10">
      {/* Search Input */}
      <div className="max-w-md mx-auto relative">
        <label htmlFor="service-search" className="sr-only">
          Search treatments and services
        </label>
        <div className="relative">
          <Search className="w-4 h-4 text-[var(--color-text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="service-search"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search treatments (e.g. balayage, facial, beard, fade)..."
            className="w-full bg-[var(--color-surface,#14161b)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] text-sm rounded-[var(--border-radius,8px)] border border-[var(--color-border)] pl-10 pr-9 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] p-0.5"
              aria-label="Clear search query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div
        className="flex items-center justify-center flex-wrap gap-2 pt-2"
        role="tablist"
        aria-label="Service categories"
      >
        {serviceCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer border ${
                isActive
                  ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] border-[var(--color-primary)] shadow-sm"
                  : "bg-[var(--color-surface,#14161b)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
