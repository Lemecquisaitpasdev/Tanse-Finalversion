// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import SplineViewerProvider from "./components/SplineViewerProvider";
import CookieConsent from "./components/CookieConsent";
import AnalyticsWrapper from "./components/AnalyticsWrapper";
import { OptimizationProvider } from "./components/OptimizationProvider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://www.tanse.fr"),
  title: {
    default: "TANSE — Visibilité locale & SEO pour PME et grands groupes",
    template: "%s — TANSE"
  },
  description: "Optimisation locale SEO + GEO pour être trouvé par vos clients. Fiche Google Business, citations, site web optimisé. Visible, mesurable, rentable.",
  keywords: [
    "SEO local",
    "référencement local",
    "Google Business Profile",
    "visibilité locale",
    "SEO PME",
    "agence SEO",
    "optimisation Google",
    "marketing local"
  ],
  authors: [{ name: "TANSE" }],
  creator: "TANSE",
  publisher: "TANSE",
  formatDetection: {
    telephone: true,
    email: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png"
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "TANSE",
    title: "TANSE — Visibilité locale & SEO pour PME",
    description: "Optimisation locale SEO + GEO pour être trouvé par vos clients. Fiche Google Business, citations, site web optimisé.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TANSE — Visibilité locale & SEO",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@tanse",
    creator: "@tanse",
    title: "TANSE — Visibilité locale & SEO pour PME",
    description: "Optimisation locale SEO + GEO pour être trouvé par vos clients. Visible, mesurable, rentable.",
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
  return (
    <html lang="fr">
      <head>
        {/* Preconnect and preload Spline for instant 3D loading */}
        <link rel="preconnect" href="https://prod.spline.design" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <link
          rel="modulepreload"
          href="https://unpkg.com/@splinetool/viewer@1.10.82/build/spline-viewer.js"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Optimisations adaptatives Windows/macOS */}
        <OptimizationProvider>
          {/* Enregistre <spline-viewer> une seule fois pour toute l'app */}
          <SplineViewerProvider />
          {children}
          {/* Pop-up cookies RGPD */}
          <CookieConsent />
          {/* Analytics avec respect du consentement RGPD */}
          <AnalyticsWrapper />
        </OptimizationProvider>
      </body>
    </html>
  );
}