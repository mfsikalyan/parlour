import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustHighlights } from "@/components/sections/TrustHighlights";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { TechnologyPreview } from "@/components/sections/TechnologyPreview";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { OffersSection } from "@/components/sections/OffersSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { BookingCTA } from "@/components/sections/BookingCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustHighlights />
      <FeaturedServices />
      <AboutPreview />
      <TechnologyPreview />
      <TeamPreview />
      <GalleryPreview />
      <OffersSection />
      <Testimonials />
      <FAQSection />
      <LocationSection />
      <BookingCTA />
    </>
  );
}
