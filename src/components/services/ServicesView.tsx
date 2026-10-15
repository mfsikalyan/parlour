"use client";

import React, { useState } from "react";
import { ServiceItem } from "@/content/services";
import { ServiceCategoryFilter } from "@/components/services/ServiceCategoryFilter";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Container } from "@/components/ui/Container";

interface ServicesViewProps {
  allServices: ServiceItem[];
}

export function ServicesView({ allServices }: ServicesViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredServices = allServices.filter((service) => {
    const matchesCategory =
      activeCategory === "all" || service.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <Container className="py-8 sm:py-12 lg:py-16">
      <ServiceCategoryFilter
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {filteredServices.length === 0 ? (
        <div className="text-center py-16 sm:py-20 bg-[var(--color-surface,#14161b)] rounded-[var(--border-radius,8px)] border border-[var(--color-border)] p-6 sm:p-8">
          <p className="text-base text-[var(--color-text)] font-medium">
            No treatments found matching &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">
            Try adjusting your search keywords or browsing by category above.
          </p>
          <button
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 rounded-full text-xs font-semibold bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:brightness-110 transition-all"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      )}
    </Container>
  );
}
