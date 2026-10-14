import { featureFlags } from "./features";

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

/**
 * Returns header navigation items filtered by active feature flags.
 */
export function getHeaderNav(): NavItem[] {
  const items: NavItem[] = [
    { label: "Services", href: "/services" },
  ];

  if (featureFlags.bridal) {
    items.push({ label: "Bridal", href: "/bridal", badge: "Signature" });
  }

  if (featureFlags.team) {
    items.push({ label: "Stylists", href: "/team" });
  }

  if (featureFlags.gallery) {
    items.push({ label: "Gallery", href: "/gallery" });
  }

  if (featureFlags.offers) {
    items.push({ label: "Offers", href: "/offers" });
  }

  items.push({ label: "Technology", href: "/technology" });

  items.push({ label: "About", href: "/about" });

  items.push({ label: "Contact", href: "/contact" });

  return items;
}

/**
 * Announcement bar configuration
 */
export const announcementBarConfig = {
  text: "✨ Exclusive Seasonal Ritual: Complimentary Kérastase Scalp Diagnosis with any hair service. Book online today!",
  linkText: "Book Now",
  href: "/book",
};

/**
 * Footer grouped navigation
 */
export function getFooterNavGroups(): NavGroup[] {
  const serviceItems: NavItem[] = [
    { label: "Haute Hair Styling", href: "/services#hair" },
    { label: "Skin & Advanced Facials", href: "/services#skin" },
    { label: "Men's Executive Grooming", href: "/services#mens-grooming" },
    { label: "Nail Lounge & Pedicures", href: "/services#nails" },
  ];

  if (featureFlags.bridal) {
    serviceItems.push({ label: "Bridal Couture & Makeup", href: "/bridal" });
  }

  const exploreItems: NavItem[] = [
    { label: "Our Story & Sanctuary", href: "/about" },
    { label: "Salon Technologies & Equipment", href: "/technology" },
    { label: "Hygiene & Safety Standards", href: "/about#hygiene" },
  ];

  if (featureFlags.team) {
    exploreItems.push({ label: "Meet Our Masters", href: "/team" });
  }
  if (featureFlags.gallery) {
    exploreItems.push({ label: "Client Portfolio", href: "/gallery" });
  }
  if (featureFlags.offers) {
    exploreItems.push({ label: "Packages & Offers", href: "/offers" });
  }
  if (featureFlags.journal) {
    exploreItems.push({ label: "Beauty & Grooming Journal", href: "/journal" });
  }

  const helpItems: NavItem[] = [
    { label: "Book Appointment", href: "/book" },
    { label: "Contact & Salon Locations", href: "/contact" },
  ];

  if (featureFlags.faq) {
    helpItems.push({ label: "Frequently Asked Questions", href: "/faq" });
  }

  const legalItems: NavItem[] = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Cancellation Policy", href: "/terms" },
  ];

  return [
    { title: "Service Menu", items: serviceItems },
    { title: "The Salon", items: exploreItems },
    { title: "Client Care", items: helpItems },
    { title: "Legal & Policies", items: legalItems },
  ];
}
