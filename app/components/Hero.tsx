"use client";

import Link from "next/link";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

const SCENE_URL = "https://prod.spline.design/l8fan1OYXfoYpgtt/scene.splinecode?v=20251019";

export default function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("reflexes");
    if (nextSection) {
      const headerOffset = 0;
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative w-full h-[100dvh] overflow-hidden bg-[#E4E4E4]">
      <div className="pointer-events-none absolute left-1/2 top-4 sm:top-6 z-20 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-auto">
        <nav className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-white/70 backdrop-blur px-2 py-2 shadow-lg ring-1 ring-black/5">
          <Link href="/forfaits" className="pointer-events-auto rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-[#24243C] hover:bg-white transition-colors whitespace-nowrap">Forfaits</Link>
          <Link href="/entreprise" className="pointer-events-auto rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-[#24243C] hover:bg-white transition-colors whitespace-nowrap">Entreprise</Link>
          <Link href="/contact" className="pointer-events-auto rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-[#444684] hover:opacity-90 transition-opacity whitespace-nowrap">Contact</Link>
        </nav>
      </div>

      {/* Bouton flèche pour descendre vers la section suivante */}
      <button
        onClick={scrollToNextSection}
        className="pointer-events-auto absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-white/70 backdrop-blur shadow-lg ring-1 ring-black/5 hover:bg-white transition-all hover:scale-110 animate-bounce active:scale-95"
        aria-label="Défiler vers la section suivante"
      >
        <ChevronDown className="h-6 w-6 text-[#444684]" />
      </button>

      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.10.82/build/spline-viewer.js"
        strategy="beforeInteractive"
      />
      <spline-viewer
        class="absolute inset-0 block w-full h-full"
        url={SCENE_URL}
        loading="eager"
      ></spline-viewer>
    </section>
  );
}