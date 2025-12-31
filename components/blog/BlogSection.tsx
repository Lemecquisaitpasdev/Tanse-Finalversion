"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { getAllArticles } from "@/lib/blog/articles";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
}

const tabs = ["Récents", "Populaires", "Discussions"] as const;
type Tab = typeof tabs[number];

const BlogSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Récents");
  const [email, setEmail] = useState("");

  // Get real articles from lib
  const realArticles = getAllArticles();

  // Transform real articles to blog post format
  const blogPosts: BlogPost[] = realArticles.map((article, index) => {
    const publishedDate = new Date(article.publishedAt);
    const formattedDate = publishedDate.toLocaleDateString("fr-FR", {
      month: "short",
      day: "numeric",
    }).toUpperCase();

    return {
      slug: article.slug,
      title: article.title,
      excerpt: article.description,
      date: formattedDate,
      author: article.author.name.toUpperCase(),
      image: article.featuredImage,
      featured: index === 0, // First article is featured
    };
  });

  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <section className="bg-card min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="w-8 h-8 bg-foreground/10 rounded flex items-center justify-center">
            <span className="text-[8px] font-bold text-foreground/60 leading-none">TANSE<br />BLOG</span>
          </div>
          <h1 className="font-display text-lg font-bold text-foreground">Blog TANSE - Lead Generation & GEO</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="w-5 h-5 text-foreground/60" />
            </button>
            <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium">S'abonner</button>
            <Link href="/contact" className="text-sm text-foreground/60 hover:text-foreground">Contact</Link>
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

      {/* Featured Post */}
      {featuredPost && (
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Link href={`/blog/${featuredPost.slug}`} className="aspect-[4/3] rounded-lg overflow-hidden">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </Link>
            <div className="text-center md:text-left">
              <Link href={`/blog/${featuredPost.slug}`}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 hover:underline cursor-pointer">{featuredPost.title}</h2>
              </Link>
              <p className="text-foreground/70 text-lg mb-4">{featuredPost.excerpt}</p>
              <p className="text-sm text-muted-foreground">{featuredPost.date} · {featuredPost.author}</p>
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
              {regularPosts.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-foreground/60">Aucun article pour le moment.</p>
                </div>
              )}
              {regularPosts.map((post, index) => (
                <article key={post.slug} className={`py-6 ${index !== regularPosts.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="font-display text-xl font-bold text-foreground mb-2 hover:underline cursor-pointer">{post.title}</h3>
                      </Link>
                      <p className="text-foreground/70 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                      <p className="text-xs text-muted-foreground">{post.date} · {post.author}</p>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="w-28 h-20 md:w-36 md:h-24 flex-shrink-0 rounded-md overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
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
              <p className="text-sm text-foreground/70 mb-6">Stratégies et guides pour générer des leads B2B qualifiés avec le content marketing et l'optimisation GEO.</p>
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
          <h4 className="text-foreground font-medium mb-6">Blog TANSE</h4>
          <div className="space-y-3 text-sm">
            <Link href="/agence-geo-paris-lyon" className="block text-foreground hover:underline">À propos</Link>
            <a href="#" className="block text-foreground hover:underline">Archive</a>
            <a href="#" className="block text-foreground hover:underline">Plan du site</a>
          </div>
        </div>
        <div className="bg-muted py-6">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} TANSE - Première agence GEO en France</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default BlogSection;
