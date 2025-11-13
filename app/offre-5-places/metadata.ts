import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Offre 5 Places : Setup SEO + GEO Gratuit (valeur 2 990€)",
  description: "Soyez parmi les 5 premières PME françaises à bénéficier gratuitement d'un setup SEO + GEO complet. Offre limitée pour devenir visible sur ChatGPT, Perplexity et Claude.",
  keywords: [
    "offre gratuite SEO",
    "setup GEO gratuit",
    "optimisation IA gratuite",
    "ChatGPT visibilité",
    "Perplexity SEO",
    "Claude AI",
    "référencement gratuit",
    "audit SEO offert"
  ],
  openGraph: {
    title: "5 entreprises seulement : Setup SEO + GEO offert (2 990€)",
    description: "Bénéficiez gratuitement d'un setup SEO + GEO complet. Places limitées à 5 entreprises pour garantir un accompagnement premium.",
    type: "website",
    images: [
      {
        url: "/og-image-offre-5-places.png",
        width: 1200,
        height: 630,
        alt: "Offre 5 Places - Setup SEO + GEO Gratuit"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Offre 5 Places : Setup SEO + GEO Gratuit (2 990€)",
    description: "Soyez parmi les 5 premières PME à bénéficier d'un setup gratuit. Offre limitée.",
    images: ["/twitter-image-offre-5-places.png"]
  },
  alternates: {
    canonical: "/offre-5-places"
  },
  robots: {
    index: true,
    follow: true
  }
};
