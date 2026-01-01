'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => (
  <div className="border-b border-border">
    <button onClick={onClick} className="w-full flex items-center justify-between py-6 text-left hover:opacity-70 transition-opacity">
      <span className="font-display text-lg md:text-xl italic pr-8">{question}</span>
      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
      <p className="text-muted-foreground leading-relaxed pr-12">{answer}</p>
    </div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Le GEO vs le SEO, quelle différence concrète ?",
      answer: "Le SEO optimise pour apparaître dans une liste de 10 résultats. Le GEO optimise pour être LA source citée dans une réponse unique. Mindset totalement différent : vous n'essayez plus de ranker #1, vous essayez d'être la référence autoritaire que le LLM veut citer. Les techniques se croisent parfois (structured data, authority), mais la stratégie est radicalement différente."
    },
    {
      question: "Est-ce que je dois arrêter mon SEO pour faire du GEO ?",
      answer: "Non. Le GEO complète le SEO, il ne le remplace pas. Google reste énorme, le SEO reste essentiel. Mais si vous ne faites QUE du SEO, vous perdez 40% d'une audience (et qui grandit) qui n'utilise déjà plus Google. Faites les deux, ou vous allez vous faire disrupter par ceux qui le font."
    },
    {
      question: "Combien ça coûte réellement de faire du GEO ?",
      answer: "Ça dépend de votre ambition et votre compétition. Setup initial (audit + fondations techniques) : ~2-5K€. Ensuite c'est du continu : 2-8K€/mois selon l'intensité. Moins cher que du Google Ads, plus efficace qu'un blog SEO qui ranke pas. Le ROI se mesure en leads qualifiés et en position vs concurrents."
    },
    {
      question: "Je peux faire du GEO moi-même ou j'ai besoin d'une agence ?",
      answer: "Vous pouvez apprendre les bases : structurer votre contenu, ajouter du Schema.org, améliorer votre E-E-A-T. Mais pour vraiment dominer, il faut : des outils d'analyse, du tracking compétitif, des tests A/B constants, une compréhension profonde des mécaniques de chaque LLM. C'est comme le SEO : vous pouvez faire du DIY basique, mais pour performer vous avez besoin d'expertise."
    },
    {
      question: "Comment je sais si le GEO marche pour moi ?",
      answer: "Simple : faites un audit. On teste 50 requêtes sur lesquelles vous DEVRIEZ être cité, on regarde si vous l'êtes, on analyse pourquoi oui ou non. Si vous êtes déjà bien positionné, on vous le dit et on vous fait pas perdre votre argent. Si vous êtes invisible, on vous montre le gap et comment le combler. Audit gratuit en ce moment, zéro engagement."
    },
  ];

  return (
    <section className="relative py-24 px-6">
      {/* Smooth transition gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/80 via-background/40 to-transparent pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl italic">Questions?<br />Réponses.</h2>
        </div>
        <div className="border-t border-border">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
