export interface FAQItem {
  id: string;
  category: "general" | "hair" | "bridal" | "skin" | "hygiene";
  categoryLabel: string;
  question: string;
  answer: string;
}

export const faqCategories = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "Booking & General" },
  { id: "hair", label: "Hair & Coloring" },
  { id: "bridal", label: "Bridal Studio" },
  { id: "skin", label: "Skincare & Facials" },
  { id: "hygiene", label: "Hygiene & Safety" },
] as const;

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "general",
    categoryLabel: "Booking & General",
    question: "Do I need an appointment, or do you accept walk-ins?",
    answer: "While we happily accommodate walk-in guests when chairs are open, we strongly recommend reserving your slot in advance—especially for color transformations, bridal consultations, and weekend visits. Booking online or via WhatsApp guarantees your stylist will be ready without wait times."
  },
  {
    id: "faq-2",
    category: "general",
    categoryLabel: "Booking & General",
    question: "What is your appointment cancellation and rescheduling policy?",
    answer: "We understand unexpected schedule shifts occur. We kindly ask for at least 4 hours' notice for standard haircuts and blowouts, and 24 hours' notice for chemical treatments, balayage, or bridal trials. You can easily reschedule directly via WhatsApp or phone call."
  },
  {
    id: "faq-3",
    category: "general",
    categoryLabel: "Booking & General",
    question: "Is valet parking available at your branches?",
    answer: "Yes! Both our Indiranagar Flagship Boulevard and Koramangala Boutique locations offer complimentary valet parking for all clients."
  },
  {
    id: "faq-4",
    category: "hair",
    categoryLabel: "Hair & Coloring",
    question: "What is the difference between Balayage and traditional foil highlights?",
    answer: "Traditional highlights are placed from root to tip in foils, creating a structured, uniform pattern that shows regrowth lines within 6-8 weeks. Balayage is a freehand artistic painting technique that focuses color on mid-lengths and ends, resulting in a soft, sun-drenched gradient that grows out seamlessly for 4-6 months with minimal maintenance."
  },
  {
    id: "faq-5",
    category: "hair",
    categoryLabel: "Hair & Coloring",
    question: "Does your botanical keratin treatment contain formaldehyde?",
    answer: "No. At Aura Luxe, we strictly use 100% formaldehyde-free, organic botanical keratin formulas enriched with silk proteins and amino acids. It calms frizzy hair and seals moisture without harmful vapors or permanently breaking disulfide bonds."
  },
  {
    id: "faq-6",
    category: "bridal",
    categoryLabel: "Bridal Studio",
    question: "How far in advance should I book my bridal makeup team?",
    answer: "We recommend securing your wedding date 3 to 6 months in advance, especially during the peak auspicious wedding season (October through March). Once booked, we schedule your preliminary consultation and hair/makeup trial 4 to 6 weeks before your celebrations."
  },
  {
    id: "faq-7",
    category: "bridal",
    categoryLabel: "Bridal Studio",
    question: "Do you travel to wedding venues or destination locations?",
    answer: "Yes, our Senior Bridal Team travels for destination weddings across India and internationally. For Bangalore-based weddings, brides may either get ready in our private VIP Bridal Suite at Indiranagar or request on-location venue styling."
  },
  {
    id: "faq-8",
    category: "skin",
    categoryLabel: "Skincare & Facials",
    question: "Is there any downtime after a Hydra-Radiance cellular facial?",
    answer: "Zero downtime! Our medical-grade hydra-infusion is non-invasive and non-irritating. You will walk out with instantly plumped, glowing, glass-like skin, making it the ideal treatment even 24 to 48 hours prior to special events or photoshoots."
  },
  {
    id: "faq-9",
    category: "hygiene",
    categoryLabel: "Hygiene & Safety",
    question: "What hygiene and sterilization protocols do you practice?",
    answer: "Client safety is paramount. All metal scissors, clipper blades, tweezers, and cuticle tools undergo medical autoclave sterilization and UV sanitization after each client. We use single-use disposable capes, neck strips, and nail files. Pedicure tubs are fitted with disposable medical liners."
  }
];
