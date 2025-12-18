import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "@/lib/blog/articles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: article.seo.metaTitle,
    description: article.seo.metaDescription,
    keywords: article.seo.keywords.join(", "),
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.featuredImage],
      type: "article",
      publishedTime: article.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.featuredImage],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const publishedDate = new Date(article.publishedAt).toLocaleDateString(
    "fr-FR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          <div className="mb-6">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-3xl">
            {article.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{publishedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{article.readingTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl md:text-5xl font-extrabold mt-12 mb-6 text-[#2d3748]">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-[#2d3748]">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-[#667eea]">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-6 text-lg leading-relaxed text-[#2d3748]">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="my-6 ml-6 space-y-3 list-disc marker:text-[#667eea]">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="my-6 ml-6 space-y-3 list-decimal marker:text-[#667eea]">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-lg text-[#2d3748]">{children}</li>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-[#667eea] hover:text-[#764ba2] underline font-medium transition-colors"
                  >
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-[#667eea] pl-6 py-2 my-6 bg-blue-50 italic">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-[#667eea]">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto my-6">
                    {children}
                  </pre>
                ),
                hr: () => <hr className="my-12 border-gray-300" />,
                strong: ({ children }) => (
                  <strong className="font-bold text-[#2d3748]">
                    {children}
                  </strong>
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>

          {/* Author Box */}
          <div className="mt-16 pt-12 border-t border-gray-300">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] flex items-center justify-center text-white text-2xl font-bold">
                {article.author.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#2d3748] mb-1">
                  {article.author.name}
                </h3>
                <p className="text-gray-600 mb-4">{article.author.role}</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à générer des leads qualifiés ?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Découvrez comment TANSE peut vous aider à attirer des clients sans
              cold calling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-[#667eea] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Réserver un audit gratuit
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors border-2 border-white/50"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
