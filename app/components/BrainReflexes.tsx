"use client";

import { useEffect, useRef, useState } from "react";
import SectionFrame from "./SectionFrame";
import SplineLazy from "./SplineLazy";
import { useOptimization } from "./OptimizationProvider";

const BRAIN_SCENE_URL =
  process.env.NEXT_PUBLIC_BRAIN_URL ||
  "https://prod.spline.design/XSkv44gM1WnjUqWh/scene.splinecode";

const STATS = [
  { value: "+212%", label: "recherches via IA en 2025" },
  { value: "70%", label: "des recherches locales via assistants" },
  { value: "60%", label: "plus de confiance pour une recommandation IA" },
  { value: "+48%", label: "taux de conversion moyen après adaptation" },
];

/**
 * OPTIMISÉ WINDOWS:
 * - Lazy-load Spline (charge uniquement quand visible)
 * - Suppression willChange (inutile)
 * - Blur remplacé par box-shadow (moins coûteux GPU)
 * - Animations adaptatives selon OS/GPU
 */
export default function BrainReflexes() {
  const config = useOptimization();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          // Déconnexion après activation (économie mémoire)
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <SectionFrame id="reflexes" className="bg-[#E4E4E4]">
      <div ref={sectionRef} className="w-full max-w-[1200px] mx-auto px-5 md:px-10 py-16 md:py-28">
        {/* Mobile: Stack vertical (texte → animation → stats) */}
        {/* Desktop: Grid (texte left | animation right) avec stats inline */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-start">
          {/* Texte */}
          <div className="order-1">
            <p className="text-xs tracking-[0.25em] text-neutral-500 mb-4">
              CHANGEMENT DE COMPORTEMENT
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Les réflexes changent.
            </h2>

            <div className="space-y-4 text-neutral-700 leading-relaxed max-w-xl">
              <p>
                Autrefois, vos clients <strong className="text-[#444684]">cherchaient</strong> — ils
                tapaient des mots-clés, comparaient et cliquaient. Aujourd’hui,
                pour la première fois dans l’histoire du web, la part de
                recherches via navigateur a nettement diminué. En{" "}
                <strong className="text-[#444684]">2025</strong>, ce mouvement s’est
                accéléré. Les consommateurs <strong className="text-[#444684]">posent des questions à une IA</strong> et obtiennent une réponse unique
                souvent suffisante pour agir.
              </p>

              <p>
                En <strong className="text-[#444684]">2025</strong>, plus de{" "}
                <strong className="text-[#444684]">70 %</strong> des recherches locales passent par
                des assistants conversationnels. Les utilisateurs ne veulent plus
                « naviguer ». Ils veulent comprendre et décider immédiatement.
              </p>

              <p>
                Les moteurs n’affichent plus seulement des liens. Ils interprètent
                l’intention, filtrent les signaux de confiance et{" "}
                <strong className="text-[#444684]">recommandent</strong> ce qui paraît le plus
                fiable. La confiance s’est déplacée{" "}
                <strong className="text-[#444684]">du navigateur vers la réponse</strong>. Les
                études montrent qu’un utilisateur accorde environ{" "}
                <strong className="text-[#444684]">60 %</strong> de confiance en plus à une
                recommandation d’un assistant (ex. ChatGPT) qu’à un simple lien.
              </p>

              <p>
                Ce changement impacte la visibilité mais surtout la conversion et
                le chiffre d’affaires. Les entreprises qui adaptent leur présence
                au langage des IA constatent des gains mesurables en trafic
                qualifié, en conversions et en revenus.
              </p>

              <p>
                <strong className="text-[#444684]">TANSE</strong> structure votre visibilité pour
                qu’elle soit comprise par les intelligences conversationnelles et
                choisie par les humains.
              </p>
            </div>

            {/* Stat cards - Desktop only (on mobile shown after animation) */}
            <div className="mt-8 hidden md:grid grid-cols-2 gap-4 max-w-xl">
              {STATS.map((s) => (
                <div
                  key={s.value}
                  className="relative rounded-2xl bg-white p-4 shadow-md transition-transform transform hover:-translate-y-1 border border-transparent"
                  style={{ boxShadow: "0 8px 28px rgba(3,7,18,0.06)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-lg font-bold" style={{ color: "#444684" }}>
                      {s.value}
                    </div>
                    <div className="text-xs text-neutral-600">{s.label}</div>
                  </div>

                  {/* Effet glow optimisé - box-shadow au lieu de blur (90% moins coûteux GPU) */}
                  <div
                    aria-hidden
                    className="absolute -right-6 -top-6 w-20 h-20 rounded-full pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 30% 30%, rgba(68,70,132,0.12), transparent 60%)",
                      boxShadow: "0 0 40px 20px rgba(68,70,132,0.08)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Animation Spline lazy-loaded */}
          <div
            className={`relative flex items-center justify-center transition-all ease-out order-2 md:order-2 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              transitionDuration: `${500 * config.animationDuration}ms`
            }}
          >
            <div className="w-full max-w-[320px] h-[280px] md:max-w-full md:h-[520px] lg:h-[640px] mx-auto rounded-3xl md:rounded-none">
              <SplineLazy
                url={BRAIN_SCENE_URL}
                className="block w-full h-full"
                onLoad={(spline: any) => {
                  // Dézoomer la caméra pour voir plus de contenu
                  if (spline && spline.setZoom) {
                    spline.setZoom(0.6);
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Stat cards - Mobile only (shown after animation) */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:hidden">
          {STATS.map((s) => (
            <div
              key={s.value}
              className="relative rounded-xl bg-[#f8fafc] p-5 border border-transparent"
            >
              <div className="text-center space-y-2">
                <div className="text-[32px] font-bold text-[#6366f1]">
                  {s.value}
                </div>
                <div className="text-xs text-[#64748b] leading-tight">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}