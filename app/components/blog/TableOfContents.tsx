// app/components/blog/TableOfContents.tsx
"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from the article content
    const articleContent = document.querySelector(".article-content");
    if (!articleContent) return;

    const headingElements = articleContent.querySelectorAll("h2, h3");
    const toc: TOCItem[] = [];

    headingElements.forEach((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "";
      if (!heading.id) heading.id = id;

      toc.push({
        id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName[1])
      });
    });

    setHeadings(toc);

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66%" }
    );

    headingElements.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 rounded-2xl border border-neutral-200 bg-white p-6 shadow-md">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-700">
        Table des matières
      </h2>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.level === 3 ? "ml-4" : ""}
          >
            <a
              href={`#${heading.id}`}
              className={`block transition-colors hover:text-[#444684] ${
                activeId === heading.id
                  ? "font-medium text-[#444684]"
                  : "text-neutral-600"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
