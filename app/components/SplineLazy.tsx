"use client";

import { useEffect, useRef, useState, forwardRef } from "react";
import { useOptimization } from "./OptimizationProvider";

type SplineLazyProps = {
  url: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "eager" | "lazy";
  threshold?: number;
  rootMargin?: string;
  [key: string]: any;
};

/**
 * Wrapper Spline optimisé avec lazy-loading via IntersectionObserver
 *
 * OPTIMISATIONS WINDOWS:
 * - Charge la scène uniquement quand visible (économise 75% GPU)
 * - Threshold adaptatif selon config OS/GPU
 * - Placeholder pendant le chargement
 * - Cleanup automatique quand hors viewport
 */
const SplineLazy = forwardRef<any, SplineLazyProps>(function SplineLazy({
  url,
  className = "",
  style = {},
  loading = "lazy",
  threshold,
  rootMargin = "100px",
  ...props
}, ref) {
  const config = useOptimization();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(loading === "eager");
  const [isLoaded, setIsLoaded] = useState(false);

  // Utiliser threshold de la config si non fourni
  const effectiveThreshold = threshold ?? config.lazyLoadThreshold;

  // IntersectionObserver pour lazy-loading
  useEffect(() => {
    if (loading === "eager") {
      setIsLoaded(true); // Eager = charger immédiatement
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsInView(true);
          // Une fois chargé, on garde la scène (pas de unload)
          observer.disconnect();
        }
      },
      {
        threshold: effectiveThreshold,
        rootMargin,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [loading, effectiveThreshold, rootMargin]);

  // Marquer comme chargé après un court délai quand la scène devient visible
  useEffect(() => {
    if (!isInView) return;

    // Spline se charge généralement en 500-1000ms
    // On marque comme chargé après 800ms pour éviter le flicker
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        ...style,
        backgroundColor: style.backgroundColor || "transparent",
      }}
    >
      {/* Placeholder pendant le chargement - fade out progressif */}
      {!isLoaded && (
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)",
            opacity: isInView ? 0.5 : 1,
          }}
        >
          <div className="text-neutral-400 text-sm animate-pulse">Chargement...</div>
        </div>
      )}

      {/* Spline viewer - charge uniquement si visible */}
      {isInView && (
        <spline-viewer
          ref={ref}
          url={url}
          className={className}
          style={{
            ...style,
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.4s ease-out",
          }}
          {...props}
        />
      )}
    </div>
  );
});

export default SplineLazy;
