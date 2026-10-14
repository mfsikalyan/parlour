export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  experienceYears: number;
  image: string;
  imageAlt: string;
  servicesOffered: string[];
  socialInstagram?: string;
  displayOrder: number;
  active: boolean;
  featured: boolean;
}

export const teamData: TeamMember[] = [
  {
    slug: "ananya-deshmukh",
    name: "Ananya Deshmukh",
    role: "Creative Hair Director & Master Colorist",
    bio: "Trained at the Vidal Sassoon Academy in London, Ananya brings over 12 years of editorial hair design to Aura Luxe. Her mastery of seamless French balayage, dimensional brunette melts, and bespoke structural cutting has earned her a dedicated following among Bangalore's creative and tech founders.",
    specialties: ["French Balayage", "Precision Architectural Cuts", "K18 Molecular Repair", "Grey Camouflage"],
    experienceYears: 12,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Ananya Deshmukh, Creative Hair Director smiling warmly",
    servicesOffered: ["Bespoke Precision Haircut & Blow-Dry", "Artisan Balayage & French Gloss Toning", "Formaldehyde-Free Botanical Keratin Therapy"],
    socialInstagram: "@ananya_hairart",
    displayOrder: 1,
    active: true,
    featured: true,
  },
  {
    slug: "priya-ramachandran",
    name: "Priya Ramachandran",
    role: "Head of Bridal Artistry & Couture Makeup",
    bio: "With an eye for delicate luminosity, Priya specializes in skin-first bridal makeup that photographs beautifully without heavy masking. Having styled over 300 Indian, fusion, and destination brides across the country, she ensures every bride feels calm, confident, and utterly radiant.",
    specialties: ["HD Airbrush Makeup", "Saree & Lehenga Pleating", "Traditional South Indian & North Indian Bridal Looks", "Occasion Glamour"],
    experienceYears: 10,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Priya Ramachandran, Bridal Artistry Director",
    servicesOffered: ["The Royal Bride: HD Airbrush Makeup & Couture Draping", "24K Gold Cellular Rejuvenation Ritual"],
    socialInstagram: "@priyabridalart",
    displayOrder: 2,
    active: true,
    featured: true,
  },
  {
    slug: "vikram-singh-rathore",
    name: "Vikram Singh Rathore",
    role: "Master Barber & Men's Grooming Lead",
    bio: "A craftsman steeped in traditional Turkish and classic European barbering, Vikram combines razor-sharp scissor work with old-school straight-razor shaving rituals. He believes every man's haircut should honor face anatomy and grow out with effortless shape.",
    specialties: ["Low & High Skin Fades", "Traditional Hot Towel Shave", "Beard Architecture", "Scalp Detoxing"],
    experienceYears: 8,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Vikram Singh Rathore, Master Barber in stylish apron",
    servicesOffered: ["Executive Fade & Traditional Hot Towel Beard Sculpt", "Gentleman's Charcoal Detox Facial & Scalp Ritual"],
    socialInstagram: "@vikram_thebarber",
    displayOrder: 3,
    active: true,
    featured: true,
  },
  {
    slug: "dr-kavita-menon",
    name: "Dr. Kavita Menon",
    role: "Lead Aesthetician & Trichology Specialist",
    bio: "Certified clinical aesthetician focusing on transdermal nutrient infusions, non-invasive collagen induction, and holistic Japanese head spa therapy. Kavita prescribes customized skincare regimens that address tropical climate humidity and urban pollution stressors.",
    specialties: ["Hydra-Radiance Technology", "Japanese Waterfall Scalp Therapy", "Cellular LED Regeneration", "Barrier Restoration"],
    experienceYears: 9,
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Dr. Kavita Menon, Lead Aesthetician",
    servicesOffered: ["Hydra-Radiance Medical-Grade Infusion Facial", "Japanese Waterfall Head Spa & Scalp Detox", "24K Gold Cellular Rejuvenation Ritual"],
    socialInstagram: "@kavita_aesthetics",
    displayOrder: 4,
    active: true,
    featured: true,
  },
  {
    slug: "tanya-khanna",
    name: "Tanya Khanna",
    role: "Senior Nail Artist & Lash Designer",
    bio: "Specializing in the dry Russian manicure and Russian volume lash extensions, Tanya is obsessed with micro-precision. Her hand-painted nail artwork has been featured in top beauty editorials, and she uses only vegan, acetone-free Japanese and Korean gels.",
    specialties: ["Russian Dry Manicure", "BIAB Natural Nail Overlay", "Hand-Painted Minimalist Art", "Weightless Silk Lashes"],
    experienceYears: 6,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Tanya Khanna, Senior Nail Artist",
    servicesOffered: ["Signature Russian Manicure & Custom Gel Nail Art", "Bespoke Silk Lash Extensions (Hybrid / Volume)"],
    socialInstagram: "@tanya_nailstudio",
    displayOrder: 5,
    active: true,
    featured: false,
  }
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamData.find((m) => m.slug === slug);
}

export function getFeaturedTeam(): TeamMember[] {
  return teamData.filter((m) => m.active && m.featured).sort((a, b) => a.displayOrder - b.displayOrder);
}
