// app/page.tsx
import Hero from "./components/Hero";
import BrainReflexes from "./components/BrainReflexes";
import DataVisualization from "./components/DataVisualization"; // ⬅️ charts
import StatsPillars from "./components/StatsPillars";
import ComparisonTable from "./components/ComparisonTable";
import Methodology from "./components/Methodology";
import TestimonialsMarquee from "./components/TestimonialsMarquee";
import PricingPlans from "./components/PricingPlans";
import FaqAccordion from "./components/FaqAccordion";
import FinalCta from "./components/FinalCta";
import ScrollToHash from "./components/ScrollToHash";

export default function Page() {
  return (
    <main>
      <ScrollToHash />

      {/* 1. Hero */}
      <section id="hero" className="anchor">
        <Hero />
      </section>

      {/* 2. Les réflexes changent */}
      <section id="reflexes" className="anchor">
        <BrainReflexes />
      </section>

      {/* 3. Trafic & conversions (déplacé ici + version large) */}
      <section id="insights" className="anchor">
        <DataVisualization variant="wide" />
      </section>

      {/* 4. Les chiffres */}
      <section id="stats" className="anchor">
        <StatsPillars />
      </section>

      {/* 5. SEO vs GEO (comparatif) */}
      <section id="seo-vs-geo" className="anchor">
        <ComparisonTable />
      </section>

      {/* 6. Notre méthode */}
      <section id="methodology" className="anchor">
        <Methodology />
      </section>

      {/* 7. Ce qu’on dit de TANSE */}
      <section id="trust" className="anchor">
        <TestimonialsMarquee />
      </section>

      {/* 8. Forfaits */}
      <section id="pricing" className="anchor">
        <PricingPlans />
      </section>

      {/* 9. FAQ */}
      <section id="faq" className="anchor">
        <FaqAccordion />
      </section>

      {/* 10. CTA final */}
      <section id="final-cta" className="anchor">
        <FinalCta />
      </section>
    </main>
  );
}