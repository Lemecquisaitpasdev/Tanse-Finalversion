"use client";

import Script from "next/script";

const MOBILE_SCENE_URL = "https://prod.spline.design/AJCmyI9Ksz04Wciq/scene.splinecode";

export default function MobileHero() {
  return (
    <section id="hero" className="relative w-full h-[100dvh] overflow-hidden bg-[#E4E4E4]">
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.10.85/build/spline-viewer.js"
        strategy="beforeInteractive"
      />
      <spline-viewer
        className="absolute inset-0 block w-full h-full"
        url={MOBILE_SCENE_URL}
      ></spline-viewer>
    </section>
  );
}
