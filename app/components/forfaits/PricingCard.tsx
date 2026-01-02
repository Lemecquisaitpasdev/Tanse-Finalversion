"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useDrag } from "@use-gesture/react";

type Card = {
  k: string;
  titre: string;
  prix: string;
  sous: string;
  points: string[];
  cta: string;
  best?: boolean;
  color: string;
};

interface PricingCardProps {
  card: Card;
  href: string;
  index: number;
}

export default function PricingCard({ card, href, index }: PricingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  // Mouse position for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics configuration
  const springConfig = { damping: 25, stiffness: 300, mass: 0.8 };

  // Smooth spring animations
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  // Magnetic button position
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });

  // Handle mouse move for 3D tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(percentX);
    mouseY.set(percentY);

    // Magnetic hover effect for button
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;

      const dx = e.clientX - buttonCenterX;
      const dy = e.clientY - buttonCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const magneticRadius = 80;

      if (distance < magneticRadius) {
        const force = (1 - distance / magneticRadius) * 0.5;
        setButtonPos({
          x: dx * force,
          y: dy * force,
        });
      } else {
        setButtonPos({ x: 0, y: 0 });
      }
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setButtonPos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.1,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
      className="relative group"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          scale: 1.02,
          transition: { type: "spring", damping: 15, stiffness: 300 },
        }}
        className={`relative bg-gradient-to-br ${card.color} rounded-3xl p-8 md:p-12 shadow-2xl border border-foreground/10 transition-all duration-300
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
          hover:border-foreground/20
          ${card.best ? 'backdrop-blur-xl bg-white/70' : 'backdrop-blur-lg'}
        `}
      >
        {card.best && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute -top-4 left-1/2 -translate-x-1/2"
            style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow-300 animate-pulse"></span>
              Meilleur choix
            </div>
          </motion.div>
        )}

        <div className="space-y-6" style={{ transformStyle: "preserve-3d" }}>
          <motion.div style={{ transform: "translateZ(10px)" }}>
            <h3 className="font-display italic text-3xl md:text-4xl mb-2">{card.titre}</h3>
            <p className="text-sm text-muted-foreground font-mono">{card.sous}</p>
          </motion.div>

          <motion.div
            className="text-5xl md:text-6xl font-display italic"
            style={{ transform: "translateZ(20px)" }}
          >
            {card.prix}
          </motion.div>

          <ul className="space-y-3 text-sm">
            {card.points.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
                className="flex items-start gap-2"
                style={{ transform: "translateZ(5px)" }}
              >
                <span className="text-foreground/60 mt-1">✓</span>
                <span className="leading-relaxed">{point}</span>
              </motion.li>
            ))}
          </ul>

          <motion.a
            ref={buttonRef}
            href={href}
            style={{
              transform: "translateZ(30px)",
              x: buttonPos.x,
              y: buttonPos.y,
            }}
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", damping: 10, stiffness: 400 },
            }}
            whileTap={{ scale: 0.98 }}
            className={`block w-full text-center rounded-full px-8 py-4 font-semibold transition-all duration-300
              ${
                card.best
                  ? "bg-foreground text-background hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
                  : "bg-background text-foreground border-2 border-foreground/20 hover:border-foreground/40 hover:shadow-xl"
              }
            `}
          >
            {card.cta}
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
