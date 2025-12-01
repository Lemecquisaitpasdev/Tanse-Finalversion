// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import CookieConsent from "./components/CookieConsent";
import AnalyticsWrapper from "./components/AnalyticsWrapper";
import GA4Provider from "./components/GA4Provider";
import PerformanceModal from "./components/PerformanceModal";
import { OptimizationProvider } from "./components/OptimizationProvider";
import { PerformanceProvider } from "./contexts/PerformanceContext";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://www.tanse.fr"),
  title: {
    default: "TANSE — Agence GEO + SEO : ChatGPT, Perplexity, Claude & Google",
    template: "%s — TANSE"
  },
  description: "Agence GEO + SEO : optimisez votre visibilité sur ChatGPT, Perplexity, Claude et Google. Experts en Generative Engine Optimization. Résultats mesurables pour PME et ETI.",
  keywords: [
    "agence GEO",
    "Generative Engine Optimization",
    "ChatGPT visibilité",
    "Perplexity SEO",
    "Claude AI",
    "SEO local",
    "référencement IA",
    "optimisation IA génératives",
    "agence SEO",
    "Google Business Profile",
    "visibilité locale",
    "SEO PME"
  ],
  authors: [{ name: "TANSE" }],
  creator: "TANSE",
  publisher: "TANSE",
  formatDetection: {
    telephone: true,
    email: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" }
    ],
    apple: "/apple-icon.png",
    shortcut: "/icon.png"
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "TANSE",
    title: "TANSE — Agence GEO + SEO : ChatGPT, Perplexity, Claude & Google",
    description: "Agence GEO + SEO : optimisez votre visibilité sur ChatGPT, Perplexity, Claude et Google. Experts en Generative Engine Optimization. Résultats mesurables pour PME et ETI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TANSE — Agence GEO + SEO",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@tanse",
    creator: "@tanse",
    title: "TANSE — Agence GEO + SEO : ChatGPT, Perplexity, Claude & Google",
    description: "Agence GEO + SEO : optimisez votre visibilité sur ChatGPT, Perplexity, Claude et Google. Experts en Generative Engine Optimization.",
    images: ["/twitter-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/"
    }
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  category: "technology"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#444684",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Schema.org Organization global
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TANSE",
    "description": "Agence GEO + SEO spécialisée en Generative Engine Optimization. Experts en visibilité sur ChatGPT, Perplexity, Claude et Google.",
    "url": "https://www.tanse.fr",
    "logo": "https://www.tanse.fr/icon.png",
    "image": "https://www.tanse.fr/og-image.png",
    "founder": {
      "@type": "Person",
      "name": "TANSE Team"
    },
    "foundingDate": "2024",
    "areaServed": {
      "@type": "Place",
      "name": "France"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "48.8566",
        "longitude": "2.3522"
      },
      "geoRadius": "1000000"
    },
    "sameAs": [
      "https://www.linkedin.com/company/tanse",
      "https://twitter.com/tanse"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@tanse.fr",
      "availableLanguage": ["French", "English"]
    }
  };

  // Schema.org LocalBusiness global
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TANSE",
    "description": "Agence GEO + SEO : Optimisation pour Google et IA génératives (ChatGPT, Perplexity, Claude)",
    "url": "https://www.tanse.fr",
    "telephone": "+33-XXX-XXX-XXX",
    "email": "contact@tanse.fr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.8566",
      "longitude": "2.3522"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "€€€",
    "image": "https://www.tanse.fr/og-image.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "47"
    },
    "paymentAccepted": "Credit Card, Bank Transfer, Invoice"
  };

  return (
    <html lang="fr">
      <head>
        {/* Schema.org Global Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Preconnect for faster Spline 3D loading */}
        <link rel="preconnect" href="https://prod.spline.design" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        {/* Preload Hero Spline scene for instant display */}
        <link
          rel="preload"
          href="https://prod.spline.design/l8fan1OYXfoYpgtt/scene.splinecode?v=20251019"
          as="fetch"
          crossOrigin="anonymous"
        />
        {/* Spline Viewer for 3D scenes */}
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.90/build/spline-viewer.js" async />
      </head>
      <body>
        {/* Performance Provider - Gestion mode Qualité/Performance */}
        <PerformanceProvider>
          {/* Optimisations adaptatives Windows/macOS */}
          <OptimizationProvider>
            {children}
            {/* Modal de sélection performance - Première visite */}
            <PerformanceModal />
            {/* Pop-up cookies RGPD */}
            <CookieConsent />
            {/* Analytics avec respect du consentement RGPD */}
            <AnalyticsWrapper />
            {/* Google Analytics 4 */}
            <GA4Provider />
          </OptimizationProvider>
        </PerformanceProvider>
      </body>
    </html>
  );
}