import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Sparkles,
  Heart,
  Award,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  ArrowRight
} from "lucide-react";
import { brandConfig } from "@/config/brand";
import { journalArticles } from "@/content/journal";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Our Salon Sanctuary & Heritage",
  description: `Discover the philosophy, medical-grade hygiene protocols, and artisan hair crafting behind ${brandConfig.name}.`,
};

export default function AboutPage() {
  const safetyProtocols = [
    {
      title: "Hospital-Grade Autoclave Sterilization",
      desc: "Every metal shear, cuticle nipper, and precision tweezer is cleaned, sealed into an indicator pouch, and pressurized at 121°C before being opened at your chair."
    },
    {
      title: "100% Single-Use Disposables",
      desc: "Biodegradable organic neck ruffs, client gowns, wooden wax spatulas, and nail buffers are used once and discarded responsibly."
    },
    {
      title: "Pedicure Basin Hygiene",
      desc: "Our pedicure thrones feature pipeless whirlpool jets and disposable medical basin liners to completely eliminate cross-contamination risks."
    },
    {
      title: "Air Purification & Acoustic Calm",
      desc: "HEPA air filtration and discreet acoustic baffling ensure salon fumes and city noise never intrude on your relaxation."
    }
  ];

  return (
    <div className="bg-[var(--color-background)] min-h-screen py-8 sm:py-12 lg:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "About Our Salon" }]} />

        {/* Hero Banner */}
        <section className="my-6 sm:my-8 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] inline-block mb-3">
            Our Heritage & Values
          </span>
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-text)] tracking-tight">
            Crafting Confidence, Nurturing Sanctuary
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            {brandConfig.positioning}
          </p>
        </section>

        {/* Narrative & Image Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center my-10 sm:my-16">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="font-heading text-xl sm:text-3xl font-medium text-[var(--color-text)]">
              An Antidote to Rushed, Impersonal Haircare
            </h2>
            <p className="text-xs sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              When {brandConfig.name} opened its doors in {brandConfig.foundedYear}, our goal was simple: restore the quiet elegance and personalized artistry of high-end salon culture. We believe great haircuts and radiant skin don&apos;t happen by accident; they are the result of careful listening and meticulous technique.
            </p>
            <p className="text-xs sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              We eliminated the typical salon chaos. No blaring music, no rushing between simultaneous clients, and zero upselling of unnecessary treatments. Instead, our guests enjoy single-origin pour-over coffees, bespoke consultations, and treatments backed by trichological science.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-[var(--border-radius,8px)] overflow-hidden shadow-2xl border border-[var(--color-border)]">
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
              alt="Stylist consulting with client in modern serene salon interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Hygiene & Clinical Safety Section */}
        <section id="hygiene" className="my-12 sm:my-20 p-5 sm:p-8 lg:p-12 rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)]">
          <div className="max-w-3xl mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Safety & Hygiene Standards</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-normal text-[var(--color-text)]">
              Clinical Sanitation Protocols
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
              We adhere to strict hospital-grade disinfection standards so you can relax with total peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {safetyProtocols.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-md bg-[var(--color-surface-subtle)] border border-[var(--color-border)] space-y-2"
              >
                <h3 className="font-heading text-sm sm:text-base font-semibold text-[var(--color-text)] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                  <span>{item.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Salon Technologies Bridge Banner */}
        <section className="my-10 sm:my-16 p-5 sm:p-8 rounded-[var(--border-radius,8px)] bg-gradient-to-r from-[var(--color-surface,#14161b)] via-[var(--color-surface-elevated,#1c1f26)] to-[var(--color-surface,#14161b)] border border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-[var(--color-primary)] font-bold">
              Clinical Science & Diagnostics
            </span>
            <h3 className="font-heading text-lg sm:text-2xl font-medium text-[var(--color-text)]">
              Explore Our State-of-the-Art Salon Technologies
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-xl">
              From 200x trichology follicle scanners and Tokyo waterfall hydrotherapy to Class-B autoclave suites, explore the equipment that elevates our craft.
            </p>
          </div>
          <Button
            href="/technology"
            variant="outline"
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto shrink-0"
          >
            Explore Salon Technologies
          </Button>
        </section>

        {/* The Aura Beauty Journal Section Inside About Page */}
        <section id="journal" className="my-12 sm:my-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] inline-block mb-3">
                Editorial & Care Guides
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-normal text-[var(--color-text)] tracking-tight">
                The Aura Beauty & Grooming Journal
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
                Expert color maintenance advice, bridal beauty timelines, and trichological care tips written directly by our master directors and stylists.
              </p>
            </div>

            <Button
              href="/journal"
              variant="outline"
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shrink-0"
            >
              View Full Journal
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {journalArticles.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col justify-between rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Photo Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-surface-subtle)]">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface,#14161b)] via-black/20 to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                      {article.category}
                    </span>
                  </div>

                  <div className="absolute bottom-2 right-3">
                    <span className="text-[10px] text-neutral-300 backdrop-blur-md bg-black/60 px-2 py-0.5 rounded">
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading text-base sm:text-lg font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                      <Link href={`/journal/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-[var(--color-text-muted)] line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[var(--color-text)] font-medium block">
                        {article.author}
                      </span>
                      <span className="text-[10px] text-[var(--color-text-muted)] block">
                        {article.authorRole}
                      </span>
                    </div>

                    <Link
                      href={`/journal/${article.slug}`}
                      className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-1 hover:underline"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Action CTA */}
        <div className="text-center py-10 sm:py-12 border-t border-[var(--color-border)]">
          <h3 className="font-heading text-xl sm:text-2xl font-medium text-[var(--color-text)] mb-4">
            Experience the Aura Difference
          </h3>
          <Button href="/book" variant="gold" size="lg" icon={<Calendar className="w-4 h-4" />} className="w-full sm:w-auto">
            Request Your First Session
          </Button>
        </div>
      </Container>
    </div>
  );
}
