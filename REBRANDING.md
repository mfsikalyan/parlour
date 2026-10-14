# Rebranding & Customization Playbook: Rebrandable Salon & Beauty Parlour Template

This guide provides step-by-step instructions for rebranding, customizing, and reselling this website for any hair salon, beauty parlour, barbershop, bridal makeup studio, or wellness spa.

The core architecture follows **"one reusable product, many brands"**. Brand identity, colors, typography, services, staff, galleries, and booking options are separated from UI components. **Routine rebranding never requires rewriting shared layout or UI components.**

---

## 1. Quick Rebranding Overview (The 5 Key Files)

All customization is concentrated in the following typed configuration and content files:

| File Path | Purpose & What to Customize |
|---|---|
| [src/config/brand.ts](file:///d:/Practice%20Projects/Parlour/src/config/brand.ts) | Salon name, tagline, address, phone numbers, WhatsApp, branch locations, operating hours, currency, and SEO defaults. |
| [src/config/theme.ts](file:///d:/Practice%20Projects/Parlour/src/config/theme.ts) | Active color palette, font styles, border radius, and theme preset (`luxury-gold`, `rose-blush`, `barbershop-classic`, `modern-botanical`). |
| [src/config/features.ts](file:///d:/Practice%20Projects/Parlour/src/config/features.ts) | Feature toggles to enable/disable modules (`bridal`, `team`, `offers`, `gallery`, `journal`, `faq`, `announcementBar`, `bookingMode`). |
| [src/config/booking.ts](file:///d:/Practice%20Projects/Parlour/src/config/booking.ts) | Booking mode (`manual-request`, `whatsapp`, `external-link`), timeslots, cancellation windows, and disclaimer copy. |
| [src/config/navigation.ts](file:///d:/Practice%20Projects/Parlour/src/config/navigation.ts) | Top announcement bar copy, link labels, and footer menu grouping. |

---

## 2. Choosing or Customizing a Theme Preset

In [src/config/theme.ts](file:///d:/Practice%20Projects/Parlour/src/config/theme.ts), select one of our curated design presets by changing `activeThemePresetKey`:

```typescript
// Options: "luxury-gold" | "rose-blush" | "barbershop-classic" | "modern-botanical"
export const activeThemePresetKey = "luxury-gold";
```

### Available Presets
1. **`luxury-gold`** (Default): Champagne gold, warm ivory, deep espresso & charcoal. Ideal for luxury unisex salons and bridal studios.
2. **`rose-blush`**: Soft terracotta, blush mauve, and warm cream. Perfect for women's beauty parlours, nail bars, and lash lounges.
3. **`barbershop-classic`**: Rich leather amber, dark walnut, and slate. Crafted for men's grooming lounges and traditional barbershops.
4. **`modern-botanical`**: Organic eucalyptus sage, stone, and linen. Formulated for holistic hair spas, head spas, and wellness studios.

### Adding a Custom Color Palette
You can edit the `colors` object in [src/config/theme.ts](file:///d:/Practice%20Projects/Parlour/src/config/theme.ts) or add your own preset. CSS variables are automatically mapped in `:root` and reflected site-wide.

---

## 3. Customizing Brand Details & Contact Info

Open [src/config/brand.ts](file:///d:/Practice%20Projects/Parlour/src/config/brand.ts) and replace the client details:

1. **Salon Identity**:
   - `name`: Full business name (e.g. `"Velvet Strand Barbershop"`)
   - `shortName`: Display name in header logo (e.g. `"Velvet Strand"`)
   - `tagline`: Subtitle under logo and hero eyebrow
   - `positioning`: 1-2 sentence elevator pitch used on hero, about, and meta description
2. **Contact Numbers**:
   - `phone`: Dialable phone string (e.g. `"+919876543210"`)
   - `displayPhone`: Formatted phone for UI (e.g. `"+91 98765 43210"`)
   - `whatsappNumber`: Numeric digits only with country code for `wa.me` links (e.g. `"919876543210"`)
   - `email`: Concierge or booking inbox
3. **Branches & Maps**:
   - Update `branches` array. Each branch has its own address, contact phone, directions link, and embedded Google Maps URL. Set `isPrimary: true` for the main flagship studio.
4. **Operating Timings**:
   - Update `hours` array with opening and closing times per day.

---

## 4. Managing Services & Pricing

All services reside in [src/content/services.ts](file:///d:/Practice%20Projects/Parlour/src/content/services.ts).

### Adding a New Service
Add an object to the `servicesData` array:

```typescript
{
  slug: "scalp-clarifying-mud-ritual",
  title: "Scalp Clarifying Detox & Thermal Masque",
  category: "hair", // "hair" | "skin" | "mens-grooming" | "nails" | "bridal" | "wellness"
  categoryLabel: "Hair Craft & Color",
  targetGender: "unisex", // "unisex" | "women" | "men"
  shortDescription: "Volcanic clay exfoliation and warm steam infusion for itchy or oily scalps.",
  fullDescription: "Detailed step-by-step narrative of the complete treatment...",
  price: 2400,
  priceFrom: false, // true will display "From ₹2,400"
  durationMinutes: 60,
  image: "https://images.unsplash.com/photo-...",
  imageAlt: "Client receiving clarifying scalp treatment",
  featured: true, // Displayed on homepage
  displayOrder: 12,
  includedSteps: [
    "Trichological scalp scan",
    "Bamboo mud exfoliation",
    "Thermal steam infusion",
    "Blowout finishing"
  ],
  addOns: [
    { title: "Split End Sealer", price: 800, durationMinutes: 15 }
  ],
  prepNotes: ["Please arrive with dry hair."],
  aftercareNotes: ["Wait 24 hours before your next wash."],
  seoTitle: "Scalp Clarifying Detox | Aura Luxe Salon",
  seoDescription: "Revitalize hair follicles and eliminate build-up with our scalp mud therapy."
}
```

### Removing or Disabling a Category
If the business does not offer Men's Grooming or Bridal services, simply toggle them off in [src/config/features.ts](file:///d:/Practice%20Projects/Parlour/src/config/features.ts) or omit services under that category.

---

## 5. Managing Stylists & Team Members

Located in [src/content/team.ts](file:///d:/Practice%20Projects/Parlour/src/content/team.ts):
- Set `active: false` on any stylist who has moved on.
- Set `featured: true` to showcase them on the homepage.
- Include verified specialties and services they handle.

---

## 6. Managing Visual Portfolio & Lightbox

Located in [src/content/gallery.ts](file:///d:/Practice%20Projects/Parlour/src/content/gallery.ts):
- Add genuine client photographs (portrait, square, or landscape).
- Assign categories: `"hair"` | `"color"` | `"bridal"` | `"grooming"` | `"nails"` | `"skin"`.
- Set `featured: true` for the 6 photos you want teased on the homepage.
- The interactive Lightbox handles focus, keyboard arrows, and Escape key automatically.

---

## 7. Configuring Appointment Booking Modes

In [src/config/booking.ts](file:///d:/Practice%20Projects/Parlour/src/config/booking.ts) and [src/config/features.ts](file:///d:/Practice%20Projects/Parlour/src/config/features.ts), configure the client's preferred booking mode:

1. **`manual-request`** (Default):
   - Visitors fill out the 3-step appointment request form.
   - Generates a reference number (e.g. `AL-849204`).
   - Clearly disclaims that the slot is subject to manual verification by the salon concierge desk.
   - Provides a one-click button to fast-track confirmation on WhatsApp.
2. **`whatsapp`**:
   - The booking form prepares an instant URI-encoded WhatsApp message pre-filled with the service, branch, date, time slot, and client details, opening WhatsApp directly.
3. **`external-link`**:
   - If the salon uses Zenoti, Fresha, Calendly, or Square, set `externalUrl` in `booking.ts` to forward users to the scheduling provider.

---

## 8. SEO & Local Schema Configuration

1. In [src/config/brand.ts](file:///d:/Practice%20Projects/Parlour/src/config/brand.ts), update:
   - `seo.siteUrl`: Production domain (e.g. `https://your-client-salon.com`).
   - `seo.defaultTitle`: e.g. `"Salon Name | Luxury Hair & Bridal Studio in Bengaluru"`.
   - `seo.defaultDescription`: 160-character natural summary.
   - `seo.keywords`: Local SEO terms (neighborhood, salon type).
2. The site automatically generates:
   - Dynamic [sitemap.xml](file:///d:/Practice%20Projects/Parlour/src/app/sitemap.ts) including all services, stylists, and blog articles.
   - Dynamic [robots.txt](file:///d:/Practice%20Projects/Parlour/src/app/robots.ts).
   - Schema.org JSON-LD structured data for `BeautySalon`, `Service`, `FAQPage`, and `Article`.

---

## 9. Local Development & Deployment to Vercel

### Running Locally
```bash
# Install dependencies
npm install

# Run automated tests
npm test

# Run TypeScript type check
npm run typecheck

# Run development server
npm run dev
```
Visit `http://localhost:3000` to review the site.

### Deploying to Vercel
1. Push the repository to GitHub, GitLab, or Bitbucket.
2. In the Vercel Dashboard, select **Add New Project** and import the repository.
3. Framework Preset: **Next.js** (automatically detected).
4. Build Command: `npm run build` (or Next.js default).
5. Output Directory: `.next` (default).
6. Set Environment Variables in Vercel:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-custom-domain.com`
7. Click **Deploy**. Vercel will build all static pages and deploy edge assets globally.
8. Connect the client's custom domain in Vercel under **Project Settings > Domains**.

---

## 10. Pre-Launch Verification Checklist

Before transferring the site to your client:
- [ ] Business name, phone, and WhatsApp numbers verified.
- [ ] Branch address and Google Maps embed points to the exact salon location.
- [ ] Operating hours match salon door timings.
- [ ] Services, starting prices, and durations reviewed and approved by the owner.
- [ ] Disabled modules (e.g. `careers`, `memberships`) stay hidden with no broken links.
- [ ] WhatsApp deep-link tested on both mobile and desktop.
- [ ] Privacy Policy and Cancellation Terms approved.
- [ ] `npm test`, `npm run typecheck`, and `npm run build` pass cleanly.
