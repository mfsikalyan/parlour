"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Check,
  Cpu,
  ShieldCheck,
  ArrowRight,
  Info,
  Calendar,
  Layers,
  Award,
  Globe
} from "lucide-react";
import { salonTechnologies, technologyCategories, SalonTechnologyItem } from "@/content/technologies";
import { Button } from "@/components/ui/Button";

export function TechnologyView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Technologies");

  const filteredTechnologies = selectedCategory === "All Technologies"
    ? salonTechnologies
    : salonTechnologies.filter((tech) => tech.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div
        className="flex items-center sm:justify-center overflow-x-auto no-scrollbar scroll-smooth gap-2 pb-2 px-1 -mx-2 sm:mx-0 sm:flex-wrap mb-8 sm:mb-12"
        role="tablist"
        aria-label="Salon Technology Categories"
      >
        {technologyCategories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer border whitespace-nowrap shrink-0 ${
                isActive
                  ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] border-[var(--color-primary)] shadow-md"
                  : "bg-[var(--color-surface,#14161b)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Technology Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
        {filteredTechnologies.map((tech) => (
          <article
            key={tech.id}
            id={tech.id}
            className="flex flex-col justify-between rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 shadow-xl overflow-hidden group"
          >
            {/* Top Photo Header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-surface-subtle)]">
              <Image
                src={tech.image}
                alt={tech.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface,#14161b)] via-black/30 to-transparent" />

              {/* Badges on Photo */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                  {tech.category}
                </span>
              </div>

              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] text-neutral-300 border border-white/10">
                <Globe className="w-3 h-3 text-[var(--color-primary)]" />
                <span>{tech.origin}</span>
              </div>

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{tech.certification}</span>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-2xl font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-[var(--color-primary)] font-medium mt-1">
                    {tech.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {tech.description}
                </p>

                {/* How it works callout */}
                <div className="p-4 rounded-lg bg-[var(--color-surface-subtle,#181b22)] border border-[var(--color-border)] space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-primary)] flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    How The Science Works:
                  </span>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {tech.howItWorks}
                  </p>
                </div>

                {/* Clinical Benefits Checklist */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-text)] block">
                    Verified Clinical & Aesthetic Benefits:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[var(--color-text-muted)]">
                    {tech.clinicalBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specifications Grid */}
                <div className="pt-3 border-t border-[var(--color-border)] space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-text)] block">
                    Engineering Specifications:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {tech.technicalSpecs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded bg-[var(--color-surface-subtle,#181b22)] border border-[var(--color-border)]"
                      >
                        <span className="text-[10px] text-[var(--color-text-muted)] block">
                          {spec.label}
                        </span>
                        <span className="text-xs font-semibold text-[var(--color-text)] block mt-0.5">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Footer Actions */}
              <div className="pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] block font-semibold">
                    Experience in Services:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {tech.associatedServices.map((svc, i) => (
                      <Link
                        key={i}
                        href={svc.href}
                        className="text-[11px] text-[var(--color-primary)] hover:underline inline-flex items-center gap-1"
                      >
                        <span>{svc.name}</span>
                        {i < tech.associatedServices.length - 1 && <span className="text-neutral-500">•</span>}
                      </Link>
                    ))}
                  </div>
                </div>

                <Button
                  href="/book"
                  variant="gold"
                  size="sm"
                  icon={<Calendar className="w-3.5 h-3.5" />}
                  className="shrink-0"
                >
                  Book Treatment
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
