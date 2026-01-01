"use client";

import dynamic from "next/dynamic";

const SiteFooter = dynamic(() => import("../../app/components/SiteFooter").then(m => m.default), {
  ssr: false,
});

export default function ClientFooter() {
  return <SiteFooter />;
}
