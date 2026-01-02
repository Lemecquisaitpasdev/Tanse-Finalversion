import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Valeurs",
  description:
    "Découvrez les valeurs qui guident TANSE : innovation, transparence et excellence dans le SEO et le GEO. Notre vision pour transformer la visibilité en ligne.",
  keywords: [
    "valeurs TANSE",
    "vision TANSE",
    "culture entreprise",
    "agence SEO valeurs",
    "innovation SEO",
    "transparence",
    "excellence GEO"
  ],
  openGraph: {
    title: "Nos Valeurs — TANSE",
    description: "Découvrez les valeurs qui guident TANSE : innovation, transparence et excellence dans le SEO et le GEO.",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "/valeurs"
  }
};

export default function ValeursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
