export interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: "Hair Care" | "Bridal Prep" | "Men's Grooming" | "Skincare";
  date: string;
  author: string;
  authorRole: string;
  readTime: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  content: string[];
}

export const journalArticles: JournalArticle[] = [
  {
    slug: "balayage-aftercare-guide",
    title: "How to Keep Your Balayage Radiant in Bangalore's Hard Water: Master Colorist Guide",
    excerpt: "Hard water minerals and tropical sun can turn luxurious caramel tones brassy. Discover four salon-proven steps to maintain salon shine between appointments.",
    category: "Hair Care",
    date: "March 15, 2026",
    author: "Ananya Deshmukh",
    authorRole: "Creative Hair Director",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Golden dimensional balayage hair reflecting natural sunlight",
    featured: true,
    content: [
      "Balayage is cherished for its effortless, low-maintenance grace. However, Bangalore's mineral-rich municipal and borewell water contains calcium and copper deposits that bond to lightened hair strands, often resulting in premature dullness or unwanted warm orange undertones.",
      "1. Install a Vitamin C Shower Filter: The first line of defense is filtering out chlorine and heavy metal ions before they contact your hair shaft. A simple ionic shower filter preserves cuticle integrity.",
      "2. Weekly Chelating Clarification: Once every 7 to 10 days, use a sulfate-free chelating shampoo or apple cider vinegar rinse to dissolve surface mineral build-up, followed by an intensive moisture masque.",
      "3. Purple vs. Blue Toning Shampoos: If your balayage has cool blonde ribbons, reach for violet shampoo. If your hair is warm caramel or honey mocha, a blue-pigmented cleanser is required to neutralize stubborn brass.",
      "4. The 6-Week French Gloss Refresh: You don't need a full bleach retouch. Come in for a 30-minute demi-permanent gloss glaze that revives reflective shine and seals the outer cuticle layer."
    ]
  },
  {
    slug: "ultimate-bridal-beauty-timeline",
    title: "The 6-Month Bridal Beauty & Skincare Blueprint: A Stress-Free Roadmap",
    excerpt: "From laser and peel schedules to lash trials and sangeet hairdos, here is your definitive checklist to walking down the aisle with confidence.",
    category: "Bridal Prep",
    date: "February 28, 2026",
    author: "Priya Ramachandran",
    authorRole: "Head of Bridal Artistry",
    readTime: "6 min read",
    image: "/images/bridal/royal-muhurtham-bride.jpg",
    imageAlt: "Indian bride preparing for ceremony with elegant bridal jewelry",
    featured: true,
    content: [
      "Your wedding day glow isn't created in a single morning—it is nurtured through thoughtful preparation. Rushing into intensive chemical peels or radical haircuts in your wedding week creates unnecessary anxiety.",
      "6 Months Out: Lock in your bridal makeup team and schedule a skin barrier consultation. Begin regular monthly lymphatic facial drainage and assess scalp health.",
      "3 Months Out: Finalize your lehenga and saree colors. Schedule your look trial where jewelry, neckline, and dupatta draping are tested under professional studio lighting.",
      "1 Month Out: Receive your final trim and dimensional gloss glaze. No experimental color changes from this point forward. Stick to tried-and-tested active serums.",
      "1 Week Out: Indulge in our Hydra-Radiance facial, full Russian manicure, and restorative head spa. Hydrate abundantly and prioritize restful sleep."
    ]
  },
  {
    slug: "mens-executive-grooming-rituals",
    title: "The Architecture of a Great Beard: Daily Maintenance & Hot Towel Benefits",
    excerpt: "Why traditional hot-towel steam rituals do more for facial skin and follicle thickness than any synthetic beard serum alone.",
    category: "Men's Grooming",
    date: "January 20, 2026",
    author: "Vikram Singh Rathore",
    authorRole: "Master Barber",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Barber performing hot towel steam shave on gentleman",
    featured: false,
    content: [
      "Most men struggle with patchy beard growth or ingrown hairs not because of poor genetics, but because of neglected underlying skin. A beard is only as healthy as the dermis beneath it.",
      "The Science of Steam: Steam infused with eucalyptus relaxes the arrector pili muscles and softens coarse facial hair by up to 60%, allowing a razor blade to glide cleanly without pulling or causing razor bumps.",
      "Daily Cleansing: Avoid washing your beard with generic body soaps that strip natural sebum. Use a low-foaming botanical cleanser followed by lightweight argan and jojoba oil applied directly to the skin bed.",
      "Professional Line Shaping: Every 2 to 3 weeks, let a master barber establish your neckline—two fingers above the Adam's apple—to preserve crisp masculine jawline definition."
    ]
  }
];

export function getJournalArticleBySlug(slug: string): JournalArticle | undefined {
  return journalArticles.find((a) => a.slug === slug);
}
