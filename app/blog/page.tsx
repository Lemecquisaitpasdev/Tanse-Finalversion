// app/blog/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, RotateCw } from "lucide-react";
import SplineLazy from "../components/SplineLazy";
import SiteFooter from "../components/SiteFooter";

export default function BlogPage() {
  return (
    <main className="bg-[#E4E4E4] min-h-screen">
      {/* Header avec flèche retour + logo */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-200/50 shadow-sm">
        <div className="mx-auto w-full max-w-7xl px-6 py-4 flex items-center justify-between">
          {/* Flèche retour */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#444684] transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Retour</span>
          </Link>

          {/* Logo TANSE */}
          <Link href="/">
            <Image
              src="/brand/tanse-logo.png?v=3"
              alt="TANSE"
              width={160}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Section Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        {/* Titre */}
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
          NOTRE BLOG
        </h1>

        {/* Légende */}
        <p className="text-center text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Restez informés des dernières innovations SEO et GEO pour anticiper le monde de demain
        </p>

        {/* Animation Spline 3D */}
        <div className="spline-container relative w-full max-w-[600px] h-[400px] md:h-[600px] mx-auto mb-12">
          <SplineLazy
            url="https://prod.spline.design/8xMH0fv1JGcJornD/scene.splinecode"
            className="block w-full h-full rounded-3xl"
          />

          {/* Hint de rotation */}
          <div className="rotation-hint absolute bottom-5 right-5 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
            <RotateCw className="h-5 w-5 text-[#444684] animate-spin-slow" />
            <span className="text-sm font-medium text-neutral-700">Glissez pour tourner</span>
          </div>
        </div>

        {/* Carte Article Featured */}
        <Link
          href="/blog/openai-atlas-geo-conversions-2025"
          className="article-card block max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
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
                <div className="text-3xl font-bold opacity-90">OpenAI Atlas</div>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="article-content p-6 md:p-8">
            {/* Titre */}
            <h2 className="article-title text-2xl md:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
              OpenAI Atlas arrive : l'enjeu majeur du GEO pour les conversions en 2025
            </h2>

            {/* Extrait */}
            <p className="article-excerpt text-base md:text-lg text-neutral-600 mb-6 leading-relaxed">
              OpenAI lance Atlas, son moteur de recherche local intégrant l'IA conversationnelle.
              Pour les PME, l'enjeu n'est plus seulement le SEO classique, mais le GEO :
              être la réponse recommandée par les IA.
            </p>

            {/* Meta */}
            <div className="article-meta flex flex-wrap items-center gap-2 text-sm text-neutral-500 mb-6">
              <span className="font-medium">30 octobre 2025</span>
              <span className="meta-separator">•</span>
              <span>GEO, IA & Moteurs</span>
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
      </section>

      {/* Footer */}
      <SiteFooter />

      {/* Styles personnalisés pour l'animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        @media (max-width: 768px) {
          .spline-container {
            max-width: 400px;
          }

          .rotation-hint {
            bottom: 10px;
            right: 10px;
            padding: 6px 12px;
          }

          .rotation-hint span {
            font-size: 0.75rem;
          }

          .rotation-hint svg {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </main>
  );
}
