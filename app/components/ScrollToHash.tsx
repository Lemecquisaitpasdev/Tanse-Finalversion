// app/components/ScrollToHash.tsx
"use client";

import { useEffect } from "react";

export default function ScrollToHash() {
  useEffect(() => {
    const go = () => {
      const hash = window.location.hash?.slice(1);
      if (!hash) return;
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // au chargement, puis si le hash change
    go();
    window.addEventListener("hashchange", go);
    return () => window.removeEventListener("hashchange", go);
  }, []);

  return null;
}