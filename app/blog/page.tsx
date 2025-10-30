// app/blog/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import NewsletterPopup from "../components/NewsletterPopup";

export default function BlogPage() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

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
            href="/forfaits"
            className={`${navLinkBase} ${navLinkDefault}`}
          >
            Forfaits
          </Link>
          <Link
            href="/entreprise"
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
            href="/contact"
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

        {/* Animation Spline 3D - SANS hint de rotation */}
        <div className="spline-container relative w-full max-w-[600px] h-[400px] md:h-[600px] mx-auto mb-[150px] overflow-hidden rounded-3xl">
          <spline-viewer
            url="https://prod.spline.design/QWBeZ50WLnIYJBxl/scene.splinecode"
            className="w-full h-full"
            loading-anim="true"
            events-target="local"
          />
        </div>

        {/* Carte Article Featured */}
        <div className="article-card-wrapper max-w-4xl mx-auto relative">
          <Link
            href="/blog/openai-atlas-geo-conversions-2025"
            className="article-card block bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image Hero */}
            <div className="article-image relative w-full h-[250px] md:h-[400px] overflow-hidden bg-gradient-to-br from-[#444684] to-[#6366f1]">
              {/* Badge "Article épinglé" */}
              <div className="article-badge absolute top-5 left-5 flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-md">
                <span className="text-xl">📌</span>
                <span className="text-sm font-semibold text-neutral-800">Article épinglé</span>
              </div>

              {/* Placeholder gradient avec icône */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-8xl mb-4">🌐</div>
                  <div className="text-3xl font-bold opacity-90">
                    <span className="text-white">OpenAI Atlas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenu */}
            <div className="article-content p-6 md:p-8">
              {/* Titre */}
              <h2 className="article-title text-2xl md:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                <span className="font-bold text-[#444684]">OpenAI Atlas</span> arrive : l'enjeu majeur du{" "}
                <span className="font-bold text-[#444684]">GEO</span> pour les{" "}
                <span className="font-bold text-[#444684]">conversions</span> en 2025
              </h2>

              {/* Extrait */}
              <p className="article-excerpt text-base md:text-lg text-neutral-600 mb-6 leading-relaxed">
                <span className="font-semibold text-[#444684]">OpenAI</span> lance{" "}
                <span className="font-semibold text-[#444684]">Atlas</span>, son{" "}
                <span className="font-semibold text-[#444684]">moteur</span> de recherche local intégrant l'
                <span className="font-semibold text-[#444684]">IA</span> conversationnelle.
                Pour les PME, l'enjeu n'est plus seulement le{" "}
                <span className="font-semibold text-[#444684]">SEO</span> classique, mais le{" "}
                <span className="font-semibold text-[#444684]">GEO</span> :
                être la réponse recommandée par les{" "}
                <span className="font-semibold text-[#444684]">IA</span>.
              </p>

              {/* Meta */}
              <div className="article-meta flex flex-wrap items-center gap-2 text-sm text-neutral-500 mb-6">
                <span className="font-medium">30 octobre 2025</span>
                <span className="meta-separator">•</span>
                <span>
                  <span className="font-semibold text-[#444684]">GEO</span>,{" "}
                  <span className="font-semibold text-[#444684]">IA</span> &{" "}
                  <span className="font-semibold text-[#444684]">Moteurs</span>
                </span>
                <span className="meta-separator">•</span>
                <span>8 min de lecture</span>
              </div>

              {/* CTA */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#444684] text-white rounded-lg font-semibold hover:bg-[#3d3a66] transition-all group">
                <span>Lire l'article</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Bouton Newsletter en bas à droite de la carte */}
          <button
            onClick={() => setIsNewsletterOpen(true)}
            className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-[#444684] text-white px-4 md:px-6 py-3 md:py-4 rounded-full shadow-lg hover:bg-[#3d3a66] hover:shadow-xl transition-all duration-300 flex items-center gap-2 group z-10"
          >
            <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm md:text-base font-semibold whitespace-nowrap">
              S'inscrire à notre newsletter
            </span>
          </button>
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
            margin-bottom: 100px;
          }
        }

        @media (max-width: 640px) {
          .article-card-wrapper button {
            position: static;
            margin-top: 1.5rem;
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}
