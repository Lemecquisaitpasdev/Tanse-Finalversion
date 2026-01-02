"use client";

import { useState, useMemo } from "react";
import { articles, getAllCategories, type ArticleCategory } from "@/app/blog-seo-geo/data/articles";
import BlogHero from "./BlogHero";
import BentoGrid from "./BentoGrid";
import CategorySidebar from "./CategorySidebar";
import NewsletterSidebar from "./NewsletterSidebar";
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
    <div
      className="min-h-screen"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% -20%,
            rgba(147, 51, 234, 0.03),
            transparent 50%
          ),
          radial-gradient(ellipse 60% 50% at 80% 50%,
            rgba(59, 130, 246, 0.02),
            transparent 50%
          ),
          radial-gradient(ellipse 70% 60% at 20% 80%,
            rgba(236, 72, 153, 0.02),
            transparent 50%
          ),
          #fafafa
        `
      }}
    >
      <SiteHeader />

      {/* Hero Section */}
      {featuredArticle && <BlogHero featuredArticle={featuredArticle} />}

      {/* Main Content with Sidebar */}
      <div className="max-w-[1600px] mx-auto px-6 py-16">
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
