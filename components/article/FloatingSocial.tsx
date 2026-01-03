'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const SOCIAL_LINKS = [
  {
    name: 'Twitter',
    icon: '𝕏',
    color: '#000000',
    getUrl: (url: string, title: string) => `https://twitter.com/intent/tweet?url=${url}&text=${title}`
  },
  {
    name: 'LinkedIn',
    icon: 'in',
    color: '#0A66C2',
    getUrl: (url: string) => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
  },
  {
    name: 'Copy',
    icon: '🔗',
    color: '#6b7280',
    action: 'copy' as const
  },
]

interface FloatingSocialProps {
  article: {
    title: string
  }
}

export function FloatingSocial({ article }: FloatingSocialProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = (social: typeof SOCIAL_LINKS[number]) => {
    if (social.action === 'copy') {
      if (typeof window !== 'undefined') {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } else {
      if (typeof window !== 'undefined') {
        const url = encodeURIComponent(window.location.href)
        const title = encodeURIComponent(article.title)
        window.open(social.getUrl(url, title), '_blank', 'width=600,height=400')
      }
    }
  }

  return (
    <div
      className="sticky top-24"
      style={{
        background: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        borderRadius: '1.5rem',
        padding: '1rem',
      }}
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-xs font-medium text-gray-600 mb-1">
          Partager
        </span>

        {SOCIAL_LINKS.map((social) => (
          <motion.button
            key={social.name}
            onClick={() => handleShare(social)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium relative overflow-hidden group"
            style={{
              background: social.color,
            }}
            title={social.name}
            aria-label={`Partager sur ${social.name}`}
          >
            {social.action === 'copy' && copied ? '✓' : social.icon}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </motion.button>
        ))}
      </div>
    </div>
  )
}
