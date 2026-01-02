"use client";

import { motion } from "framer-motion";
import type { Article } from "@/app/blog-seo-geo/data/articles";
import ArticleCard from "./ArticleCard";

interface BentoGridProps {
  articles: Article[];
}

export default function BentoGrid({ articles }: BentoGridProps) {
  // Bento layout pattern: Large, Small, Small, Medium, Medium
  const getCardSize = (index: number): "large" | "medium" | "small" => {
    const pattern = index % 5;
    if (pattern === 0) return "large";
    if (pattern === 1 || pattern === 2) return "small";
    return "medium";
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
        {articles.map((article, index) => {
          const size = getCardSize(index);

          // Grid positioning based on size
          const gridClass =
            size === "large"
              ? "md:col-span-2 lg:col-span-2 md:row-span-2"
              : size === "medium"
              ? "md:col-span-1 lg:col-span-1"
              : "md:col-span-1 lg:col-span-1";

          return (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 120,
                delay: index * 0.1,
              }}
              className={gridClass}
            >
              <ArticleCard article={article} size={size} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
