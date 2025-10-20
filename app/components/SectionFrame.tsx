"use client";

import { ReactNode, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  width?: number;   // défaut 2560
  height?: number;  // défaut 1358
  id?: string;
  className?: string;
  background?: string; // défaut #E4E4E4
};

/**
 * Cadre logique 2560×1358 qui scale pour remplir l’écran sans overflow.
 * Pas de scroll horizontal. Empêche les chevauchements (contain/isolation).
 */
export default function SectionFrame({
  children,
  width = 2560,
  height = 1358,
  id,
  className = "",
  background = "#E4E4E4",
}: Props) {
  const style = {
    "--sf-w": `${width}px`,
    "--sf-h": `${height}px`,
    "--sf-bg": background,
  } as CSSProperties;

  return (
    <section id={id} className={`sf-root ${className}`} style={style}>
      <div className="sf-stage">{children}</div>
    </section>
  );
}