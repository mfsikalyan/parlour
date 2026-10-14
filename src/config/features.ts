/**
 * Feature Toggles Configuration
 * =====================================================================
 * Control which pages, navigation links, and homepage sections are enabled.
 * Toggling a feature to false automatically hides it from the navbar, footer,
 * homepage, and prevents route 404/broken links.
 * =====================================================================
 */

export interface FeatureFlags {
  // Modules & Pages
  team: boolean;              // /team & Stylist profiles
  offers: boolean;            // /offers & Seasonal promotions
  bridal: boolean;            // /bridal & Dedicated bridal suite
  gallery: boolean;           // /gallery & Portfolio with lightbox
  journal: boolean;           // /journal & Hair/skin blog articles
  faq: boolean;                // /faq & FAQ directory
  memberships: boolean;       // Membership packages
  giftCards: boolean;         // Gift vouchers
  careers: boolean;           // Join our team
  
  // Layout elements
  announcementBar: boolean;   // Top promotional bar
  testimonials: boolean;      // Client review quotes
  trustHighlights: boolean;   // Years in business, hygiene stats
  multiBranch: boolean;       // Multiple branch selector in contact
  whatsappFloatingButton: boolean; // Direct WhatsApp contact widget
  
  // Booking Modes:
  // 'manual-request' | 'whatsapp' | 'external-link'
  bookingMode: "manual-request" | "whatsapp" | "external-link";
  externalBookingUrl?: string;
}

export const featureFlags: FeatureFlags = {
  team: true,
  offers: true,
  bridal: true,
  gallery: true,
  journal: true,
  faq: true,
  memberships: false, // Cleanly disabled until client offers memberships
  giftCards: false,   // Cleanly disabled until client offers gift cards
  careers: false,     // Disabled by default
  
  announcementBar: true,
  testimonials: true,
  trustHighlights: true,
  multiBranch: true,
  whatsappFloatingButton: true,

  // Default honest booking mode:
  // "manual-request": Full 3-step form submission + option to send via WhatsApp
  bookingMode: "manual-request",
  externalBookingUrl: "",
};
