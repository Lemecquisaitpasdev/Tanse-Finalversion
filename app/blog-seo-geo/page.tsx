// app/blog-seo-geo/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { articles } from "./data/articles";

export default function BlogPage() {
  // Filtrer uniquement les articles publiés et les trier par date
  const publishedArticles = articles
    .filter(article => article.statut === 'publié')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl font-bold mt-4 text-gray-900">
            Blog SEO & GEO
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Actualités, guides et analyses sur le référencement et l'IA générative
          </p>
        </div>
      </header>

      {/* Articles Grid */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {publishedArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <Link href={`/blog-seo-geo/${article.slug}`}>
                <div className="relative h-48 w-full bg-gradient-to-br from-purple-600 to-blue-500">
                  <Image
                    src={article.image_hero}
                    alt={article.titre}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.categorie.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <Link href={`/blog-seo-geo/${article.slug}`}>
                  <h2 className="text-xl font-bold text-gray-900 hover:text-purple-600 transition-colors mb-3 line-clamp-2">
                    {article.titre}
                  </h2>
                </Link>

                {/* Meta info */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="mx-2">•</span>
                  <span>{article.temps_lecture} min de lecture</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {article.description_meta}
                </p>

                {/* Read more link */}
                <Link
                  href={`/blog-seo-geo/${article.slug}`}
                  className="text-purple-600 hover:text-purple-700 font-medium text-sm inline-flex items-center"
                >
                  Lire l'article
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* No articles message */}
        {publishedArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Aucun article publié pour le moment.</p>
          </div>
        )}
      </main>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à améliorer votre visibilité en ligne ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Découvrez comment TANSE peut vous aider avec le SEO et le GEO
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-audit-gratuit"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Audit gratuit
            </Link>
            <Link
              href="/forfaits-geo-seo"
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Voir nos forfaits
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
