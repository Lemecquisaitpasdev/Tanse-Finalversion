"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const SCENE_URL = "https://prod.spline.design/l8fan1OYXfoYpgtt/scene.splinecode?v=20251019";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading after 2 seconds max (spline should be loaded by then)
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative w-full h-[100dvh] overflow-hidden bg-[#E4E4E4]">
      {/* Loading placeholder with gradient animation */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-[#E4E4E4] via-[#F0F0F0] to-[#E4E4E4] animate-pulse">
          <div className="text-center">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#444684] border-r-transparent"></div>
            <p className="mt-4 text-sm font-medium text-[#444684]">Chargement de l'expérience 3D...</p>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute left-1/2 top-6 z-20 -translate-x-1/2">
        <nav className="flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-2 py-2 shadow-lg ring-1 ring-black/5">
          <Link href="/forfaits" className="pointer-events-auto rounded-full px-4 py-2 text-sm font-medium text-[#24243C] hover:bg-white">Forfaits</Link>
          <Link href="/entreprise" className="pointer-events-auto rounded-full px-4 py-2 text-sm font-medium text-[#24243C] hover:bg-white">Entreprise</Link>
          <Link href="/contact" className="pointer-events-auto rounded-full px-4 py-2 text-sm font-medium text-white bg-[#444684] hover:opacity-90">Nous contacter</Link>
        </nav>
      </div>

      {/* Spline 3D scene - preloaded for instant display */}
      <spline-viewer
        class="absolute inset-0 block w-full h-full"
        url={SCENE_URL}
      ></spline-viewer>
    </section>
  );
}