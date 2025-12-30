'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

// ========================================
// PIXEL ICONS
// ========================================

interface PixelIconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const PixelComputer = ({ className = "" }: PixelIconProps) => (
  <svg className={className} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="currentColor"/>
    <rect x="12" y="8" width="40" height="32" fill="white"/>
    <rect x="16" y="12" width="32" height="24" fill="currentColor"/>
    <rect x="24" y="40" width="16" height="4" fill="white"/>
    <rect x="20" y="44" width="24" height="4" fill="white"/>
  </svg>
);

export const PixelSearch = ({ className = "" }: PixelIconProps) => (
  <svg className={className} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="currentColor"/>
    <circle cx="28" cy="28" r="14" stroke="white" strokeWidth="6" fill="none"/>
    <rect x="40" y="40" width="16" height="6" transform="rotate(45 40 40)" fill="white"/>
  </svg>
);

export const PixelSmiley = ({ className = "" }: PixelIconProps) => (
  <svg className={className} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="currentColor"/>
    <rect x="20" y="24" width="8" height="8" fill="white"/>
    <rect x="36" y="24" width="8" height="8" fill="white"/>
    <rect x="20" y="40" width="4" height="4" fill="white"/>
    <rect x="24" y="44" width="16" height="4" fill="white"/>
    <rect x="40" y="40" width="4" height="4" fill="white"/>
  </svg>
);

export const PixelQuestion = ({ className = "" }: PixelIconProps) => (
  <svg className={className} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="currentColor"/>
    <rect x="20" y="8" width="24" height="4" fill="white"/>
    <rect x="16" y="12" width="8" height="4" fill="white"/>
    <rect x="40" y="12" width="8" height="4" fill="white"/>
    <rect x="40" y="16" width="8" height="8" fill="white"/>
    <rect x="36" y="24" width="8" height="4" fill="white"/>
    <rect x="28" y="28" width="8" height="8" fill="white"/>
    <rect x="28" y="44" width="8" height="8" fill="white"/>
  </svg>
);

export const PixelTypewriter = ({ className = "" }: PixelIconProps) => (
  <svg className={className} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="currentColor"/>
    <rect x="8" y="24" width="48" height="28" fill="white"/>
    <rect x="12" y="28" width="40" height="12" fill="currentColor"/>
    <rect x="16" y="44" width="8" height="4" fill="currentColor"/>
    <rect x="28" y="44" width="8" height="4" fill="currentColor"/>
    <rect x="40" y="44" width="8" height="4" fill="currentColor"/>
  </svg>
);

export const PixelGear = ({ className = "" }: PixelIconProps) => (
  <svg className={className} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="currentColor"/>
    <rect x="24" y="4" width="16" height="8" fill="white"/>
    <rect x="24" y="52" width="16" height="8" fill="white"/>
    <rect x="4" y="24" width="8" height="16" fill="white"/>
    <rect x="52" y="24" width="8" height="16" fill="white"/>
    <rect x="8" y="8" width="8" height="8" fill="white"/>
    <rect x="48" y="8" width="8" height="8" fill="white"/>
    <rect x="8" y="48" width="8" height="8" fill="white"/>
    <rect x="48" y="48" width="8" height="8" fill="white"/>
    <circle cx="32" cy="32" r="10" stroke="white" strokeWidth="4" fill="none"/>
  </svg>
);

export const PixelStar = ({ className = "" }: PixelIconProps) => (
  <svg className={className} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="currentColor"/>
    <rect x="28" y="4" width="8" height="8" fill="white"/>
    <rect x="24" y="12" width="16" height="4" fill="white"/>
    <rect x="20" y="16" width="24" height="4" fill="white"/>
    <rect x="8" y="20" width="48" height="8" fill="white"/>
    <rect x="16" y="28" width="32" height="4" fill="white"/>
    <rect x="20" y="32" width="24" height="4" fill="white"/>
    <rect x="16" y="36" width="12" height="8" fill="white"/>
    <rect x="36" y="36" width="12" height="8" fill="white"/>
  </svg>
);

export const PixelPencil = ({ className = "" }: PixelIconProps) => (
  <svg className={className} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="currentColor"/>
    <rect x="44" y="8" width="8" height="4" fill="white"/>
    <rect x="40" y="12" width="8" height="4" fill="white"/>
    <rect x="36" y="16" width="8" height="4" fill="white"/>
    <rect x="32" y="20" width="8" height="4" fill="white"/>
    <rect x="28" y="24" width="8" height="4" fill="white"/>
    <rect x="24" y="28" width="8" height="4" fill="white"/>
    <rect x="20" y="32" width="8" height="4" fill="white"/>
    <rect x="16" y="36" width="8" height="4" fill="white"/>
    <rect x="12" y="40" width="8" height="4" fill="white"/>
    <rect x="8" y="44" width="8" height="8" fill="white"/>
  </svg>
);

// ========================================
// UI COMPONENTS
// ========================================

const Button = ({ children, className = "", ...props }: any) => (
  <button
    className={`inline-flex items-center justify-center gap-2 font-medium transition-all hover:scale-105 active:scale-95 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Tab = ({ label, active = false }: { label: string; active?: boolean }) => (
  <div className={`px-3 py-1 text-xs rounded-t ${active ? 'bg-white' : 'bg-transparent text-gray-500'}`}>
    {label}
  </div>
);

const TabBadge = ({ icon, label, light }: { icon: string; label: string; light?: boolean }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
    light ? "bg-white/20 text-white" : "bg-gray-200 text-gray-800"
  }`}>
    <span>{icon}</span>
    <span>{label}</span>
  </div>
);

const FAQItem = ({ question, answer, isOpen, onClick }: any) => (
  <div className="border-b" style={{ borderColor: '#E5E5E5' }}>
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between py-6 text-left hover:opacity-70 transition-opacity"
    >
      <span className="text-lg md:text-xl italic pr-8" style={{ fontFamily: 'Georgia, serif' }}>{question}</span>
      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
      <p className="leading-relaxed pr-12" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{answer}</p>
    </div>
  </div>
);

const SkillCard = ({ title, description, color, offset = 0 }: any) => (
  <motion.div
    initial={{ y: offset }}
    whileHover={{ y: offset - 10, scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="flex-shrink-0 w-[280px] rounded-2xl p-6 cursor-pointer"
    style={{ backgroundColor: color }}
  >
    <h3 className="text-xl italic mb-2" style={{ fontFamily: 'Georgia, serif' }}>{title}</h3>
    <p className="text-sm leading-relaxed" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>{description}</p>
  </motion.div>
);

const MarqueeText = ({ text }: { text: string }) => {
  const colors = ["#FF6B6B", "#FF8E53", "#FFD93D", "#6BCB77", "#4D96FF", "#9B59B6", "#FF6B9D", "#00D4AA"];
  const repeatedText = Array(20).fill(text).join(" ");

  return (
    <div className="overflow-hidden py-6" style={{ backgroundColor: '#171717' }}>
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap flex text-2xl italic"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        {repeatedText.split("").map((char, i) => (
          <span key={i} style={{ color: colors[i % colors.length] }}>{char}</span>
        ))}
      </motion.div>
    </div>
  );
};

const FeatureCard = ({ title, description, color, bgColor, gradient, accentBar, className = "", children }: any) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -4 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className={`relative rounded-2xl p-8 h-full min-h-[280px] overflow-hidden cursor-pointer ${className}`}
    style={{
      background: gradient
        ? 'linear-gradient(135deg, #FF6B35 0%, #F7B731 25%, #FED766 40%, #4FACFE 70%, #00F2FE 100%)'
        : (bgColor || color || '#E8E4DF')
    }}
  >
    {accentBar && <div className="absolute left-0 top-0 bottom-0 w-2" style={{ backgroundColor: accentBar }} />}
    <h3 className="text-2xl italic mb-3" style={{ fontFamily: 'Georgia, serif', color: gradient ? 'white' : '#000' }}>
      {title}
    </h3>
    {description && (
      <p className="text-sm leading-relaxed" style={{ color: gradient ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)' }}>
        {description}
      </p>
    )}
    {children}
  </motion.div>
);

const AccordionItem = ({ icon, title, description, isOpen, onClick }: any) => (
  <div className="border-b" style={{ borderColor: '#E5E5E5' }}>
    <button
      onClick={onClick}
      className="w-full flex items-start gap-4 py-6 text-left hover:opacity-70 transition-opacity"
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <h3 className="text-xl italic mb-2" style={{ fontFamily: 'Georgia, serif' }}>{title}</h3>
        {isOpen && <p className="text-base" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{description}</p>}
      </div>
    </button>
  </div>
);

const DiaWindowMockup = () => (
  <div className="bg-white rounded-2xl border shadow-2xl overflow-hidden" style={{ borderColor: '#E5E5E5' }}>
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
  <div className="grid grid-cols-2 gap-4">
    <FeatureCard title="/outline" gradient />
    <FeatureCard title="/cite" color="#FFB800" />
    <FeatureCard title="/flashcards" color="#B8E8D9" />
    <FeatureCard title="/job-fit" color="#FFB8D9" />
  </div>
);

// ========================================
// SECTIONS
// ========================================

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Floating Pixel Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-[10%] top-[25%]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <PixelSmiley className="w-16 h-16" />
        </motion.div>

        <motion.div
          className="absolute left-[8%] top-[55%]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <PixelQuestion className="w-14 h-14" />
        </motion.div>

        <motion.div
          className="absolute left-[22%] top-[42%]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <PixelTypewriter className="w-16 h-16" />
        </motion.div>

        <motion.div
          className="absolute right-[18%] top-[15%]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <PixelSearch className="w-16 h-16" />
        </motion.div>

        <motion.div
          className="absolute right-[8%] top-[30%]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <PixelGear className="w-14 h-14" />
        </motion.div>

        <motion.div
          className="absolute right-[18%] top-[45%]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        >
          <PixelStar className="w-14 h-14" />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl leading-tight italic" style={{ fontFamily: 'Georgia, serif' }}>
          You don't have to do it all alone.
        </h1>

        <p className="mt-8 text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'rgba(0, 0, 0, 0.8)' }}>
          Dia is the AI browser that truly gets you — helping you think deeper,
          move faster, and level up across the board.
        </p>

        <Button className="mt-10 px-8 py-6 rounded-full text-white" style={{ backgroundColor: '#171717' }}>
          Download Dia
        </Button>
      </div>
    </section>
  );
};

const BrowserMockup = () => {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl border shadow-2xl overflow-hidden" style={{ borderColor: '#E5E5E5' }}>
          {/* Browser Header */}
          <div className="h-12 bg-gray-100 flex items-center px-4 gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex gap-1">
              <Tab label="Dia" active />
              <Tab label="New Tab" />
            </div>
          </div>

          {/* Browser Content - Feature Cards */}
          <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <FeatureCard title="Outline" gradient />
            <FeatureCard title="Cite" color="#FFB800" />
            <FeatureCard title="Flashcards" color="#B8E8D9" />
            <FeatureCard title="Job-fit" color="#FFB8D9" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ThoughtPartnerSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    { icon: <PixelGear className="w-12 h-12" />, title: "You ask, Dia answers.", description: "Get instant, thoughtful responses to your questions — whether you're brainstorming ideas, solving problems, or exploring new topics." },
    { icon: <PixelComputer className="w-12 h-12" />, title: "Dia sees what you see.", description: "Dia understands the context of what you're working on, making suggestions and insights that actually make sense for your workflow." },
    { icon: <PixelPencil className="w-12 h-12" />, title: "Writing, reimagined.", description: "From drafting essays to polishing emails, Dia helps you write better, faster — with your unique voice." },
    { icon: <PixelTypewriter className="w-12 h-12" />, title: "It's built in the browser.", description: "No switching tabs, no copying and pasting. Dia lives right where you work, ready to help whenever you need it." },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-mono uppercase tracking-wider mb-4" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
            A true thought partner
          </p>
          <h2 className="text-4xl md:text-5xl italic" style={{ fontFamily: 'Georgia, serif' }}>
            Your thought partner for school.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Accordion */}
          <div className="border-t" style={{ borderColor: '#E5E5E5' }}>
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
    { title: "Reading", description: "Summarize articles, highlight key points, and understand complex texts faster.", color: "#E8E4DF" },
    { title: "Researching", description: "Find sources, compare viewpoints, and organize your findings in one place.", color: "#FFE4B5" },
    { title: "Organizing", description: "Keep tabs organized, create collections, and never lose track of important links.", color: "#E0F4FF" },
    { title: "Summarizing", description: "Get the gist of long documents, videos, and web pages in seconds.", color: "#F0E6FF" },
    { title: "Writing", description: "Draft essays, brainstorm ideas, and refine your writing with AI assistance.", color: "#FFE4E4" },
    { title: "Citing", description: "Format citations correctly and keep track of all your sources effortlessly.", color: "#E4FFE9" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-sm font-mono uppercase tracking-wider" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
              Skills are your shortcut
            </p>
            <h2 className="text-4xl md:text-5xl italic" style={{ fontFamily: 'Georgia, serif' }}>
              A smarter way to learn.
            </h2>
          </div>
          <p className="text-lg" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
            Skills are like superpowers for your browser.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="flex gap-6 overflow-x-auto pb-8 px-6">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} offset={i % 2 === 0 ? 0 : 20} />
        ))}
      </div>

      {/* Rainbow Marquee */}
      <MarqueeText text="Get our Student Pack!" />
    </section>
  );
};

const FeaturesSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-mono uppercase tracking-wider" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
          Built for students
        </p>
        <h2 className="text-4xl md:text-5xl italic" style={{ fontFamily: 'Georgia, serif' }}>
          Features so good, they feel illegal.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard title="Memory" bgColor="#E8E4DF" accentBar="#E53935" />
        <FeatureCard title="Mention Tabs" bgColor="#FFB800" />
        <FeatureCard title="Split View" bgColor="#FFB8D9" />
        <FeatureCard title="Command Bar" bgColor="#B8E8D9" />
        <FeatureCard title="Ad Block" bgColor="#E8E4DF" className="md:col-span-2" />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <FeatureCard title="Focus Mode" bgColor="#E6E0F8" />
        <FeatureCard title="Quick Notes" bgColor="#FFF4E0" />
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "Do students get early access to the beta?", answer: "Yes! We're offering early access to students. Sign up with your .edu email to get priority access." },
    { question: "Are there any discounts for students?", answer: "Absolutely. Dia is free for students with a valid .edu email address." },
    { question: "What devices are currently supported?", answer: "Dia is currently available for macOS, with Windows and mobile versions coming soon." },
    { question: "Is The Browser Company hiring interns?", answer: "Yes! We're always looking for talented students. Check out our careers page for current opportunities." },
    { question: "How can I get more involved?", answer: "Join our Discord community! It's the best place to connect with other students, share feedback, and stay updated." },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-mono uppercase tracking-wider">FAQ</p>
          <h2 className="text-4xl md:text-5xl italic" style={{ fontFamily: 'Georgia, serif' }}>
            Questions? Answers.
          </h2>
        </div>

        <div className="border-t" style={{ borderColor: '#E5E5E5' }}>
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
          <h2 className="text-4xl md:text-6xl italic leading-tight mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            The smartest thing you can open this semester.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="px-8 py-6 rounded-full text-white" style={{ backgroundColor: '#171717' }}>
              Download Dia
            </Button>

            <a href="#" className="inline-flex items-center gap-2 py-4 hover:opacity-70 transition" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
              Dreaming of skills? Join our Discord
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
// MAIN PAGE
// ========================================

export default function GeoPage() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>
      <HeroSection />
      <BrowserMockup />
      <ThoughtPartnerSection />
      <SkillsSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
