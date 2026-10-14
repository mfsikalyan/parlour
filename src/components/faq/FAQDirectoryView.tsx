"use client";

import React, { useState } from "react";
import { Search, ChevronDown, X } from "lucide-react";
import { FAQItem, faqCategories } from "@/content/faqs";

interface FAQDirectoryViewProps {
  faqs: FAQItem[];
}

export function FAQDirectoryView({ faqs }: FAQDirectoryViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [faqs[0]?.id]: true,
  });

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Search Input */}
      <div className="relative">
        <label htmlFor="faq-search" className="sr-only">
          Search questions
        </label>
        <Search className="w-4 h-4 text-[var(--color-text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          id="faq-search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search question keywords (e.g. balayage, cancellation, valet, trial)..."
          className="w-full bg-[var(--color-surface,#14161b)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] text-sm rounded-[var(--border-radius,8px)] border border-[var(--color-border)] pl-10 pr-9 py-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] p-0.5"
            aria-label="Clear FAQ search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Category Filter Pills */}
      <div
        className="flex items-center justify-center flex-wrap gap-2"
        role="tablist"
        aria-label="FAQ categories"
      >
        {faqCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(cat.id)}
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

      {/* Questions Accordion */}
      {filteredFaqs.length === 0 ? (
        <div className="text-center py-16 bg-[var(--color-surface,#14161b)] rounded-[var(--border-radius,8px)] border border-[var(--color-border)] p-6">
          <p className="text-sm text-[var(--color-text)] font-medium">
            No questions found matching &ldquo;{searchQuery}&rdquo;
          </p>
          <button
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="mt-3 text-xs text-[var(--color-primary)] font-semibold hover:underline"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = Boolean(openIds[faq.id]);
            return (
              <div
                key={faq.id}
                className="rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-dir-answer-${faq.id}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-heading text-base sm:text-lg font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--color-primary)] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-dir-answer-${faq.id}`}
                    role="region"
                    className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)] pt-4"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
