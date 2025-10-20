"use client";

import Link from "next/link";
import Script from "next/script";

const SCENE_URL = "https://prod.spline.design/l8fan1OYXfoYpgtt/scene.splinecode?v=20251019";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[100dvh] overflow-hidden bg-[#E4E4E4]">
      <div className="pointer-events-none absolute left-1/2 top-6 z-20 -translate-x-1/2">
        <nav className="flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-2 py-2 shadow-lg ring-1 ring-black/5">
          <Link href="/forfaits" className="pointer-events-auto rounded-full px-4 py-2 text-sm font-medium text-[#24243C] hover:bg-white">Forfaits</Link>
          <Link href="/entreprise" className="pointer-events-auto rounded-full px-4 py-2 text-sm font-medium text-[#24243C] hover:bg-white">Entreprise</Link>
          <Link href="/contact" className="pointer-events-auto rounded-full px-4 py-2 text-sm font-medium text-white bg-[#444684] hover:opacity-90">Nous contacter</Link>
        </nav>
      </div>

      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.10.82/build/spline-viewer.js"
        strategy="afterInteractive"
      />
      {/* @ts-expect-error: web component */}
      <spline-viewer class="absolute inset-0 block w-full h-full" url={SCENE_URL}></spline-viewer>
    </section>
  );
}