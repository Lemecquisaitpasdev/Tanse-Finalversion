// app/page.tsx
import dynamic from "next/dynamic";

// ⚡ charge léger d'abord, lourd ensuite
const Hero = dynamic(() => import("./components/Hero"));

// below-the-fold (chunk-splitting + fallback propre)
const BrainReflexes = dynamic(() => import("./components/BrainReflexes"), {
  loading: () => <SectionFallback title="Chargement des insights…" />,
});
const DataVisualization = dynamic(() => import("./components/DataVisualization"), {
  // si ce composant utilise des charts côté client, il restera cloisonné automatiquement
  loading: () => <ChartFallback />,
});
const StatsPillars = dynamic(() => import("./components/StatsPillars"), {
  loading: () => <SectionFallback title="Chargement des chiffres…" />,
});
const ComparisonTable = dynamic(() => import("./components/ComparisonTable"), {
  loading: () => <SectionFallback title="Comparatif en cours…" />,
});
const Methodology = dynamic(() => import("./components/Methodology"), {
  loading: () => <SectionFallback title="Notre méthode…" />,
});
const TestimonialsMarquee = dynamic(() => import("./components/TestimonialsMarquee"), {
  loading: () => <SectionFallback title="Avis clients…" />,
});
const PricingPlans = dynamic(() => import("./components/PricingPlans"), {
  loading: () => <SectionFallback title="Forfaits…" />,
});
const FaqAccordion = dynamic(() => import("./components/FaqAccordion"), {
  loading: () => <SectionFallback title="FAQ…" />,
});
const FinalCta = dynamic(() => import("./components/FinalCta"), {
  loading: () => <SectionFallback title="Dernier pas…" />,
});

// composant client OK à importer tel quel
const ScrollToHash = dynamic(() => import("./components/ScrollToHash"), { ssr: false });

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

      {/* 3. Trafic & conversions */}
      <section id="insights" className="anchor">
        <DataVisualization />
      </section>

      {/* 4. Les chiffres */}
      <section id="stats" className="anchor">
        <StatsPillars />
      </section>

      {/* 5. SEO vs GEO */}
      <section id="seo-vs-geo" className="anchor">
        <ComparisonTable />
      </section>

      {/* 6. Notre méthode */}
      <section id="methodology" className="anchor">
        <Methodology />
      </section>

      {/* 7. Avis */}
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

/* ---------------- Fallbacks ultra simples (SSR-safe) ---------------- */
function SectionFallback({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="h-7 w-64 rounded-lg bg-black/5" aria-hidden />
      <p className="mt-3 text-sm text-neutral-500">{title}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="h-28 rounded-2xl bg-black/5" />
        <div className="h-28 rounded-2xl bg-black/5" />
        <div className="h-28 rounded-2xl bg-black/5" />
      </div>
    </div>
  );
}

function ChartFallback() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="h-7 w-64 rounded-lg bg-black/5" aria-hidden />
      <div className="mt-6 h-64 rounded-2xl bg-black/5" aria-hidden />
      <p className="mt-3 text-xs text-neutral-500">Préparation du graphique…</p>
    </div>
  );
}