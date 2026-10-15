import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Check,
  Calendar,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  PlusCircle,
  ArrowLeft
} from "lucide-react";
import { brandConfig } from "@/config/brand";
import { servicesData, getServiceBySlug } from "@/content/services";
import { formatCurrency } from "@/lib/currency";
import { generateServiceSchema } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = generateServiceSchema(service);
  const priceDisplay = formatCurrency(service.price, {
    prefixFrom: service.priceFrom,
  });

  return (
    <div className="bg-[var(--color-background)] min-h-screen py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Container>
        {/* Breadcrumb Trail */}
        <Breadcrumbs
          items={[
            { label: "Services Menu", href: "/services" },
            { label: service.title },
          ]}
        />

        <div className="mt-6 mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Treatments</span>
          </Link>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Visual Image (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[16/11] w-full rounded-[var(--border-radius,8px)] overflow-hidden bg-[var(--color-surface-subtle)] border border-[var(--color-border)] shadow-xl">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="text-xs uppercase font-semibold px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/10">
                  {service.categoryLabel}
                </span>
                {service.featured && (
                  <span className="text-xs uppercase font-semibold px-2.5 py-1 rounded-full bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Signature</span>
                  </span>
                )}
              </div>
            </div>

            {/* Narrative Overview */}
            <div className="p-5 sm:p-8 rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] space-y-3 sm:space-y-4">
              <h2 className="font-heading text-lg sm:text-2xl font-medium text-[var(--color-text)]">
                The Treatment Experience
              </h2>
              <p className="text-xs sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Included Steps Checklist */}
            <div className="p-5 sm:p-8 rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] space-y-4">
              <h3 className="font-heading text-base sm:text-lg font-semibold text-[var(--color-text)] flex items-center gap-2">
                <Check className="w-5 h-5 text-[var(--color-primary)]" />
                <span>What Is Included in This Session</span>
              </h3>
              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-[var(--color-text)]">
                {service.includedSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-badge-bg)] text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add-ons Section (if any) */}
            {service.addOns && service.addOns.length > 0 && (
              <div className="p-5 sm:p-8 rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] space-y-4">
                <h3 className="font-heading text-base sm:text-lg font-semibold text-[var(--color-text)] flex items-center gap-2">
                  <PlusCircle className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Enhance Your Treatment (Optional Add-ons)</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {service.addOns.map((addon, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-md bg-[var(--color-surface-subtle)] border border-[var(--color-border)] flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-[var(--color-text)]">{addon.title}</h4>
                        <span className="text-[11px] sm:text-xs text-[var(--color-text-muted)] block mt-0.5">
                          +{addon.durationMinutes} minutes
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[var(--color-primary)] mt-3">
                        +{formatCurrency(addon.price)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Preparation & Aftercare Accordions/Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {service.prepNotes && (
                <div className="p-5 sm:p-6 rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] space-y-2">
                  <h4 className="font-heading text-sm sm:text-base font-semibold text-[var(--color-text)] flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    <span>Preparation Notes</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[var(--color-text-muted)] leading-relaxed pt-2">
                    {service.prepNotes.map((note, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[var(--color-primary)]">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.aftercareNotes && (
                <div className="p-5 sm:p-6 rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] space-y-2">
                  <h4 className="font-heading text-sm sm:text-base font-semibold text-[var(--color-text)] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Aftercare & Longevity</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[var(--color-text-muted)] leading-relaxed pt-2">
                    {service.aftercareNotes.map((note, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[var(--color-primary)]">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Sticky Booking Sidebar (Col 5) */}
          <aside className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="p-5 sm:p-8 rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] shadow-xl space-y-5 sm:space-y-6">
              <div>
                <span className="text-[10px] sm:text-xs uppercase font-semibold text-[var(--color-primary)] tracking-widest block mb-1">
                  Treatment Investment
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-2xl sm:text-4xl font-bold text-[var(--color-primary)]">
                    {priceDisplay}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  Includes consultation, wash, scalp care & styling
                </p>
              </div>

              {/* Service Meta Chips */}
              <div className="py-4 border-y border-[var(--color-border)] grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[var(--color-text-muted)] block">Duration</span>
                  <span className="font-semibold text-[var(--color-text)] flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    <span>{service.durationMinutes} minutes</span>
                  </span>
                </div>

                <div>
                  <span className="text-[var(--color-text-muted)] block">Suitable For</span>
                  <span className="font-semibold text-[var(--color-text)] capitalize mt-0.5 block">
                    {service.targetGender} Guests
                  </span>
                </div>
              </div>

              {/* Booking CTA Button */}
              <div className="space-y-3">
                <Button
                  href={`/book?service=${service.slug}`}
                  variant="gold"
                  size="lg"
                  className="w-full"
                  icon={<Calendar className="w-4 h-4" />}
                >
                  Book This Treatment
                </Button>

                <a
                  href={`https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
                    `Hello ${brandConfig.shortName}, I would like to inquire about booking the ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-md bg-[var(--color-surface-subtle)] text-[var(--color-text)] hover:text-[var(--color-primary)] border border-[var(--color-border)] text-xs font-semibold transition-colors"
                >
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>

              {/* Hygiene Guarantee */}
              <div className="p-3 sm:p-3.5 rounded bg-[var(--color-surface-subtle)] border border-[var(--color-border)] text-xs text-[var(--color-text-muted)] space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-[var(--color-text)]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>The Aura Promise</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Autoclave-sterilized metal tools, genuine salon products, and personalized consultations guaranteed on every visit.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
