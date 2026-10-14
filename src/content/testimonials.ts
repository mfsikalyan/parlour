export interface TestimonialItem {
  id: string;
  clientName: string;
  locality: string;
  serviceAvailed: string;
  rating: number; // 5
  quote: string;
  date: string;
  source: string; // e.g. "Google Verified Review"
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Meera Nair",
    locality: "Indiranagar, Bengaluru",
    serviceAvailed: "Artisan Balayage & French Gloss Toning",
    rating: 5,
    quote: "Ananya is an absolute wizard with color. I was terrified of lightening my dark hair, but she explained every step, used Olaplex throughout, and created the most subtle, sun-kissed caramel tone that has grown out seamlessly for 4 months now without brassiness.",
    date: "February 2026",
    source: "Google Verified Review",
  },
  {
    id: "test-2",
    clientName: "Rohan Malhotra",
    locality: "Koramangala, Bengaluru",
    serviceAvailed: "Executive Fade & Hot Towel Shave",
    rating: 5,
    quote: "Finding a proper barber who understands head shape and beard density is tough. Vikram nailed the skin taper on the very first try, and the hot eucalyptus towel shave was the most relaxing 45 minutes of my week. Clean tools, zero waiting time.",
    date: "January 2026",
    source: "Google Verified Review",
  },
  {
    id: "test-3",
    clientName: "Shreya & Siddharth Sen",
    locality: "Whitefield, Bengaluru",
    serviceAvailed: "Royal Bridal Makeover & Groom's Suite",
    rating: 5,
    quote: "Priya and her bridal team managed both our morning Muhurtham and evening Sangeet looks. My makeup felt like second skin, survived tears and 8 hours under heavy lights without moving. The private bridal suite made getting ready stress-free.",
    date: "December 2025",
    source: "WeddingWire Verified Review",
  },
  {
    id: "test-4",
    clientName: "Divya Krishnan",
    locality: "Lavelle Road, Bengaluru",
    serviceAvailed: "Japanese Waterfall Head Spa",
    rating: 5,
    quote: "The scalp camera diagnostic before and after was eye-opening. The warm waterfall halo and organic scrub completely relieved my scalp tension and itchiness. Aura Luxe has set a new benchmark for salon hygiene and hospitality in Bangalore.",
    date: "March 2026",
    source: "Google Verified Review",
  }
];
