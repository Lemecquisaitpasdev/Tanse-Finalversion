"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

const SCENE_URL = "https://prod.spline.design/l8fan1OYXfoYpgtt/scene.splinecode?v=20251019";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.10.82/build/spline-viewer.js"
        strategy="afterInteractive"
      />

      {/* Spline Viewer avec conteneur responsive */}
      <div
        className={`absolute inset-0 flex items-center justify-center ${
          isMobile ? 'scale-110 translate-y-4' : 'scale-100'
        }`}
        style={{
          transition: 'transform 0.3s ease-out',
          willChange: 'transform'
        }}
      >
        <spline-viewer
          className="block w-full h-full"
          url={SCENE_URL}
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