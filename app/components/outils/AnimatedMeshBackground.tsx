'use client';

import { motion } from 'framer-motion';

/**
 * AnimatedMeshBackground - The Browser Company (Dia) style
 * Animated mesh gradient with pastel colors (pink, blue, yellow)
 */
export default function AnimatedMeshBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Pastel Pink Blob */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 182, 193, 0.6) 0%, rgba(255, 192, 203, 0.4) 40%, transparent 70%)',
        }}
        animate={{
          x: ['-10%', '10%', '-10%'],
          y: ['20%', '40%', '20%'],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Pastel Blue Blob */}
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full opacity-25 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(173, 216, 230, 0.6) 0%, rgba(135, 206, 235, 0.4) 40%, transparent 70%)',
          right: '0%',
          top: '10%',
        }}
        animate={{
          x: ['10%', '-10%', '10%'],
          y: ['10%', '30%', '10%'],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Pastel Yellow Blob */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 253, 208, 0.7) 0%, rgba(255, 250, 205, 0.5) 40%, transparent 70%)',
          left: '50%',
          bottom: '10%',
        }}
        animate={{
          x: ['-20%', '20%', '-20%'],
          y: ['-10%', '10%', '-10%'],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Pastel Purple Blob */}
      <motion.div
        className="absolute w-[750px] h-[750px] rounded-full opacity-15 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(221, 160, 221, 0.5) 0%, rgba(216, 191, 216, 0.3) 40%, transparent 70%)',
          left: '20%',
          bottom: '30%',
        }}
        animate={{
          x: ['15%', '-15%', '15%'],
          y: ['15%', '-10%', '15%'],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/30" />
    </div>
  );
}
