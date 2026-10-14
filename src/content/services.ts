export interface ServiceAddOn {
  title: string;
  price: number;
  durationMinutes: number;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  category: "hair" | "skin" | "mens-grooming" | "nails" | "bridal" | "wellness";
  categoryLabel: string;
  targetGender: "unisex" | "women" | "men";
  shortDescription: string;
  fullDescription: string;
  price: number;
  priceFrom: boolean;
  durationMinutes: number;
  image: string;
  imageAlt: string;
  featured: boolean;
  displayOrder: number;
  includedSteps: string[];
  addOns?: ServiceAddOn[];
  prepNotes?: string[];
  aftercareNotes?: string[];
  faqs?: ServiceFAQ[];
  seoTitle: string;
  seoDescription: string;
}

export const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "hair", label: "Hair Craft & Color" },
  { id: "skin", label: "Skin & Advanced Facials" },
  { id: "mens-grooming", label: "Men's Executive Grooming" },
  { id: "nails", label: "Nail Lounge & Lashes" },
  { id: "bridal", label: "Bridal Studio" },
  { id: "wellness", label: "Spa & Scalp Therapy" },
] as const;

export const servicesData: ServiceItem[] = [
  // HAIR SERVICES
  {
    slug: "bespoke-haircut-and-style",
    title: "Bespoke Precision Haircut & Blow-Dry",
    category: "hair",
    categoryLabel: "Hair Craft & Color",
    targetGender: "unisex",
    shortDescription: "Personalized scalp analysis, custom architectural haircut, stress-relieving massage, and luxury blowout.",
    fullDescription: "Our signature haircut experience begins with an in-depth consultation examining face shape, hair density, texture, and daily lifestyle. Includes a therapeutic clarifying shampoo, Kérastase deep condition, relaxing head massage, precision cut, and editorial blowout finished with bespoke heat styling.",
    price: 1800,
    priceFrom: true,
    durationMinutes: 60,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Professional hair stylist meticulously cutting client hair in modern salon",
    featured: true,
    displayOrder: 1,
    includedSteps: [
      "In-depth face shape & hair texture consultation",
      "Clarifying wash with organic botanical shampoo",
      "Kérastase conditioning & soothing 10-minute scalp massage",
      "Architectural precision shear and razor texturizing",
      "Volume blowout and signature thermal finishing"
    ],
    addOns: [
      { title: "Kérastase Fusio-Dose Booster", price: 1200, durationMinutes: 15 },
      { title: "Split-End Sealing Gloss Treatment", price: 1500, durationMinutes: 20 }
    ],
    prepNotes: [
      "No special preparation required. Clean hair is welcome but not strictly necessary."
    ],
    aftercareNotes: [
      "Avoid washing your hair for 24 hours to preserve thermal styling memory.",
      "Use sulfate-free color-safe shampoo and thermal heat protectant before blow-drying."
    ],
    seoTitle: "Bespoke Precision Haircut & Styling | Aura Luxe Salon",
    seoDescription: "Book a customized haircut and luxury blowout tailored to your face shape and personal style in Bengaluru."
  },
  {
    slug: "artisan-balayage-and-toning",
    title: "Artisan Balayage & French Gloss Toning",
    category: "hair",
    categoryLabel: "Hair Craft & Color",
    targetGender: "unisex",
    shortDescription: "Hand-painted dimensional highlights paired with bond-builder treatment and high-shine French gloss.",
    fullDescription: "A bespoke hand-painted lightening technique that delivers seamless, sun-kissed dimension with zero harsh demarcation lines as your hair grows. Formulated with Olaplex bond repair technology to protect hair integrity, and finished with a custom demi-permanent French gloss toner for mirror-like shine.",
    price: 6500,
    priceFrom: true,
    durationMinutes: 180,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Radiant golden and caramel balayage hair tones styled into soft beach waves",
    featured: true,
    displayOrder: 2,
    includedSteps: [
      "Color theory consultation and strand porosity testing",
      "Custom freehand clay-based balayage application",
      "Olaplex No. 1 and No. 2 bond rebuild infusion",
      "Custom gloss glaze for neutralized undertones and luminous shine",
      "Post-color nourishment masque and signature blowout"
    ],
    addOns: [
      { title: "Root Shadow Melt", price: 1800, durationMinutes: 25 },
      { title: "K18 Molecular Hair Repair Infusion", price: 2000, durationMinutes: 15 }
    ],
    prepNotes: [
      "Arrive with dry hair washed 24-48 hours prior.",
      "Bring inspiration photographs showing desired tones under natural daylight."
    ],
    aftercareNotes: [
      "Wait at least 48 hours before shampooing.",
      "Use our recommended purple/blue toning shampoo once weekly to keep brassiness away.",
      "Always apply UV protection spray when exposing hair to bright sunlight."
    ],
    seoTitle: "Artisan Balayage & Toning | Premium Salon Hair Coloring",
    seoDescription: "Dimensional balayage hand-painted by master colorists with bond protection and high-shine glossing."
  },
  {
    slug: "botanical-keratin-infusion",
    title: "Formaldehyde-Free Botanical Keratin Therapy",
    category: "hair",
    categoryLabel: "Hair Craft & Color",
    targetGender: "unisex",
    shortDescription: "Long-lasting frizz reduction, humidity resistance, and mirror-smooth silkiness without damaging bonds.",
    fullDescription: "A gentle yet powerful smoothing treatment that seals natural amino acids and hydrolyzed silk protein into the hair cuticle. Eliminates 90% of frizz, halves blow-dry time, and imparts rich glass-hair sheen that lasts 3 to 5 months.",
    price: 5500,
    priceFrom: true,
    durationMinutes: 150,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Silky smooth shiny straight brunette hair reflecting luminous light",
    featured: false,
    displayOrder: 3,
    includedSteps: [
      "Deep clarifying pre-wash to open cuticle layers",
      "Micro-infusion of amino keratin complex",
      "Controlled thermal activation and precision seal",
      "Cooling rinse and botanical antioxidant masque"
    ],
    prepNotes: ["Please allow 2.5 to 3 hours for complete treatment."],
    aftercareNotes: ["Use strictly sulfate-free and sodium chloride-free cleansers."],
    seoTitle: "Formaldehyde-Free Keratin Smoothing Treatment | Aura Luxe",
    seoDescription: "Tame frizzy hair with our gentle, long-lasting botanical keratin therapy for silky, manageable hair."
  },

  // SKIN & ADVANCED FACIALS
  {
    slug: "hydra-radiance-cellular-facial",
    title: "Hydra-Radiance Medical-Grade Infusion Facial",
    category: "skin",
    categoryLabel: "Skin & Advanced Facials",
    targetGender: "unisex",
    shortDescription: "Non-invasive vortex suction, gentle salicylic peel, ultrasonic pore clearance, and multi-peptide hydration.",
    fullDescription: "Our premier clinical-aesthetic facial combines vortex extraction to purify clogged pores, followed by intensive transdermal infusion of hyaluronic acid, vitamin C antioxidants, and stem-cell peptides. Includes LED light therapy to stimulate collagen regeneration and reduce inflammation.",
    price: 3800,
    priceFrom: false,
    durationMinutes: 75,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Client receiving rejuvenating hydrating facial therapy in aesthetic salon spa",
    featured: true,
    displayOrder: 4,
    includedSteps: [
      "Double oil and enzyme foam cleanse",
      "Hydra-dermabrasion vortex exfoliation",
      "Painless ultrasonic blackhead extraction",
      "Electroporation serum cocktail infusion (Peptides + Hyaluronic Acid)",
      "Targeted Red/Blue LED photo-biomodulation mask",
      "Cooling cryo-globe lymphatic drainage massage"
    ],
    addOns: [
      { title: "Collagen Eye Contour Plumping Therapy", price: 950, durationMinutes: 15 },
      { title: "Décolleté & Neck Firming Treatment", price: 1200, durationMinutes: 20 }
    ],
    prepNotes: [
      "Discontinue retinoids and AHAs 3 days prior to your session.",
      "Avoid active sun exposure for 48 hours prior."
    ],
    aftercareNotes: [
      "Apply broad-spectrum SPF 50 daily.",
      "Avoid heavy workouts and steam saunas for 24 hours."
    ],
    seoTitle: "Hydra-Radiance Infusion Facial | Clear Glass Skin Treatment",
    seoDescription: "Revitalize dull skin with our clinical vortex hydration facial and LED collagen therapy."
  },
  {
    slug: "korean-glass-skin-gold-ritual",
    title: "24K Gold Cellular Rejuvenation Ritual",
    category: "skin",
    categoryLabel: "Skin & Advanced Facials",
    targetGender: "women",
    shortDescription: "Luxury anti-aging facial infused with colloidal gold flakes, marine collagen, and soothing jade roller massage.",
    fullDescription: "A decadent sensory indulgence that targets fine lines and fatigue. Pure 24-karat gold leaf stimulates microcirculation and cellular turnover while marine algae extracts lock in deep moisture, leaving skin with an ethereal luminous glow.",
    price: 4900,
    priceFrom: false,
    durationMinutes: 90,
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Golden facial mask treatment applied to relaxed woman in luxury parlour",
    featured: false,
    displayOrder: 5,
    includedSteps: [
      "Rosewater botanical prep and milk cleansing",
      "Mild AHA resurfacing polish",
      "Colloidal gold serum application with ultrasonic penetration",
      "Pure gold leaf sheet mask application",
      "Shiatsu pressure-point neck and shoulder relaxation"
    ],
    seoTitle: "24K Gold Cellular Facial Ritual | Aura Luxe Beauty Parlour",
    seoDescription: "Experience opulent 24K gold facial ritual designed to plump, firm, and illuminate fatigued skin."
  },

  // MEN'S EXECUTIVE GROOMING
  {
    slug: "executive-barber-haircut-and-beard-sculpt",
    title: "Executive Fade & Traditional Hot Towel Beard Sculpt",
    category: "mens-grooming",
    categoryLabel: "Men's Executive Grooming",
    targetGender: "men",
    shortDescription: "Scissor & clipper precision haircut, sandalwood hot towel lather, straight-razor cheek alignment, and beard conditioning.",
    fullDescription: "The gold standard for the modern gentleman. We execute a tailored haircut with seamless taper or skin fade, followed by an authentic old-world hot towel shave experience: herbal pre-shave oil, steam towels, warm lather, precision cut-throat razor edging, and a cooling aloe aftershave balm.",
    price: 1400,
    priceFrom: false,
    durationMinutes: 60,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Master barber shaping gentleman beard with straight razor and hot towel steam",
    featured: true,
    displayOrder: 6,
    includedSteps: [
      "Consultation on beard architecture and hair growth patterns",
      "Tailored scissor-over-comb or clipper fade haircut",
      "Invigorating tea tree scalp wash",
      "Eucalyptus & sandalwood hot towel compress",
      "Straight razor cheek line and neckline definition",
      "Beard butter massage and cold towel pore-close"
    ],
    addOns: [
      { title: "Grey Blending Beard Camouflage", price: 800, durationMinutes: 20 },
      { title: "Deep Purifying Charcoal Nose Strip & Scrub", price: 450, durationMinutes: 10 }
    ],
    seoTitle: "Executive Haircut & Hot Towel Beard Grooming | Men's Lounge",
    seoDescription: "Tailored men's fade, traditional hot towel straight-razor shave, and beard sculpting in Bengaluru."
  },
  {
    slug: "gentlemans-revitalizing-scalp-and-facial",
    title: "Gentleman's Charcoal Detox Facial & Scalp Ritual",
    category: "mens-grooming",
    categoryLabel: "Men's Executive Grooming",
    targetGender: "men",
    shortDescription: "Targeted grooming for men's thicker skin: deep sebum extraction, ingrown hair treatment, and invigorating peppermint scalp massage.",
    fullDescription: "Specially formulated to counteract pollution, razor burn, and clogged pores. Activated charcoal draws out impurities while anti-inflammatory green tea and witch hazel soothe shaving irritation. Concludes with a tension-releasing neck and shoulder massage.",
    price: 2200,
    priceFrom: false,
    durationMinutes: 60,
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Barber styling men hair with matte pomade in vintage modern grooming salon",
    featured: false,
    displayOrder: 7,
    includedSteps: [
      "Deep foaming tea-tree pore wash",
      "Micro-fine volcanic scrub",
      "Ultrasonic suction for blackheads",
      "Calming witch hazel steam infusion",
      "15-minute tension-relief shoulder and scalp massage"
    ],
    seoTitle: "Gentleman's Detox Facial & Scalp Ritual | Men's Salon",
    seoDescription: "Deep pore charcoal cleanse and invigorating scalp massage designed specifically for men."
  },

  // NAIL LOUNGE & LASHES
  {
    slug: "signature-gel-sculpt-and-art-manicure",
    title: "Signature Russian Manicure & Custom Gel Nail Art",
    category: "nails",
    categoryLabel: "Nail Lounge & Lashes",
    targetGender: "unisex",
    shortDescription: "Dry e-file precision cuticle work, apex-reinforcing BIAB gel overlay, and hand-painted bespoke nail art.",
    fullDescription: "Our dry Russian manicure method provides immaculately groomed cuticles that remain clean for up to 4 weeks. We apply Builder-in-a-Bottle (BIAB) gel to reinforce natural nail strength, followed by non-toxic vegan gel polishes and hand-crafted minimalist or chrome nail artistry.",
    price: 2600,
    priceFrom: true,
    durationMinutes: 90,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Close up of elegant manicured pastel gel nails with minimalist fine gold line art",
    featured: false,
    displayOrder: 8,
    includedSteps: [
      "Gentle previous gel removal (if applicable)",
      "Precision e-file dry cuticle detailing",
      "Nail plate dehydrate and PH balancing",
      "Apex builder gel overlay application",
      "Two coats of custom designer color and artisan nail art",
      "Jojoba & vitamin E cuticle oil massage"
    ],
    seoTitle: "Russian Gel Manicure & Custom Nail Art | Aura Luxe Studio",
    seoDescription: "Flawless Russian cuticle manicure and strengthening builder gel overlays with artisan nail designs."
  },
  {
    slug: "volumizing-silk-lash-extensions",
    title: "Bespoke Silk Lash Extensions (Hybrid / Volume)",
    category: "nails",
    categoryLabel: "Nail Lounge & Lashes",
    targetGender: "women",
    shortDescription: "Weightless Korean silk lash fans customized to your eye shape for natural, fluttery everyday elegance.",
    fullDescription: "Wake up with effortless, smudge-free definition. Our certified lash artists map individual lashes using feather-light silk fibers, customized in curl, length, and volume to flatter your distinct eye shape without damaging natural lash cycles.",
    price: 3400,
    priceFrom: true,
    durationMinutes: 105,
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Long elegant fluttery eyelash extensions on peaceful woman eyes",
    featured: false,
    displayOrder: 9,
    includedSteps: [
      "Eye contour mapping and curl selection (C, D, or L curl)",
      "Soothing collagen under-eye patch application",
      "Individual hand-isolated lash bonding with medical-grade adhesive",
      "Nano-mist cured finish for immediate water resistance"
    ],
    seoTitle: "Hybrid & Russian Volume Lash Extensions | Aura Luxe Studio",
    seoDescription: "Featherweight silk lash extensions tailored to your eye shape for natural elegance."
  },

  // BRIDAL STUDIO
  {
    slug: "royal-bridal-hd-airbrush-makeover",
    title: "The Royal Bride: HD Airbrush Makeup & Couture Draping",
    category: "bridal",
    categoryLabel: "Bridal Studio",
    targetGender: "women",
    shortDescription: "18-hour waterproof airbrush makeup, couture saree/lehenga draping, floral hair ornamentation, and full bridal vanity kit.",
    fullDescription: "Our signature bridal transformation designed to withstand high-definition wedding photography, ceremonial heat, and emotional moments. Delivered by our Senior Bridal Director using prestige products (Charlotte Tilbury, Dior, NARS, MAC). Includes custom bridal hairdo with fresh florals, jewelry setting, and precision saree or lehenga pleating.",
    price: 18000,
    priceFrom: true,
    durationMinutes: 210,
    image: "/images/bridal/royal-muhurtham-bride.jpg",
    imageAlt: "Stunning royal Indian bride adorned in traditional gold temple jewelry, red silk, and exquisite bridal makeup",
    featured: true,
    displayOrder: 10,
    includedSteps: [
      "Hydrating pre-makeup skin priming and lip conditioning",
      "Temptu HD airbrush foundation application for transfer-proof finish",
      "Custom mink/silk bridal lash application",
      "Intricate architectural bridal updo or structured mermaid braid",
      "Fresh floral or jeweled hair accessory placement",
      "Couture dupatta / saree draping with anti-slip micro-pinning",
      "Touch-up emergency bridal kit (blotting paper, lip touch-up, lash glue)"
    ],
    prepNotes: [
      "Bridal consultation and preview trial should be scheduled 4-6 weeks prior.",
      "Wear a button-down or zip-up shirt to avoid disturbing hair and makeup."
    ],
    seoTitle: "Luxury Bridal HD Airbrush Makeup & Saree Draping | Aura Luxe",
    seoDescription: "Award-winning bridal makeup artists delivering waterproof HD airbrush finish and couture bridal styling."
  },

  // WELLNESS & SCALP THERAPY
  {
    slug: "japanese-head-spa-scalp-sanctuary",
    title: "Japanese Waterfall Head Spa & Scalp Detox",
    category: "wellness",
    categoryLabel: "Spa & Scalp Therapy",
    targetGender: "unisex",
    shortDescription: "Trichological micro-camera scalp diagnostic, volcanic clay scrub, circular water halo hydrotherapy, and acupressure massage.",
    fullDescription: "A deeply restorative holistic ritual inspired by Tokyo head spas. We begin by examining your hair follicles with a 200x microscopic camera. Then, enjoy a warm herbal water halo rainfall bar, organic mud scalp exfoliation, steam ozone therapy, and tension-melting shoulder acupressure.",
    price: 3200,
    priceFrom: false,
    durationMinutes: 75,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Calm woman enjoying relaxing spa waterfall hair and scalp therapy treatment",
    featured: true,
    displayOrder: 11,
    includedSteps: [
      "200x digital microscope scalp follicular analysis",
      "Exfoliating bamboo scalp scrub to remove sebum build-up",
      "Circular waterfall halo warm rainfall therapy",
      "Deep ozone warm steam cuticle opening",
      "Herbal essential oil acupressure scalp massage",
      "Post-treatment scalp camera comparison and blowout"
    ],
    prepNotes: ["Please arrive wearing comfortable casual attire."],
    seoTitle: "Japanese Waterfall Head Spa & Scalp Detox | Aura Luxe",
    seoDescription: "Relieve stress and stimulate hair growth with our authentic Japanese halo head spa experience."
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getFeaturedServices(): ServiceItem[] {
  return servicesData.filter((s) => s.featured).sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getServicesByCategory(category: string): ServiceItem[] {
  if (category === "all") return servicesData;
  return servicesData.filter((s) => s.category === category);
}
