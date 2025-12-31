"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { articles } from "@/app/blog-seo-geo/data/articles";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
}

// Transform articles to blogPosts format
const blogPosts: BlogPost[] = articles
  .sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  })
  .map((article, index) => {
    const date = new Date(article.date);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }).toUpperCase();

    return {
      id: article.slug,
      title: article.title,
      excerpt: article.description,
      date: formattedDate,
      author: article.author.toUpperCase(),
      image: article.image || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      featured: article.isPinned,
    };
  });

const tabs = ["Latest", "Top", "Discussions"] as const;
type Tab = typeof tabs[number];

const BlogSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Latest");
  const [email, setEmail] = useState("");

  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <section className="bg-card min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="w-8 h-8 bg-foreground/10 rounded flex items-center justify-center">
            <span className="text-[8px] font-bold text-foreground/60 leading-none">BROWSER<br />COMPANY</span>
          </div>
          <h1 className="font-display text-lg font-bold text-foreground">Keeping Tabs by The Browser Company</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="w-5 h-5 text-foreground/60" />
            </button>
            <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium">Subscribe</button>
            <button className="text-sm text-foreground/60 hover:text-foreground">Sign in</button>
          </div>
        </div>

        <nav className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-8 py-3">
            {["Home", "Archive", "About"].map((item) => (
              <a key={item} href="#" className={`text-sm transition-colors ${item === "Home" ? "text-foreground font-medium border-b-2 border-foreground pb-3 -mb-3" : "text-foreground/60 hover:text-foreground"}`}>
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
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{featuredPost.title}</h2>
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
              {regularPosts.map((post, index) => (
                <article key={post.id} className={`py-6 ${index !== regularPosts.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2 hover:underline cursor-pointer">{post.title}</h3>
                      <p className="text-foreground/70 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                      <p className="text-xs text-muted-foreground">{post.date} · {post.author}</p>
                    </div>
                    <div className="w-28 h-20 md:w-36 md:h-24 flex-shrink-0 rounded-md overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button className="mt-8 flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-muted transition-colors">
              See all <span className="text-lg">→</span>
            </button>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Keeping Tabs by The Browser Company</h3>
              <p className="text-sm text-foreground/70 mb-6">We're building a better way to use the internet.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type your email..."
                  className="flex-1 px-4 py-2.5 rounded-l-full border border-border bg-background text-sm placeholder:text-muted-foreground focus:outline-none"
                />
                <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-r-full text-sm font-medium">Subscribe</button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h4 className="text-foreground font-medium mb-6">Keeping Tabs by The Browser Company</h4>
          <div className="space-y-3 text-sm">
            <a href="#" className="block text-foreground hover:underline">About</a>
            <a href="#" className="block text-foreground hover:underline">Archive</a>
            <a href="#" className="block text-foreground hover:underline">Sitemap</a>
          </div>
        </div>
        <div className="bg-muted py-6">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm text-muted-foreground">© 2025 The Browser Company</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default BlogSection;
