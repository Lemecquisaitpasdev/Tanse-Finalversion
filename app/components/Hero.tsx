"use client";

import Link from "next/link";
import SplineLazy from "./SplineLazy";

const SCENE_URL = "https://prod.spline.design/l8fan1OYXfoYpgtt/scene.splinecode?v=20251019";

/**
 * Hero section optimisé pour chargement instantané
 * - CSS pour responsive (pas de JS)
 * - Navigation simplifiée
 * - Spline lazy-loaded
 */
export default function Hero() {
  // Optimized navigation link styles
  const navLinkBase = "pointer-events-auto rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium min-h-[36px] md:min-h-0 flex items-center justify-center transition-all duration-200";
  const navLinkDefault = "text-[#24243C] hover:bg-white";
  const navLinkPrimary = "text-white bg-[#444684] hover:opacity-90";

  return (
    <section id="hero" className="relative w-full h-[100dvh] min-h-[600px] max-h-[900px] overflow-hidden bg-[#E4E4E4]">
      {/* Navigation */}
      <div className="pointer-events-none absolute left-1/2 top-4 md:top-6 z-20 -translate-x-1/2 w-full max-w-[calc(100%-2rem)] md:max-w-none">
        <nav className="flex items-center justify-center gap-1 md:gap-2 rounded-full bg-white/80 md:bg-white/70 backdrop-blur px-2 py-2 shadow-lg ring-1 ring-black/5 mx-auto w-fit">
          <Link
            href="/forfaits"
            className={`${navLinkBase} ${navLinkDefault}`}
          >
            Forfaits
          </Link>
          <Link
            href="/entreprise"
            className={`${navLinkBase} ${navLinkDefault}`}
          >
            Entreprise
          </Link>
          <Link
            href="/geo"
            className={`${navLinkBase} ${navLinkDefault}`}
          >
            GEO
          </Link>
          <Link
            href="/contact"
            className={`${navLinkBase} ${navLinkPrimary}`}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Spline - Responsive via CSS */}
      <div className="absolute inset-0 flex items-center justify-center scale-110 translate-y-4 md:scale-100 md:translate-y-0 transition-transform duration-300 ease-out">
        <SplineLazy
          url={SCENE_URL}
          className="block w-full h-full"
        />
      </div>
    </section>
  );
}