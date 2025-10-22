"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

/**
 * Charge le web-component <spline-viewer> UNE SEULE FOIS pour toute l'app.
 * Optimisé pour un chargement immédiat des animations 3D.
 */
export default function SplineViewerProvider() {
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    // Si déjà défini, on ne fait rien
    if (typeof window !== "undefined" && customElements.get("spline-viewer")) {
      return;
    }
  }, []);

  return (
    <>
      {/* Load Spline script with Next.js Script component for optimization */}
      <Script
        id="spline-viewer-script"
        src="https://unpkg.com/@splinetool/viewer@1.10.82/build/spline-viewer.js"
        strategy="beforeInteractive"
        type="module"
      />
    </>
  );
}