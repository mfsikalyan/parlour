import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { brandConfig } from "@/config/brand";
import { featureFlags } from "@/config/features";
import { journalArticles, getJournalArticleBySlug } from "@/content/journal";
import { generateArticleSchema } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

interface JournalPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return journalArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: JournalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getJournalArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

export default async function JournalArticlePage({ params }: JournalPageProps) {
  if (!featureFlags.journal) {
    notFound();
  }

  const { slug } = await params;
  const article = getJournalArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleSchema = generateArticleSchema(article);

  return (
    <div className="bg-[var(--color-background)] min-h-screen py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Container className="max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Journal", href: "/journal" },
            { label: article.title },
          ]}
        />

        <div className="mt-6 mb-8">
          <Link
            href="/journal"
            className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4 mb-6 sm:mb-8">
          <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-badge-bg)] inline-block">
            {article.category}
          </span>
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-text)] tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[var(--color-text-muted)] pt-2 border-y border-[var(--color-border)] py-3">
            <span className="flex items-center gap-1.5 text-[var(--color-text)] font-medium">
              <User className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span>{article.author} ({article.authorRole})</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-[var(--border-radius,8px)] overflow-hidden bg-[var(--color-surface-subtle)] border border-[var(--color-border)] shadow-xl mb-8 sm:mb-10">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none space-y-4 sm:space-y-6 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-[var(--color-text)] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* CTA Card at the bottom */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] text-center space-y-4">
          <h3 className="font-heading text-lg sm:text-xl font-medium text-[var(--color-text)]">
            Ready to consult with {article.author}?
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-md mx-auto">
            Book an appointment directly with our master team at {brandConfig.name}.
          </p>
          <Button href="/book" variant="gold" size="md" className="w-full sm:w-auto">
            Request Appointment
          </Button>
        </div>
      </Container>
    </div>
  );
}
