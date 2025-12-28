'use client';

import Link from 'next/link';

interface OutilCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

/**
 * OutilCard - Reusable card component for tools
 * Features: Hover effects (shadow + translate-y), smooth transitions
 */
export default function OutilCard({ icon, title, description, href }: OutilCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl p-8 border border-gray-200
                 transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                 hover:border-[#444684]/20"
    >
      {/* Icon */}
      <div className="text-5xl mb-4">{icon}</div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-[#444684] mb-3 group-hover:text-[#5a5a9e] transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">
        {description}
      </p>

      {/* CTA */}
      <div className="flex items-center text-[#444684] font-semibold group-hover:translate-x-2 transition-transform">
        <span>Commencer</span>
        <svg
          className="ml-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </Link>
  );
}
