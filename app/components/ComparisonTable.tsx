// app/components/ComparisonTable.tsx
"use client";

import SectionFrame from "./SectionFrame";
import { useOptimization } from "./OptimizationProvider";

/** Petit check inline (plus besoin de lucide-react) */
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20 7L9 18l-5-5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Tableau comparatif SEO vs GEO
const comparisons = [
  { criterion: "Visibilité",        seo: "Position dans les résultats",     geo: "Recommandation directe par l'IA", winner: "geo" },
  { criterion: "Intention d'achat", seo: "Faible — recherche exploratoire", geo: "Élevée — question précise",        winner: "geo" },
  { criterion: "Taux de conversion",seo: "2–3% en moyenne",                 geo: "12–18% en moyenne",                winner: "geo" },
  { criterion: "Coût par acquisition", seo: "Moyen à élevé",                geo: "Faible à moyen",                   winner: "geo" },
  { criterion: "Durabilité",        seo: "Requiert maintenance constante",  geo: "Plus stable dans le temps",        winner: "geo" },
];

export default function ComparisonTable() {
  const config = useOptimization();

  // Adaptive hover transition - enabled on macOS, disabled on Windows low-end
  const hoverTransition = config.enableComplexAnimations ? "transition-colors" : "";

  return (
    <SectionFrame id="seo-geo-comparison" className="bg-white">
      {/* Container + respiration verticale */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 py-12 md:py-16">
        {/* Titre centré (même style que Hero / Réflexes) */}
        <header className="mb-10 md:mb-12 text-center">
          <p className="text-xs tracking-[0.25em] text-neutral-500 mb-3">
            COMPARAISON
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            GEO vs SEO — quelle approche sert le mieux votre business ?
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-600 max-w-3xl mx-auto">
            Un aperçu rapide des forces de chaque approche et de ce que cela
            signifie pour vos conversions et votre revenu.
          </p>
        </header>

        {/* Carte du tableau */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* En-tête du tableau */}
          <div className="grid grid-cols-3 gap-4 p-6 md:p-8 border-b border-slate-200">
            <div className="text-slate-500 font-medium text-left">Critère</div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-slate-100">
                <span className="text-slate-800 font-semibold">
                  SEO Classique
                </span>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#444684] text-white">
                <span className="font-semibold">GEO (LLM)</span>
              </div>
            </div>
          </div>

          {/* Lignes */}
          {comparisons.map((item, i) => (
            <div
              key={`comparison-${item.criterion.slice(0, 20)}`}
              className={`grid grid-cols-3 gap-4 p-6 md:p-8 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 ${hoverTransition}`}
            >
              <div className="font-semibold text-slate-900 text-left">
                {item.criterion}
              </div>

              <div
                className={`text-center ${
                  item.winner === "seo"
                    ? "text-slate-900 font-medium"
                    : "text-slate-500"
                }`}
              >
                {item.seo}
              </div>

              <div
                className={`text-center ${
                  item.winner === "geo"
                    ? "text-[#444684] font-semibold"
                    : "text-slate-500"
                }`}
              >
                {item.geo}
                {item.winner === "geo" && (
                  <span className="ml-2 inline-flex w-6 h-6 items-center justify-center rounded-full bg-[#444684]/10 text-[#444684] align-middle">
                    <CheckIcon className="w-4 h-4" />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}