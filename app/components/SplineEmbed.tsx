"use client";

type Props = {
  url: string;
  minH?: number | string;
  blockInteraction?: boolean;
  id?: string;
  className?: string;
  label?: string;
};

export default function SplineEmbed({
  url,
  minH = "100dvh",
  blockInteraction = false,
  id,
  className = "",
  label = "Spline section",
}: Props) {
  return (
    <section
      id={id}
      className={`section-guard ${className}`}
      style={{ minHeight: typeof minH === "number" ? `${minH}px` : minH }}
      aria-label={label}
    >
      <spline-viewer
        url={url}
        className={`spline-contained${blockInteraction ? " no-interact" : ""}`}
      />
    </section>
  );
}