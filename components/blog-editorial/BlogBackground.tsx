"use client";

import React from "react";

export const BlogBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%,
              rgba(147, 51, 234, 0.03),
              transparent 50%
            ),
            radial-gradient(ellipse 60% 50% at 80% 50%,
              rgba(59, 130, 246, 0.02),
              transparent 50%
            ),
            radial-gradient(ellipse 70% 60% at 20% 80%,
              rgba(236, 72, 153, 0.02),
              transparent 50%
            ),
            #fafafa
          `,
        }}
      />

      {/* Animated blur orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-30 animate-blob-1"
        style={{
          background:
            "linear-gradient(135deg, rgba(147, 51, 234, 0.4), rgba(139, 92, 246, 0.4))",
          top: "10%",
          left: "10%",
        }}
      />

      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-25 animate-blob-2"
        style={{
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.35), rgba(99, 102, 241, 0.35))",
          top: "50%",
          right: "15%",
        }}
      />

      <div
        className="absolute w-[550px] h-[550px] rounded-full blur-3xl opacity-20 animate-blob-3"
        style={{
          background:
            "linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(219, 39, 119, 0.3))",
          bottom: "10%",
          left: "20%",
        }}
      />
    </div>
  );
};
