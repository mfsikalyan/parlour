import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Award, Calendar, Check, ArrowLeft } from "lucide-react";
import { brandConfig } from "@/config/brand";
import { featureFlags } from "@/config/features";
import { teamData, getTeamMemberBySlug } from "@/content/team";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

interface TeamPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return teamData.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: TeamPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) return { title: "Stylist Not Found" };

  return {
    title: `${member.name} — ${member.role}`,
    description: member.bio,
    openGraph: {
      title: `${member.name} | ${brandConfig.name}`,
      description: member.bio,
      images: [{ url: member.image, alt: member.imageAlt }],
    },
  };
}

export default async function TeamMemberPage({ params }: TeamPageProps) {
  if (!featureFlags.team) {
    notFound();
  }

  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  return (
    <div className="bg-[var(--color-background)] min-h-screen py-8 sm:py-12">
      <Container>
        <Breadcrumbs
          items={[
            { label: "Stylists", href: "/team" },
            { label: member.name },
          ]}
        />

        <div className="mt-6 mb-8">
          <Link
            href="/team"
            className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Stylists</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Portrait & Booking CTA (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[3/4] w-full rounded-[var(--border-radius,8px)] overflow-hidden bg-[var(--color-surface-subtle)] border border-[var(--color-border)] shadow-xl">
              <Image
                src={member.image}
                alt={member.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className="p-5 sm:p-6 rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] space-y-4">
              <div>
                <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider block">
                  Reserve a Session With
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-[var(--color-text)]">
                  {member.name}
                </h3>
              </div>

              <Button
                href={`/book?stylist=${member.slug}`}
                variant="gold"
                size="lg"
                className="w-full"
                icon={<Calendar className="w-4 h-4" />}
              >
                Request Appointment
              </Button>

              {member.socialInstagram && (
                <div className="text-center pt-2">
                  <span className="text-xs text-[var(--color-text-muted)]">
                    Instagram: <strong className="text-[var(--color-primary)]">{member.socialInstagram}</strong>
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Biography & Specialties (Col 7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-2.5 sm:space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-badge-bg)] text-[var(--color-primary)] text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>{member.experienceYears} Years Professional Mastery</span>
              </div>
              <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-text)] tracking-tight">
                {member.name}
              </h1>
              <p className="text-sm sm:text-base text-[var(--color-primary)] font-medium">
                {member.role}
              </p>
            </div>

            <div className="p-5 sm:p-8 rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] space-y-3 sm:space-y-4">
              <h2 className="font-heading text-lg sm:text-xl font-medium text-[var(--color-text)]">
                About & Styling Philosophy
              </h2>
              <p className="text-xs sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                {member.bio}
              </p>
            </div>

            {/* Core Specialties */}
            <div className="p-5 sm:p-8 rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] space-y-4">
              <h3 className="font-heading text-base sm:text-lg font-medium text-[var(--color-text)]">
                Key Specialties & Techniques
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {member.specialties.map((spec, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-[var(--color-surface-subtle)] text-xs text-[var(--color-text)] border border-[var(--color-border)] font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Services Offered by Stylist */}
            <div className="p-5 sm:p-8 rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] space-y-4">
              <h3 className="font-heading text-base sm:text-lg font-medium text-[var(--color-text)]">
                Featured Treatments Handled by {member.name.split(" ")[0]}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--color-text)] pt-1">
                {member.servicesOffered.map((svc, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                    <span>{svc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
