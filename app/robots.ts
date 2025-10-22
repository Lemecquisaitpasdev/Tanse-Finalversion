// app/robots.ts
import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tanse.io";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.VERCEL_ENV === "production";

  // En production, configuration SEO optimisée
  if (isProd) {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/api/", "/checkout/"],
        },
        {
          // Bloquer les bots IA pour protéger le contenu
          userAgent: ["GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai"],
          disallow: "/",
        },
        {
          userAgent: "Googlebot",
          allow: "/",
        },
        {
          userAgent: "Googlebot-Image",
          allow: "/",
        },
      ],
      sitemap: [`${baseUrl}/sitemap.xml`],
      host: baseUrl,
    };
  }

  // En preview/dev: bloquer tous les bots
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
    sitemap: [],
  };
}