import { brandConfig } from "@/config/brand";
import { ServiceItem } from "@/content/services";
import { JournalArticle } from "@/content/journal";
import { FAQItem } from "@/content/faqs";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: brandConfig.name,
    legalName: brandConfig.legalName,
    url: brandConfig.seo.siteUrl,
    telephone: brandConfig.phone,
    email: brandConfig.email,
    image: `${brandConfig.seo.siteUrl}${brandConfig.seo.ogImage}`,
    description: brandConfig.positioning,
    priceRange: "₹₹ - ₹₹₹",
    currenciesAccepted: brandConfig.currency.code,
    paymentAccepted: "Cash, Credit Card, UPI, Debit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${brandConfig.address.street}, ${brandConfig.address.area}`,
      addressLocality: brandConfig.address.city,
      addressRegion: brandConfig.address.state,
      postalCode: brandConfig.address.pincode,
      addressCountry: brandConfig.address.country,
    },
    openingHoursSpecification: brandConfig.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.open.replace(" AM", ":00").replace(" PM", ":00"),
      closes: h.close.replace(" AM", ":00").replace(" PM", ":00"),
    })),
    sameAs: Object.values(brandConfig.socials).filter(Boolean),
  };
}

export function generateServiceSchema(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.categoryLabel,
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "BeautySalon",
      name: brandConfig.name,
      url: brandConfig.seo.siteUrl,
    },
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: brandConfig.currency.code,
      availability: "https://schema.org/InStock",
    },
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: JournalArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: brandConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${brandConfig.seo.siteUrl}/images/logo.png`,
      },
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${brandConfig.seo.siteUrl}${item.url}`,
    })),
  };
}
