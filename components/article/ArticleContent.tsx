'use client'

import { CodeBlock } from './CodeBlock'
import { QuoteBlock } from './QuoteBlock'
import { ImageCaption } from './ImageCaption'
import { StatsCard } from './StatsCard'

interface ArticleContentProps {
  content: string
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="space-y-8">
      {/* Main prose content */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* Example: Stats Card for GEO article */}
      <StatsCard
        title="L'explosion du GEO en chiffres"
        stats={[
          { value: 400, label: "Millions d'utilisateurs ChatGPT", suffix: "M" },
          { value: 86, label: "Équipes SEO utilisant l'IA", suffix: "%" },
          { value: 15, label: "Outils GEO dédiés", suffix: "+" },
          { value: 34, label: "Milliards investis en IA", suffix: "Mds $" },
        ]}
      />

      {/* Example: Quote Block */}
      <QuoteBlock
        quote="Le GEO a fait en 18 mois ce que le SEO a mis 10 ans à accomplir. C'est une transformation sans précédent dans l'histoire du marketing digital."
        author="Équipe TANSE"
        role="Experts en visibilité digitale"
      />

      {/* Example: Code Block */}
      <CodeBlock
        language="typescript"
        filename="geo-optimization.ts"
        code={`// Exemple de stratégie GEO
interface GEOStrategy {
  addStatistics: boolean;  // +40% de visibilité
  addCitations: boolean;   // +35% de visibilité
  simplifyLanguage: boolean; // +22% de visibilité
}

const optimizeContent = (content: string): string => {
  // Ajouter des statistiques vérifiables
  // Enrichir avec des sources autoritaires
  // Simplifier le langage technique
  return enhancedContent;
}`}
      />
    </div>
  )
}
