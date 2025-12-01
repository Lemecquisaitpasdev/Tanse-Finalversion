import { Metadata } from 'next';
import OffreCinqPlacesClient from './OffreCinqPlacesClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Offre 5 Places : Setup SEO + GEO Offert (1490€)",
  description: "Profitez d'un setup SEO + GEO complet gratuit (valeur 1490€). Seulement 5 entreprises sélectionnées. Optimisation Google + ChatGPT + Perplexity. Candidatez maintenant.",
  keywords: [
    "setup SEO gratuit",
    "offre limitée GEO",
    "optimisation gratuite",
    "Google Business Profile",
    "visibilité ChatGPT",
    "audit SEO offert",
    "configuration GEO gratuite",
    "setup local SEO",
    "optimisation IA génératives"
  ],
  openGraph: {
    title: "Offre Limitée : Setup SEO + GEO Offert (1490€) — TANSE",
    description: "5 places seulement pour un setup complet gratuit. Optimisation Google, ChatGPT, Perplexity. Candidatez maintenant.",
    type: "website",
    url: "https://www.tanse.fr/offre-5-places"
  },
  twitter: {
    card: "summary_large_image",
    title: "Offre Limitée : Setup SEO + GEO Offert (1490€)",
    description: "5 places seulement. Setup complet gratuit. Candidatez maintenant."
  },
  alternates: {
    canonical: "/offre-5-places"
  },
  robots: {
    index: true,
    follow: true
  }
};

/**
 * Page Server Component pour /offre-5-places
 * Contient metadata SEO complète + breadcrumb + Schema.org Offer
 * Délègue le contenu interactif à OffreCinqPlacesClient
 */
export default function OffreCinqPlacesPage() {
  // Schema.org Offer pour SEO
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Setup SEO + GEO Offert",
    "description": "Setup complet SEO + GEO offert pour 5 entreprises sélectionnées. Configuration Google Business Profile, optimisation pour ChatGPT, Perplexity, et moteurs IA. Valeur 1490€.",
    "price": "0",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/LimitedAvailability",
    "availableAtOrFrom": {
      "@type": "Place",
      "name": "France"
    },
    "validThrough": "2025-12-31",
    "itemOffered": {
      "@type": "Service",
      "name": "Setup SEO + GEO Complet",
      "description": "Configuration complète incluant Google Business Profile, Schema.org, optimisation ChatGPT, Perplexity, et suivi 3 mois",
      "provider": {
        "@type": "Organization",
        "name": "TANSE",
        "url": "https://www.tanse.fr"
      }
    },
    "eligibleQuantity": {
      "@type": "QuantitativeValue",
      "value": "5",
      "unitText": "places disponibles"
    }
  };

  return (
    <>
      {/* Schema.org Offer JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />

      {/* Breadcrumb SEO */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" href="/">
              <span itemProp="name">Accueil</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Offre 5 Places</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>

      {/* Client Component avec formulaire et interactivité */}
      <OffreCinqPlacesClient />
    </>
  );
}
