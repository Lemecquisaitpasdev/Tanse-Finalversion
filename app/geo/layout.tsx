import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEO — Generative Engine Optimization",
  description: "Optimisez votre visibilité sur ChatGPT, Perplexity et Claude avec le GEO (Generative Engine Optimization). Soyez recommandé par les IA génératives avant vos concurrents.",
  keywords: [
    "GEO",
    "Generative Engine Optimization",
    "ChatGPT SEO",
    "Perplexity optimisation",
    "Claude AI visibilité",
    "IA génératives marketing",
    "optimisation IA",
    "référencement IA",
    "LLM optimization",
    "AI search optimization"
  ],
  openGraph: {
    title: "GEO — Generative Engine Optimization — TANSE",
    description: "Optimisez votre visibilité sur ChatGPT, Perplexity et Claude avec le GEO (Generative Engine Optimization). Soyez recommandé par les IA génératives avant vos concurrents.",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "/geo"
  }
};

export default function GeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
