"use client";

import Script from "next/script";

type Props = {
  /** URL .splinecode */
  url: string;
  /** Hauteur mini de la section (par défaut 100dvh) */
  minH?: number | string;
  /** Désactive les interactions caméra (zoom/pan/drag) */
  blockInteraction?: boolean;
  /** id optionnel pour l’ancre */
  id?: string;
  /** classes wrapper */
  className?: string;
  /** aria-label du viewer */
  label?: string;
};

export default function SplineEmbed({
  url,
  minH = "100dvh",
  blockInteraction = false,
  id,
  className = "",
  label = "Spline section",
}: Props) {
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.10.80/build/spline-viewer.js"
        strategy="afterInteractive"
      />
      <section
        id={id}
        className={`section-guard ${className}`}
        style={{ minHeight: typeof minH === "number" ? `${minH}px` : minH }}
        aria-label={label}
      >
        {/* @ts-expect-error — web component */}
        <spline-viewer
          url={url}
          class={`spline-contained${blockInteraction ? " no-interact" : ""}`}
        ></spline-viewer>
      </section>
    </>
  );
}