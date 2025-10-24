"use client";

import { useEffect, useRef } from "react";

/**
 * Charge le web-component <spline-viewer> UNE SEULE FOIS pour toute l'app.
 * Évite les "Cannot define multiple custom elements with the same tag name".
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

    // Injecte le script ESM de Spline (version figée) - chargement immédiat pour apparition instantanée
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.82/build/spline-viewer.js";
    script.crossOrigin = "anonymous";
    // Pas d'async pour chargement immédiat prioritaire
    document.head.appendChild(script);

    // On ne retire pas le script au cleanup pour éviter une re-définition
  }, []);

  return null;
}