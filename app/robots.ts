// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.VERCEL_ENV === "production";
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tanse.fr";

  return {
    rules: isProd
      ? [
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/checkout/"],
          },
          {
            userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended", "ClaudeBot", "PerplexityBot"],
            allow: "/",
          },
        ]
      : [{ userAgent: "*", disallow: "/" }],
    sitemap: isProd ? [`${base}/sitemap.xml`] : [],
    host: isProd ? base : undefined,
  };
}