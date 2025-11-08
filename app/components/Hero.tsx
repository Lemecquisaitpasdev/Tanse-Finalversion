"use client";

import Link from "next/link";
import Spline from "@splinetool/react-spline";
import { useIsMobile } from "../hooks/useMediaQuery";

const SCENE_URL = "https://prod.spline.design/l8fan1OYXfoYpgtt/scene.splinecode?v=20251019";

/**
 * Hero section responsive
 * - Mobile (<768px): Image statique avec dégradé
 * - Desktop: Spline 3D chargé immédiatement
 * - Navigation adaptative
 */
export default function Hero() {
  const isMobile = useIsMobile();
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
            href="/forfaits-geo-seo"
            className={`${navLinkBase} ${navLinkDefault}`}
          >
            Forfaits
          </Link>
          <Link
            href="/agence-geo-paris-lyon"
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
            href="/blog-seo-geo"
            className={`${navLinkBase} ${navLinkDefault}`}
          >
            Blog
          </Link>
          <Link
            href="/contact-audit-gratuit"
            className={`${navLinkBase} ${navLinkPrimary}`}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Contenu central - Spline (desktop) ou Image statique (mobile) */}
      <div className="absolute inset-0 flex items-center justify-center">
        {isMobile ? (
          /* Mobile: Image statique avec dégradé */
          <div className="w-full h-full flex items-center justify-center px-5 py-16" style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #93c5fd 100%)'
          }}>
            <div className="text-center text-white space-y-6 max-w-md">
              {/* Logo tanse */}
              <div className="text-2xl font-bold tracking-wider uppercase">
                tanse
              </div>

              {/* Subtitle */}
              <p className="text-xs tracking-[0.25em] uppercase">
                Nous aidons les entreprises à ne plus être invisibles.
              </p>

              {/* Séparateur */}
              <div className="w-24 mx-auto border-t border-white/30"></div>

              {/* Titre principal */}
              <h1 className="text-[32px] font-bold leading-tight uppercase">
                Création et optimisation du GEO.
              </h1>

              {/* Séparateur */}
              <div className="w-24 mx-auto border-t border-white/30"></div>

              {/* Texte final */}
              <p className="text-sm leading-relaxed">
                Le marché a changé. Vos clients ne cherchent plus... Ils demandent.
              </p>
            </div>
          </div>
        ) : (
          /* Desktop: Spline 3D */
          <Spline
            scene={SCENE_URL}
            className="block w-full h-full"
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
    </section>
  );
}
