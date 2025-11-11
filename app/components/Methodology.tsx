"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SplineLazy from "./SplineLazy";
import { usePerformance } from "../contexts/PerformanceContext";

const STEPS = [
  { title: "AUDIT SÉMANTIQUE", subtitle: "ANALYSE LLM" },
  { title: "FIABILITÉ &", subtitle: "CONFORMITÉ" },
  { title: "MONITORING", subtitle: "CONTINU" },
  { title: "MAPPING", subtitle: "INTENTIONNEL" },
  { title: "OPTIMISATION", subtitle: "GEO" },
  { title: "SCALABILITÉ &", subtitle: "DÉPLOIEMENT" },
];

/**
 * Section "Notre méthode" avec animation Spline
 * Animation déclenchée une seule fois au scroll
 * Version mobile : affiche les 6 étapes en grille 2x2
 */
export default function Methodology() {
  const { mode } = usePerformance();
  const [hasPlayed, setHasPlayed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            setHasPlayed(true);
            // Une fois jouée, on peut déconnecter l'observer
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 } // Déclenche quand 30% de la section est visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasPlayed]);

  return (
    <section ref={sectionRef} id="methodology" className="section-guard bg-[#111] py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-center text-4xl md:text-6xl font-semibold mb-10">
          Notre méthode
        </h2>

        {/* Version Desktop - Animation/Image */}
        <div className="hidden md:block mx-auto w-full max-w-[1350px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.35)]">
          <div className="aspect-[18/9] lg:aspect-[21/9] w-full">
            {hasPlayed && mode === "performance" && (
              <Image
                src="/screenmethodologie2.png"
                alt="Notre méthode"
                width={2700}
                height={1200}
                className="w-full h-full object-cover"
                priority
              />
            )}
            {hasPlayed && mode === "quality" && (
              <SplineLazy
                url="https://prod.spline.design/leX4N7JQU4vKg98x/scene.splinecode"
                className="block w-full h-full"
                aria-label="Animation méthodologie"
              />
            )}
            {!hasPlayed && (
              <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center">
                <div className="text-neutral-500 text-sm animate-pulse">
                  Prêt à charger...
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Version Mobile - Grille des 6 étapes */}
        <div className="md:hidden grid grid-cols-2 gap-4 max-w-md mx-auto">
          {STEPS.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-5 border border-neutral-700/50 shadow-lg"
            >
              <div className="text-center">
                <div className="text-xs tracking-[0.15em] text-[#444684] font-semibold mb-2">
                  {step.title}
                </div>
                <div className="text-xs tracking-[0.15em] text-neutral-400">
                  {step.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
