import * as React from "react";

interface PixelIconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const PixelComputer = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="12" y="8" width="40" height="32" fill="currentColor"/>
    <rect x="16" y="12" width="32" height="24" fill="hsl(var(--background))"/>
    <rect x="24" y="40" width="16" height="4" fill="currentColor"/>
    <rect x="20" y="44" width="24" height="4" fill="currentColor"/>
    <rect x="16" y="48" width="32" height="4" fill="currentColor"/>
  </svg>
);

export const PixelSearch = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <circle cx="28" cy="28" r="16" stroke="currentColor" strokeWidth="6" fill="none"/>
    <rect x="40" y="40" width="16" height="6" transform="rotate(45 40 40)" fill="currentColor"/>
  </svg>
);

export const PixelSmiley = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="4" fill="none"/>
    <rect x="20" y="24" width="8" height="8" fill="currentColor"/>
    <rect x="36" y="24" width="8" height="8" fill="currentColor"/>
    <rect x="20" y="40" width="4" height="4" fill="currentColor"/>
    <rect x="24" y="44" width="16" height="4" fill="currentColor"/>
    <rect x="40" y="40" width="4" height="4" fill="currentColor"/>
  </svg>
);

export const PixelQuestion = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="20" y="8" width="24" height="4" fill="currentColor"/>
    <rect x="16" y="12" width="8" height="4" fill="currentColor"/>
    <rect x="40" y="12" width="8" height="4" fill="currentColor"/>
    <rect x="40" y="16" width="8" height="8" fill="currentColor"/>
    <rect x="36" y="24" width="8" height="4" fill="currentColor"/>
    <rect x="28" y="28" width="8" height="8" fill="currentColor"/>
    <rect x="28" y="44" width="8" height="8" fill="currentColor"/>
  </svg>
);

export const PixelTypewriter = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="8" y="24" width="48" height="28" fill="currentColor"/>
    <rect x="12" y="28" width="40" height="12" fill="hsl(var(--background))"/>
    <rect x="16" y="44" width="8" height="4" fill="hsl(var(--background))"/>
    <rect x="28" y="44" width="8" height="4" fill="hsl(var(--background))"/>
    <rect x="40" y="44" width="8" height="4" fill="hsl(var(--background))"/>
    <rect x="20" y="8" width="24" height="4" fill="currentColor"/>
    <rect x="24" y="12" width="4" height="12" fill="currentColor"/>
    <rect x="36" y="12" width="4" height="12" fill="currentColor"/>
  </svg>
);

export const PixelGear = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="24" y="4" width="16" height="8" fill="currentColor"/>
    <rect x="24" y="52" width="16" height="8" fill="currentColor"/>
    <rect x="4" y="24" width="8" height="16" fill="currentColor"/>
    <rect x="52" y="24" width="8" height="16" fill="currentColor"/>
    <rect x="8" y="8" width="8" height="8" fill="currentColor"/>
    <rect x="48" y="8" width="8" height="8" fill="currentColor"/>
    <rect x="8" y="48" width="8" height="8" fill="currentColor"/>
    <rect x="48" y="48" width="8" height="8" fill="currentColor"/>
    <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="4" fill="none"/>
  </svg>
);

export const PixelStar = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="28" y="4" width="8" height="8" fill="currentColor"/>
    <rect x="24" y="12" width="16" height="4" fill="currentColor"/>
    <rect x="20" y="16" width="24" height="4" fill="currentColor"/>
    <rect x="8" y="20" width="48" height="8" fill="currentColor"/>
    <rect x="16" y="28" width="32" height="4" fill="currentColor"/>
    <rect x="20" y="32" width="24" height="4" fill="currentColor"/>
    <rect x="16" y="36" width="12" height="8" fill="currentColor"/>
    <rect x="36" y="36" width="12" height="8" fill="currentColor"/>
    <rect x="12" y="44" width="12" height="8" fill="currentColor"/>
    <rect x="40" y="44" width="12" height="8" fill="currentColor"/>
    <rect x="8" y="52" width="8" height="8" fill="currentColor"/>
    <rect x="48" y="52" width="8" height="8" fill="currentColor"/>
  </svg>
);

export const PixelPencil = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="44" y="4" width="12" height="8" transform="rotate(45 44 4)" fill="currentColor"/>
    <rect x="12" y="36" width="32" height="12" transform="rotate(-45 12 36)" fill="currentColor"/>
    <rect x="8" y="48" width="4" height="8" fill="currentColor"/>
    <rect x="12" y="52" width="4" height="4" fill="currentColor"/>
    <rect x="40" y="8" width="8" height="4" fill="currentColor"/>
    <rect x="44" y="12" width="8" height="4" fill="currentColor"/>
    <rect x="36" y="12" width="4" height="8" fill="currentColor"/>
  </svg>
);
