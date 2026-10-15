import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { featureFlags } from "@/config/features";
import { getFeaturedTeam } from "@/content/team";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function TeamPreview() {
  if (!featureFlags.team) return null;

  const team = getFeaturedTeam().slice(0, 4);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[var(--color-background)]">
      <Container>
        <SectionHeading
          eyebrow="Master Craftsmen"
          title="Meet Our Directors & Specialists"
          subtitle="Every stylist at Aura Luxe is an internationally accredited artisan committed to listening, advising, and elevating your natural features."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {team.map((member) => (
            <article
              key={member.slug}
              className="group flex flex-col bg-[var(--color-surface,#14161b)] rounded-[var(--border-radius,8px)] border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-border-strong)] transition-all hover:shadow-xl"
            >
              {/* Member Portrait */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--color-surface-subtle)]">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface,#14161b)] via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-semibold text-[var(--color-primary)]">
                  <Award className="w-3 h-3" />
                  <span>{member.experienceYears} Years Exp.</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-heading text-lg font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                    <Link href={`/team/${member.slug}`}>
                      {member.name}
                    </Link>
                  </h3>
                  <span className="text-xs text-[var(--color-primary)] block font-medium mt-0.5">
                    {member.role}
                  </span>
                  <p className="mt-2 text-xs text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Specialties chips */}
                <div className="pt-2 border-t border-[var(--color-border)]">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] block mb-1.5 font-semibold">
                    Core Specialties
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.slice(0, 2).map((spec, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-[var(--color-surface-subtle)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Button href="/team" variant="outline" icon={<ArrowRight className="w-4 h-4" />} className="w-full sm:w-auto">
            Meet All Stylists & Bios
          </Button>
        </div>
      </Container>
    </section>
  );
}
