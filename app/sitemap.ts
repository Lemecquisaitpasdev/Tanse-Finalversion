// app/sitemap.ts
import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tanse.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const lastMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  return [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/forfaits`,
      lastModified: lastWeek,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/entreprise`,
      lastModified: lastMonth,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastMonth,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ia`,
      lastModified: lastMonth,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    // Legal pages - lower priority
    {
      url: `${baseUrl}/cgv`,
      lastModified: lastMonth,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/conditions`,
      lastModified: lastMonth,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified: lastMonth,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: lastMonth,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: lastMonth,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}