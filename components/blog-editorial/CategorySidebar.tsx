"use client";

import { motion } from "framer-motion";

interface CategorySidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategorySidebar({
  categories,
  activeCategory,
  onCategoryChange,
}: CategorySidebarProps) {
  const allCategories = ["Tout", ...categories];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="sticky top-24 mb-8"
    >
      <div
        className="rounded-3xl p-6"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))",
          backdropFilter: "blur(40px) saturate(180%)",
          WebkitBackdropFilter: "blur(40px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
        }}
      >
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-1">Catégories</h3>
          <p className="text-xs text-gray-500">Filtrez par thématique</p>
        </div>

        {/* Category List */}
        <div className="space-y-2">
          {allCategories.map((category, index) => {
            const isActive = category === "Tout" ? activeCategory === "all" : activeCategory === category;

            return (
              <motion.button
                key={category}
                onClick={() => onCategoryChange(category === "Tout" ? "all" : category)}
                className="relative w-full px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: isActive
                    ? "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)"
                    : "rgba(255, 255, 255, 0.5)",
                  border: isActive ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid rgba(0, 0, 0, 0.05)",
                  boxShadow: isActive
                    ? "0 4px 16px rgba(99, 102, 241, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                    : "0 2px 8px rgba(0, 0, 0, 0.02)",
                  color: isActive ? "#fff" : "#64748b",
                  textShadow: isActive ? "0 1px 2px rgba(0,0,0,0.2)" : "none",
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{category}</span>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15, stiffness: 300 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  )}
                </div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategorySidebar"
                    className="absolute inset-0 rounded-xl -z-10"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
                    }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
