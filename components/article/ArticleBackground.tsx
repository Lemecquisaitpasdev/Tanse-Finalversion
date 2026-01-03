'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

export function ArticleBackground() {
  const { scrollY } = useScroll()

  // Parallax pour les orbs
  const orb1Y = useTransform(scrollY, [0, 1000], [0, -100])
  const orb2Y = useTransform(scrollY, [0, 1000], [0, 150])
  const orb3Y = useTransform(scrollY, [0, 1000], [0, -80])

  return (
    <>
      {/* Base gradient wash */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(147,51,234,0.03), transparent 50%),
            radial-gradient(ellipse 60% 50% at 80% 50%, rgba(59,130,246,0.02), transparent 50%),
            radial-gradient(ellipse 70% 60% at 20% 80%, rgba(236,72,153,0.02), transparent 50%),
            #fafafa
          `
        }}
      />

      {/* Animated blur orbs with parallax */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: orb1Y }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full"
        >
          <div
            className="w-full h-full rounded-full blur-3xl opacity-15"
            style={{
              background: 'radial-gradient(circle, rgba(147,51,234,0.4), transparent 70%)',
              animation: 'float-slow 20s ease-in-out infinite',
            }}
          />
        </motion.div>

        <motion.div
          style={{ y: orb2Y }}
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full"
        >
          <div
            className="w-full h-full rounded-full blur-3xl opacity-12"
            style={{
              background: 'radial-gradient(circle, rgba(59,130,246,0.35), transparent 70%)',
              animation: 'float-slow 25s ease-in-out infinite 5s',
            }}
          />
        </motion.div>

        <motion.div
          style={{ y: orb3Y }}
          className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full"
        >
          <div
            className="w-full h-full rounded-full blur-3xl opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(236,72,153,0.3), transparent 70%)',
              animation: 'float-slow 18s ease-in-out infinite 10s',
            }}
          />
        </motion.div>
      </div>
    </>
  )
}
