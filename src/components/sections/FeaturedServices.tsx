import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedServices } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/Button";

export function FeaturedServices() {
  const featured = getFeaturedServices().slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[var(--color-background)]">
      <Container>
        <SectionHeading
          eyebrow="Signature Portfolio"
          title="Curated Salon Rituals & Treatments"
          subtitle="Precision cuts, hand-painted balayage, medical-grade facials, and men's executive grooming delivered by dedicated specialists."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button
            href="/services"
            variant="outline"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Complete Service & Treatment Menu
          </Button>
        </div>
      </Container>
    </section>
  );
}
