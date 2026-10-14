import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cpu, ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import { salonTechnologies } from "@/content/technologies";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function TechnologyPreview() {
  // Feature top 3 breakthrough technologies on homepage
  const featuredTech = salonTechnologies.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[var(--color-surface,#14161b)] border-y border-[var(--color-border)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] inline-block mb-3">
              Clinical Beauty Science
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-text)] tracking-tight">
              State-of-the-Art Salon Technologies
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
              We bridge luxury sensory relaxation with medical-grade equipment. Every treatment is backed by calibrated technologies designed for visible, lasting results.
            </p>
          </div>

          <Button
            href="/technology"
            variant="outline"
            icon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0"
          >
            Explore All 8 Technologies
          </Button>
        </div>

        {/* 3 Featured Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTech.map((tech) => (
            <article
              key={tech.id}
              className="flex flex-col justify-between rounded-[var(--border-radius,8px)] bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 shadow-xl overflow-hidden group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-surface-subtle)]">
                <Image
                  src={tech.image}
                  alt={tech.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-black/20 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                    {tech.category}
                  </span>
                </div>

                <div className="absolute bottom-2 right-3">
                  <span className="text-[10px] text-neutral-300 backdrop-blur-md bg-black/50 px-2 py-0.5 rounded border border-white/10">
                    {tech.origin}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-[var(--color-primary)] font-medium">
                    {tech.tagline}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)] line-clamp-3 leading-relaxed pt-1">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{tech.certification.split(" ")[0]} Certified</span>
                  </span>

                  <Link
                    href={`/technology#${tech.id}`}
                    className="text-xs font-semibold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Tech Specs</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
