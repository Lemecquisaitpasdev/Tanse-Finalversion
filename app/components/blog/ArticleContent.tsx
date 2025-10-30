// app/components/blog/ArticleContent.tsx
"use client";

import { useEffect, useRef } from "react";

interface ArticleContentProps {
  content: string;
}

export default function ArticleContent({ content }: ArticleContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Add IDs to all headings for TOC linking
    const headings = contentRef.current.querySelectorAll("h2, h3");
    headings.forEach((heading) => {
      if (!heading.id) {
        const id = heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "";
        heading.id = id;
      }
    });
  }, [content]);

  // Simple markdown-like rendering
  const renderContent = (markdown: string) => {
    let html = markdown;

    // Headers
    html = html.replace(/^### (.+)$/gm, '<h3 class="text-2xl font-semibold text-neutral-900 mt-8 mb-4">$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2 class="text-3xl font-semibold text-neutral-900 mt-12 mb-6">$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1 class="text-4xl font-bold text-neutral-900 mb-8">$1</h1>');

    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>');

    // Italic
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Links
    html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-[#444684] underline hover:opacity-80 transition-opacity">$1</a>');

    // Horizontal rules
    html = html.replace(/^---$/gm, '<hr class="my-8 border-neutral-200" />');

    // Lists
    html = html.replace(/^- (.+)$/gm, '<li class="ml-6">$1</li>');
    html = html.replace(/(<li class="ml-6">.+<\/li>\n?)+/g, '<ul class="space-y-2 my-4 list-disc text-neutral-700">$&</ul>');

    // Checkboxes
    html = html.replace(/- \[ \] /g, '<li class="flex items-start gap-2"><input type="checkbox" class="mt-1" disabled /> ');
    html = html.replace(/- \[x\] /g, '<li class="flex items-start gap-2"><input type="checkbox" class="mt-1" checked disabled /> ');

    // Paragraphs
    html = html.replace(/^(?!<[hul]|<hr|<div|<table)(.+)$/gm, '<p class="text-neutral-700 leading-relaxed mb-4">$1</p>');

    // Blockquotes
    html = html.replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-[#444684] pl-4 italic text-neutral-600 my-4">$1</blockquote>');

    // Code blocks (simple, inline)
    html = html.replace(/`(.+?)`/g, '<code class="bg-neutral-100 text-neutral-800 px-2 py-0.5 rounded text-sm font-mono">$1</code>');

    // Tables (basic support)
    html = html.replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(Boolean);
      return '<tr>' + cells.map(cell => `<td class="border border-neutral-200 px-4 py-2">${cell.trim()}</td>`).join('') + '</tr>';
    });
    html = html.replace(/(<tr>.+<\/tr>\n?)+/g, '<table class="w-full my-6 border-collapse">$&</table>');

    return html;
  };

  return (
    <div
      ref={contentRef}
      className="article-content prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: renderContent(content) }}
    />
  );
}
