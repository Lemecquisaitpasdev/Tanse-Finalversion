"use client";

import { useEffect, useRef } from "react";

/**
 * Charge le web-component <spline-viewer> de manière asynchrone.
 * Ne bloque JAMAIS le rendu de la page.
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

    // Charge le script de manière totalement asynchrone
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.82/build/spline-viewer.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
}