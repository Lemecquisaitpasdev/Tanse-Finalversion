"use client";

import Script from "next/script";
import Link from "next/link";
import LogoTanse from "../components/LogoTanse";
import dynamic from "next/dynamic";

const SiteFooter = dynamic(() => import("../components/SiteFooter").then(m => m.default), {
  ssr: false,
});

// Spline scene URL - vous pouvez remplacer par votre propre URL
const BLOG_SPLINE_URL = "https://prod.spline.design/l8fan1OYXfoYpgtt/scene.splinecode?v=20251019";

export default function BlogPage() {
  return (
    <>
      {/* CSS personnalisé pour la page blog */}
      <style jsx global>{`
        /* ===== COULEURS GLOBALES ===== */
        body.blog-page {
          background-color: #e4e4e4;
        }

        /* ===== MOTS-CLÉS COLORÉS ===== */
        .highlight-keyword {
          color: #444684;
          font-weight: 600;
        }

        /* ===== HEADER AVEC LOGO AGRANDI ===== */
        .blog-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(228, 228, 228, 0.8);
          backdrop-filter: blur(10px);
        }

        .blog-header-logo {
          /* Logo agrandi x2 */
          transform: scale(2);
          transform-origin: left center;
        }

        .blog-header-nav {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .blog-header-nav a {
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s;
        }

        .blog-header-nav a.nav-link {
          color: #24243C;
          background: rgba(255, 255, 255, 0.7);
        }

        .blog-header-nav a.nav-link:hover {
          background: rgba(255, 255, 255, 1);
        }

        .blog-header-nav a.nav-cta {
          color: white;
          background: #444684;
        }

        .blog-header-nav a.nav-cta:hover {
          opacity: 0.9;
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          padding: 8rem 2rem 4rem;
          text-align: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #24243C;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #666;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
        }

        /* ===== SPLINE CONTAINER ===== */
        .spline-container {
          position: relative;
          width: 600px;
          height: 600px;
          margin: 0 auto 150px auto; /* 150px de marge en bas */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .spline-container spline-viewer {
          width: 100%;
          height: 100%;
        }

        /* ===== CARTE ARTICLE ===== */
        .article-card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          max-width: 900px;
          margin: 0 auto 4rem;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .article-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .article-image {
          position: relative;
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .article-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .article-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255, 255, 255, 0.95);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #444684;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .article-content {
          padding: 2.5rem;
        }

        .article-title {
          font-size: 2rem;
          font-weight: 700;
          color: #24243C;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }

        .article-excerpt {
          font-size: 1.125rem;
          color: #555;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .article-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.875rem;
          color: #888;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .meta-separator {
          color: #ccc;
        }

        .article-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: #444684;
          color: white;
          border-radius: 9999px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
        }

        .article-cta:hover {
          opacity: 0.9;
          gap: 0.75rem;
        }

        .article-cta svg {
          transition: transform 0.2s;
        }

        .article-cta:hover svg {
          transform: translateX(4px);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .blog-header {
            padding: 1rem;
          }

          .blog-header-logo {
            transform: scale(1.2); /* Plus petit sur mobile */
          }

          .blog-header-nav {
            gap: 0.5rem;
          }

          .blog-header-nav a {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .spline-container {
            width: 100%;
            height: 400px;
            margin-bottom: 100px; /* Espacement réduit sur mobile */
          }

          .article-card {
            margin: 0 1rem 3rem;
          }

          .article-image {
            height: 250px;
          }

          .article-content {
            padding: 1.5rem;
          }

          .article-title {
            font-size: 1.5rem;
          }

          .article-excerpt {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .blog-header-logo {
            transform: scale(1); /* Encore plus petit sur très petits écrans */
          }

          .hero-section {
            padding: 6rem 1rem 3rem;
          }
        }
      `}</style>

      <div className="blog-page min-h-screen">
        {/* Header avec logo agrandi */}
        <header className="blog-header">
          <div className="blog-header-logo">
            <Link href="/">
              <LogoTanse
                className="text-[#444684]"
                sizeClassName="h-8"
                bubble="right"
              />
            </Link>
          </div>
          <nav className="blog-header-nav">
            <Link href="/forfaits" className="nav-link">Forfaits</Link>
            <Link href="/entreprise" className="nav-link">Entreprise</Link>
            <Link href="/contact" className="nav-cta">Nous contacter</Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">NOTRE BLOG</h1>
          <p className="hero-subtitle">
            Restez informés des dernières innovations{" "}
            <span className="highlight-keyword">SEO</span> et{" "}
            <span className="highlight-keyword">GEO</span> pour anticiper le monde de demain
          </p>
        </section>

        {/* Animation Spline */}
        <div className="spline-container">
          <Script
            type="module"
            src="https://unpkg.com/@splinetool/viewer@1.10.82/build/spline-viewer.js"
            strategy="afterInteractive"
          />
          <spline-viewer url={BLOG_SPLINE_URL}></spline-viewer>
        </div>

        {/* Carte Article */}
        <article className="article-card">
          <div className="article-image">
            <span className="article-badge">
              📌 Article épinglé
            </span>
          </div>
          <div className="article-content">
            <h2 className="article-title">
              <span className="highlight-keyword">OpenAI Atlas</span> arrive : l'enjeu majeur du{" "}
              <span className="highlight-keyword">GEO</span> pour les{" "}
              <span className="highlight-keyword">conversions</span> en 2025
            </h2>

            <p className="article-excerpt">
              <span className="highlight-keyword">OpenAI</span> lance{" "}
              <span className="highlight-keyword">Atlas</span>, son moteur de recherche local
              intégrant l'<span className="highlight-keyword">IA</span> conversationnelle.
              Pour les PME, l'enjeu n'est plus seulement le{" "}
              <span className="highlight-keyword">SEO</span> classique, mais le{" "}
              <span className="highlight-keyword">GEO</span> : être la réponse recommandée par les{" "}
              <span className="highlight-keyword">IA</span>. Découvrez comment optimiser votre{" "}
              <span className="highlight-keyword">visibilité</span> dans ces nouveaux{" "}
              <span className="highlight-keyword">moteurs</span> et maximiser vos{" "}
              <span className="highlight-keyword">conversions</span>.
            </p>

            <div className="article-meta">
              <span className="meta-date">30 octobre 2025</span>
              <span className="meta-separator">•</span>
              <span className="meta-category">
                <span className="highlight-keyword">GEO</span>,{" "}
                <span className="highlight-keyword">IA</span> & Moteurs
              </span>
              <span className="meta-separator">•</span>
              <span className="meta-reading">8 min de lecture</span>
            </div>

            <a href="/blog/openai-atlas-geo-conversions-2025" className="article-cta">
              Lire l'article
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 15l5-5-5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </article>

        {/* Footer */}
        <SiteFooter />
      </div>
    </>
  );
}
