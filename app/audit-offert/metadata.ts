import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Audit SEO + GEO Offert - TANSE | Analyse Gratuite sous 48h",
  description: "Obtenez gratuitement votre audit SEO + GEO complet. Découvrez votre visibilité sur Google et les IA génératives (ChatGPT, Perplexity, Claude). Livré sous 48h avec benchmark concurrentiel.",
  keywords: [
    "audit SEO gratuit",
    "audit GEO gratuit",
    "analyse visibilité IA",
    "ChatGPT entreprise",
    "Perplexity SEO",
    "Claude AI visibilité",
    "audit SEO offert",
    "benchmark concurrentiel gratuit"
  ],
  openGraph: {
    title: "Audit SEO + GEO Offert - Analyse Gratuite sous 48h",
    description: "Découvrez gratuitement votre visibilité sur Google et les IA génératives. Audit complet + benchmark concurrentiel livré sous 48h.",
    type: "website",
    images: [
      {
        url: "/og-image-audit-offert.png",
        width: 1200,
        height: 630,
        alt: "Audit SEO + GEO Offert - TANSE"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit SEO + GEO Offert - TANSE",
    description: "Audit gratuit de votre visibilité sur Google et les IA génératives. Sous 48h.",
    images: ["/twitter-image-audit-offert.png"]
  },
  alternates: {
    canonical: "/audit-offert"
  },
  robots: {
    index: true,
    follow: true
  }
};
