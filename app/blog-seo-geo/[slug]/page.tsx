import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getArticleBySlug, articles } from "../data/articles";
import SiteHeader from "@/app/components/SiteHeader";
import BrowserCompanyFooter from "@/app/components/outils/BrowserCompanyFooter";

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
    <div className="min-h-screen bg-[#fafafa]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <SiteHeader />

      {/* Hero Section - Simplified and consistent */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog-seo-geo" className="hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium truncate">{article.title}</span>
          </nav>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.category.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 text-xs font-semibold rounded-full text-white"
                style={{
                  background: "linear-gradient(135deg, rgba(99, 102, 241, 0.95), rgba(168, 85, 247, 0.9))",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 4px 24px rgba(99, 102, 241, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
            style={{
              background: "linear-gradient(135deg, #000 0%, #333 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span>{article.readingTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Par {article.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {article.image && (
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <div
              className="relative aspect-[16/9] rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Image
                src={article.image}
                alt={`Illustration pour l'article : ${article.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
                priority
                quality={90}
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))",
              backdropFilter: "blur(40px) saturate(180%)",
              WebkitBackdropFilter: "blur(40px) saturate(180%)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
            }}
          >
            {/* Article prose content */}
            <div className="prose prose-lg prose-gray max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          </div>

          {/* CTA Section */}
          <div
            className="mt-12 rounded-3xl p-8 md:p-12 text-center"
            style={{
              background: "linear-gradient(180deg, #FF8A4C 0%, #E86A47 35%, #4F7DDE 100%)",
              boxShadow: "0 8px 32px rgba(255, 138, 76, 0.3)",
            }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Besoin d'aide pour votre visibilité locale ?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              TANSE accompagne les PME françaises dans leur optimisation SEO Local et GEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/forfaits-geo-seo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-gray-900 shadow-lg transition-all duration-200 hover:scale-105"
                aria-label="Voir nos forfaits SEO et GEO"
              >
                Voir nos forfaits
              </Link>
              <Link
                href="/contact-audit-gratuit"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-white hover:text-gray-900"
                aria-label="Nous contacter pour un audit gratuit"
              >
                Nous contacter
              </Link>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-8 text-center">
            <Link
              href="/blog-seo-geo"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Retourner à la liste des articles du blog"
            >
              ← Retour au blog
            </Link>
          </div>
        </div>
      </article>

      <BrowserCompanyFooter />
    </div>
  );
}
