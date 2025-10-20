// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.VERCEL_ENV === "production";
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://tondomaine.com";

  return {
    rules: isProd
      ? [
          { userAgent: "*", allow: "/" },
          { userAgent: "GPTBot", allow: "/" },
          { userAgent: "Google-Extended", allow: "/" },
        ]
      : [{ userAgent: "*", disallow: "/" }],
    sitemap: isProd ? [`${base}/sitemap.xml`] : [],
    host: isProd ? base : undefined,
  };
}