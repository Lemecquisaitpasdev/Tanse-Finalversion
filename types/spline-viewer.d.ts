// types/spline-viewer.d.ts
import type React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        url?: string;
        loading?: "lazy" | "eager";
        ["events-target"]?: "local" | "global";
      };
    }
  }
}
export {};