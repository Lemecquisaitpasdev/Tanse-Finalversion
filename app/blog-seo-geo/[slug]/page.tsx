import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getArticleBySlug, articles } from "../data/articles";
import { ArticleBackground } from "@/components/article/ArticleBackground";
import { ReadingProgressBar } from "@/components/article/ReadingProgressBar";
import { TableOfContents } from "@/components/article/TableOfContents";
import { FloatingSocial } from "@/components/article/FloatingSocial";
import { ArticleContent } from "@/components/article/ArticleContent";
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

// Extract headings from content for TOC
function extractHeadings(content: string) {
  const headingRegex = /<h([2-3])[^>]*id="([^"]*)"[^>]*>([^<]*)<\/h\1>/g;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    // Type guard: ensure match groups exist
    if (match[1] && match[2] && match[3]) {
      headings.push({
        level: parseInt(match[1]),
        id: match[2],
        text: match[3],
      });
    }
  }

  return headings;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const headings = extractHeadings(article.content);

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
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <ArticleBackground />
      <ReadingProgressBar />
      <SiteHeader />

      <div className="min-h-screen">
        {/* Hero Section */}
        <article className="relative pt-32 pb-16 overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Glassmorphic Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-full w-fit"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                }}
              >
                <li>
                  <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Accueil
                  </Link>
                </li>
                <li className="text-gray-400">
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li>
                  <Link href="/blog-seo-geo" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li className="text-gray-400">
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li className="text-gray-900 font-medium truncate max-w-[200px] md:max-w-full">
                  {article.title}
                </li>
              </ol>
            </nav>

            {/* Category Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {article.category.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-1.5 text-sm font-semibold text-white rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.95), rgba(168, 85, 247, 0.9))',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 4px 24px rgba(99, 102, 241, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
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
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-12">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" aria-hidden="true" />
                <span>{article.readingTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Par {article.author}</span>
              </div>
            </div>

            {/* Featured Image with Premium Mockup */}
            {article.image && (
              <div className="relative">
                <div
                  className="relative rounded-3xl overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: `
                      0 0 0 1px rgba(0, 0, 0, 0.02),
                      0 30px 60px -15px rgba(0, 0, 0, 0.15),
                      inset 0 1px 0 rgba(255, 255, 255, 0.9)
                    `,
                    padding: '12px',
                  }}
                >
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                    <Image
                      src={article.image}
                      alt={`Illustration pour l'article : ${article.title}`}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 896px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Article Layout with TOC and Social */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-[200px_1fr_200px] gap-8 max-w-7xl mx-auto">
            {/* Left: Table of Contents (desktop only) */}
            <aside className="hidden lg:block">
              {headings.length > 0 && <TableOfContents headings={headings} />}
            </aside>

            {/* Center: Article Content */}
            <article className="min-w-0">
              <div
                className="rounded-3xl p-8 md:p-12"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
                  backdropFilter: 'blur(40px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                }}
              >
                {/* Article rich content with enhanced components */}
                <ArticleContent content={article.content} />
              </div>

              {/* CTA Section */}
              <div
                className="mt-12 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #FF8A4C 0%, #E86A47 35%, #4F7DDE 100%)',
                  boxShadow: '0 8px 32px rgba(255, 138, 76, 0.3)',
                }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
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
            </article>

            {/* Right: Floating Social (desktop only) */}
            <aside className="hidden lg:block">
              <FloatingSocial article={article} />
            </aside>
          </div>
        </div>
      </div>

      <BrowserCompanyFooter />
    </>
  );
}
