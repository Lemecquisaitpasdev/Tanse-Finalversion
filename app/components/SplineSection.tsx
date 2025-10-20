"use client";

import Script from "next/script";
import SectionFrame from "./SectionFrame";

type Props = {
  url: string;           // URL .splinecode
  id?: string;
  width?: number;        // défaut 2560
  height?: number;       // défaut 1358
  lockCamera?: boolean;  // bloque les controls (zoom/pan)
  className?: string;
};

/**
 * Section Spline standardisée (2560×1358) avec option caméra bloquée.
 * Ajoute automatiquement les classes demandées: section-guard & spline-contained.
 */
export default function SplineSection({
  url,
  id,
  width = 2560,
  height = 1358,
  lockCamera = true,
  className = "",
}: Props) {
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.10.80/build/spline-viewer.js"
        strategy="afterInteractive"
      />
      <SectionFrame
        id={id}
        width={width}
        height={height}
        className={`section-guard ${className}`}
      >
        {/* @ts-expect-error – web component */}
        <spline-viewer
          class="spline-contained"
          url={url}
          style={{ width: "100%", height: "100%" }}
          {...(lockCamera ? { "settings-controls": "false" } : {})}
        ></spline-viewer>
      </SectionFrame>
    </>
  );
}