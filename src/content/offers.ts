export interface OfferItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  originalPrice?: number;
  offerPrice: number;
  savingsLabel?: string;
  includedServices: string[];
  termsAndConditions: string[];
  validUntil: string;
  active: boolean;
  featured: boolean;
  bookingServiceSlug?: string;
  image: string;
  imageAlt: string;
}

export const offersData: OfferItem[] = [
  {
    id: "offer-first-time-ritual",
    badge: "First-Visit Privilege",
    title: "The Signature Welcome Experience",
    subtitle: "Experience Aura Luxe's holistic approach to hair and scalp vitality",
    description: "New to our salon? Indulge in our bespoke precision haircut paired with a complimentary Kérastase Fusio-Dose customized treatment and a diagnostic trichology camera scan.",
    originalPrice: 3000,
    offerPrice: 1800,
    savingsLabel: "Save ₹1,200 (40% Off)",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Stylist performing customized hair haircut and luxury blow-dry in boutique salon",
    includedServices: [
      "Precision haircut & blow-dry with Master Stylist",
      "Trichology micro-camera scalp diagnostic",
      "Kérastase Fusio-Dose customized hair booster",
      "Signature 10-minute acupressure head massage"
    ],
    termsAndConditions: [
      "Valid for first-time clients only at Indiranagar or Koramangala branches",
      "Cannot be combined with other promotional vouchers",
      "Prior appointment booking required"
    ],
    validUntil: "Valid through December 31, 2026",
    active: true,
    featured: true,
    bookingServiceSlug: "bespoke-haircut-and-style"
  },
  {
    id: "offer-groom-bespoke",
    badge: "Men's Luxury Grooming",
    title: "The Executive Gentleman's Ritual",
    subtitle: "Complete top-to-toe revival for the modern professional",
    description: "A restorative 90-minute private chair experience featuring our signature skin fade, traditional hot towel eucalyptus shave, tea tree charcoal clarifying wash, and tension-relief shoulder massage.",
    originalPrice: 2800,
    offerPrice: 2100,
    savingsLabel: "Save ₹700",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Gentleman receiving hot towel treatment and precision beard sculpting in barber lounge",
    includedServices: [
      "Tailored haircut & styling with matte pomade",
      "Hot towel straight razor beard alignment & shave",
      "Deep pore charcoal exfoliating face cleanse",
      "15-minute neck, shoulder & scalp acupressure"
    ],
    termsAndConditions: [
      "Available Monday through Thursday all day",
      "Advance booking recommended"
    ],
    validUntil: "Ongoing seasonal package",
    active: true,
    featured: true,
    bookingServiceSlug: "executive-barber-haircut-and-beard-sculpt"
  },
  {
    id: "offer-bridal-preview",
    badge: "Bridal Studio",
    title: "The Bridal Consultation & Look Trial Suite",
    subtitle: "Complete look preview before your wedding celebrations",
    description: "Sit down with Head of Bridal Artistry Priya Ramachandran. Test two hairstyle variations and a full half-face HD airbrush finish matched to your bridal jewelry and lehenga swatches.",
    originalPrice: 7500,
    offerPrice: 5500,
    savingsLabel: "100% Adjusted against final Bridal Booking",
    image: "/images/bridal/royal-muhurtham-bride.jpg",
    imageAlt: "Breathtaking royal bride adorned in traditional temple gold jewelry and HD makeup",
    includedServices: [
      "60-minute skin tone & outfit color consultation",
      "Half-face HD Airbrush makeup trial",
      "Two bridal hairstyle mockups (Updo & Traditional Braid)",
      "Digital photography under studio and warm wedding lighting"
    ],
    termsAndConditions: [
      "Trial fee is 100% credited toward your wedding day bridal booking if confirmed within 7 days",
      "Conducted exclusively at our Indiranagar Bridal Suite"
    ],
    validUntil: "Bookings open for current wedding season",
    active: true,
    featured: true,
    bookingServiceSlug: "royal-bridal-hd-airbrush-makeover"
  },
  {
    id: "offer-glow-and-relax",
    badge: "Skin & Spa Special",
    title: "Cellular Hydra-Radiance & Head Spa Duo",
    subtitle: "Deep pore clearance paired with Tokyo halo water therapy",
    description: "Experience the ultimate reset: our medical-grade Hydra-Radiance facial combined with a 45-minute Japanese waterfall head spa to dissolve mental fatigue and revitalize dull skin.",
    originalPrice: 7000,
    offerPrice: 5400,
    savingsLabel: "Save ₹1,600",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Relaxing hydrotherapy head spa with warm water rainfall halo and botanical treatment",
    includedServices: [
      "Full Hydra-Radiance vortex infusion facial with LED therapy",
      "Circulation-boosting waterfall halo head spa",
      "Organic botanical scalp scrub and deep conditioning masque"
    ],
    termsAndConditions: [
      "Subject to therapist availability",
      "Requires approx. 2 hours 15 mins total duration"
    ],
    validUntil: "Valid through December 31, 2026",
    active: true,
    featured: false,
    bookingServiceSlug: "hydra-radiance-cellular-facial"
  }
];
