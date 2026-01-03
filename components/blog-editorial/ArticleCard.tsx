"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import type { Article } from "@/app/blog-seo-geo/data/articles";

interface ArticleCardProps {
  article: Article;
  size: "large" | "medium" | "small";
}

export default function ArticleCard({ article, size }: ArticleCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const heightClass =
    size === "large" ? "min-h-[500px]" :
    size === "medium" ? "min-h-[350px]" :
    "min-h-[250px]";

  return (
    <motion.a
      ref={cardRef}
      href={`/blog-seo-geo/${article.slug}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
      className={`block ${heightClass} h-full group cursor-pointer`}
      aria-label={`Lire l'article : ${article.title}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)",
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 16px 48px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(99, 102, 241, 0.08)",
          transition: { type: "spring", damping: 15, stiffness: 300 },
        }}
        className="relative h-full rounded-3xl overflow-hidden transition-all duration-300"
      >
        {/* Enhanced Glassmorphic overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.08) 50%, rgba(236, 72, 153, 0.08) 100%)",
            backdropFilter: "blur(8px)",
          }}
        />

        {/* Shimmer effect on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(110deg, transparent 25%, rgba(255, 255, 255, 0.3) 50%, transparent 75%)",
            backgroundSize: "200% 100%",
            animation: isHovered ? "shimmer 2s ease-in-out infinite" : "none",
          }}
        />

        {/* Article image mockup */}
        <div className="relative h-2/3 overflow-hidden">
          {article.image ? (
            <motion.div
              className="relative w-full h-full"
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={article.image}
                alt={`Illustration pour l'article : ${article.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
              />
            </motion.div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Enhanced colored blur tag */}
          <div className="absolute top-4 left-4 z-20">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="relative inline-block px-3 py-1 text-xs font-semibold text-white rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(99, 102, 241, 0.95), rgba(168, 85, 247, 0.9))",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "0 4px 24px rgba(99, 102, 241, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              {article.category[0]}
            </motion.span>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 h-1/3 flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
          <div>
            <h3 className={`font-display font-bold mb-2 line-clamp-2 ${
              size === "large" ? "text-2xl md:text-3xl" :
              size === "medium" ? "text-xl" :
              "text-lg"
            }`}>
              {article.title}
            </h3>
            {size !== "small" && (
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                {article.description}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-gray-600">
            <span className="flex items-center gap-1" aria-label={`Temps de lecture : ${article.readingTime}`}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {article.readingTime}
            </span>
            <motion.span
              className="flex items-center gap-1 text-indigo-500 font-medium"
              animate={{
                x: isHovered ? 5 : 0,
              }}
              aria-hidden="true"
            >
              Lire
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.span>
          </div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 rounded-3xl"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.1), transparent 70%)",
            pointerEvents: "none",
          }}
        />
      </motion.div>
    </motion.a>
  );
}
