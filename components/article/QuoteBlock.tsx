'use client'

import { motion } from 'framer-motion'

interface QuoteBlockProps {
  quote: string
  author?: string
  role?: string
}

export function QuoteBlock({ quote, author, role }: QuoteBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-12 relative"
    >
      <div
        className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(99, 102, 241, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
        }}
      >
        {/* Decorative gradient border */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{
            background: 'linear-gradient(180deg, #6366f1, #a855f7)',
          }}
        />

        {/* Quote icon */}
        <div className="mb-4">
          <svg
            className="w-12 h-12 opacity-20"
            fill="currentColor"
            viewBox="0 0 24 24"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Quote text */}
        <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-gray-900 mb-6">
          {quote}
        </blockquote>

        {/* Author info */}
        {author && (
          <div className="flex items-center gap-4">
            <div className="h-px flex-1" style={{
              background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.3), transparent)',
            }} />
            <div className="text-right">
              <p className="font-semibold text-gray-900">{author}</p>
              {role && (
                <p className="text-sm text-gray-600">{role}</p>
              )}
            </div>
          </div>
        )}

        {/* Decorative blur orb */}
        <div
          className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.6), transparent 70%)',
          }}
        />
      </div>
    </motion.div>
  )
}
