'use client';

import { usePixelTrail } from '@/app/hooks/useMousePosition';

/**
 * PixelTrail - Arc/Dia style pixel trail effect
 * Violet/purple particles (#444684) that follow mouse movement with physics
 * 4x4 to 6x6 pixel squares with velocity-based decay
 */
export default function PixelTrail() {
  const particles = usePixelTrail();

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-3 h-3 bg-[#444684]"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.1s linear',
          }}
        />
      ))}
    </div>
  );
}
