import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Award, Calendar, ArrowRight } from "lucide-react";
import { brandConfig } from "@/config/brand";
import { featureFlags } from "@/config/features";
import { teamData } from "@/content/team";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Meet Our Master Stylists & Directors",
  description: `Get to know the international academy-trained hair directors, bridal makeup artists, and master barbers at ${brandConfig.name}.`,
};

export default function TeamPage() {
  if (!featureFlags.team) {
    notFound();
  }

  const activeTeam = teamData.filter((m) => m.active);

  return (
    <div className="bg-[var(--color-background)] min-h-screen py-8 sm:py-12 lg:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Stylists & Team" }]} />

        <div className="my-6 sm:my-8 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] inline-block mb-3">
            The Artisans
          </span>
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-text)] tracking-tight">
            Meet Our Creative Team
          </h1>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            Our salon is home to passionate craftsmen certified by Vidal Sassoon, Toni & Guy, and international bridal academies. We believe exceptional salon experiences start with active listening.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
          {activeTeam.map((member) => (
            <article
              key={member.slug}
              className="flex flex-col bg-[var(--color-surface,#14161b)] rounded-[var(--border-radius,8px)] border border-[var(--color-border)] overflow-hidden shadow-lg hover:border-[var(--color-border-strong)] transition-all group"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--color-surface-subtle)]">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface,#14161b)] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-semibold text-[var(--color-primary)] border border-white/10">
                  <Award className="w-3.5 h-3.5" />
                  <span>{member.experienceYears} Years Experience</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                    <Link href={`/team/${member.slug}`}>
                      {member.name}
                    </Link>
                  </h3>
                  <span className="text-xs text-[var(--color-primary)] font-semibold block mt-0.5">
                    {member.role}
                  </span>
                  <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[var(--color-text-muted)] line-clamp-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-[var(--color-border)]">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] block mb-1.5 font-semibold">
                      Signature Specialties
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-[var(--color-surface-subtle)] text-[var(--color-text)] border border-[var(--color-border)]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <Link
                      href={`/team/${member.slug}`}
                      className="text-xs font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors flex items-center gap-1"
                    >
                      <span>Full Bio</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>

                    <Button
                      href={`/book?stylist=${member.slug}`}
                      variant="primary"
                      size="sm"
                      icon={<Calendar className="w-3.5 h-3.5" />}
                      className="w-full sm:w-auto"
                    >
                      Book With {member.name.split(" ")[0]}
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
