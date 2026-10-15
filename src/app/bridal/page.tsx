import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  Heart,
  Check,
  Clock,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  Globe,
  Star,
  Crown,
  Camera,
  Coffee,
  Gem
} from "lucide-react";
import { brandConfig } from "@/config/brand";
import { featureFlags } from "@/config/features";
import { formatCurrency } from "@/lib/currency";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Bridal Studio & Global Couture Makeup Artistry",
  description: `Luxury bridal makeup for Western white gown weddings, traditional royal South Asian ceremonies, destination celebrations, and fusion brides at ${brandConfig.name}.`,
};

export default function BridalPage() {
  if (!featureFlags.bridal) {
    notFound();
  }

  // Curated Luxury Bridal Portfolio Looks
  const bridalPortfolio = [
    {
      id: "western-cathedral",
      title: "Western Cathedral Couture & Lace Veil",
      category: "Western & Global Couture",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "International bride with sheer cathedral lace veil, soft pearlescent makeup, and luminous dewy skin",
      description: "Designed for classic Western church and cathedral ceremonies. Ethereal glass skin, soft fluttery silk lashes, and secure comb placement for cathedral-length veils."
    },
    {
      id: "royal-muhurtham",
      title: "Royal Muhurtham & Temple Gold Heritage",
      category: "Royal South Asian",
      image: "/images/bridal/royal-muhurtham-bride.jpg",
      imageAlt: "South Indian royal bride in traditional antique temple jewelry, crimson silk, fresh jasmine poola jada, and radiant HD airbrush makeup",
      description: "18-hour sweat-proof HD airbrush base paired with antique gold temple jewelry, Kanjeevaram silk saree pleating, and fresh jasmine mogra poola jada."
    },
    {
      id: "modern-minimalist-gown",
      title: "Architectural Silk Gown & French Chignon",
      category: "Western & Global Couture",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Contemporary foreign bride in sleek white wedding gown with sculpted French bridal chignon",
      description: "Understated haute couture: sculpted cheekbones, brushed velvet brow styling, and a clean architectural chignon with pearl drop earrings."
    },
    {
      id: "sangeet-reception-glam",
      title: "Rose Gold Sangeet & Reception Glamour",
      category: "Evening Couture",
      image: "/images/bridal/sangeet-reception-glam.jpg",
      imageAlt: "Indian bride in designer rose gold lehenga with cascading Hollywood waves and soft smokey eye",
      description: "Dramatic evening glamour with champagne micro-shimmer lids, dimensional Hollywood waves with diamond pins, and radiant luminous skin."
    },
    {
      id: "destination-sun-kissed",
      title: "Sun-Kissed Destination & Beach Wedding",
      category: "Destination Celebrations",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Destination wedding bride basking in golden hour light with romantic undone waves and natural bronze makeup",
      description: "Humidity-resistant golden bronze radiance with breezy textured waves formulated to withstand tropical climates and beachfront sea breezes."
    },
    {
      id: "romantic-lace-updo",
      title: "Romantic French Florals & Sheer Veil",
      category: "Western & Global Couture",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Romantic bridal updo with delicate white floral accents and sheer bridal lace",
      description: "Soft textured bridal chignon woven with fresh baby's breath flowers and gentle face-framing tendrils for European garden weddings."
    },
    {
      id: "regal-groom-suite",
      title: "The Regal Groom's Black-Tie & Royal Suite",
      category: "Gentlemen's Atelier",
      image: "/images/bridal/groom-royal-suite.jpg",
      imageAlt: "Handsome groom in royal embroidered ivory sherwani with emerald mala, precision skin fade, and beard sculpt",
      description: "4K camera-ready grooming: razor fade, hot towel beard sculpting, matte anti-shine skin prep, and safa or black-tie bow-tie assistance."
    },
    {
      id: "artisan-henna-jewelry",
      title: "Artisan Henna & Kundan Heirloom Details",
      category: "Couture Details",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Macro close-up of intricate bridal mehndi henna on palms with antique gold bangles",
      description: "Macro precision: intricate hand-painted bridal henna paired with heritage gold bangles and diamond rings captured for eternal keepsakes."
    }
  ];

  // Comprehensive Bridal Packages
  const bridalPackages = [
    {
      title: "The Western Couture & Cathedral Bride",
      badge: "Western & International Gowns",
      price: 16000,
      duration: "3.0 Hours",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Western bride with cathedral veil and dewy bridal makeup",
      description: "Crafted for white gown church weddings and European garden ceremonies. We deliver a luminous, transfer-proof complexion with soft pearlescent eyelids, bespoke silk lash extensions, and secure cathedral veil placement.",
      inclusions: [
        "Transdermal peptide hydration & 18-hr luminous skin base",
        "Soft pearlescent eye contouring with individual silk lashes",
        "Hollywood glam waves or architectural French bridal chignon",
        "Cathedral lace veil comb securing & anti-slip crown pins",
        "Gown buttoning assistance & emergency touch-up vanity kit"
      ]
    },
    {
      title: "The Royal Muhurtham Experience",
      badge: "Traditional South Asian Heritage",
      price: 18000,
      duration: "3.5 Hours",
      image: "/images/bridal/royal-muhurtham-bride.jpg",
      imageAlt: "Royal South Indian bride in red Kanjeevaram silk and temple jewelry",
      description: "Designed for early morning ceremonies and multi-hour wedding rites. Transfer-proof Temptu HD airbrush base with antique gold and diamond jewellery setting, fresh mogra poola jada, and anti-slip Kanjeevaram pleating.",
      inclusions: [
        "Pre-ceremony lymphatic massage & 18-hr waterproof HD airbrush base",
        "Traditional winged eye artistry with kohl tightlining & individual lashes",
        "Classic South Indian braid or architectural updo with fresh mogra poola jada",
        "Kanjeevaram silk saree pleating and anti-slip pin security",
        "Maang tikka, jhumkas, and temple jewelry setting assistance"
      ]
    },
    {
      title: "The Global Fusion & Multi-Ceremony Atelier",
      badge: "Cross-Cultural & Destination Celebrations",
      price: 24000,
      duration: "Full Day Access (2 Looks)",
      image: "/images/bridal/sangeet-reception-glam.jpg",
      imageAlt: "Bride in rose gold lehenga for reception evening",
      description: "For brides celebrating dual ceremonies: seamless daytime look (Western white gown or traditional Muhurtham) transitioned into a sultry, sparkling evening Sangeet or Reception look with dedicated artist standby.",
      inclusions: [
        "Two complete look transformations (Day ceremony + Evening party)",
        "Dedicated senior bridal artist standby for mid-event touch-ups",
        "Complete hair re-style (Chignon to Hollywood Waves or Braid to Updo)",
        "Veil to lehenga dupatta transition with couture draping",
        "On-camera lighting check before every ceremonial entrance"
      ]
    },
    {
      title: "The Groom's Black-Tie & Royal Suite",
      badge: "Groom & Best Men",
      price: 4500,
      duration: "1.5 Hours",
      image: "/images/bridal/groom-royal-suite.jpg",
      imageAlt: "Royal groom in embroidered ivory sherwani with emerald mala",
      description: "Subtle, camera-ready grooming that eliminates flash shine and fatigue. Includes executive haircut, hot-towel beard sculpting, and charcoal pore cleanse.",
      inclusions: [
        "Precision haircut & hot towel beard sculpting or clean shave",
        "Micro-exfoliating charcoal cleanse & under-eye cooling patches",
        "Matte anti-shine skin prep engineered for 4K photography",
        "Black-tie bow-tie adjustment or Royal Safa / Turban tying assistance",
        "Hair styling with matte clay and aromatic finishing mist"
      ]
    }
  ];

  // International Bride Amenities
  const internationalAmenities = [
    {
      icon: <Globe className="w-5 h-5 text-[var(--color-primary)]" />,
      title: "Global Skin Tone Mastery",
      description: "Extensive certification across Fitzpatrick Skin Types I through VI, catering to European, Asian, Middle Eastern, and South Asian skin undertones."
    },
    {
      icon: <Gem className="w-5 h-5 text-[var(--color-primary)]" />,
      title: "Prestige International Kit",
      description: "Exclusively formulated with Charlotte Tilbury, Dior Backstage, Tom Ford, NARS, Chanel, and Temptu Pro HD Airbrush for high-definition longevity."
    },
    {
      icon: <Coffee className="w-5 h-5 text-[var(--color-primary)]" />,
      title: "Private VIP Bridal Suite",
      description: "Soundproof private suite with dedicated climate control, high-CRI 5600K daylight vanity mirrors, artisan espresso, and champagne service."
    },
    {
      icon: <Camera className="w-5 h-5 text-[var(--color-primary)]" />,
      title: "Studio Lighting Simulation",
      description: "Every look is previewed under both 4K daylight studio lighting and warm ballroom chandelier settings before you step out to your ceremony."
    }
  ];

  // Real Bride Testimonials
  const testimonials = [
    {
      quote: "Travelling from London to Bengaluru for our fusion wedding was daunting, but Priya and the Aura Luxe team were incredible. They styled my Western ceremony white gown and veil in the morning, and completely transformed me into a traditional Kanjeevaram bride for the evening. Flawless all 16 hours!",
      bride: "Emily & Rohan",
      location: "London & Bengaluru",
      wedding: "Taj West End, Bengaluru",
      rating: 5
    },
    {
      quote: "The HD airbrush makeup looked like pure velvet under the midday Muhurtham sun and 4K cameras. My saree pleats didn't shift a millimeter throughout the four-hour ceremony rituals. Absolute royal luxury.",
      bride: "Ananya Rao",
      location: "Bengaluru",
      wedding: "The Leela Palace, Bengaluru",
      rating: 5
    },
    {
      quote: "As an Australian bride doing a destination wedding in India, finding artists who understood soft-glam, dewy skin without heavy caking was crucial. Aura Luxe nailed the Hollywood waves and glowing skin. Truly world-class!",
      bride: "Claire Sterling",
      location: "Sydney, Australia",
      wedding: "Clarks Exotica, Bengaluru",
      rating: 5
    }
  ];

  return (
    <div className="bg-[var(--color-background)] min-h-screen py-10 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Bridal Studio & Global Atelier" }]} />

        {/* Hero Section */}
        <section className="my-8 sm:my-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)]">
                <Crown className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-primary)]">
                  Signature Bridal Atelier & Global Couture
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal text-[var(--color-text)] tracking-tight leading-[1.08] text-balance">
                Global Couture Artistry & Timeless Wedding Radiance
              </h1>

              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed text-balance">
                From haute couture Western cathedral gowns and ethereal veils to royal South Asian Muhurtham silk and sun-kissed destination weddings. Led by Head of Bridal Artistry Priya Ramachandran, our master atelier curates 18-hour waterproof HD airbrush finish, couture veil styling, and bespoke hair architecture for brides worldwide.
              </p>

              {/* Trust Features Strip */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 border-y border-[var(--color-border)] py-3 sm:py-4 text-center sm:text-left">
                <div>
                  <span className="font-heading text-lg sm:text-2xl font-bold text-[var(--color-primary)] block">
                    300+
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] leading-tight block mt-0.5">
                    Brides Styled
                  </span>
                </div>
                <div>
                  <span className="font-heading text-lg sm:text-2xl font-bold text-[var(--color-primary)] block">
                    18 Hours
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] leading-tight block mt-0.5">
                    HD Waterproof
                  </span>
                </div>
                <div>
                  <span className="font-heading text-lg sm:text-2xl font-bold text-[var(--color-primary)] block">
                    Type I–VI
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] leading-tight block mt-0.5">
                    All Skin Tones
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <Button
                  href="/book?service=royal-bridal-hd-airbrush-makeover"
                  variant="gold"
                  size="lg"
                  className="w-full sm:w-auto justify-center"
                  icon={<Calendar className="w-4 h-4" />}
                >
                  Book Bridal Consultation
                </Button>
                <a
                  href={`https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
                    "Hello Aura Luxe Bridal Concierge! I would like to inquire about wedding dates, foreign & Indian bridal packages, and trial availability."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[var(--color-surface)] text-[var(--color-text)] hover:text-[var(--color-primary)] border border-[var(--color-border)] text-sm font-semibold transition-colors w-full sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Bridal Concierge WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Visual Composition - Dual Editorial Imagery */}
            <div className="lg:col-span-5 relative">
              {/* Primary Photo: Royal Muhurtham Indian Bride */}
              <div className="relative aspect-[4/5] rounded-[var(--border-radius,8px)] overflow-hidden shadow-2xl border border-[var(--color-border)] group">
                <Image
                  src="/images/bridal/royal-muhurtham-bride.jpg"
                  alt="Royal Indian bride adorned in temple gold jewellery, crimson Kanjeevaram silk, and HD makeup"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[var(--color-primary)] border border-[var(--color-primary)]/30 inline-block mb-1">
                    Traditional Muhurtham
                  </span>
                  <h3 className="font-heading text-lg font-medium">South Asian Temple Heritage</h3>
                </div>
              </div>

              {/* Inset Overlapping Photo: Western White Gown & Veil Bride */}
              <div className="absolute -bottom-6 left-2 sm:left-4 w-44 sm:w-56 aspect-[3/4] rounded-[var(--border-radius,8px)] overflow-hidden shadow-2xl border-2 border-[var(--color-primary)] hidden sm:block group">
                <Image
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80"
                  alt="Western international bride in ethereal lace veil and dewy makeup"
                  fill
                  sizes="224px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white inline-block mb-0.5">
                    Western Couture
                  </span>
                  <p className="font-heading text-xs font-medium truncate">Cathedral Veil & Lace</p>
                </div>
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute top-4 right-3 sm:right-4 px-3 py-2 rounded-lg bg-[var(--color-surface,#14161b)]/95 backdrop-blur-md border border-[var(--color-primary)] shadow-xl flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />
                <span className="text-[11px] font-semibold text-[var(--color-text)]">
                  Couture Certified
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Global Bridal Lookbook / Portfolio Showcase */}
        <section className="my-12 sm:my-16 lg:my-24 pt-8 sm:pt-12 border-t border-[var(--color-border)]">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] inline-block mb-2.5 sm:mb-3">
              Couture Lookbook
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-text)] tracking-tight leading-[1.18] sm:leading-tight px-1">
              A Symphony of Traditions & Global Glamour
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              Explore our curated portfolio of foreign Western brides, traditional South Asian ceremonies, romantic destination weddings, and royal groom grooming.
            </p>
          </div>

          {/* 8-Photo Curated Lookbook Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bridalPortfolio.map((look) => (
              <div
                key={look.id}
                className="group relative flex flex-col rounded-[var(--border-radius,8px)] overflow-hidden bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 shadow-xl"
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--color-surface-subtle)]">
                  <Image
                    src={look.image}
                    alt={look.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface,#14161b)] via-black/30 to-transparent opacity-85" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                      {look.category}
                    </span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-3 inset-x-3 text-white">
                    <h3 className="font-heading text-base font-medium leading-snug">
                      {look.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {look.description}
                  </p>
                  <div className="pt-3 mt-3 border-t border-[var(--color-border)]">
                    <Link
                      href="/book?service=royal-bridal-hd-airbrush-makeover"
                      className="text-xs font-semibold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Inquire About This Look</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Curated Bridal Packages Grid with Editorial Photos */}
        <section className="my-12 sm:my-16 lg:my-24">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">
              Bespoke Bridal Collections
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-[var(--color-text)] mt-2">
              Curated Wedding Rituals & Packages
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-2">
              Transparent, complete bridal beauty packages tailored for single-ceremony vows or multi-day celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bridalPackages.map((pkg, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all shadow-xl group overflow-hidden"
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[var(--color-surface-subtle)]">
                  <Image
                    src={pkg.image}
                    alt={pkg.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface,#14161b)] via-black/20 to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                      {pkg.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-2 right-3 text-right">
                    <span className="text-[10px] text-neutral-300 flex items-center gap-1 backdrop-blur-md bg-black/50 px-2 py-0.5 rounded">
                      <Clock className="w-3 h-3 text-[var(--color-primary)]" />
                      <span>{pkg.duration}</span>
                    </span>
                  </div>
                </div>

                {/* Package Info */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-heading text-lg font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                      {pkg.title}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading text-2xl font-bold text-[var(--color-primary)]">
                        {formatCurrency(pkg.price)}
                      </span>
                      <span className="text-xs text-[var(--color-text-muted)]">/ ceremony</span>
                    </div>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="pt-3 border-t border-[var(--color-border)] space-y-2">
                      <span className="text-[10px] uppercase font-semibold text-[var(--color-text)] block">
                        Package Inclusions:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[var(--color-text-muted)]">
                        {pkg.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--color-border)]">
                    <Button
                      href="/book?service=royal-bridal-hd-airbrush-makeover"
                      variant="gold"
                      size="sm"
                      className="w-full"
                    >
                      Reserve Date or Trial
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* International & Destination Brides VIP Experience */}
        <section className="my-12 sm:my-16 lg:my-24 py-10 sm:py-16 px-4 sm:px-8 lg:px-12 rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[var(--color-primary)] px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] inline-block">
                Global Bridal Care
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-[var(--color-text)] leading-tight">
                Designed for International & Destination Brides
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                Planning your wedding from overseas? We offer dedicated virtual consultations, customized mood-board mapping, and timezone-flexible coordination for brides traveling to South India from the UK, US, Australia, Europe, and the Middle East.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {internationalAmenities.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <h4 className="font-heading text-sm font-semibold text-[var(--color-text)]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Schedule Virtual Video Consultation
                </Button>
              </div>
            </div>

            {/* Visual Collage of Luxury Amenities */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-[var(--border-radius,8px)] overflow-hidden border border-[var(--color-border)]">
                <Image
                  src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury international cosmetics palettes including Dior and Charlotte Tilbury"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-[var(--border-radius,8px)] overflow-hidden border border-[var(--color-border)] mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80"
                  alt="Bridal vanity mirror with professional makeup brush collection"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Real Bride Testimonials */}
        <section className="my-12 sm:my-16 lg:my-24">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">
              Real Love Stories
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-[var(--color-text)] mt-2">
              Words From Our Aura Luxe Brides
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-[var(--border-radius,8px)] bg-[var(--color-surface,#14161b)] border border-[var(--color-border)] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[var(--color-primary)]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--color-text-muted)] italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <h4 className="font-heading text-base font-medium text-[var(--color-text)]">
                    {t.bride}
                  </h4>
                  <span className="text-xs text-[var(--color-primary)] block">
                    {t.location}
                  </span>
                  <span className="text-[11px] text-[var(--color-text-muted)] block mt-0.5">
                    {t.wedding}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="my-12 sm:my-16 p-6 sm:p-12 rounded-[var(--border-radius,8px)] bg-gradient-to-r from-[var(--color-surface,#14161b)] via-[var(--color-surface-elevated,#1c1f26)] to-[var(--color-surface,#14161b)] border border-[var(--color-primary)] text-center max-w-4xl mx-auto shadow-2xl">
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-primary)] mx-auto mb-3 sm:mb-4" />
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-[var(--color-text)]">
            Begin Your Wedding Journey With Us
          </h2>
          <p className="mt-3 text-sm text-[var(--color-text-muted)] max-w-xl mx-auto leading-relaxed">
            Dates for the upcoming wedding season are reserved on a first-confirmed basis. Secure your bridal preview trial or consultation today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/book?service=royal-bridal-hd-airbrush-makeover"
              variant="gold"
              size="lg"
              icon={<Calendar className="w-4 h-4" />}
            >
              Reserve Wedding Date
            </Button>
            <Button
              href="/gallery"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Full Bridal Gallery
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
