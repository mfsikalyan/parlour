/**
 * Central Brand Configuration
 * =====================================================================
 * This file is the single source of truth for all brand identity,
 * contact details, business hours, locations, and SEO defaults.
 * 
 * Rebranding Tip:
 * Update this file to completely rebrand the website for any salon,
 * parlour, barbershop, or bridal studio without touching UI components.
 * =====================================================================
 */

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface SalonBranch {
  id: string;
  name: string;
  address: string;
  locality: string;
  city: string;
  pincode: string;
  phone: string;
  email: string;
  whatsapp: string;
  mapEmbedUrl: string;
  directionsUrl: string;
  isPrimary?: boolean;
}

export interface BrandConfig {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  positioning: string;
  businessTypes: string[];
  foundedYear: number;
  
  // Contact details
  phone: string;
  displayPhone: string;
  email: string;
  whatsappNumber: string; // e.g. "919876543210" without symbols for wa.me links
  displayWhatsapp: string;
  
  // Location & Branches
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  directionsUrl: string;
  mapEmbedUrl: string;
  branches: SalonBranch[];

  // Operating Hours
  hours: BusinessHours[];
  holidayNotice?: string;

  // Currency & Localization
  currency: {
    code: string;
    symbol: string;
    locale: string;
  };

  // Social Links
  socials: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    pinterest?: string;
  };

  // Call to Actions
  cta: {
    primaryText: string;
    primaryHref: string;
    secondaryText: string;
    secondaryHref: string;
    callNowText: string;
    whatsappText: string;
  };

  // SEO & OpenGraph Defaults
  seo: {
    siteUrl: string;
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    keywords: string[];
    ogImage: string;
    twitterHandle?: string;
  };

  // Copyright and Legal
  legal: {
    copyrightHolder: string;
    gstNumber?: string;
    registrationNumber?: string;
  };
}

export const brandConfig: BrandConfig = {
  name: "Aura Luxe Salon & Bridal Studio",
  legalName: "Aura Luxe Wellness & Beauty Pvt. Ltd.",
  shortName: "Aura Luxe",
  tagline: "Artistry in Hair, Skin & Bridal Aesthetics",
  positioning: "A premier unisex sanctuary offering haute coiffure, bespoke skincare therapies, and timeless bridal transformations.",
  businessTypes: [
    "Unisex Salon",
    "Luxury Hair Studio",
    "Women's Beauty Parlour",
    "Men's Grooming Lounge",
    "Bridal & Occasion Makeup Studio",
    "Nail & Lash Bar"
  ],
  foundedYear: 2018,

  phone: "+919876543210",
  displayPhone: "+91 98765 43210",
  email: "concierge@auraluxesalon.com",
  whatsappNumber: "919876543210",
  displayWhatsapp: "+91 98765 43210",

  address: {
    street: "Plot 42, 1st Floor, Galleria Boulevard",
    area: "Indiranagar 100ft Road",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560038",
    country: "India",
  },
  directionsUrl: "https://maps.google.com/?q=Indiranagar+100ft+Road+Bengaluru",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985556277747!2d77.6387063!3d12.9727581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a70c3260d5%3A0x6b77c8e967a5b3a!2s100%20Feet%20Rd%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  branches: [
    {
      id: "indiranagar-flagship",
      name: "Flagship Indiranagar",
      address: "Plot 42, Galleria Boulevard, 100ft Road",
      locality: "Indiranagar",
      city: "Bengaluru",
      pincode: "560038",
      phone: "+91 98765 43210",
      email: "indiranagar@auraluxesalon.com",
      whatsapp: "919876543210",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985556277747!2d77.6387063!3d12.9727581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a70c3260d5%3A0x6b77c8e967a5b3a!2s100%20Feet%20Rd%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      directionsUrl: "https://maps.google.com/?q=Indiranagar+100ft+Road+Bengaluru",
      isPrimary: true,
    },
    {
      id: "koramangala-studio",
      name: "Koramangala Boutique Studio",
      address: "88, 5th Block, 80ft Main Road",
      locality: "Koramangala",
      city: "Bengaluru",
      pincode: "560095",
      phone: "+91 98765 43211",
      email: "koramangala@auraluxesalon.com",
      whatsapp: "919876543211",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.601552345678!2d77.6200000!3d12.9340000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKoramangala!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin",
      directionsUrl: "https://maps.google.com/?q=Koramangala+5th+Block+Bengaluru",
      isPrimary: false,
    }
  ],

  hours: [
    { day: "Monday", open: "09:30 AM", close: "08:30 PM" },
    { day: "Tuesday", open: "09:30 AM", close: "08:30 PM" },
    { day: "Wednesday", open: "09:30 AM", close: "08:30 PM" },
    { day: "Thursday", open: "09:30 AM", close: "08:30 PM" },
    { day: "Friday", open: "09:00 AM", close: "09:00 PM" },
    { day: "Saturday", open: "09:00 AM", close: "09:30 PM" },
    { day: "Sunday", open: "09:00 AM", close: "09:30 PM" },
  ],
  holidayNotice: "Appointments recommended on weekends and public holidays.",

  currency: {
    code: "INR",
    symbol: "₹",
    locale: "en-IN",
  },

  socials: {
    instagram: "https://instagram.com/auraluxesalon",
    facebook: "https://facebook.com/auraluxesalon",
    youtube: "https://youtube.com/@auraluxesalon",
    pinterest: "https://pinterest.com/auraluxesalon",
  },

  cta: {
    primaryText: "Book Appointment",
    primaryHref: "/book",
    secondaryText: "View Services & Menu",
    secondaryHref: "/services",
    callNowText: "Call Concierge",
    whatsappText: "Chat on WhatsApp",
  },

  seo: {
    siteUrl: "https://auraluxe-salon.vercel.app",
    defaultTitle: "Aura Luxe Salon & Bridal Studio | Luxury Hair, Skin & Grooming",
    titleTemplate: "%s | Aura Luxe Salon & Bridal Studio",
    defaultDescription: "Experience premier hair styling, organic skincare rituals, men's executive grooming, and signature bridal makeup artistry in Bengaluru.",
    keywords: [
      "luxury salon Bengaluru",
      "unisex hair parlour",
      "bridal makeup studio",
      "keratin hair treatment",
      "balayage hair colour",
      "men's executive haircut",
      "hydra facial Indiranagar",
      "nail art lounge"
    ],
    ogImage: "/images/og-hero.jpg",
    twitterHandle: "@auraluxesalon",
  },

  legal: {
    copyrightHolder: "Aura Luxe Wellness & Beauty Pvt. Ltd.",
    gstNumber: "29AABCU9603R1ZM",
    registrationNumber: "CIN-U85100KA2018PTC118920",
  },
};
