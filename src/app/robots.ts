import { MetadataRoute } from "next";
import { brandConfig } from "@/config/brand";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*"],
      },
    ],
    sitemap: `${brandConfig.seo.siteUrl}/sitemap.xml`,
  };
}
