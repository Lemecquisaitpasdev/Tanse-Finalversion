"use client";

import { useEffect, useRef } from "react";
import SplineLazy from "./SplineLazy";

/**
 * OPTIMISÉ WINDOWS:
 * - Lazy-load Spline (charge uniquement quand visible)
 * - Garde la logique de pause à 7s pour économiser GPU
 */
export default function Methodology() {
  const viewerRef = useRef<any>(null);

  useEffect(() => {
    let disposed = false;
    const PAUSE_AT = 7;

    const getApp = (el: any) => el?.spline || el?.app || el?.__spline || el?.__app;

    const hardPauseAt7 = (el: any, app: any) => {
      if (!el || !app) return;
      try { app.setTime?.(PAUSE_AT); } catch {}
      try { if (typeof app.time === "number") app.time = PAUSE_AT; } catch {}
      try { el.seekTo?.(PAUSE_AT); } catch {}
      try { app.pause?.(); } catch {}
      try { el.pause?.(); } catch {}
      try { app.stop?.(); } catch {}
      try { el.stop?.(); } catch {}
      try { el.setAttribute?.("playing", "false"); } catch {}
      setTimeout(() => {
        try { app.setTime?.(PAUSE_AT); } catch {}
        try { app.pause?.(); } catch {}
        try { el.pause?.(); } catch {}
      }, 120);
    };

    const attach = async () => {
      const el = viewerRef.current as any;
      if (!el) return;
      try { await customElements.whenDefined("spline-viewer"); } catch {}

      if (disposed) return;

      let app = getApp(el);
      if (app) {
        const t = setTimeout(() => !disposed && hardPauseAt7(el, app), PAUSE_AT * 1000);
        (el as any).__tanseTimer = t;
      }

      const onLoad = (ev: any) => {
        app = ev?.detail?.spline || ev?.detail?.app || getApp(el);
        const t = setTimeout(() => !disposed && hardPauseAt7(el, app), PAUSE_AT * 1000);
        (el as any).__tanseTimer = t;
      };

      const onFrame = (ev: any) => {
        const a = app || getApp(el);
        const tNow = ev?.detail?.time ?? a?.time ?? 0;
        if (typeof tNow === "number" && tNow >= PAUSE_AT) hardPauseAt7(el, a);
      };

      el.addEventListener("load", onLoad);
      el.addEventListener("frame", onFrame);
      el.addEventListener("timeupdate", onFrame);

      (el as any).__cleanup = () => {
        el.removeEventListener("load", onLoad);
        el.removeEventListener("frame", onFrame);
        el.removeEventListener("timeupdate", onFrame);
        if ((el as any).__tanseTimer) clearTimeout((el as any).__tanseTimer);
      };
    };

    attach();
    return () => {
      disposed = true;
      try { (viewerRef.current as any)?.__cleanup?.(); } catch {}
    };
  }, []);

  return (
    <section id="methodology" className="section-guard bg-[#111] py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-center text-4xl md:text-6xl font-semibold mb-10">
          Notre méthode
        </h2>

        <div className="mx-auto w-full max-w-[1350px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.35)]">
          <div className="aspect-[18/9] lg:aspect-[21/9] w-full">
            <SplineLazy
              ref={viewerRef}
              url="https://prod.spline.design/leX4N7JQU4vKg98x/scene.splinecode"
              loading="lazy"
              threshold={0.2}
              className="block w-full h-full"
              loading-anim="false"
              aria-label="Animation méthodologie"
            />
          </div>
        </div>
      </div>
    </section>
  );
}