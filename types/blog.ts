export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readingTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface ArticleMetadata {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  featuredImage: string;
  tags: string[];
}
