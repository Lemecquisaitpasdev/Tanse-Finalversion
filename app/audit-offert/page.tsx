import { Metadata } from 'next';
import AuditOffertClient from './AuditOffertClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Audit SEO + GEO Gratuit : Analysez Votre Visibilité",
  description: "Obtenez gratuitement votre audit SEO + GEO complet. Analyse de votre visibilité sur Google et les IA génératives (ChatGPT, Perplexity, Claude). Rapport sous 48h avec benchmark concurrentiel.",
  keywords: [
    "audit SEO gratuit",
    "audit GEO",
    "analyse visibilité IA",
    "ChatGPT visibilité",
    "share of voice",
    "benchmark concurrentiel",
    "audit SEO local",
    "diagnostic SEO",
    "visibilité Google",
    "optimisation IA génératives"
  ],
  openGraph: {
    title: "Audit SEO + GEO Gratuit — TANSE",
    description: "Analyse complète de votre visibilité sur Google ET les IA génératives. Rapport détaillé sous 48h. 100% gratuit.",
    type: "website",
    url: "https://www.tanse.fr/audit-offert"
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit SEO + GEO Gratuit — TANSE",
    description: "Découvrez votre visibilité sur Google et les IA (ChatGPT, Perplexity, Claude). Gratuit sous 48h."
  },
  alternates: {
    canonical: "/audit-offert"
  },
  robots: {
    index: true,
    follow: true
  }
};

/**
 * Page Server Component pour /audit-offert
 * Contient metadata SEO complète + breadcrumb
 * Délègue le contenu interactif à AuditOffertClient
 */
export default function AuditOffertPage() {
  return (
    <>
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
            <span itemProp="name">Audit Gratuit</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>

      {/* Client Component avec formulaire et interactivité */}
      <AuditOffertClient />
    </>
  );
}
