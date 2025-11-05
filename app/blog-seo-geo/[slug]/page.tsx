// app/blog-seo-geo/[slug]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { articles } from "../data/articles";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = articles.find(a => a.slug === resolvedParams.slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Link href="/blog-seo-geo" className="text-purple-600 hover:text-purple-700">
            ← Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back link */}
      <div className="border-b bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/blog-seo-geo" className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au blog
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[400px] bg-gradient-to-br from-purple-600 to-blue-500">
        <Image
          src={article.image_hero}
          alt={article.titre}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.categorie.map((cat) => (
            <span
              key={cat}
              className="text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {article.titre}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 pb-8 border-b">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>{article.auteur}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{article.temps_lecture} min de lecture</span>
          </div>
        </div>

        {/* Article Content - Using dangerouslySetInnerHTML for markdown/HTML */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
            prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-10 prose-h2:border-b prose-h2:pb-2
            prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8
            prose-h4:text-xl prose-h4:mb-2 prose-h4:mt-6
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:mb-2 prose-li:text-gray-700
            prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:pl-4 prose-blockquote:italic
            prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg
            prose-table:w-full prose-table:border-collapse prose-table:my-8
            prose-th:bg-gray-100 prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:border
            prose-td:p-3 prose-td:border prose-td:text-gray-700
            prose-img:rounded-lg prose-img:shadow-lg"
          dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(article.contenu) }}
        />
      </article>

      {/* Related Articles CTA */}
      <section className="bg-gray-50 py-12 mt-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Plus d'articles</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {articles
              .filter(a => a.slug !== article.slug && a.statut === 'publié')
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/blog-seo-geo/${relatedArticle.slug}`}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                    {relatedArticle.titre}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {relatedArticle.description_meta}
                  </p>
                  <span className="text-purple-600 text-sm font-medium">
                    Lire l'article →
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'aide avec votre stratégie SEO & GEO ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            TANSE vous accompagne pour améliorer votre visibilité en ligne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-audit-gratuit"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Demander un audit gratuit
            </Link>
            <Link
              href="/forfaits-geo-seo"
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Découvrir nos forfaits
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper function to convert markdown-like content to HTML
function convertMarkdownToHTML(content: string): string {
  let html = content;

  // Convert markdown tables to HTML
  html = html.replace(/\|(.+)\|/g, (match) => {
    const cells = match.split('|').filter(cell => cell.trim());
    const isHeader = match.includes('---');

    if (isHeader) return '';

    const tag = cells[0].includes('**') ? 'th' : 'td';
    const row = cells.map(cell =>
      `<${tag}>${cell.trim().replace(/\*\*/g, '')}</${tag}>`
    ).join('');

    return `<tr>${row}</tr>`;
  });

  // Wrap tables
  html = html.replace(/(<tr>[\s\S]*?<\/tr>\s*)+/g, (match) => {
    return `<table><tbody>${match}</tbody></table>`;
  });

  // Convert headers
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

  // Convert bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Convert lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>[\s\S]*?<\/li>\s*)+/g, '<ul>$1</ul>');

  // Convert paragraphs
  html = html.replace(/^(?!<[hult]|---|\|)(.+)$/gm, '<p>$1</p>');

  // Convert links
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');

  // Convert horizontal rules
  html = html.replace(/^---$/gm, '<hr/>');

  // Clean up multiple newlines
  html = html.replace(/\n\n+/g, '\n');

  return html;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articles.find(a => a.slug === resolvedParams.slug);

  if (!article) {
    return {
      title: 'Article non trouvé | TANSE',
    };
  }

  return {
    title: `${article.titre} | TANSE`,
    description: article.description_meta,
    openGraph: {
      title: article.titre,
      description: article.description_meta,
      images: [article.image_hero],
      type: 'article',
      publishedTime: article.date,
      authors: [article.auteur],
    },
  };
}
