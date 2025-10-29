"use client";

import SplineLazy from "./SplineLazy";

/**
 * Section "Notre méthode" avec animation Spline
 */
export default function Methodology() {
  return (
    <section id="methodology" className="section-guard bg-[#111] py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-center text-4xl md:text-6xl font-semibold mb-10">
          Notre méthode
        </h2>

        <div className="mx-auto w-full max-w-[1350px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.35)]">
          <div className="aspect-[18/9] lg:aspect-[21/9] w-full">
            <SplineLazy
              url="https://prod.spline.design/leX4N7JQU4vKg98x/scene.splinecode"
              className="block w-full h-full"
              aria-label="Animation méthodologie"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
