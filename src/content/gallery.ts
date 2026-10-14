export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "hair" | "color" | "bridal" | "grooming" | "nails" | "skin";
  categoryLabel: string;
  image: string;
  imageAlt: string;
  aspectRatio: "portrait" | "landscape" | "square";
  serviceSlug?: string;
  featured: boolean;
  caption?: string;
}

export const galleryCategories = [
  { id: "all", label: "All Portfolio" },
  { id: "hair", label: "Hair & Styling" },
  { id: "color", label: "Balayage & Color" },
  { id: "bridal", label: "Bridal Artistry" },
  { id: "grooming", label: "Men's Grooming" },
  { id: "nails", label: "Nails & Lashes" },
  { id: "skin", label: "Skin & Spa" },
] as const;

export const galleryData: GalleryItem[] = [
  // BRIDAL ARTISTRY - GLOBAL & TRADITIONAL
  {
    id: "g-bridal-western-1",
    title: "Ethereal Cathedral Veil & Dewy Soft-Glam",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "International bride in exquisite French lace veil with soft pearlescent makeup and luminous skin",
    aspectRatio: "portrait",
    serviceSlug: "royal-bridal-hd-airbrush-makeover",
    featured: true,
    caption: "Designed for Western church ceremonies. Pearlescent skin finish, individual feathered lashes, and cathedral lace veil placement."
  },
  {
    id: "g-2",
    title: "South Indian Royal Temple Bridal Makeover",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    image: "/images/bridal/royal-muhurtham-bride.jpg",
    imageAlt: "South Indian bride adorned with fresh jasmine flowers, traditional temple jewellery, and red Kanjeevaram silk",
    aspectRatio: "portrait",
    serviceSlug: "royal-bridal-hd-airbrush-makeover",
    featured: true,
    caption: "Waterproof 18-hr HD airbrush glow paired with antique gold temple jewelry and fresh mogra poola jada."
  },
  {
    id: "g-bridal-western-2",
    title: "Modern Silk Gown Minimalist Bride",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Chic contemporary foreign bride in modern architectural white gown with sculpted bridal chignon",
    aspectRatio: "portrait",
    serviceSlug: "royal-bridal-hd-airbrush-makeover",
    featured: true,
    caption: "Clean, understated luxury: brushed-up brows, velvet blush tones, and a sleek modern bridal chignon."
  },
  {
    id: "g-bridal-sangeet",
    title: "Rose Gold Sangeet & Reception Glamour",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    image: "/images/bridal/sangeet-reception-glam.jpg",
    imageAlt: "Indian bride in designer rose gold lehenga with cascading Hollywood waves and soft smokey eye",
    aspectRatio: "portrait",
    serviceSlug: "royal-bridal-hd-airbrush-makeover",
    featured: true,
    caption: "Hollywood waves paired with champagne micro-glitter smokey eyes, diamond clips, and nude-rose lips."
  },
  {
    id: "g-bridal-western-3",
    title: "Sun-Kissed Destination Wedding Bride",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Destination wedding bride basking in golden hour light with romantic undone waves and natural bronze makeup",
    aspectRatio: "portrait",
    serviceSlug: "royal-bridal-hd-airbrush-makeover",
    featured: false,
    caption: "Humidity-proof bronze glow with undone beach waves for oceanfront destination weddings."
  },
  {
    id: "g-bridal-western-4",
    title: "Romantic French Lace Bridal Updo & Florals",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Romantic bridal updo with delicate white floral accents and sheer bridal lace",
    aspectRatio: "portrait",
    serviceSlug: "royal-bridal-hd-airbrush-makeover",
    featured: false,
    caption: "Textured bridal updo pinned with fresh baby's breath and secure veil combs for all-day ceremony comfort."
  },
  {
    id: "g-bridal-groom",
    title: "The Regal Groom's Atelier",
    category: "grooming",
    categoryLabel: "Men's Grooming",
    image: "/images/bridal/groom-royal-suite.jpg",
    imageAlt: "Royal groom in embroidered ivory sherwani with emerald beads, precision beard sculpt, and taper fade",
    aspectRatio: "portrait",
    serviceSlug: "executive-barber-haircut-and-beard-sculpt",
    featured: true,
    caption: "Camera-ready matte anti-shine skin prep, razor fade, and hot-towel beard sculpting for the groom."
  },
  {
    id: "g-bridal-henna",
    title: "Intricate Bridal Henna & Kundan Adornment",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Intricate bridal mehndi henna artwork on hands paired with heritage gold bangles",
    aspectRatio: "square",
    serviceSlug: "royal-bridal-hd-airbrush-makeover",
    featured: false,
    caption: "Macro detail of artisan hand-applied bridal mehndi complemented by heirloom gold jewellery."
  },

  // HAIR & COLOR
  {
    id: "g-1",
    title: "Dimensional Caramel Balayage",
    category: "color",
    categoryLabel: "Balayage & Color",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Caramel honey balayage waves on long dark brunette hair",
    aspectRatio: "portrait",
    serviceSlug: "artisan-balayage-and-toning",
    featured: true,
    caption: "Seamless hand-painted caramel melt with Olaplex bond reinforcement."
  },
  {
    id: "g-6",
    title: "Modern French Bob with Curtain Fringe",
    category: "hair",
    categoryLabel: "Hair & Styling",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Chic modern french textured bob with wispy curtain bangs",
    aspectRatio: "square",
    serviceSlug: "bespoke-haircut-and-style",
    featured: true,
    caption: "Razor-textured chin-length bob designed for effortless air-dry volume."
  },

  // MEN'S GROOMING
  {
    id: "g-3",
    title: "Low Taper Fade & Sculpted Beard",
    category: "grooming",
    categoryLabel: "Men's Grooming",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Gentleman with clean low taper fade haircut and precisely lined beard",
    aspectRatio: "square",
    serviceSlug: "executive-barber-haircut-and-beard-sculpt",
    featured: true,
    caption: "Textured scissor cut with low skin taper and eucalyptus hot-towel beard lining."
  },

  // NAILS & LASHES
  {
    id: "g-4",
    title: "Korean Glazed Donut Chrome Nails",
    category: "nails",
    categoryLabel: "Nails & Lashes",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Iridescent white pearl chrome glazed gel nails on short natural nail plate",
    aspectRatio: "square",
    serviceSlug: "signature-gel-sculpt-and-art-manicure",
    featured: true,
    caption: "Dry Russian manicure with pearl chrome finish over BIAB natural nail strengthening."
  },
  {
    id: "g-9",
    title: "Natural Hybrid Lash Mapping",
    category: "nails",
    categoryLabel: "Nails & Lashes",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Natural fluttery hybrid eyelash extensions on almond eyes",
    aspectRatio: "portrait",
    serviceSlug: "volumizing-silk-lash-extensions",
    featured: false,
    caption: "Custom 9mm-12mm featherweight silk fans mapped for an open-eye doe flutter."
  },

  // SKIN & SPA
  {
    id: "g-5",
    title: "Hydra Cellular Glow Post-Treatment",
    category: "skin",
    categoryLabel: "Skin & Spa",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fresh radiant glass skin post medical grade hydra facial session",
    aspectRatio: "portrait",
    serviceSlug: "hydra-radiance-cellular-facial",
    featured: true,
    caption: "Instant hydration and pore decongestion with peptide infusion and red LED photo-therapy."
  },
  {
    id: "g-8",
    title: "Japanese Head Spa Circular Water Halo",
    category: "skin",
    categoryLabel: "Skin & Spa",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Warm herbal water halo waterfall gently cascading over hair and scalp",
    aspectRatio: "landscape",
    serviceSlug: "japanese-head-spa-scalp-sanctuary",
    featured: false,
    caption: "Circulation-boosting hydrotherapy halo rainfall combined with clarifying herbal scalp scrub."
  }
];

export function getFeaturedGallery(): GalleryItem[] {
  return galleryData.filter((item) => item.featured);
}
