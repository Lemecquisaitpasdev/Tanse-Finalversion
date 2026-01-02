"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SplineLazy from "./SplineLazy";
import { useOptimization } from "./OptimizationProvider";
import { usePerformance } from "../contexts/PerformanceContext";

/**
 * OPTIMISÉ WINDOWS:
 * - Lazy-load Spline (charge uniquement quand visible)
 * - Suppression willChange (inutile et force GPU layer)
 * - Animations adaptatives selon OS/GPU
 */
export default function FinalCta() {
  const config = useOptimization();
  const { mode } = usePerformance();
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
      <div ref={sectionRef} className="content-wrap max-w-7xl mx-auto grid grid-cols-12 gap-8 md:gap-12 min-h-[700px] md:min-h-[850px]">
        {/* Texte à gauche */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
          <p className="text-xs tracking-[.25em] uppercase text-muted-foreground mb-4 font-mono">
            Dernière étape
          </p>
          <h2 className="font-display italic text-5xl md:text-7xl leading-tight mb-8">
            Vos clients n'attendent que vous.
          </h2>
          <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-prose">
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

        {/* Animation - DESKTOP */}
        <div
          className={`hidden md:block col-span-12 md:col-span-7 transition-all ease-out ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-6 scale-98'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            transitionDuration: `${500 * config.animationDuration}ms`
          }}
        >
          {mode === "performance" ? (
            /* Mode Performance - Image statique */
            <div className="rounded-3xl shadow-[0_25px_80px_-20px_rgba(0,0,0,0.35)] overflow-hidden h-[min(75vh,900px)] min-h-[650px]">
              <Image
                src="/screenlesclientsnattendentquevous.png"
                alt="Vos clients n'attendent que vous"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          ) : (
            /* Mode Qualité - Spline 3D interactif */
            <div className="rounded-3xl bg-white shadow-[0_25px_80px_-20px_rgba(0,0,0,0.35)] overflow-hidden h-[min(75vh,900px)] min-h-[650px]">
              <SplineLazy
                url="https://prod.spline.design/TNjZkjNxUjK9GBGW/scene.splinecode"
                className="w-full h-full"
                aria-label="Animation finale"
              />
            </div>
          )}
        </div>

        {/* Animation - MOBILE */}
        <div
          className={`md:hidden col-span-12 transition-all ease-out ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-98'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            transitionDuration: `${500 * config.animationDuration}ms`
          }}
        >
          {mode === "performance" ? (
            /* Mode Performance - Image statique */
            <div className="w-full max-w-[360px] h-[300px] mx-auto rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/screenlesclientsnattendentquevous.png"
                alt="Vos clients n'attendent que vous"
                width={720}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          ) : (
            /* Mode Qualité - Spline 3D avec setZoom */
            <div className="w-full max-w-[360px] h-[300px] mx-auto rounded-3xl">
              <SplineLazy
                url="https://prod.spline.design/TNjZkjNxUjK9GBGW/scene.splinecode"
                className="w-full h-full"
                aria-label="Animation finale"
                onLoad={(spline: any) => {
                  if (spline && spline.setZoom) {
                    spline.setZoom(0.6);
                  }
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}