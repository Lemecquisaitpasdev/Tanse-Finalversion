// app/blog/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getArticleBySlug, articles } from "../data/articles";
import CategoryBadge from "@/app/components/blog/CategoryBadge";
import TableOfContents from "@/app/components/blog/TableOfContents";
import ArticleContent from "@/app/components/blog/ArticleContent";
import SiteFooter from "@/app/components/SiteFooter";

// Generate static params for all articles
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata for each article
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: `${article.title} | Blog TANSE`,
    description: article.description,
    alternates: {
      canonical: `/blog-seo-geo/${article.slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      authors: [article.author],
      url: `/blog-seo-geo/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Schema.org JSON-LD for article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Organization",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "TANSE",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.tanse.fr/brand/tanse-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.tanse.fr/blog-seo-geo/${article.slug}`
    }
  };

  return (
    <main className="bg-[#E4E4E4]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#444684] via-[#3d3a66] to-[#524e7d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>

        <div className="relative mx-auto w-full max-w-5xl px-6 py-12 md:py-20">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog-seo-geo" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white font-medium line-clamp-1">{article.title}</span>
          </nav>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.category.map((cat) => (
              <CategoryBadge key={cat} category={cat} />
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readingTime} de lecture</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Par {article.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="-mt-8 pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
            {/* Main Content */}
            <div className="order-2 lg:order-1">
              <div className="rounded-3xl border border-neutral-200 bg-white p-8 md:p-12 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
                <ArticleContent content={article.content} />
              </div>

              {/* CTA at bottom of article */}
              <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-8 shadow-md text-center">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                  Besoin d'aide pour votre visibilité locale ?
                </h2>
                <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                  TANSE accompagne les PME françaises dans leur optimisation SEO Local et GEO.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/forfaits-geo-seo"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#444684] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 min-h-[48px]"
                  >
                    Voir nos forfaits
                  </Link>
                  <Link
                    href="/contact-audit-gratuit"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-50 min-h-[48px]"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>

              {/* Back to blog */}
              <div className="mt-8 text-center">
                <Link
                  href="/blog-seo-geo"
                  className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-[#444684] transition-colors"
                >
                  ← Retour au blog
                </Link>
              </div>
            </div>

            {/* Sidebar - Table of Contents */}
            <aside className="order-1 lg:order-2">
              <TableOfContents />
            </aside>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
