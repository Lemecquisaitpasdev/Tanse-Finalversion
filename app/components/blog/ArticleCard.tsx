// app/components/blog/ArticleCard.tsx
"use client";

import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import type { Article } from "@/app/blog/data/articles";
import CategoryBadge from "./CategoryBadge";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const cardClass = featured
    ? "group relative rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_40px_120px_-30px_rgba(68,70,132,0.4)] md:col-span-2"
    : "group relative rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_-30px_rgba(68,70,132,0.3)]";

  return (
    <Link href={`/blog/${article.slug}`} className={cardClass}>
      {article.isPinned && (
        <div className="absolute -top-3 left-6 z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#444684] to-[#524e7d] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow-300"></span>
            Article épinglé
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {article.category.map((cat) => (
          <CategoryBadge key={cat} category={cat} />
        ))}
      </div>

      <h2 className={`font-semibold text-neutral-900 group-hover:text-[#444684] transition-colors ${featured ? "text-2xl md:text-3xl mb-4" : "text-xl mb-3"}`}>
        {article.title}
      </h2>

      <p className={`text-neutral-600 ${featured ? "text-base md:text-lg mb-6" : "text-sm mb-4"}`}>
        {article.description}
      </p>

      <div className="flex items-center gap-4 text-sm text-neutral-500">
        <div className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })}
          </time>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          <span>{article.readingTime} de lecture</span>
        </div>
      </div>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#444684] group-hover:gap-3 transition-all">
        Lire l'article
        <span className="text-lg">→</span>
      </div>
    </Link>
  );
}
