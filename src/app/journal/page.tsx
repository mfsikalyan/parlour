import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowRight, User } from "lucide-react";
import { brandConfig } from "@/config/brand";
import { featureFlags } from "@/config/features";
import { journalArticles } from "@/content/journal";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Beauty, Haircare & Grooming Journal",
  description: `Master colorist guides, bridal timelines, and scalp care advice written by directors at ${brandConfig.name}.`,
};

export default function JournalPage() {
  if (!featureFlags.journal) {
    notFound();
  }

  return (
    <div className="bg-[var(--color-background)] min-h-screen py-8 sm:py-12 lg:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "The Journal" }]} />

        <div className="my-6 sm:my-8 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] inline-block mb-3">
            Editorial & Care Guides
          </span>
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-text)] tracking-tight">
            The Aura Beauty Journal
          </h1>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            Practical advice, color maintenance secrets, and trichological insights from our lead stylists and aestheticians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
          {journalArticles.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col bg-[var(--color-surface,#14161b)] rounded-[var(--border-radius,8px)] border border-[var(--color-border)] overflow-hidden shadow-lg hover:border-[var(--color-border-strong)] transition-all group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-surface-subtle)]">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/10">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)] mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[var(--color-primary)]" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[var(--color-primary)]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading text-lg sm:text-xl font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                    <Link href={`/journal/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="mt-2 text-xs sm:text-sm text-[var(--color-text-muted)] line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                  <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    <span>{article.author}</span>
                  </span>

                  <Link
                    href={`/journal/${article.slug}`}
                    className="text-xs font-semibold text-[var(--color-primary)] hover:underline flex items-center gap-1"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
