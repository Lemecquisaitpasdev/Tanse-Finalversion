// app/components/Methodology.tsx
"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function Methodology() {
  const viewerRef = useRef<any>(null);

  useEffect(() => {
    let disposed = false;
    const PAUSE_AT = 7; // secondes

    const tryGetApp = (el: any) =>
      el?.spline || el?.app || el?.__spline || el?.__app;

    const hardPauseAt7 = (el: any, app: any) => {
      if (!el || !app) return;

      // Forcer le temps à 7s (couverture max d’APIs)
      try { app.setTime?.(PAUSE_AT); } catch {}
      try { if (typeof app.time === "number") app.time = PAUSE_AT; } catch {}
      try { el.seekTo?.(PAUSE_AT); } catch {}

      // Pause/stop sous toutes les formes possibles
      try { app.pause?.(); } catch {}
      try { el.pause?.(); } catch {}
      try { app.stop?.(); } catch {}
      try { el.stop?.(); } catch {}
      try { el.setAttribute?.("playing", "false"); } catch {}

      // Ré-application très courte après (évite les micro-relances)
      setTimeout(() => {
        try { app.setTime?.(PAUSE_AT); } catch {}
        try { app.pause?.(); } catch {}
        try { el.pause?.(); } catch {}
      }, 120);
    };

    const attachLogic = async () => {
      const el = viewerRef.current as any;
      if (!el) return;

      // S’assurer que le custom element est bien initialisé
      try { await customElements.whenDefined("spline-viewer"); } catch {}

      if (disposed) return;

      // 1) Si l’app est déjà là (course gagnée par Spline) → on lance direct
      let app = tryGetApp(el);
      if (app) {
        const t = setTimeout(() => !disposed && hardPauseAt7(el, app), PAUSE_AT * 1000);
        (el as any).__tanseTimer = t;
      }

      // 2) Écoute l’event de load si on l’a manqué
      const onLoad = (ev: any) => {
        app = ev?.detail?.spline || ev?.detail?.app || tryGetApp(el);
        const t = setTimeout(() => !disposed && hardPauseAt7(el, app), PAUSE_AT * 1000);
        (el as any).__tanseTimer = t;
      };

      // 3) Fallback “live” : si on voit passer le temps ≥ 7s, on coupe
      const onFrame = (ev: any) => {
        const a = app || tryGetApp(el);
        const tNow =
          ev?.detail?.time ??
          a?.time ??
          0;
        if (typeof tNow === "number" && tNow >= PAUSE_AT) {
          hardPauseAt7(el, a);
        }
      };

      el.addEventListener("load", onLoad);
      el.addEventListener("frame", onFrame);
      el.addEventListener("timeupdate", onFrame); // selon les versions

      // cleanup
      (el as any).__cleanup = () => {
        el.removeEventListener("load", onLoad);
        el.removeEventListener("frame", onFrame);
        el.removeEventListener("timeupdate", onFrame);
        if ((el as any).__tanseTimer) clearTimeout((el as any).__tanseTimer);
      };
    };

    attachLogic();

    return () => {
      disposed = true;
      const el = viewerRef.current as any;
      try { el?.__cleanup?.(); } catch {}
    };
  }, []);

  return (
    <section id="methodology" className="section-guard bg-[#111] py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-center text-4xl md:text-6xl font-semibold mb-10">
          Notre méthode
        </h2>

        {/* Largeur + ratio étendu pour éviter de couper le texte dans la scène */}
        <div className="mx-auto w-full max-w-[1350px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.35)]">
          <div className="aspect-[18/9] lg:aspect-[21/9] w-full">
            <Script
              type="module"
              // même version que ton snippet
              src="https://unpkg.com/@splinetool/viewer@1.10.82/build/spline-viewer.js"
              strategy="afterInteractive"
            />
            {/* @ts-expect-error web component */}
            <spline-viewer
              ref={viewerRef}
              url="https://prod.spline.design/leX4N7JQU4vKg98x/scene.splinecode"
              class="block w-full h-full"
              loading-anim="false"
            ></spline-viewer>
          </div>
        </div>
      </div>
    </section>
  );
}