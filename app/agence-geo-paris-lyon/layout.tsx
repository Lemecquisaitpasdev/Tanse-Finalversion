import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre histoire & Notre équipe",
  description:
    "Pourquoi TANSE existe, nos jalons par année, et l'équipe qui vous accompagne sur le SEO local, le GEO et la performance web.",
  keywords: [
    "agence GEO Paris",
    "agence GEO Lyon",
    "équipe TANSE",
    "histoire TANSE",
    "experts SEO local",
    "agence SEO Paris",
    "agence SEO Lyon",
    "Generative Engine Optimization"
  ],
  openGraph: {
    title: "Notre histoire & Notre équipe — TANSE",
    description: "Pourquoi TANSE existe, nos jalons par année, et l'équipe qui vous accompagne sur le SEO local, le GEO et la performance web.",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "/agence-geo-paris-lyon"
  }
};

export default function EntrepriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
