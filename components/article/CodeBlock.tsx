'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface CodeBlockProps {
  code: string
  language: string
  filename?: string
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-8 rounded-2xl overflow-hidden" style={{
      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(20, 20, 30, 0.95))',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    }}>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          {/* Terminal dots */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>

          {filename && (
            <span className="text-sm text-gray-400 font-mono">
              {filename}
            </span>
          )}

          <span className="text-xs px-2 py-1 rounded-md bg-indigo-500/20 text-indigo-300 font-mono">
            {language}
          </span>
        </div>

        <motion.button
          onClick={handleCopy}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm px-3 py-1.5 rounded-lg font-medium transition-colors"
          style={{
            background: copied ? 'rgba(34, 197, 94, 0.2)' : 'rgba(99, 102, 241, 0.2)',
            color: copied ? '#22c55e' : '#a5b4fc',
            border: `1px solid ${copied ? 'rgba(34, 197, 94, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`,
          }}
        >
          {copied ? '✓ Copié' : 'Copier'}
        </motion.button>
      </div>

      {/* Code content */}
      <div className="p-6 overflow-x-auto">
        <pre className="text-sm leading-relaxed">
          <code className="font-mono text-gray-100" style={{ fontSize: '0.9rem' }}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}
