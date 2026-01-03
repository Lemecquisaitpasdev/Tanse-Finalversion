'use client'

import { useScroll, useSpring, motion } from 'framer-motion'

export function ReadingProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-1"
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #a855f7, #6366f1, #3b82f6)',
        }}
      />
    </div>
  )
}
