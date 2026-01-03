'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (!headings || headings.length === 0) return null

  return (
    <nav
      className="sticky top-24"
      style={{
        background: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        borderRadius: '1.5rem',
        padding: '1.5rem',
      }}
    >
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Table des matières
      </h3>

      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`
                block text-sm py-1 px-3 rounded-lg transition-all relative
                ${activeId === heading.id
                  ? 'text-purple-700 font-medium'
                  : 'text-gray-600 hover:text-gray-900'
                }
              `}
              style={{
                paddingLeft: `${(heading.level - 2) * 12 + 12}px`
              }}
            >
              {activeId === heading.id && (
                <motion.div
                  layoutId="activeHeading"
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: 'rgba(147, 51, 234, 0.1)',
                  }}
                  transition={{ type: "spring", damping: 25 }}
                />
              )}
              <span className="relative z-10">{heading.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
