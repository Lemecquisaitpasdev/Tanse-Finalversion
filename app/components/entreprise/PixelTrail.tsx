'use client';

import { usePixelTrail } from '@/app/hooks/useMousePosition';

/**
 * PixelTrail - Arc/Dia style pixel trail effect
 * Violet/purple particles (#444684) in dark mode, white in light mode
 * 12x12 pixel squares with velocity-based decay
 */
export default function PixelTrail({ theme }: { theme: 'dark' | 'light' }) {
  const particles = usePixelTrail();
  const pixelColor = theme === 'dark' ? '#444684' : 'rgb(255, 255, 255)';

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-3 h-3 transition-colors duration-500"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.1s linear',
            backgroundColor: pixelColor,
          }}
        />
      ))}
    </div>
  );
}
