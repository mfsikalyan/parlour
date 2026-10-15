import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { brandConfig } from "@/config/brand";
import { getThemeCssVariables } from "@/config/theme";
import { generateLocalBusinessSchema } from "@/lib/seo";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";

const cinzel = Cinzel({
  variable: "--font-heading-font",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body-font",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0c0d10",
};

export const metadata: Metadata = {
  metadataBase: new URL(brandConfig.seo.siteUrl),
  title: {
    default: brandConfig.seo.defaultTitle,
    template: brandConfig.seo.titleTemplate,
  },
  description: brandConfig.seo.defaultDescription,
  keywords: brandConfig.seo.keywords,
  authors: [{ name: brandConfig.name }],
  creator: brandConfig.name,
  publisher: brandConfig.legalName,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: brandConfig.seo.siteUrl,
    title: brandConfig.seo.defaultTitle,
    description: brandConfig.seo.defaultDescription,
    siteName: brandConfig.name,
    images: [
      {
        url: brandConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${brandConfig.name} - Hair, Skin & Bridal Artistry`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brandConfig.seo.defaultTitle,
    description: brandConfig.seo.defaultDescription,
    images: [brandConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeVars = getThemeCssVariables();
  const themeStyles = Object.entries(themeVars)
    .map(([key, val]) => `${key}: ${val};`)
    .join(" ");

  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: `:root { ${themeStyles} }` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-text)] pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0 w-full max-w-full overflow-x-clip relative">
        <AnnouncementBar />
        <SiteHeader />
        <main id="main-content" className="flex-1 w-full min-w-0 max-w-full overflow-x-clip">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppWidget />
        <MobileBottomBar />
      </body>
    </html>
  );
}
