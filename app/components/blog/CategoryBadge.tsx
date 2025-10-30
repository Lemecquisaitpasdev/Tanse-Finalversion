// app/components/blog/CategoryBadge.tsx

import type { ArticleCategory } from "@/app/blog/data/articles";

interface CategoryBadgeProps {
  category: ArticleCategory;
  active?: boolean;
  onClick?: () => void;
}

const categoryColors: Record<ArticleCategory, string> = {
  "SEO Local": "bg-blue-100 text-blue-700 border-blue-200",
  "GEO": "bg-purple-100 text-purple-700 border-purple-200",
  "IA & Moteurs": "bg-indigo-100 text-indigo-700 border-indigo-200",
  "Études de cas": "bg-green-100 text-green-700 border-green-200"
};

export default function CategoryBadge({ category, active = false, onClick }: CategoryBadgeProps) {
  const colorClass = categoryColors[category] || "bg-neutral-100 text-neutral-700 border-neutral-200";
  const activeClass = active ? "ring-2 ring-[#444684] ring-offset-2" : "";
  const clickableClass = onClick ? "cursor-pointer hover:opacity-80 transition-opacity" : "";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${colorClass} ${activeClass} ${clickableClass}`}
      onClick={onClick}
    >
      {category}
    </span>
  );
}
