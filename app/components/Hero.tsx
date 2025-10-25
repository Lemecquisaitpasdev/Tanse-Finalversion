"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useDebounce } from "../hooks/useDebounce";
import SplineLazy from "./SplineLazy";
import { useOptimization } from "./OptimizationProvider";

const SCENE_URL = "https://prod.spline.design/l8fan1OYXfoYpgtt/scene.splinecode?v=20251019";

/**
 * OPTIMISÉ WINDOWS:
 * - Lazy-load Spline (charge uniquement quand visible)
 * - Debounce resize à 150ms au lieu de temps réel
 * - Suppression willChange (inutile)
 * - Transitions adaptatives selon OS/GPU
 */
export default function Hero() {
  const config = useOptimization();
  const [isMobile, setIsMobile] = useState(false);

  // Debounce resize pour Windows
  const checkMobile = useDebounce(() => {
    setIsMobile(window.innerWidth < 768);
  }, 150);

  useEffect(() => {
    // Check initial
    setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, [checkMobile]);

  return (
    <section id="hero" className="relative w-full h-[100dvh] min-h-[600px] max-h-[900px] overflow-hidden bg-[#E4E4E4]">
      {/* Navigation */}
      <div className="pointer-events-none absolute left-1/2 top-4 md:top-6 z-20 -translate-x-1/2 w-full max-w-[calc(100%-2rem)] md:max-w-none">
        <nav className="flex items-center justify-center gap-1 md:gap-2 rounded-full bg-white/80 md:bg-white/70 backdrop-blur px-2 py-2 shadow-lg ring-1 ring-black/5 mx-auto w-fit">
          <Link
            href="/forfaits"
            className="pointer-events-auto rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-[#24243C] hover:bg-white transition-colors min-h-[36px] md:min-h-0 flex items-center justify-center"
          >
            Forfaits
          </Link>
          <Link
            href="/entreprise"
            className="pointer-events-auto rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-[#24243C] hover:bg-white transition-colors min-h-[36px] md:min-h-0 flex items-center justify-center"
          >
            Entreprise
          </Link>
          <Link
            href="/contact"
            className="pointer-events-auto rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white bg-[#444684] hover:opacity-90 transition-opacity min-h-[36px] md:min-h-0 flex items-center justify-center"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Spline Lazy-loaded (charge seulement quand visible) */}
      <div
        className={`absolute inset-0 flex items-center justify-center ${
          isMobile ? 'scale-110 translate-y-4' : 'scale-100'
        }`}
        style={{
          transition: `transform ${300 * config.animationDuration}ms ease-out`
          /* willChange supprimé - inutile et coûteux sur Windows */
        }}
      >
        <SplineLazy
          url={SCENE_URL}
          loading="eager"
          className="block w-full h-full"
          style={{
            width: '100%',
            height: '100%',
            display: 'block'
          }}
        />
      </div>
    </section>
  );
}