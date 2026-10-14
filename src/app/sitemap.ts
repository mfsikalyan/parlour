import { MetadataRoute } from "next";
import { brandConfig } from "@/config/brand";
import { featureFlags } from "@/config/features";
import { servicesData } from "@/content/services";
import { teamData } from "@/content/team";
import { journalArticles } from "@/content/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = brandConfig.seo.siteUrl;
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/technology`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  if (featureFlags.bridal) {
    routes.push({
      url: `${baseUrl}/bridal`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  if (featureFlags.gallery) {
    routes.push({
      url: `${baseUrl}/gallery`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  if (featureFlags.team) {
    routes.push({
      url: `${baseUrl}/team`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  if (featureFlags.offers) {
    routes.push({
      url: `${baseUrl}/offers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  if (featureFlags.journal) {
    routes.push({
      url: `${baseUrl}/journal`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  if (featureFlags.faq) {
    routes.push({
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // Dynamic Service routes
  servicesData.forEach((service) => {
    routes.push({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // Dynamic Stylist routes
  if (featureFlags.team) {
    teamData
      .filter((t) => t.active)
      .forEach((member) => {
        routes.push({
          url: `${baseUrl}/team/${member.slug}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.6,
        });
      });
  }

  // Dynamic Journal routes
  if (featureFlags.journal) {
    journalArticles.forEach((article) => {
      routes.push({
        url: `${baseUrl}/journal/${article.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  }

  return routes;
}
