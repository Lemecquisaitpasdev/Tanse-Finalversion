"use client";

import { useEffect, useRef, useState } from "react";
import SplineLazy from "./SplineLazy";
import { useOptimization } from "./OptimizationProvider";

/**
 * OPTIMISÉ WINDOWS:
 * - Lazy-load Spline (charge uniquement quand visible)
 * - Suppression willChange (inutile et force GPU layer)
 * - Animations adaptatives selon OS/GPU
 */
export default function FinalCta() {
  const config = useOptimization();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Économie mémoire
        }
      },
      { threshold: 0.1, rootMargin: "30px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="final-cta" className="section-guard bg-[#E4E4E4] py-16 md:py-24">
      <div ref={sectionRef} className="content-wrap max-w-7xl mx-auto px-5 md:px-0">
        {/* Layout mobile: Stack vertical (texte → animation → CTA) */}
        {/* Layout desktop: Grid (texte left | animation right) */}

        {/* Mobile: Stack vertical */}
        <div className="md:hidden flex flex-col space-y-8">
          {/* Texte */}
          <div>
            <p className="text-xs tracking-[.25em] uppercase text-neutral-500 mb-4 text-center">
              Dernière étape
            </p>
            <h2 className="text-[32px] font-semibold leading-tight mb-6 text-center">
              Vos clients n'attendent que vous.
            </h2>
            <p className="text-neutral-700 text-base leading-relaxed mb-6 text-center">
              Rendez votre offre accessible au moment où l'intention est présente.
              Nous préparons la visibilité locale et facilitons l'action : appel,
              formulaire, visite. Simple, clair, orienté résultats.
            </p>
          </div>

          {/* Animation personnages - AVANT le CTA */}
          <div className="w-full max-w-[360px] h-[300px] mx-auto rounded-3xl shadow-lg flex items-center justify-center">
            <div className="w-[150%] h-[150%] scale-[0.55] origin-center">
              <SplineLazy
                url="https://prod.spline.design/TNjZkjNxUjK9GBGW/scene.splinecode"
                className="w-full h-full"
                aria-label="Animation personnages"
              />
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#pricing"
            className="w-full inline-flex items-center justify-center px-6 py-4 rounded-full bg-[#6366f1] text-white font-semibold shadow-lg transition-all duration-200 hover:opacity-90 active:opacity-100 touch-manipulation min-h-[44px] text-center"
          >
            Choisir un forfait
          </a>
        </div>

        {/* Desktop: Grid original */}
        <div className="hidden md:grid grid-cols-12 gap-8 md:gap-12 min-h-[700px] md:min-h-[850px]">
          {/* Texte à gauche */}
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
            <p className="text-xs tracking-[.25em] uppercase text-neutral-500 mb-4">
              Dernière étape
            </p>
            <h2 className="text-5xl md:text-7xl font-semibold leading-tight mb-8">
              Vos clients n'attendent que vous.
            </h2>
            <p className="text-neutral-700 text-lg md:text-xl leading-relaxed mb-10 max-w-prose">
              Rendez votre offre accessible au moment où l'intention est présente.
              Nous préparons la visibilité locale et facilitons l'action : appel,
              formulaire, visite. Simple, clair, orienté résultats.
            </p>

            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#444684] text-white font-medium shadow-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md focus-visible:outline-2 focus-visible:outline-[#444684] focus-visible:outline-offset-2 touch-manipulation min-h-[44px] md:min-h-0"
            >
              Choisir un forfait
            </a>
          </div>

          {/* Animation Spline lazy-loaded */}
          <div
            className={`col-span-12 md:col-span-7 transition-all ease-out ${
              isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-6 scale-98'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              transitionDuration: `${500 * config.animationDuration}ms`
            }}
          >
            <div className="rounded-3xl bg-white shadow-[0_25px_80px_-20px_rgba(0,0,0,0.35)] overflow-hidden h-[min(75vh,900px)] min-h-[650px]">
              <SplineLazy
                url="https://prod.spline.design/TNjZkjNxUjK9GBGW/scene.splinecode"
                className="w-full h-full"
                aria-label="Animation finale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}