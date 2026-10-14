# Antigravity Build Plan: Modern, Rebrandable Salon & Beauty Parlour Website

## 1. Project Goal

Build a premium, modern, responsive website template for hair salons,
unisex salons, men's grooming studios, women's beauty parlours, bridal
makeup studios, and beauty/spa businesses. The template must be easy to
customize and resell to multiple businesses.

**Core principle:** one reusable product, many brands. Brand identity,
content, services, pricing, staff, imagery, booking options, and
optional modules must be controlled through documented
configuration/content files wherever possible. Routine rebranding must
not require rewriting shared UI components.

### Success criteria

-   Looks polished, premium, contemporary, and image-led.
-   Works well on mobile, tablet, laptop, and desktop.
-   Converts visitors into appointment bookings and enquiries.
-   Supports salon and parlour business types without assuming one
    gender or service model.
-   Can be rebranded quickly for each customer.
-   SEO-ready, accessible, performant, and deployable to Vercel.
-   All interactions work; any unavailable integration is clearly
    documented rather than faked.

## 2. Instructions for Antigravity

Treat this file as the implementation specification.

Before coding: 1. Inspect the existing repository, stack, and current
working features. 2. Preserve the existing setup unless there is a clear
reason to change it. 3. Create an implementation checklist and execute
in phases. 4. Build a working site, not just a static mockup. 5. Use
realistic demo content and licensed/approved placeholder imagery; label
all sample content that must be replaced. 6. Do not invent customer
reviews, awards, certifications, staff qualifications, treatment claims,
or business statistics. 7. Run available lint, type-check, tests, and
production build; fix issues before completion. 8. Never commit API keys
or credentials. 9. Finish with setup, rebranding, integrations, and
deployment documentation.

## 3. Recommended Technology

Use the repository's current stack where practical. For a new build,
prefer: - Next.js App Router - React and TypeScript - Tailwind CSS with
CSS custom properties/design tokens - Accessible, reusable UI
components - Lucide icons or one consistent icon set - Vercel-compatible
deployment - Typed configuration and local content files, with
architecture ready for a CMS later

Use server components by default and client components only where
interactions require them. Avoid unnecessary dependencies.

## 4. Brand-Neutral Design Direction

Create a visual system that can adapt to different salon brands: -
Premium and contemporary, not a generic template full of identical
cards. - Strong hero photography, editorial typography, clear service
hierarchy, tasteful whitespace, and confident calls to action. - Support
a range of brand presets: elegant/luxury, warm/natural, bold/modern,
minimal/clinical, playful/youthful, and classic/barbershop. - Use CSS
variables for backgrounds, text, accent, borders, typography, spacing,
radii, and container widths. - Provide light and optional dark theme
variants where appropriate. - Avoid excessive gradients, glassmorphism,
neon effects, huge rounded cards, distracting animation, and clutter. -
Use subtle motion only; honor `prefers-reduced-motion`. - Ensure text
and controls remain legible over images.

### Homepage composition

1.  Optional announcement bar for an offer or opening promotion.
2.  Responsive header with logo, navigation, and primary booking CTA.
3.  Hero image/video poster with brand-specific headline, supporting
    copy, and booking/service CTAs.
4.  Trust highlights: years in business, trained team, hygiene
    standards, or other verified facts only.
5.  Featured services with prices or "starting from" prices, duration,
    and booking links.
6.  About the salon: approach, atmosphere, and team.
7.  Popular treatments or service categories.
8.  Staff/stylist profiles, if enabled.
9.  Gallery of real work: hair, nails, makeup, grooming, skincare,
    bridal, or spa.
10. Booking steps and what clients should expect.
11. Offers, packages, gift cards, or memberships, if enabled.
12. Genuine testimonials/reviews, only when supplied and approved.
13. FAQ section.
14. Location, opening hours, map, and contact details.
15. Final booking CTA and detailed footer.

Make the sections visually varied. Do not display empty or disabled
modules.

## 5. Business Types and Service Catalog

Support the following configurable business types: - Unisex salon -
Women's salon / beauty parlour - Men's salon / barbershop - Bridal
makeup and beauty studio - Hair and scalp studio - Nail and lash
studio - Beauty/spa studio

A business may enable multiple categories. Do not hard-code gender
assumptions into layouts or form logic.

### Example service categories

All services and prices must be editable and can be removed per client.

**Hair** - Haircut and styling - Blow-dry - Hair color and highlights -
Hair spa and conditioning - Smoothening/straightening or other salon
services where offered

**Skin and beauty** - Cleanup and facial - Waxing/threading - Manicure
and pedicure - Makeup - Bridal and occasion packages

**Men's grooming** - Haircut and beard styling - Shave and beard
grooming - Hair color - Grooming packages

**Nails, lashes, and brows** - Nail care and nail art - Lash services -
Brow shaping

**Spa and wellness (only if offered)** - Massage or relaxation
treatments - Body care packages

Do not imply that every business provides every service. Render only
configured services. Avoid unsupported medical or guaranteed-result
claims.

## 6. Required Pages and Routes

### Core pages

-   `/` --- Home
-   `/services` --- Service catalogue, category filters, and
    price/duration information
-   `/services/[slug]` --- Service detail page
-   `/team` --- Staff/stylist directory (optional)
-   `/team/[slug]` --- Staff profile (optional)
-   `/gallery` --- Portfolio/gallery with filters
-   `/about` --- Story, values, approach, and salon information
-   `/offers` --- Promotions/packages (optional)
-   `/contact` --- Contact, hours, location, enquiry form
-   `/book` --- Appointment request/booking flow
-   `/privacy-policy` --- Editable legal template
-   `/terms` --- Optional terms/cancellation policy
-   Custom `not-found` page

### Optional modules

-   `/bridal` --- Bridal packages and enquiry flow
-   `/memberships` --- Packages or memberships
-   `/gift-cards` --- Gift card details/enquiry
-   `/journal` and `/journal/[slug]` --- Beauty tips and local SEO
    content
-   `/faq` --- Full FAQ
-   `/careers` --- Hiring enquiries

When a module is disabled, hide its navigation link and related sections
and avoid broken or empty routes.

## 7. Rebranding Architecture (Critical)

Keep all brand-specific data out of reusable components.

Suggested structure:

``` text
src/
  app/
    (site)/
      page.tsx
      services/page.tsx
      services/[slug]/page.tsx
      team/page.tsx
      team/[slug]/page.tsx
      gallery/page.tsx
      about/page.tsx
      offers/page.tsx
      contact/page.tsx
      book/page.tsx
      privacy-policy/page.tsx
      terms/page.tsx
    layout.tsx
    sitemap.ts
    robots.ts
  components/
    layout/
      SiteHeader.tsx
      MobileNavigation.tsx
      SiteFooter.tsx
    sections/
      HeroSection.tsx
      TrustHighlights.tsx
      FeaturedServices.tsx
      AboutPreview.tsx
      TeamPreview.tsx
      GalleryPreview.tsx
      OffersSection.tsx
      Testimonials.tsx
      FAQSection.tsx
      LocationSection.tsx
      BookingCTA.tsx
    services/
      ServiceCard.tsx
      ServiceCategoryFilter.tsx
      ServiceDetails.tsx
    gallery/
      GalleryGrid.tsx
      GalleryFilters.tsx
      Lightbox.tsx
    booking/
      BookingForm.tsx
      BookingConfirmation.tsx
    forms/
      ContactForm.tsx
    ui/
      Button.tsx
      Container.tsx
      SectionHeading.tsx
      Breadcrumbs.tsx
  config/
    brand.ts
    theme.ts
    navigation.ts
    features.ts
    booking.ts
  content/
    services.ts
    team.ts
    gallery.ts
    offers.ts
    testimonials.ts
    faqs.ts
  lib/
    seo.ts
    validation.ts
    booking-provider.ts
    contact-provider.ts
  public/
    images/
    fonts/
```

Adapt to the repository and framework conventions, but preserve
separation between config, content, and UI.

### Central brand configuration

Create a typed file such as `src/config/brand.ts` with: - Business name
and legal name if required - Business type/category list - Tagline and
brand positioning - Logo, optional alternate logo, favicon, social-share
image - Primary/secondary/accent colors - Heading/body fonts - Address,
city, service area, map URL - Phone, email, WhatsApp number/link -
Opening days/hours and holiday notice - Social media URLs -
Primary/secondary CTA labels and URLs - Currency and locale (default to
INR/en-IN, but configurable) - Default SEO title, description, canonical
website URL - Default Open Graph image - Footer details and copyright
text

Create `src/config/theme.ts` for design tokens and
`src/config/features.ts` for module toggles.

### Theme system

-   Use CSS custom properties such as `--color-background`,
    `--color-text`, `--color-accent`, `--font-heading`, `--font-body`,
    `--container-width`, and spacing tokens.
-   Shared components must use theme tokens instead of hard-coded
    colors.
-   Map central config to CSS variables in one documented place.
-   Maintain accessible contrast after rebranding.
-   Include several optional presets but make custom values
    straightforward.
-   Do not scatter hex codes or client names throughout the component
    tree.

### Typed content models

Each service should include: - Stable slug, title, category, short
description, full description - Price, optional `priceFrom`, currency,
duration - Optional image and meaningful alt text - Optional add-ons,
preparation notes, aftercare notes, FAQs - Booking enabled/disabled -
Display order and featured flag - Optional staff members who offer the
service - SEO title and description

Each staff profile should include: - Slug, display name, role, approved
biography, specialties - Image and alt text - Optional
experience/credentials only when verified - Optional services offered,
booking availability link, social links - Display order and active flag

Each gallery item should include: - Image, alt text, category, caption
(optional) - Optional related service/staff member - Featured flag,
display order, focal point

Each offer should include: - Title, description, terms, valid dates
(optional) - Applicable services and price/discount details - Booking
link and active flag

Testimonials must include approved source text and attribution. Never
fabricate them.

## 8. Appointment Booking

The booking experience must be honest about its capabilities.

### Basic booking-request flow

1.  Choose service/category.
2.  Choose preferred staff member (optional and configurable).
3.  Choose a preferred date.
4.  Choose a time preference or available slot.
5.  Enter name, phone, and optional email.
6.  Add notes or special requests.
7.  Confirm consent and submit.

Clearly distinguish between: - **Appointment request:** the salon must
confirm manually. - **Confirmed booking:** a connected scheduling system
has verified the slot and created a booking.

Never label an appointment as confirmed if no calendar/booking provider
has confirmed it.

### Booking options

Create a provider-neutral adapter to support: - WhatsApp enquiry deep
link - Email-based/manual request workflow - Third-party booking system
or scheduling embed - Future custom backend with live staff/slot
availability

For WhatsApp, construct the message from selected service/date/time and
encode it safely. Do not claim that WhatsApp submission was received by
the salon until the user has actually sent the message.

For backend/provider integration: - Keep credentials in environment
variables. - Validate on the server. - Protect public endpoints with
sensible rate limiting and spam prevention. - Handle errors and retries
gracefully. - Document the integration and setup steps.

If no provider is configured, provide a clearly labeled
manual-request/demo mode and do not silently discard requests. Never
show fake available slots.

### Booking configuration

Allow each client to set: - Booking mode: WhatsApp, manual request,
external booking link, or integrated live booking - Required/optional
fields - Available services and staff - Lead time, advance booking
window, cancellation policy, and buffer duration where supported - Time
zone - Confirmation text and contact details

Only enforce availability rules that are actually backed by configured
data/integration.

## 9. Service Pricing, Offers, and Conversion

-   Display prices in the configured currency, default INR with Indian
    number formatting.
-   Support exact prices, "starting from" prices, package prices, and
    "contact for price."
-   Show service duration when known.
-   Clearly label taxes or extra charges only when the business has
    supplied the information.
-   Make prices easy to update in content files.
-   Support optional promotional banners, first-visit offers, packages,
    memberships, and gift cards.
-   Add clear terms and expiry dates for offers where applicable.
-   Do not invent discounts or create misleading urgency.
-   Every service card should lead to service details or booking.
-   Keep one primary CTA per section, with secondary actions visually
    quieter.

## 10. Gallery and Visual Portfolio

-   Responsive image grid with varied but deliberate aspect ratios.
-   Filters for categories such as hair, color, nails, makeup, bridal,
    grooming, skin, and spa---only show categories present in content.
-   Keyboard-accessible filters and lightbox.
-   Lightbox should manage focus, close with Escape, and provide
    accessible image labels.
-   Optimize images, specify aspect ratios, and lazy-load below-the-fold
    media.
-   Support image focal points to avoid cropping important details.
-   Include an elegant empty state if no gallery items are configured.
-   Use only imagery the client owns, licenses, or is authorized to
    publish. Obtain consent for identifiable customer photos, especially
    before-and-after images.

## 11. Contact and Local Discovery

Include configurable: - Phone link - Email link - WhatsApp link -
Address and map link/embed - Opening hours and holiday notice -
Parking/accessibility details when supplied - Service area and branch
details - Contact/enquiry form

Support multiple branches through a data model if practical, but do not
overcomplicate a single-location initial deployment. If multi-branch is
enabled, each branch should have its own address, hours, contact
details, and appropriate local SEO metadata.

## 12. SEO and Local SEO

Implement: - Unique page titles and meta descriptions - Canonical URLs
from configured production URL - Open Graph/social metadata - XML
sitemap and `robots.txt` - Semantic headings, landmarks, breadcrumbs,
and internal links - Descriptive image alt text - Clean, readable URLs -
LocalBusiness or the most appropriate supported schema type only with
accurate details - Service structured data where appropriate - Article
schema for journal posts - Accurate address, opening hours, phone, and
price range only when supplied - Location-specific content written
naturally - Search-friendly rendered content - No fake reviews, ratings,
credentials, or schema properties - Staging/preview environments should
not accidentally be indexed

Provide editable SEO title/description fields for key services and
pages. Do not stuff location keywords unnaturally.

## 13. Performance

-   Use framework image optimization.
-   Set image width/height or aspect ratio to reduce layout shift.
-   Prioritize the main hero image where appropriate.
-   Lazy-load below-the-fold images.
-   Use responsive image sizes and modern formats where supported.
-   Load fonts efficiently and include fallbacks.
-   Keep JavaScript bundles small; avoid unnecessary animation and UI
    libraries.
-   Avoid loading map embeds, analytics, chat widgets, or social embeds
    until needed where practical.
-   Aim for strong Core Web Vitals and investigate actual bottlenecks.

## 14. Accessibility

Target WCAG 2.2 AA practices where practical: - Keyboard navigation and
visible focus states - Accessible mobile menu - Semantic HTML and proper
form labels - Inline validation errors linked to fields - Sufficient
text/control contrast - Touch-friendly control sizes - Reduced-motion
support - Accessible dialogs/lightbox with focus management - Status
messages announced to assistive technology - Do not rely on color alone
to communicate status - Skip-to-content link - Avoid text embedded into
images

## 15. Responsive Design

Test at: - 320--375 px mobile - 390--430 px large mobile - 768 px
tablet - 1024 px laptop - 1440 px desktop - 1920 px wide desktop

Verify: - No horizontal overflow - Intentional grid changes at each
breakpoint - Mobile navigation works with keyboard and touch - Hero text
remains readable over imagery - Forms are easy to complete on mobile -
Booking date/time controls work on small screens - Gallery and lightbox
work on touch - Sticky headers/CTAs do not cover content - Buttons and
links have comfortable touch targets

## 16. Security, Privacy, and Reliability

-   Validate all public form input on the server when applicable.
-   Keep secrets in environment variables.
-   Include `.env.example` with variable names only.
-   Add rate limiting and spam protection to public endpoints where
    supported.
-   Collect only information required to process an enquiry or booking.
-   Include a privacy-policy template for business review.
-   Document retention and handling expectations for booking/contact
    data.
-   Avoid exposing private information in logs.
-   Handle missing content, unavailable integrations, and failed
    requests gracefully.
-   Do not claim certifications or legal compliance without
    verification.

## 17. Rebranding Workflow

A non-developer should be able to customize a client site by: 1.
Replacing logo, favicon, fonts, and images. 2. Editing
`src/config/brand.ts`. 3. Editing `src/config/theme.ts`. 4. Updating
service, staff, gallery, offer, FAQ, and testimonial data files. 5.
Enabling/disabling modules in `src/config/features.ts`. 6. Selecting
booking mode and supplying required integration environment variables.
7. Setting the production URL and business SEO information. 8. Running
lint, type-check, tests, and production build. 9. Deploying to the
client's Vercel project and connecting the domain. 10. Testing
booking/contact flow, links, metadata, mobile layout, and sitemap.

Include `REBRANDING.md` documenting: - Exact files to edit - Logo and
image guidance - How to add/remove services and prices - How to add team
members and gallery images - How to configure booking modes - Required
environment variables - Local setup and Vercel deployment - Pre-launch
checklist

Test the rebranding architecture by creating a second sample brand using
configuration/content changes only. Routine rebranding must not require
editing shared components.

## 18. Quality Assurance

### Design

-   [ ] Visual identity is cohesive and polished across pages.
-   [ ] Imagery is appropriate and licensed/approved.
-   [ ] Typography and spacing are consistent.
-   [ ] No placeholder copy or unapproved claims in production.
-   [ ] Disabled modules are fully hidden.

### Functionality

-   [ ] Navigation and CTAs work.
-   [ ] Service filters and service details are correct.
-   [ ] Gallery filters and lightbox work accessibly.
-   [ ] Booking mode behaves honestly.
-   [ ] WhatsApp messages are correctly encoded where enabled.
-   [ ] Contact form validation and submission states work.
-   [ ] Staff profiles, offers, and FAQs work when enabled.
-   [ ] Phone, email, map, and social links are correct.
-   [ ] 404 page is helpful and on-brand.

### Technical

-   [ ] Type-check, lint, tests, and production build pass.
-   [ ] No console errors or hydration warnings.
-   [ ] No horizontal overflow at target widths.
-   [ ] Metadata, canonical URLs, sitemap, and robots are correct.
-   [ ] Images have appropriate alt text.
-   [ ] No secrets are committed.
-   [ ] Environment variables are documented.
-   [ ] Booking/contact failures do not show false success.

### Launch

-   [ ] Business owner approves copy, pricing, offers, images, and staff
    profiles.
-   [ ] Contact details, hours, location, and policies are verified.
-   [ ] Form/booking delivery is tested end-to-end.
-   [ ] Privacy policy and cancellation terms are reviewed.
-   [ ] Domain and HTTPS are verified.
-   [ ] Mobile and desktop smoke tests are complete.

## 19. Implementation Phases

### Phase 1 --- Repository audit and foundation

Inspect stack, dependencies, routes, and current state. Establish design
tokens, fonts, typed brand configuration, feature toggles, shared
layout, header, footer, and navigation. Confirm the app builds.

### Phase 2 --- Homepage and visual system

Build the complete homepage with the configured visual style. Validate
typography, image composition, spacing, and responsive behavior.

### Phase 3 --- Core pages and content models

Build Services, Service Detail, Gallery, About, Contact, Booking, and
Privacy Policy. Add optional Team, Offers, Bridal, Journal, FAQ, and
Membership modules behind feature toggles.

### Phase 4 --- Interactions and booking

Implement service filtering, gallery/lightbox, booking modes, contact
forms, validation, honest success/failure states, and provider adapters.

### Phase 5 --- SEO, accessibility, performance

Implement metadata, sitemap, robots, structured data, keyboard/focus
support, reduced motion, contrast checks, and image/font performance
improvements.

### Phase 6 --- Rebranding and deployment

Write `REBRANDING.md`, `.env.example`, and launch checklist. Validate a
second brand by changing configuration/content only. Run all available
checks and document Vercel deployment.

## 20. Definition of Done

The build is complete only when: - Required pages are implemented and
responsive. - The design feels modern and premium for salon/parlour
businesses. - The product supports unisex, men's, women's, bridal, and
other enabled service types. - Brand, theme, content, and feature
settings are centralized. - Routine rebranding does not require
rewriting shared components. - Booking and enquiry behavior is real or
clearly identified as manual/demo mode. - SEO, accessibility, and
performance basics are implemented. - Type-check, lint, tests, and
production build pass, or pre-existing failures are documented. - A
second sample brand can be configured without changing shared UI code. -
Setup, rebranding, integration, and deployment documentation is
complete.

## 21. Final Antigravity Report

At the end, report: 1. Implemented pages and features 2. Main reusable
components 3. Exact files to edit for rebranding 4. How to add services,
prices, team members, and gallery images 5. Booking modes and required
integrations 6. Environment variables 7. Commands run and results 8. How
to run locally and deploy to Vercel 9. Known limitations and remaining
launch tasks

**Priority:** premium visual quality and responsive UX → rebrandability
→ real booking/enquiry functionality → SEO/accessibility/performance →
documentation and verification.
