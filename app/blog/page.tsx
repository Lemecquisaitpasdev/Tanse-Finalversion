import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/lib/blog/articles";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog TANSE - Lead Generation, GEO & Content Marketing B2B",
  description:
    "Découvrez nos guides et stratégies pour générer des leads B2B qualifiés avec le content marketing et l'optimisation GEO.",
  openGraph: {
    title: "Blog TANSE - Stratégies Lead Generation B2B",
    description:
      "Guides et cas pratiques pour attirer des clients B2B sans cold calling.",
    images: ["/images/blog/magnet-attraction.png"],
  },
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Blog TANSE
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Stratégies, guides et cas pratiques pour générer des leads B2B
              qualifiés avec le content marketing et l'optimisation GEO.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                Aucun article pour le moment. Revenez bientôt !
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => {
                const publishedDate = new Date(
                  article.publishedAt
                ).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });

                return (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group"
                  >
                    <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                      {/* Featured Image */}
                      <div className="relative w-full h-64 overflow-hidden">
                        <Image
                          src={article.featuredImage}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#667eea]">
                            {article.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h2 className="text-2xl font-bold mb-3 text-[#2d3748] group-hover:text-[#667eea] transition-colors line-clamp-2">
                          {article.title}
                        </h2>

                        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                          {article.description}
                        </p>

                        <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{publishedDate}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{article.readingTime}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2 text-[#667eea] font-semibold group-hover:gap-3 transition-all">
                          Lire l'article
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#667eea] to-[#764ba2]">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Besoin d'aide pour votre stratégie de contenu ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            TANSE vous accompagne dans la création de contenu optimisé pour
            générer des leads B2B qualifiés.
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
              Découvrir nos offres
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
