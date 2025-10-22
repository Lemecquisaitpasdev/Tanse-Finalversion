// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import SplineViewerProvider from "./components/SplineViewerProvider";
import StructuredData from "./components/StructuredData";

// Note: next/font est commenté temporairement pour le build local (pas d'accès internet)
// En production sur Vercel, décommenter ces lignes :
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tanse.io'),
  title: {
    default: "TANSE — Visibilité locale & GEO",
    template: "%s | TANSE",
  },
  description: "Rendre votre offre immanquable au moment d'intention. Optimisation SEO et GEO pour PME, avec focus sur Google Business Profile et moteurs de réponse IA.",
  keywords: ["SEO local", "GEO", "Google Business Profile", "visibilité locale", "référencement local", "IA générative", "PME"],
  authors: [{ name: "TANSE" }],
  creator: "TANSE",
  publisher: "TANSE",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "TANSE",
    title: "TANSE — Visibilité locale & GEO",
    description: "Rendre votre offre immanquable au moment d'intention. Optimisation SEO et GEO pour PME.",
    images: [
      {
        url: "/brand/tanse-logo.png",
        width: 960,
        height: 240,
        alt: "TANSE Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TANSE — Visibilité locale & GEO",
    description: "Rendre votre offre immanquable au moment d'intention.",
    images: ["/brand/tanse-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Non-blocking DNS hints for Spline domains */}
        <link rel="preconnect" href="https://prod.spline.design" />
        <link rel="preconnect" href="https://unpkg.com" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        <link rel="dns-prefetch" href="https://unpkg.com" />

        {/* Schema.org structured data */}
        <StructuredData type="Organization" />
        <StructuredData type="WebSite" />
        <StructuredData type="Service" />
      </head>
      <body className="font-sans">
        {/* Enregistre <spline-viewer> une seule fois pour toute l'app */}
        <SplineViewerProvider />
        {children}
      </body>
    </html>
  );
}