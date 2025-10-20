"use client";

import * as React from "react";
import LogoTanseMark from "./LogoTanseMark";

type Props = {
  className?: string;          // controls color of the word via text-*
  sizeClassName?: string;      // overall height (e.g. h-12, h-14)
  bubble?: "left" | "right";   // bubble position
};

export default function LogoTanse({
  className,
  sizeClassName = "h-12",
  bubble = "left",
}: Props) {
  const bubbleSize = "h-full";
  const textSize = "text-[1.85rem] md:text-[2rem]"; // Inter Semibold feel

  return (
    <div className={`flex items-center ${sizeClassName} ${className || ""}`}>
      {bubble === "left" && (
        <div className="relative mr-3 aspect-square">
          <LogoTanseMark className={`${bubbleSize} w-auto`} />
        </div>
      )}

      {/* Wordmark picks up currentColor */}
      <span
        className={`font-[600] leading-none tracking-[-0.01em] ${textSize} text-current`}
        style={{
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        }}
      >
        TANSE
      </span>

      {bubble === "right" && (
        <div className="relative ml-3 aspect-square">
          <LogoTanseMark className={`${bubbleSize} w-auto`} />
        </div>
      )}
    </div>
  );
}