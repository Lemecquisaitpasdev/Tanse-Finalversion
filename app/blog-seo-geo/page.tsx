// app/blog-seo-geo/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import NewsletterPopup from "../components/NewsletterPopup";
import { articles } from "./data/articles";

export default function BlogPage() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  // Trier : articles épinglés en premier, puis par date décroissante
  const sortedArticles = [...articles].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Navigation styles from Hero
  const navLinkBase = "pointer-events-auto rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium min-h-[36px] md:min-h-0 flex items-center justify-center transition-all duration-200";
  const navLinkDefault = "text-[#24243C] hover:bg-white";
  const navLinkPrimary = "text-white bg-[#444684] hover:opacity-90";

  return (
    <main className="bg-[#E4E4E4] min-h-screen">
      {/* Navigation en haut au milieu - comme Hero - SANS le bouton Blog (page active) */}
      <div className="pointer-events-none absolute left-1/2 top-4 md:top-6 z-20 -translate-x-1/2 w-full max-w-[calc(100%-2rem)] md:max-w-none">
        <nav className="flex items-center justify-center gap-1 md:gap-2 rounded-full bg-white/80 md:bg-white/70 backdrop-blur px-2 py-2 shadow-lg ring-1 ring-black/5 mx-auto w-fit">
          <Link
            href="/forfaits-geo-seo"
            className={`${navLinkBase} ${navLinkDefault}`}
          >
            Forfaits
          </Link>
          <Link
            href="/agence-geo-paris-lyon"
            className={`${navLinkBase} ${navLinkDefault}`}
          >
            Entreprise
          </Link>
          <Link
            href="/geo"
            className={`${navLinkBase} ${navLinkDefault}`}
          >
            GEO
          </Link>
          {/* Blog button hidden - we're on the blog page */}
          <Link
            href="/contact-audit-gratuit"
            className={`${navLinkBase} ${navLinkPrimary}`}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Logo TANSE en haut à droite */}
      <div className="absolute top-4 md:top-6 right-4 md:right-8 z-20">
        <Link href="/">
          <Image
            src="/brand/tanse-logo.png?v=3"
            alt="TANSE"
            width={640}
            height={160}
            priority
            className="h-20 md:h-32 w-auto"
          />
        </Link>
      </div>

      {/* Section Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-32 md:pt-40 pb-16 md:pb-20">
        {/* Titre - Full violet */}
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-[#444684] mb-6">
          NOTRE BLOG
        </h1>

        {/* Légende */}
        <p className="text-center text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Restez informés des dernières <span className="font-semibold text-[#444684]">innovations</span>{" "}
          <span className="font-semibold text-[#444684]">SEO</span> et{" "}
          <span className="font-semibold text-[#444684]">GEO</span> pour anticiper la <span className="font-semibold text-[#444684]">recherche</span> de demain.
        </p>

        {/* Animation Spline 3D - Globe terrestre */}
        <div className="spline-container relative w-full max-w-[340px] h-[320px] md:max-w-[600px] md:h-[600px] mx-auto mb-16 overflow-hidden rounded-3xl shadow-lg flex items-center justify-center">
          <div className="w-[150%] h-[150%] scale-[0.55] origin-center md:w-full md:h-full md:scale-100">
            <spline-viewer
              url="https://prod.spline.design/QWBeZ50WLnIYJBxl/scene.splinecode"
              className="w-full h-full"
              loading-anim="true"
              events-target="local"
            />
          </div>
        </div>

        {/* Bouton Newsletter en haut avant les articles */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setIsNewsletterOpen(true)}
            className="bg-[#444684] text-white px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:bg-[#3d3a66] hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
          >
            <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm md:text-base font-semibold">
              S'inscrire à notre newsletter
            </span>
          </button>
        </div>

        {/* Grid des articles - Dynamique */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sortedArticles.map((article) => (
            <div key={article.slug} className="article-card-wrapper relative">
              <Link
                href={`/blog-seo-geo/${article.slug}`}
                className="article-card block bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Hero */}
                <div className="article-image relative w-full h-[250px] md:h-[300px] overflow-hidden bg-gradient-to-br from-[#444684] to-[#6366f1]">
                  {/* Badge "Article épinglé" si applicable */}
                  {article.isPinned && (
                    <div className="article-badge absolute top-5 left-5 flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-md z-10">
                      <span className="text-xl">📌</span>
                      <span className="text-sm font-semibold text-neutral-800">Article épinglé</span>
                    </div>
                  )}

                  {/* Placeholder gradient avec icône */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <div className="text-6xl mb-3">
                        {article.slug.includes('atlas') ? '🌐' : '🚗'}
                      </div>
                      <div className="text-xl md:text-2xl font-bold opacity-90 line-clamp-2 px-4">
                        {article.title.split(':')[0]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="article-content p-6">
                  {/* Titre */}
                  <h2 className="article-title text-xl md:text-2xl font-bold text-neutral-900 mb-3 leading-tight line-clamp-3">
                    {article.title}
                  </h2>

                  {/* Extrait */}
                  <p className="article-excerpt text-sm md:text-base text-neutral-600 mb-4 leading-relaxed line-clamp-3">
                    {article.description}
                  </p>

                  {/* Meta */}
                  <div className="article-meta flex flex-wrap items-center gap-2 text-xs md:text-sm text-neutral-500 mb-4">
                    <span className="font-medium">
                      {new Date(article.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="meta-separator">•</span>
                    <span>{article.readingTime} de lecture</span>
                  </div>

                  {/* Catégories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 bg-[#444684]/10 text-[#444684] text-xs font-semibold rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#444684] text-white rounded-lg text-sm font-semibold hover:bg-[#3d3a66] transition-all group">
                    <span>Lire l'article</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />

      {/* Pop-up Newsletter */}
      <NewsletterPopup
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />

      {/* Styles personnalisés */}
      <style jsx global>{`
        /* Force gray background on blog page */
        body {
          background-color: #e4e4e4 !important;
        }

        @media (max-width: 768px) {
          .spline-container {
            max-width: 400px;
            margin-bottom: 60px;
          }
        }
      `}</style>
    </main>
  );
}
