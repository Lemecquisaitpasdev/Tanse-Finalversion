"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SplineLazy from "./SplineLazy";
import { usePerformance } from "../contexts/PerformanceContext";

const STEPS = [
  {
    title: "AUDIT SÉMANTIQUE",
    subtitle: "ANALYSE LLM",
    gradient: "from-orange-400/20 via-yellow-400/20 to-orange-500/20",
    borderColor: "border-orange-400/30",
    numberBg: "bg-gradient-to-br from-orange-400 to-yellow-500",
    shadowColor: "shadow-orange-500/20"
  },
  {
    title: "FIABILITÉ &",
    subtitle: "CONFORMITÉ",
    gradient: "from-pink-400/20 via-purple-300/20 to-pink-300/20",
    borderColor: "border-pink-300/30",
    numberBg: "bg-gradient-to-br from-pink-400 to-purple-400",
    shadowColor: "shadow-pink-400/20"
  },
  {
    title: "MONITORING",
    subtitle: "CONTINU",
    gradient: "from-cyan-400/20 via-blue-400/20 to-cyan-500/20",
    borderColor: "border-cyan-400/30",
    numberBg: "bg-gradient-to-br from-cyan-400 to-blue-500",
    shadowColor: "shadow-cyan-400/20"
  },
  {
    title: "MAPPING",
    subtitle: "INTENTIONNEL",
    gradient: "from-green-400/20 via-emerald-400/20 to-green-500/20",
    borderColor: "border-green-400/30",
    numberBg: "bg-gradient-to-br from-green-400 to-emerald-500",
    shadowColor: "shadow-green-400/20"
  },
  {
    title: "OPTIMISATION",
    subtitle: "GEO",
    gradient: "from-purple-400/20 via-violet-400/20 to-purple-500/20",
    borderColor: "border-purple-400/30",
    numberBg: "bg-gradient-to-br from-purple-400 to-violet-500",
    shadowColor: "shadow-purple-400/20"
  },
  {
    title: "SCALABILITÉ &",
    subtitle: "DÉPLOIEMENT",
    gradient: "from-pink-300/20 via-pink-400/20 to-rose-400/20",
    borderColor: "border-pink-300/30",
    numberBg: "bg-gradient-to-br from-pink-300 to-rose-400",
    shadowColor: "shadow-pink-300/20"
  },
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
              className={`relative bg-gradient-to-br ${step.gradient} backdrop-blur-sm rounded-2xl p-4 border ${step.borderColor} shadow-2xl ${step.shadowColor} transition-all duration-300 hover:scale-105 hover:shadow-3xl overflow-hidden`}
              style={{
                boxShadow: '0 20px 50px -12px rgba(0, 0, 0, 0.5), 0 10px 20px -10px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Fond sombre avec effet de profondeur */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 to-neutral-950/90 -z-10" />

              {/* Numéro de l'étape */}
              <div className={`inline-flex items-center justify-center w-7 h-7 ${step.numberBg} rounded-lg text-white text-xs font-bold mb-3 shadow-lg`}>
                {index + 1}
              </div>

              <div className="text-left">
                <div className="text-[11px] tracking-[0.12em] text-white font-bold mb-1.5 leading-tight">
                  {step.title}
                </div>
                <div className="text-[10px] tracking-[0.12em] text-neutral-300 leading-tight">
                  {step.subtitle}
                </div>
              </div>

              {/* Effet de brillance en haut */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
