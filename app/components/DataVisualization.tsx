"use client";

import dynamic from "next/dynamic";

// Lazy-load des charts Recharts (352KB) pour améliorer le FCP/LCP
const DataVisualizationCharts = dynamic(
  () => import("./DataVisualizationCharts"),
  {
    loading: () => (
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Skeleton pour évolution du trafic */}
        <div className="rounded-3xl border border-black/10 bg-white shadow-[0_18px_64px_-24px_rgba(0,0,0,0.25)] p-6 md:p-8 animate-pulse" style={{ height: 520 }}>
          <div className="h-4 w-32 bg-gray-200 rounded mb-3"></div>
          <div className="h-px w-full bg-black/5 mb-4"></div>
          <div className="h-full w-full bg-gray-100 rounded"></div>
        </div>
        {/* Skeleton pour taux de conversion */}
        <div className="rounded-3xl border border-black/10 bg-white shadow-[0_18px_64px_-24px_rgba(0,0,0,0.25)] p-6 md:p-8 animate-pulse" style={{ height: 520 }}>
          <div className="h-4 w-48 bg-gray-200 rounded mb-3"></div>
          <div className="h-px w-full bg-black/5 mb-4"></div>
          <div className="h-full w-full bg-gray-100 rounded"></div>
        </div>
      </div>
    ),
    ssr: false, // Désactive SSR pour Recharts (pas nécessaire pour charts interactifs)
  }
);

type Variant = "default" | "wide";

export default function DataVisualization({ variant = "wide" }: { variant?: Variant }) {
  const containerWidth = variant === "wide" ? "max-w-[1400px]" : "max-w-6xl";

  return (
    <section
      className="relative -mt-8 md:-mt-12 pt-12 md:pt-16 pb-20 md:pb-28"
      style={{ background: "#E4E4E4" }}
    >
      <div className={`mx-auto w-full ${containerWidth} px-6`}>
        <h2 className="mb-3 text-3xl md:text-4xl font-semibold text-neutral-900">Trafic & conversions</h2>
        <p className="mb-8 max-w-3xl text-neutral-800">
          Les parcours évoluent vers les moteurs de réponse : la part LLM progresse
          ainsi que les taux de conversion s'améliorent.
        </p>

        {/* Charts lazy-loadés */}
        <DataVisualizationCharts variant={variant} />
      </div>
    </section>
  );
}
