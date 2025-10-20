"use client";
import { useEffect } from "react";

type Props = {
  /** l'id HTML du <spline-viewer> à contrôler */
  viewerId: string;
  /** durée (ms) jusqu'à la fin de ta timeline Spline */
  durationMs?: number;
};

export default function SplineOnce({ viewerId, durationMs = 9000 }: Props) {
  useEffect(() => {
    const el = document.getElementById(viewerId) as any;
    if (!el) return;

    const stop = () => {
      try {
        // stoppe la timeline au moment où elle a fini sa première lecture
        el?.spline?.pause?.();
      } catch {/* noop */}
    };

    const onLoad = () => {
      // si ta scène boucle côté Spline, ce pause coupera la boucle après 1 run
      // NB : mets bien "Loop: Off" dans Spline pour un vrai "once" parfait.
      window.setTimeout(stop, durationMs);
    };

    el.addEventListener("load", onLoad);
    return () => el.removeEventListener("load", onLoad);
  }, [viewerId, durationMs]);

  return null;
}