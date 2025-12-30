'use client';

import { usePixelTrail } from '@/app/hooks/useMousePosition';

/**
 * PixelTrail - The Browser Company style pixel trail effect
 * Creates trailing pixel squares that follow mouse movement with physics
 */
export default function PixelTrail() {
  const particles = usePixelTrail();

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1.5 h-1.5 bg-[#e4e4e4]"
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
