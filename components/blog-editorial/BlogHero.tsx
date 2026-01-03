"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import type { Article } from "@/app/blog-seo-geo/data/articles";

interface BlogHeroProps {
  featuredArticle: Article;
}

export default function BlogHero({ featuredArticle }: BlogHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-label="Article mis en avant"
    >
      {/* Animated Blur Gradients */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient orb */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/3 w-[800px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.4), rgba(236, 72, 153, 0.3), transparent 70%)",
          }}
        />

        {/* Secondary orb */}
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.4), rgba(59, 130, 246, 0.3), transparent 70%)",
          }}
        />

        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
          <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")" }} />
        </div>
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-24"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Featured Article Image - CSS 3D Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 100,
              delay: 0.2,
            }}
            className="relative"
            style={{ perspective: "1000px" }}
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
              style={{
                transform: "rotateY(-5deg) rotateX(2deg)",
                transformStyle: "preserve-3d",
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              {/* Enhanced Glassmorphic frame with shimmer */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                }}
              />

              {/* Shimmer effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "linear-gradient(110deg, transparent 25%, rgba(255, 255, 255, 0.2) 50%, transparent 75%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              />

              {/* Article image */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                {featuredArticle.image ? (
                  <Image
                    src={featuredArticle.image}
                    alt={`Illustration pour l'article : ${featuredArticle.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    priority
                    quality={90}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating badge */}
            {featuredArticle.isPinned && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                ⭐ Featured
              </motion.div>
            )}
          </motion.div>

          {/* Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredArticle.category.map((cat, idx) => (
                  <span
                    key={cat}
                    className="relative px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      background: idx === 0
                        ? "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))"
                        : "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h1
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
                style={{
                  background: "linear-gradient(135deg, #000 0%, #333 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {featuredArticle.title}
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                {featuredArticle.description}
              </p>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {featuredArticle.readingTime}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(featuredArticle.date).toLocaleDateString('fr-FR', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
            </motion.div>

            <motion.a
              href={`/blog-seo-geo/${featuredArticle.slug}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label={`Lire l'article complet : ${featuredArticle.title}`}
            >
              Lire l'article
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
