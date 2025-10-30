import { MetadataRoute } from 'next'
import { articles } from './blog/data/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tanse.fr'
  const currentDate = new Date().toISOString()

  // Blog article URLs
  const blogArticles = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.date,
    changeFrequency: 'monthly' as const,
    priority: article.isPinned ? 0.9 : 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/forfaits`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogArticles,
    {
      url: `${baseUrl}/entreprise`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/geo`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cgv`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/conditions`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ia`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
