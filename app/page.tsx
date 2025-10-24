// app/page.tsx
"use client";

import dynamic from "next/dynamic";
import { useIsMobile } from "./hooks/useIsMobile";

const Hero = dynamic(() => import("./components/Hero"));
const MobileHero = dynamic(() => import("./components/MobileHero"), { ssr: false });
const BrainReflexes = dynamic(() => import("./components/BrainReflexes"), { ssr: false });
const DataVisualization = dynamic(() => import("./components/DataVisualization"), { ssr: false });
const StatsPillars = dynamic(() => import("./components/StatsPillars"));
const ComparisonTable = dynamic(() => import("./components/ComparisonTable"));
const Methodology = dynamic(() => import("./components/Methodology"), { ssr: false });
const TestimonialsMarquee = dynamic(() => import("./components/TestimonialsMarquee"));
const PricingPlans = dynamic(() => import("./components/PricingPlans"));
const FaqAccordion = dynamic(() => import("./components/FaqAccordion"));
const FinalCta = dynamic(() => import("./components/FinalCta"), { ssr: false });
const ScrollToHash = dynamic(() => import("./components/ScrollToHash"), { ssr: false });

// ⬇️ IMPORTANT : .then(m => m.default) pour pointer explicitement sur le default export
const SiteFooter = dynamic(() => import("./components/SiteFooter").then(m => m.default), {
  ssr: false,
});

function ResponsiveHero() {
  const isMobile = useIsMobile();

  // Sur mobile (≤768px), afficher MobileHero avec la nouvelle scène Spline
  if (isMobile === true) {
    return <MobileHero />;
  }

  // Sur desktop (>768px) ou pendant SSR, afficher le Hero classique
  return <Hero />;
}

export default function Page() {
  return (
    <main>
      <ScrollToHash />
      <section id="hero" className="anchor"><ResponsiveHero /></section>
      <section id="reflexes" className="anchor"><BrainReflexes /></section>
      <section id="insights" className="anchor"><DataVisualization variant="wide" /></section>
      <section id="stats" className="anchor"><StatsPillars /></section>
      <section id="seo-vs-geo" className="anchor"><ComparisonTable /></section>
      <section id="methodology" className="anchor"><Methodology /></section>
      <section id="trust" className="anchor"><TestimonialsMarquee /></section>
      <section id="pricing" className="anchor"><PricingPlans /></section>
      <section id="faq" className="anchor"><FaqAccordion /></section>
      <section id="final-cta" className="anchor"><FinalCta /></section>

      {/* Footer rendu côté client */}
      <SiteFooter />
    </main>
  );
}