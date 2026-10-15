import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, Sparkles } from "lucide-react";
import { ServiceItem } from "@/content/services";
import { formatCurrency } from "@/lib/currency";
import { Button } from "@/components/ui/Button";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const priceDisplay = formatCurrency(service.price, {
    prefixFrom: service.priceFrom,
  });

  return (
    <article
      className="group flex flex-col bg-[var(--color-surface,#14161b)] rounded-[var(--border-radius,8px)] border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-border-strong)] transition-all duration-300 hover:shadow-xl"
      aria-labelledby={`service-title-${service.slug}`}
    >
      {/* Service Image with Category Pill */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-surface-subtle)]">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface,#14161b)] via-transparent to-black/20 opacity-80" />

        {/* Category & Gender Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-[var(--color-surface,#14161b)]/90 text-[var(--color-text)] backdrop-blur-md border border-[var(--color-border)] shadow">
            {service.categoryLabel}
          </span>
          {service.featured && (
            <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Signature</span>
            </span>
          )}
        </div>

        {/* Duration Chip */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[11px] font-medium text-white/90">
          <Clock className="w-3 h-3 text-[var(--color-primary)]" />
          <span>{service.durationMinutes} mins</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between space-y-3 sm:space-y-4">
        <div>
          <h3
            id={`service-title-${service.slug}`}
            className="font-heading text-base sm:text-xl font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-snug"
          >
            <Link href={`/services/${service.slug}`} className="focus:outline-none">
              {service.title}
            </Link>
          </h3>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Pricing & Booking Action */}
        <div className="pt-3 sm:pt-4 border-t border-[var(--color-border)] flex items-center justify-between gap-2 sm:gap-3">
          <div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] block">
              Investment
            </span>
            <span className="text-sm sm:text-lg font-bold text-[var(--color-primary)]">
              {priceDisplay}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              href={`/services/${service.slug}`}
              className="text-xs font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text)] py-1.5 px-2 transition-colors"
              aria-label={`View details for ${service.title}`}
            >
              Details
            </Link>
            <Button
              href={`/book?service=${service.slug}`}
              size="sm"
              variant="outline"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Book
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
