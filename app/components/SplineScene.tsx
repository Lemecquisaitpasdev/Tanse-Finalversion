"use client";

import { useEffect, useRef, useState } from "react";

interface SplineSceneProps {
  url: string;
  className?: string;
  eager?: boolean; // Pour Hero: charge immédiatement sans attendre le scroll
}

/**
 * Composant Spline avec lazy loading intelligent
 * - eager=true : Charge immédiatement (pour Hero)
 * - eager=false : Charge quand visible dans viewport (pour sections secondaires)
 */
export default function SplineScene({ url, className = "", eager = false }: SplineSceneProps) {
  const [shouldLoad, setShouldLoad] = useState(eager);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Si eager, on charge déjà
    if (eager) return;

    // Sinon, on attend que l'élément soit visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            // Une fois chargé, on peut arrêter d'observer
            observer.disconnect();
          }
        });
      },
      {
        // Commence à charger quand l'élément est à 200px du viewport
        rootMargin: "200px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [eager]);

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad ? (
        <spline-viewer
          className="block w-full h-full"
          url={url}
        ></spline-viewer>
      ) : (
        // Placeholder léger pendant le chargement
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
      )}
    </div>
  );
}
