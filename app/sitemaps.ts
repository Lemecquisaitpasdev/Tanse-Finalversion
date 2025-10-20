// app/sitemap.ts
import type { MetadataRoute } from "next";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://tondomaine.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/forfaits`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/entreprise`, changeFrequency: "monthly" },
    { url: `${base}/faq`, changeFrequency: "monthly" },
    { url: `${base}/cgv`, changeFrequency: "yearly" },
    { url: `${base}/conditions`, changeFrequency: "yearly" },
    { url: `${base}/confidentialite`, changeFrequency: "yearly" },
    { url: `${base}/cookies`, changeFrequency: "yearly" },
    { url: `${base}/mentions-legales`, changeFrequency: "yearly" },
    { url: `${base}/ia`, changeFrequency: "yearly" },
  ];
}