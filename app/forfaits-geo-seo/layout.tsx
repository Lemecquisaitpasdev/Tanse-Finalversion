import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forfaits & Tarifs SEO + GEO",
  description: "Découvrez nos forfaits SEO et GEO : Maintenance mensuelle à 920€, Pack Complet à 2490€, ou solutions sur-mesure pour grands groupes. Démarrage sous 5 jours ouvrés.",
  keywords: [
    "tarifs SEO",
    "prix GEO",
    "forfait SEO local",
    "pack SEO GEO",
    "maintenance SEO",
    "refonte site web",
    "optimisation locale",
    "Google Business Profile",
    "tarification SEO",
    "devis SEO"
  ],
  openGraph: {
    title: "Forfaits & Tarifs SEO + GEO — TANSE",
    description: "Découvrez nos forfaits SEO et GEO : Maintenance mensuelle à 920€, Pack Complet à 2490€, ou solutions sur-mesure pour grands groupes. Démarrage sous 5 jours ouvrés.",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "/forfaits-geo-seo"
  }
};

export default function ForfaitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
