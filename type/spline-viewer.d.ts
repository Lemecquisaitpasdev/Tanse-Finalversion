import type React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        url?: string;
        class?: string; // au cas où "class" est utilisé
        "settings-controls"?: string | boolean;
        "loading-anim"?: string | boolean;
        "events-target"?: "local" | "global";
      };
    }
  }
}

export {};