import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit GEO Gratuit",
  description:
    "Obtenez un audit gratuit de votre visibilité sur les moteurs IA (ChatGPT, Perplexity, Claude). Analyse complète, recommandations personnalisées et plan d'action.",
  keywords: [
    "audit GEO gratuit",
    "audit visibilité IA",
    "analyse ChatGPT",
    "audit SEO local",
    "diagnostic GEO",
    "évaluation visibilité",
    "audit gratuit TANSE",
    "analyse Perplexity",
    "audit Claude AI"
  ],
  openGraph: {
    title: "Audit GEO Gratuit — TANSE",
    description: "Obtenez un audit gratuit de votre visibilité sur les moteurs IA. Analyse complète et recommandations personnalisées.",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "/audit-gratuit"
  }
};

export default function AuditGratuitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
