'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

// ========================================
// PIXEL ICONS COMPONENTS
// ========================================

interface PixelIconProps {
  className?: string;
  style?: React.CSSProperties;
}

const PixelSmiley = ({ className = "", style }: PixelIconProps) => (
  <svg className={className} style={style} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="black"/>
    <rect x="20" y="24" width="8" height="8" fill="white"/>
    <rect x="36" y="24" width="8" height="8" fill="white"/>
    <rect x="20" y="40" width="8" height="4" fill="white"/>
    <rect x="28" y="44" width="8" height="4" fill="white"/>
    <rect x="36" y="40" width="8" height="4" fill="white"/>
  </svg>
);

const PixelQuestion = ({ className = "", style }: PixelIconProps) => (
  <svg className={className} style={style} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="black"/>
    <rect x="24" y="16" width="16" height="4" fill="white"/>
    <rect x="40" y="20" width="4" height="12" fill="white"/>
    <rect x="28" y="32" width="12" height="4" fill="white"/>
    <rect x="28" y="40" width="8" height="4" fill="white"/>
    <rect x="28" y="48" width="8" height="4" fill="white"/>
  </svg>
);

const PixelTypewriter = ({ className = "", style }: PixelIconProps) => (
  <svg className={className} style={style} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="black"/>
    <rect x="16" y="20" width="32" height="24" rx="2" fill="white"/>
    <rect x="20" y="24" width="4" height="4" fill="black"/>
    <rect x="28" y="24" width="4" height="4" fill="black"/>
    <rect x="36" y="24" width="4" height="4" fill="black"/>
    <rect x="20" y="32" width="24" height="4" fill="black"/>
  </svg>
);

const PixelSearch = ({ className = "", style }: PixelIconProps) => (
  <svg className={className} style={style} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="black"/>
    <circle cx="28" cy="28" r="10" stroke="white" strokeWidth="4" fill="none"/>
    <rect x="36" y="36" width="12" height="4" transform="rotate(45 36 36)" fill="white"/>
  </svg>
);

const PixelGear = ({ className = "", style }: PixelIconProps) => (
  <svg className={className} style={style} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="black"/>
    <rect x="28" y="16" width="8" height="8" fill="white"/>
    <rect x="40" y="24" width="8" height="8" fill="white"/>
    <rect x="28" y="40" width="8" height="8" fill="white"/>
    <rect x="16" y="24" width="8" height="8" fill="white"/>
    <circle cx="32" cy="32" r="6" fill="white"/>
  </svg>
);

const PixelStar = ({ className = "", style }: PixelIconProps) => (
  <svg className={className} style={style} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="black"/>
    <rect x="28" y="16" width="8" height="8" fill="white"/>
    <rect x="24" y="24" width="16" height="8" fill="white"/>
    <rect x="20" y="32" width="24" height="8" fill="white"/>
    <rect x="24" y="40" width="16" height="8" fill="white"/>
  </svg>
);

const PixelPencil = ({ className = "", style }: PixelIconProps) => (
  <svg className={className} style={style} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="black"/>
    <rect x="36" y="16" width="8" height="8" fill="white"/>
    <rect x="28" y="24" width="8" height="8" fill="white"/>
    <rect x="20" y="32" width="8" height="8" fill="white"/>
    <rect x="16" y="40" width="8" height="8" fill="white"/>
  </svg>
);

const PixelComputer = ({ className = "", style }: PixelIconProps) => (
  <svg className={className} style={style} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="black"/>
    <rect x="16" y="20" width="32" height="20" rx="2" fill="white"/>
    <rect x="20" y="24" width="24" height="12" fill="black"/>
    <rect x="28" y="40" width="8" height="4" fill="white"/>
  </svg>
);

// ========================================
// UI COMPONENTS
// ========================================

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
  asChild?: boolean;
}

const Button = ({ className = "", variant = 'default', size = 'default', children, ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all hover:scale-105 active:scale-95";
  const variants = {
    default: "bg-foreground text-background",
    outline: "border-2 border-foreground bg-transparent hover:bg-foreground/5"
  };
  const sizes = {
    default: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Tab = ({ label, active = false }: { label: string; active?: boolean }) => (
  <div className={`px-3 py-1 text-xs rounded-t ${active ? 'bg-white' : 'bg-transparent text-gray-500'}`}>
    {label}
  </div>
);

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => (
  <div className="border-b border-border">
    <button
      onClick={onClick}
      className="w-full py-6 flex items-center justify-between text-left hover:opacity-70 transition"
    >
      <span className="text-lg font-medium" style={{ color: 'rgba(0, 0, 0, 0.85)' }}>{question}</span>
      <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    {isOpen && (
      <div className="pb-6 text-base" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
        {answer}
      </div>
    )}
  </div>
);

interface SkillCardProps {
  title: string;
  description: string;
  color: string;
  offset?: number;
}

const SkillCard = ({ title, description, color, offset = 0 }: SkillCardProps) => (
  <motion.div
    initial={{ y: offset }}
    whileHover={{ y: offset - 10, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="flex-shrink-0 w-80 p-8 rounded-3xl cursor-pointer"
    style={{ backgroundColor: color, minHeight: '320px' }}
  >
    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>{title}</h3>
    <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{description}</p>
  </motion.div>
);

const MarqueeText = ({ text }: { text: string }) => {
  const colors = ["#FF6B6B", "#FF8E53", "#FFD93D", "#6BCB77", "#4D96FF", "#9B59B6", "#FF6B9D", "#00D4AA"];
  const repeatedText = Array(20).fill(text).join(" ");

  return (
    <div className="overflow-hidden py-8 border-y border-border my-12">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap text-4xl font-bold"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        {repeatedText.split("").map((char, i) => (
          <span
            key={i}
            style={{ color: colors[i % colors.length] }}
          >
            {char}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description?: string;
  bgColor?: string;
  gradient?: boolean;
  accentBar?: string;
  className?: string;
  children?: React.ReactNode;
}

const FeatureCard = ({
  title,
  description,
  bgColor = "#E8E4DF",
  gradient = false,
  accentBar,
  className = "",
  children
}: FeatureCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -4 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className={`relative overflow-hidden rounded-3xl p-8 cursor-pointer ${className}`}
    style={{
      background: gradient
        ? 'linear-gradient(135deg, #FF6B35 0%, #F7B731 25%, #FED766 40%, #4FACFE 70%, #00F2FE 100%)'
        : bgColor,
      minHeight: '280px'
    }}
  >
    {accentBar && (
      <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: accentBar }} />
    )}
    <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: gradient ? 'white' : 'rgba(0, 0, 0, 0.85)' }}>
      {title}
    </h3>
    {description && (
      <p className="text-base" style={{ color: gradient ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.6)' }}>
        {description}
      </p>
    )}
    {children}
  </motion.div>
);

const AccordionItem = ({
  icon,
  title,
  description,
  isOpen,
  onClick
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className="border-b border-border">
    <button
      onClick={onClick}
      className="w-full py-6 flex items-start gap-4 text-left hover:opacity-70 transition"
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>{title}</h3>
        {isOpen && <p className="text-base" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{description}</p>}
      </div>
    </button>
  </div>
);

const DiaWindowMockup = () => (
  <div className="bg-white rounded-2xl border shadow-2xl overflow-hidden" style={{ borderColor: '#EBEBEB' }}>
    <div className="h-12 bg-gray-100 flex items-center px-4 gap-3 border-b" style={{ borderColor: '#d4d4d4' }}>
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
    </div>
    <div className="p-8 min-h-[300px] flex items-center justify-center">
      <div className="text-6xl">✨</div>
    </div>
  </div>
);

const BrowserIllustration = () => (
  <div className="relative">
    <div className="grid grid-cols-2 gap-4">
      <FeatureCard title="/outline" gradient />
      <FeatureCard title="/cite" bgColor="#FFB800" />
      <FeatureCard title="/flashcards" bgColor="#B8E8D9" />
      <FeatureCard title="/job-fit" bgColor="#FFB8D9" />
    </div>
  </div>
);

// ========================================
// MAIN SECTIONS
// ========================================

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Floating Pixel Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-[10%] top-[25%]"
          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <PixelSmiley className="w-16 h-16" />
        </motion.div>

        <motion.div
          className="absolute left-[8%] top-[55%]"
          animate={{ y: [0, -15, 0], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <PixelQuestion className="w-14 h-14" />
        </motion.div>

        <motion.div
          className="absolute left-[22%] top-[42%]"
          animate={{ y: [0, -12, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <PixelTypewriter className="w-16 h-16" />
        </motion.div>

        <motion.div
          className="absolute right-[18%] top-[15%]"
          animate={{ y: [0, -14, 0], rotate: [0, -4, 4, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          <PixelSearch className="w-16 h-16" />
        </motion.div>

        <motion.div
          className="absolute right-[8%] top-[30%]"
          animate={{ y: [0, -11, 0], rotate: [0, 6, -6, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <PixelGear className="w-14 h-14" />
        </motion.div>

        <motion.div
          className="absolute right-[18%] top-[45%]"
          animate={{ y: [0, -13, 0], rotate: [0, -7, 7, 0] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <PixelStar className="w-14 h-14" />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl leading-tight mb-8 italic"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            color: 'rgba(0, 0, 0, 0.85)',
            fontWeight: 400
          }}
        >
          Vous n'avez pas à tout faire seul.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
          style={{ color: 'rgba(0, 0, 0, 0.65)' }}
        >
          TANSE est l'agence GEO qui vous accompagne vraiment — pour optimiser votre présence,
          accélérer votre croissance et vous positionner comme référence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/contact-audit-gratuit">
            <Button className="rounded-full" size="lg">
              Démarrer avec TANSE
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const BrowserMockupSection = () => {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl border shadow-2xl overflow-hidden" style={{ borderColor: '#EBEBEB' }}>
          {/* Browser Header */}
          <div className="h-12 bg-gray-100 flex items-center px-4 gap-3 border-b" style={{ borderColor: '#d4d4d4' }}>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex gap-1">
              <Tab label="TANSE GEO" active />
              <Tab label="Nouveau" />
            </div>
          </div>

          {/* Browser Content - Feature Cards */}
          <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <FeatureCard title="/audit" gradient />
            <FeatureCard title="/citations" bgColor="#FFB800" />
            <FeatureCard title="/optimise" bgColor="#B8E8D9" />
            <FeatureCard title="/entites" bgColor="#FFB8D9" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ThoughtPartnerSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      icon: <PixelGear className="w-12 h-12" />,
      title: "Vous demandez, TANSE répond.",
      description: "Notre expertise en GEO permet de répondre à toutes vos questions sur l'optimisation pour les IA génératives."
    },
    {
      icon: <PixelComputer className="w-12 h-12" />,
      title: "TANSE voit ce que vous voyez.",
      description: "Analyse complète de votre présence digitale et de votre visibilité sur les moteurs de réponse IA."
    },
    {
      icon: <PixelPencil className="w-12 h-12" />,
      title: "Le contenu, réinventé.",
      description: "Création de contenu optimisé pour être cité par ChatGPT, Perplexity et tous les LLMs."
    },
    {
      icon: <PixelTypewriter className="w-12 h-12" />,
      title: "Intégré dans votre workflow.",
      description: "Solutions GEO qui s'adaptent à vos processus existants sans friction."
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-mono uppercase tracking-wider mb-4" style={{ color: 'rgba(0, 0, 0, 0.55)' }}>
            Un vrai partenaire stratégique
          </p>
          <h2 className="text-4xl md:text-5xl italic" style={{ fontFamily: 'Georgia, serif', color: 'rgba(0, 0, 0, 0.85)' }}>
            Votre partenaire pour l'optimisation IA.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Accordion */}
          <div className="border-t border-border">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(index)}
              />
            ))}
          </div>

          {/* Browser Mockup */}
          <div className="relative">
            <DiaWindowMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skills = [
    { title: "Audit", description: "Analyse complète de votre structure de données", color: "#E8E4DF" },
    { title: "Recherche", description: "Optimisation pour les moteurs de recherche IA", color: "#FFE4B5" },
    { title: "Organisation", description: "Structuration de contenu pour citations", color: "#E0F4FF" },
    { title: "Analyse", description: "Suivi des performances sur les LLMs", color: "#F0E6FF" },
    { title: "Rédaction", description: "Création de contenu optimisé GEO", color: "#FFE4E4" },
    { title: "Citation", description: "Maximisation de votre autorité", color: "#E4FFE9" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-sm font-mono uppercase tracking-wider mb-4" style={{ color: 'rgba(0, 0, 0, 0.55)' }}>
              Nos compétences sont vos raccourcis
            </p>
            <h2 className="text-4xl md:text-5xl italic" style={{ fontFamily: 'Georgia, serif', color: 'rgba(0, 0, 0, 0.85)' }}>
              Une approche plus intelligente.
            </h2>
          </div>
          <p className="text-lg" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
            Nos expertises GEO sont comme des super-pouvoirs pour votre présence en ligne.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="flex gap-6 overflow-x-auto pb-8 px-6 scrollbar-hide">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} offset={i % 2 === 0 ? 0 : 20} />
        ))}
      </div>

      {/* Rainbow Marquee */}
      <MarqueeText text="Optimisez votre présence IA!" />
    </section>
  );
};

const FeaturesSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-mono uppercase tracking-wider mb-4" style={{ color: 'rgba(0, 0, 0, 0.55)' }}>
          Conçu pour les entreprises
        </p>
        <h2 className="text-4xl md:text-5xl italic" style={{ fontFamily: 'Georgia, serif', color: 'rgba(0, 0, 0, 0.85)' }}>
          Des fonctionnalités qui changent tout.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard title="Monitoring" bgColor="#E8E4DF" accentBar="#E53935" description="Suivi en temps réel de vos citations" />
        <FeatureCard title="Analytics" bgColor="#FFB800" description="Tableaux de bord avancés" />
        <FeatureCard title="Optimisation" bgColor="#FFB8D9" description="Recommandations personnalisées" />
        <FeatureCard title="API" bgColor="#B8E8D9" description="Intégration complète" />
        <FeatureCard title="Support 24/7" bgColor="#E8E4DF" className="md:col-span-2" description="Assistance prioritaire" />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <FeatureCard title="Rapports" bgColor="#E6E0F8" description="Export de données complet" />
        <FeatureCard title="Formation" bgColor="#FFF4E0" description="Accompagnement personnalisé" />
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qu'est-ce que le GEO exactement ?",
      answer: "Le GEO (Generative Engine Optimization) est l'optimisation de votre contenu pour être cité par les IA génératives comme ChatGPT, Perplexity, Claude, et Google AI."
    },
    {
      question: "Combien de temps faut-il pour voir des résultats ?",
      answer: "Les premiers résultats sont visibles en 2-3 semaines, avec une amélioration continue sur 3-6 mois."
    },
    {
      question: "Proposez-vous un audit gratuit ?",
      answer: "Oui, nous offrons un audit GEO complet et gratuit pour analyser votre présence actuelle sur les moteurs IA."
    },
    {
      question: "Quels secteurs accompagnez-vous ?",
      answer: "Nous travaillons avec tous les secteurs : tech, e-commerce, services, santé, éducation, et plus encore."
    },
    {
      question: "Comment mesurer le ROI du GEO ?",
      answer: "Nous trackons vos citations, votre autorité perçue, et l'impact sur votre trafic qualifié via nos dashboards analytics."
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-mono uppercase tracking-wider mb-4" style={{ color: 'rgba(0, 0, 0, 0.55)' }}>FAQ</p>
          <h2 className="text-4xl md:text-5xl italic" style={{ fontFamily: 'Georgia, serif', color: 'rgba(0, 0, 0, 0.85)' }}>
            Questions ? Réponses.
          </h2>
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

const CTASection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl italic leading-tight mb-8" style={{ fontFamily: 'Georgia, serif', color: 'rgba(0, 0, 0, 0.85)' }}>
            La meilleure décision que vous prendrez ce trimestre.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact-audit-gratuit">
              <Button className="rounded-full" size="lg">
                Démarrer avec TANSE
              </Button>
            </Link>

            <a
              href="mailto:contact@tanse.fr"
              className="inline-flex items-center gap-2 hover:opacity-70 transition py-4"
              style={{ color: 'rgba(0, 0, 0, 0.65)' }}
            >
              <span>Nous contacter directement</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Browser Illustration with colorful cards */}
        <BrowserIllustration />
      </div>
    </div>
  </section>
);

// ========================================
// MAIN PAGE COMPONENT
// ========================================

export default function GeoPage() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: '#F8F8F8' }}>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(248, 248, 248, 0.8)' }}>
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-xl font-semibold" style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
              ●TANSE
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
              <Link href="/geo" className="hover:opacity-70 transition">Compétences</Link>
              <Link href="/forfaits-geo-seo" className="hover:opacity-70 transition">Clients</Link>
            </div>
          </div>
          <Link
            href="/contact-audit-gratuit"
            className="px-5 py-2.5 text-sm font-medium rounded-lg transition hover:opacity-90"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', color: '#F8F8F8' }}
          >
            Démarrer avec TANSE
          </Link>
        </div>
      </nav>

      {/* All Sections */}
      <HeroSection />
      <BrowserMockupSection />
      <ThoughtPartnerSection />
      <SkillsSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />

      {/* Footer Minimal */}
      <footer className="py-12 px-8 border-t" style={{ backgroundColor: '#F8F8F8', borderColor: '#EBEBEB' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm" style={{ color: 'rgba(0, 0, 0, 0.55)' }}>
              © {new Date().getFullYear()} TANSE — Tous droits réservés.
            </p>
            <div className="flex items-center gap-8 text-sm" style={{ color: 'rgba(0, 0, 0, 0.55)' }}>
              <Link href="/mentions-legales" className="hover:opacity-70 transition">Mentions légales</Link>
              <Link href="/confidentialite" className="hover:opacity-70 transition">Confidentialité</Link>
              <Link href="/cookies" className="hover:opacity-70 transition">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
