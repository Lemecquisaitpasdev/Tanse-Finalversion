"use client";

import { useState, useMemo } from "react";
import { articles, getAllCategories, type ArticleCategory } from "@/app/blog-seo-geo/data/articles";
import BlogHero from "./BlogHero";
import BentoGrid from "./BentoGrid";
import CategorySidebar from "./CategorySidebar";
import NewsletterSidebar from "./NewsletterSidebar";
import { BlogBackground } from "./BlogBackground";
import SiteHeader from "@/app/components/SiteHeader";
import BrowserCompanyFooter from "@/app/components/outils/BrowserCompanyFooter";

export default function BlogEditorial() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Sort articles: pinned first, then by date
  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, []);

  // Get featured article (first pinned or first article)
  const featuredArticle = sortedArticles.find(a => a.isPinned) || sortedArticles[0];

  // Filter articles (exclude featured from grid)
  const gridArticles = useMemo(() => {
    let filtered = sortedArticles.filter(a => a.slug !== featuredArticle?.slug);

    if (activeCategory !== "all") {
      filtered = filtered.filter(article =>
        article.category.includes(activeCategory as ArticleCategory)
      );
    }

    return filtered;
  }, [sortedArticles, featuredArticle, activeCategory]);

  const categories = getAllCategories();

  return (
    <div className="min-h-screen relative">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg"
        style={{
          transition: "all 0.2s ease",
        }}
      >
        Aller au contenu principal
      </a>

      <BlogBackground />
      <SiteHeader />

      {/* Hero Section */}
      {featuredArticle && <BlogHero featuredArticle={featuredArticle} />}

      {/* Main Content with Sidebar */}
      <div id="main-content" className="max-w-[1600px] mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          {/* Bento Grid */}
          <div>
            <BentoGrid articles={gridArticles} />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Category Filter */}
            <CategorySidebar
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {/* Newsletter */}
            <NewsletterSidebar />
          </div>
        </div>
      </div>

      <BrowserCompanyFooter />
    </div>
  );
}
