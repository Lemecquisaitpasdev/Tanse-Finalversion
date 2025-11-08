"use client";

import { Suspense, lazy } from "react";

// Import dynamique de Spline avec React.lazy
const Spline = lazy(() => import("@splinetool/react-spline"));

type SplineLazyProps = {
  url: string;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
};

/**
 * Wrapper Spline avec chargement dynamique
 *
 * Utilise @splinetool/react-spline pour un chargement plus fiable
 * que le custom element <spline-viewer>
 *
 * NOTE: Les anciennes props 'loading', 'threshold', 'rootMargin' ne sont plus utilisées
 */
export default function SplineLazy({
  url,
  className = "",
  style = {},
  ...props
}: SplineLazyProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        ...style,
        backgroundColor: style.backgroundColor || "transparent",
      }}
    >
      <Suspense
        fallback={
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)",
            }}
          >
            <div className="text-neutral-400 text-sm animate-pulse">
              Chargement de l'animation 3D...
            </div>
          </div>
        }
      >
        <Spline
          scene={url}
          className={className}
          style={{
            width: "100%",
            height: "100%",
            ...style,
          }}
          {...props}
        />
      </Suspense>
    </div>
  );
}
