"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import type { ArticleCategory } from "@/app/blog-seo-geo/data/articles";

interface FloatingNavProps {
  categories: ArticleCategory[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function FloatingNav({ categories, activeCategory, onCategoryChange }: FloatingNavProps) {
  const { scrollY } = useScroll();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Fade in nav after scrolling past hero
  const opacity = useTransform(scrollY, [100, 200], [0, 1]);
  const y = useTransform(scrollY, [100, 200], [-20, 0]);

  const allCategories = ["Tout", ...categories];

  return (
    <motion.nav
      style={{ opacity, y }}
      className="fixed top-24 left-1/2 -translate-x-1/2 z-50 hidden md:block"
    >
      <div
        className="flex items-center gap-2 px-4 py-3 rounded-full"
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
        }}
      >
        {allCategories.map((category, index) => {
          const isActive = category === activeCategory || (category === "Tout" && activeCategory === "all");
          const isHovered = hoveredIndex === index;

          return (
            <motion.button
              key={category}
              onClick={() => onCategoryChange(category === "Tout" ? "all" : category)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                color: isActive ? "#fff" : isHovered ? "#4f46e5" : "#666",
              }}
            >
              {/* Active/Hover background */}
              {(isActive || isHovered) && (
                <motion.div
                  layoutId={isActive ? "activeTab" : `hover-${index}`}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, #4f46e5, #7c3aed)"
                      : "rgba(79, 70, 229, 0.1)",
                  }}
                  transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 300,
                  }}
                />
              )}

              <span className="relative z-10">{category}</span>
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}
