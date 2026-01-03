'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

export function ArticleBackground() {
  const { scrollY } = useScroll()

  // Subtle parallax for single orb
  const orbY = useTransform(scrollY, [0, 1000], [0, -120])

  return (
    <>
      {/* Simple gradient wash background */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% -20%, rgba(99,102,241,0.025), transparent 60%),
            #fafafa
          `
        }}
      />

      {/* Single subtle animated blur orb with parallax */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: orbY }}
          className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full"
        >
          <div
            className="w-full h-full rounded-full blur-3xl opacity-[0.08]"
            style={{
              background: 'radial-gradient(circle, rgba(99,102,241,0.5), transparent 70%)',
              animation: 'float-slow 25s ease-in-out infinite',
            }}
          />
        </motion.div>
      </div>
    </>
  )
}
