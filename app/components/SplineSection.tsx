"use client";

import SectionFrame from "./SectionFrame";

type Props = {
  url: string;
  id?: string;
  width?: number;
  height?: number;
  lockCamera?: boolean;
  className?: string;
};

export default function SplineSection({
  url,
  id,
  width = 2560,
  height = 1358,
  lockCamera = true,
  className = "",
}: Props) {
  return (
    <SectionFrame id={id} width={width} height={height} className={`section-guard ${className}`}>
      <spline-viewer
        className="spline-contained"
        url={url}
        style={{ width: "100%", height: "100%" }}
        {...(lockCamera ? { ["settings-controls"]: "false" } : {})}
      />
    </SectionFrame>
  );
}