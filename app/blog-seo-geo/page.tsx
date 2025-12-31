"use client";

import { useState } from "react";
import Image from "next/image";
import BlogSeoGeoSection from "@/components/blog-seo-geo/BlogSeoGeoSection";
import SplineLazy from "../components/SplineLazy";
import { usePerformance } from "../contexts/PerformanceContext";

export default function BlogSeoGeoPage() {
  const { mode } = usePerformance();

  // Spline Animation Component
  const splineAnimation = (
    <div className="w-full h-full">
      {mode === "performance" ? (
        /* Mode Performance - Image statique */
        <Image
          src="/screenglobe.png"
          alt="Globe terrestre interactif"
          width={1200}
          height={1200}
          className="w-full h-full object-cover"
          priority
        />
      ) : (
        /* Mode Qualité - Spline 3D */
        <div className="hidden md:block w-full h-full">
          <spline-viewer
            url="https://prod.spline.design/QWBeZ50WLnIYJBxl/scene.splinecode"
            className="w-full h-full"
            loading-anim="true"
            events-target="local"
          />
        </div>
      )}

      {/* Mobile version with SplineLazy */}
      <div className="md:hidden w-full h-full">
        {mode === "performance" ? (
          <Image
            src="/screenglobe.png"
            alt="Globe terrestre interactif"
            width={680}
            height={640}
            className="w-full h-full object-cover"
            priority
          />
        ) : (
          <SplineLazy
            url="https://prod.spline.design/QWBeZ50WLnIYJBxl/scene.splinecode"
            className="block w-full h-full"
            onLoad={(spline: any) => {
              if (spline && spline.setZoom) {
                spline.setZoom(0.6);
              }
            }}
          />
        )}
      </div>
    </div>
  );

  return <BlogSeoGeoSection splineAnimation={splineAnimation} />;
}
