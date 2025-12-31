"use client";

import { useState } from "react";
import { Search, Mail } from "lucide-react";
import Link from "next/link";
import { articles } from "@/app/blog-seo-geo/data/articles";

const tabs = ["Récents", "Populaires", "Discussions"] as const;
type Tab = typeof tabs[number];

interface BlogSeoGeoSectionProps {
  splineAnimation: React.ReactNode;
}

const BlogSeoGeoSection = ({ splineAnimation }: BlogSeoGeoSectionProps) => {
  const [activeTab, setActiveTab] = useState<Tab>("Récents");
  const [email, setEmail] = useState("");

  // Sort articles: pinned first, then by date
  const sortedArticles = [...articles].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const featuredPost = sortedArticles.find((article) => article.isPinned);
  const regularPosts = sortedArticles.filter((article) => !article.isPinned);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
    }).toUpperCase();
  };

  return (
    <section className="bg-card min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="w-8 h-8 bg-foreground/10 rounded flex items-center justify-center">
            <span className="text-[8px] font-bold text-foreground/60 leading-none">TANSE<br />BLOG</span>
          </div>
          <h1 className="font-display text-lg font-bold text-foreground">Notre Blog - Innovations SEO et GEO</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="w-5 h-5 text-foreground/60" />
            </button>
            <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <Mail className="w-4 h-4" />
              S'abonner
            </button>
            <Link href="/contact-audit-gratuit" className="text-sm text-foreground/60 hover:text-foreground">Contact</Link>
          </div>
        </div>

        <nav className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-8 py-3">
            {["Accueil", "Archive", "À propos"].map((item) => (
              <a key={item} href="#" className={`text-sm transition-colors ${item === "Accueil" ? "text-foreground font-medium border-b-2 border-foreground pb-3 -mb-3" : "text-foreground/60 hover:text-foreground"}`}>
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero with Spline Animation */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-foreground mb-4">
          Notre Blog
        </h2>
        <p className="text-center text-lg text-foreground/70 mb-8 max-w-3xl mx-auto">
          Restez informés des dernières <span className="font-semibold text-foreground">innovations SEO</span> et{" "}
          <span className="font-semibold text-foreground">GEO</span> pour anticiper la <span className="font-semibold text-foreground">recherche</span> de demain.
        </p>

        {/* Spline Globe Animation */}
        <div className="w-full max-w-[600px] h-[400px] md:h-[500px] mx-auto mb-12 overflow-hidden rounded-3xl shadow-lg bg-muted">
          {splineAnimation}
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-8 shadow-lg">
            <Link href={`/blog-seo-geo/${featuredPost.slug}`} className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-[#444684] to-[#6366f1] flex items-center justify-center">
              <div className="text-center text-white p-6">
                <div className="text-6xl mb-3">
                  {featuredPost.slug.includes('atlas') ? '🌐' : '🚗'}
                </div>
                <div className="text-xl md:text-2xl font-bold opacity-90">
                  {featuredPost.title.split(':')[0]}
                </div>
              </div>
            </Link>
            <div className="text-center md:text-left">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-3">
                📌 Article épinglé
              </div>
              <Link href={`/blog-seo-geo/${featuredPost.slug}`}>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 hover:underline cursor-pointer">{featuredPost.title}</h2>
              </Link>
              <p className="text-foreground/70 mb-4">{featuredPost.description}</p>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>{formatDate(featuredPost.date)}</span>
                <span>•</span>
                <span>{featuredPost.readingTime} de lecture</span>
                <span>•</span>
                <span>{featuredPost.author}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {featuredPost.category.map((cat) => (
                  <span key={cat} className="bg-muted px-2 py-1 rounded text-xs text-foreground/80">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-border" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          {/* Posts List */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-1 bg-muted rounded-full p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 text-sm rounded-full transition-all ${activeTab === tab ? "bg-card text-foreground shadow-sm" : "text-foreground/60 hover:text-foreground"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <button className="p-2 hover:bg-muted rounded-full transition-colors">
                <Search className="w-5 h-5 text-foreground/60" />
              </button>
            </div>

            <div className="space-y-0">
              {regularPosts.map((post, index) => (
                <article key={post.slug} className={`py-6 ${index !== regularPosts.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {post.category.map((cat) => (
                          <span key={cat} className="text-xs text-primary font-medium">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <Link href={`/blog-seo-geo/${post.slug}`}>
                        <h3 className="font-display text-xl font-bold text-foreground mb-2 hover:underline cursor-pointer">{post.title}</h3>
                      </Link>
                      <p className="text-foreground/70 text-sm mb-3 line-clamp-2">{post.description}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{formatDate(post.date)}</span>
                        <span>•</span>
                        <span>{post.readingTime}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <Link href={`/blog-seo-geo/${post.slug}`} className="w-28 h-20 md:w-36 md:h-24 flex-shrink-0 rounded-md overflow-hidden bg-gradient-to-br from-[#444684] to-[#6366f1] flex items-center justify-center">
                      <div className="text-4xl">
                        {post.slug.includes('atlas') ? '🌐' : post.slug.includes('google') ? '🚗' : '📊'}
                      </div>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {regularPosts.length > 0 && (
              <button className="mt-8 flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-muted transition-colors">
                Voir tout <span className="text-lg">→</span>
              </button>
            )}
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Blog TANSE</h3>
              <p className="text-sm text-foreground/70 mb-6">
                Restez informés des dernières innovations SEO et GEO pour anticiper la recherche de demain.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email..."
                  className="flex-1 px-4 py-2.5 rounded-l-full border border-border bg-background text-sm placeholder:text-muted-foreground focus:outline-none"
                />
                <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-r-full text-sm font-medium">S'abonner</button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h4 className="text-foreground font-medium mb-6">Blog TANSE - SEO & GEO</h4>
          <div className="space-y-3 text-sm">
            <Link href="/agence-geo-paris-lyon" className="block text-foreground hover:underline">À propos de TANSE</Link>
            <a href="#" className="block text-foreground hover:underline">Archive</a>
            <Link href="/forfaits-geo-seo" className="block text-foreground hover:underline">Nos forfaits</Link>
          </div>
        </div>
        <div className="bg-muted py-6">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} TANSE - Pionniers du GEO en France</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default BlogSeoGeoSection;
