'use client';

import { useState, useEffect, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  createdAt: number;
  id: number;
}

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
}

export function usePixelTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const mousePosition = useMousePosition();
  const lastSpawnTime = useRef(0);
  const particleIdRef = useRef(0);

  useEffect(() => {
    const now = Date.now();

    // Spawn new particle every 50ms when mouse moves
    if (now - lastSpawnTime.current > 50 && (mousePosition.x !== 0 || mousePosition.y !== 0)) {
      const newParticle: Particle = {
        x: mousePosition.x,
        y: mousePosition.y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: 1,
        createdAt: now,
        id: particleIdRef.current++,
      };

      setParticles((prev) => [...prev, newParticle]);
      lastSpawnTime.current = now;
    }

    // Update particles physics and remove old ones
    const animationFrame = requestAnimationFrame(() => {
      setParticles((prev) =>
        prev
          .map((p) => {
            const age = now - p.createdAt;
            const lifetime = 500; // 500ms lifetime

            return {
              ...p,
              x: p.x + p.vx,
              y: p.y + p.vy,
              opacity: Math.max(0, 1 - age / lifetime),
            };
          })
          .filter((p) => now - p.createdAt < 500)
      );
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition.x, mousePosition.y]);

  return particles;
}
