// app/blog/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import ArticleCard from "../components/blog/ArticleCard";
import CategoryBadge from "../components/blog/CategoryBadge";
import { getPinnedArticles, getRegularArticles, getAllCategories, type ArticleCategory } from "./data/articles";
import SiteFooter from "../components/SiteFooter";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | "all">("all");
  const pinnedArticles = getPinnedArticles();
  const regularArticles = getRegularArticles();

  const filteredArticles = selectedCategory === "all"
    ? regularArticles
    : regularArticles.filter(article => article.category.includes(selectedCategory));

  return (
    <main className="bg-[#E4E4E4]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#444684] via-[#3d3a66] to-[#524e7d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white font-medium">Blog</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm font-medium mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              Expertise SEO Local & GEO
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Blog SEO Local & GEO
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
              Guides pratiques, actualités et stratégies de visibilité dans les moteurs IA.<br className="hidden md:block" />
              Expertise TANSE pour PME françaises.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="-mt-16 pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          {/* Category Filters */}
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            <span
              className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium cursor-pointer transition-all ${
                selectedCategory === "all"
                  ? "bg-[#444684] text-white border-[#444684] ring-2 ring-[#444684] ring-offset-2"
                  : "bg-white text-neutral-700 border-neutral-200 hover:opacity-80"
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              Tous
            </span>
            {getAllCategories().map((cat) => (
              <CategoryBadge
                key={cat}
                category={cat}
                active={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
              />
            ))}
          </div>

          {/* Pinned Articles */}
          {pinnedArticles.length > 0 && (
            <div className="mb-8">
              <div className="grid gap-6 md:grid-cols-2">
                {pinnedArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} featured={true} />
                ))}
              </div>
            </div>
          )}

          {/* Regular Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-neutral-600">Aucun article dans cette catégorie pour le moment.</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 rounded-3xl border border-neutral-200 bg-white p-8 md:p-12 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
              Besoin d'aide pour votre visibilité locale ?
            </h2>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              TANSE accompagne les PME françaises dans leur optimisation SEO Local et GEO.
              Découvrez nos forfaits adaptés à votre contexte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/forfaits"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#444684] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 min-h-[48px]"
              >
                Voir nos forfaits
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-50 min-h-[48px]"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
