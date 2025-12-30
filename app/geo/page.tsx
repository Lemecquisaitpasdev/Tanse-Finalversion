'use client';

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

// ========================================
// PIXEL ICONS
// ========================================

interface PixelIconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const PixelComputer = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="12" y="8" width="40" height="32" fill="currentColor"/>
    <rect x="16" y="12" width="32" height="24" fill="hsl(var(--background))"/>
    <rect x="24" y="40" width="16" height="4" fill="currentColor"/>
    <rect x="20" y="44" width="24" height="4" fill="currentColor"/>
    <rect x="16" y="48" width="32" height="4" fill="currentColor"/>
  </svg>
);

export const PixelSearch = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <circle cx="28" cy="28" r="16" stroke="currentColor" strokeWidth="6" fill="none"/>
    <rect x="40" y="40" width="16" height="6" transform="rotate(45 40 40)" fill="currentColor"/>
  </svg>
);

export const PixelSmiley = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="4" fill="none"/>
    <rect x="20" y="24" width="8" height="8" fill="currentColor"/>
    <rect x="36" y="24" width="8" height="8" fill="currentColor"/>
    <rect x="20" y="40" width="4" height="4" fill="currentColor"/>
    <rect x="24" y="44" width="16" height="4" fill="currentColor"/>
    <rect x="40" y="40" width="4" height="4" fill="currentColor"/>
  </svg>
);

export const PixelQuestion = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="20" y="8" width="24" height="4" fill="currentColor"/>
    <rect x="16" y="12" width="8" height="4" fill="currentColor"/>
    <rect x="40" y="12" width="8" height="4" fill="currentColor"/>
    <rect x="40" y="16" width="8" height="8" fill="currentColor"/>
    <rect x="36" y="24" width="8" height="4" fill="currentColor"/>
    <rect x="28" y="28" width="8" height="8" fill="currentColor"/>
    <rect x="28" y="44" width="8" height="8" fill="currentColor"/>
  </svg>
);

export const PixelTypewriter = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="8" y="24" width="48" height="28" fill="currentColor"/>
    <rect x="12" y="28" width="40" height="12" fill="hsl(var(--background))"/>
    <rect x="16" y="44" width="8" height="4" fill="hsl(var(--background))"/>
    <rect x="28" y="44" width="8" height="4" fill="hsl(var(--background))"/>
    <rect x="40" y="44" width="8" height="4" fill="hsl(var(--background))"/>
    <rect x="20" y="8" width="24" height="4" fill="currentColor"/>
    <rect x="24" y="12" width="4" height="12" fill="currentColor"/>
    <rect x="36" y="12" width="4" height="12" fill="currentColor"/>
  </svg>
);

export const PixelGear = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="24" y="4" width="16" height="8" fill="currentColor"/>
    <rect x="24" y="52" width="16" height="8" fill="currentColor"/>
    <rect x="4" y="24" width="8" height="16" fill="currentColor"/>
    <rect x="52" y="24" width="8" height="16" fill="currentColor"/>
    <rect x="8" y="8" width="8" height="8" fill="currentColor"/>
    <rect x="48" y="8" width="8" height="8" fill="currentColor"/>
    <rect x="8" y="48" width="8" height="8" fill="currentColor"/>
    <rect x="48" y="48" width="8" height="8" fill="currentColor"/>
    <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="4" fill="none"/>
  </svg>
);

export const PixelStar = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="28" y="4" width="8" height="8" fill="currentColor"/>
    <rect x="24" y="12" width="16" height="4" fill="currentColor"/>
    <rect x="20" y="16" width="24" height="4" fill="currentColor"/>
    <rect x="8" y="20" width="48" height="8" fill="currentColor"/>
    <rect x="16" y="28" width="32" height="4" fill="currentColor"/>
    <rect x="20" y="32" width="24" height="4" fill="currentColor"/>
    <rect x="16" y="36" width="12" height="8" fill="currentColor"/>
    <rect x="36" y="36" width="12" height="8" fill="currentColor"/>
    <rect x="12" y="44" width="12" height="8" fill="currentColor"/>
    <rect x="40" y="44" width="12" height="8" fill="currentColor"/>
    <rect x="8" y="52" width="8" height="8" fill="currentColor"/>
    <rect x="48" y="52" width="8" height="8" fill="currentColor"/>
  </svg>
);

export const PixelPencil = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="44" y="4" width="12" height="8" transform="rotate(45 44 4)" fill="currentColor"/>
    <rect x="12" y="36" width="32" height="12" transform="rotate(-45 12 36)" fill="currentColor"/>
    <rect x="8" y="48" width="4" height="8" fill="currentColor"/>
    <rect x="12" y="52" width="4" height="4" fill="currentColor"/>
    <rect x="40" y="8" width="8" height="4" fill="currentColor"/>
    <rect x="44" y="12" width="8" height="4" fill="currentColor"/>
    <rect x="36" y="12" width="4" height="8" fill="currentColor"/>
  </svg>
);

// ========================================
// BUTTON COMPONENT
// ========================================

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

// ========================================
// OTHER COMPONENTS
// ========================================

const Tab = ({ label, active }: { label: string; active?: boolean }) => (
  <div className={`px-3 py-1 text-xs rounded-t ${active ? 'bg-white' : 'bg-transparent text-muted-foreground'}`}>
    {label}
  </div>
);

const TabBadge = ({ icon, label, light }: { icon: string; label: string; light?: boolean }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
    light ? "bg-white/20 text-white" : "bg-muted text-foreground/80"
  }`}>
    <span>{icon}</span>
    <span>{label}</span>
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
      className="w-full flex items-center justify-between py-6 text-left hover:opacity-70 transition-opacity"
    >
      <span className="font-display text-lg md:text-xl italic pr-8">{question}</span>
      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
      <p className="text-muted-foreground leading-relaxed pr-12">{answer}</p>
    </div>
  </div>
);

interface SkillCardProps {
  title: string;
  description: string;
  color: string;
  offset?: number;
}

const SkillCard = ({ title, description, color, offset = 0 }: SkillCardProps) => (
  <div
    className="flex-shrink-0 w-[280px] rounded-2xl p-6 transition-transform hover:scale-105"
    style={{ backgroundColor: color, transform: `translateY(${offset}px)` }}
  >
    <h3 className="font-display text-xl italic mb-2">{title}</h3>
    <p className="text-sm text-foreground/70 leading-relaxed">{description}</p>
  </div>
);

const MarqueeText = ({ text }: { text: string }) => {
  const colors = ["#FF6B6B", "#FF8E53", "#FFD93D", "#6BCB77", "#4D96FF", "#9B59B6", "#FF6B9D", "#00D4AA"];
  const textArray = Array(20).fill(text).join("");

  return (
    <div className="overflow-hidden py-6 bg-foreground">
      <div className="animate-marquee whitespace-nowrap flex">
        {textArray.split("").map((char, i) => (
          <span key={i} className="text-2xl font-display italic" style={{ color: colors[i % colors.length] }}>
            {char}
          </span>
        ))}
      </div>
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
  color?: string;
}

const FeatureCard = ({ title, description, bgColor, color, gradient, accentBar, className = "", children }: FeatureCardProps) => (
  <div
    className={`relative rounded-2xl p-8 h-full min-h-[280px] overflow-hidden ${className}`}
    style={{ backgroundColor: gradient ? undefined : (bgColor || color) }}
  >
    {gradient && (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-yellow-400 to-cyan-400" />
    )}
    {accentBar && <div className="absolute left-0 top-0 bottom-0 w-2" style={{ backgroundColor: accentBar }} />}
    <div className="relative z-10">
      <h3 className="font-display text-2xl italic mb-3">{title}</h3>
      {description && <p className="text-sm opacity-80 leading-relaxed">{description}</p>}
      {children}
    </div>
  </div>
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
      className="w-full flex items-start gap-4 py-6 text-left hover:opacity-70 transition-opacity"
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <h3 className="font-display text-xl italic mb-2">{title}</h3>
        {isOpen && <p className="text-base text-muted-foreground">{description}</p>}
      </div>
    </button>
  </div>
);

const DiaWindowMockup = () => (
  <div className="bg-browser-bg rounded-2xl border border-border shadow-2xl overflow-hidden">
    <div className="h-12 bg-browser-tab flex items-center px-4 gap-3">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
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
        <PixelSmiley className="absolute left-[10%] top-[25%] w-16 h-16 animate-float" />
        <PixelQuestion className="absolute left-[8%] top-[55%] w-14 h-14 animate-float" />
        <PixelTypewriter className="absolute left-[22%] top-[42%] w-16 h-16 animate-float" />
        <PixelSearch className="absolute right-[18%] top-[15%] w-16 h-16 animate-float" />
        <PixelGear className="absolute right-[8%] top-[30%] w-14 h-14 animate-float" />
        <PixelStar className="absolute right-[18%] top-[45%] w-14 h-14 animate-float" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl leading-tight italic">
          You don't have to do it all alone.
        </h1>

        <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Dia is the AI browser that truly gets you — helping you think deeper,
          move faster, and level up across the board.
        </p>

        <Button className="mt-10 px-8 py-6 rounded-full bg-foreground text-background">
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
        <div className="bg-browser-bg rounded-2xl border border-border shadow-2xl overflow-hidden">
          {/* Browser Header */}
          <div className="h-12 bg-browser-tab flex items-center px-4 gap-3">
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
    { icon: <PixelGear />, title: "You ask, Dia answers.", description: "Get instant, thoughtful responses to your questions — whether you're brainstorming ideas, solving problems, or exploring new topics." },
    { icon: <PixelComputer />, title: "Dia sees what you see.", description: "Dia understands the context of what you're working on, making suggestions and insights that actually make sense for your workflow." },
    { icon: <PixelPencil />, title: "Writing, reimagined.", description: "From drafting essays to polishing emails, Dia helps you write better, faster — with your unique voice." },
    { icon: <PixelTypewriter />, title: "It's built in the browser.", description: "No switching tabs, no copying and pasting. Dia lives right where you work, ready to help whenever you need it." },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
            A true thought partner
          </p>
          <h2 className="font-display text-4xl md:text-5xl italic">
            Your thought partner for school.
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
            <p className="text-sm font-mono uppercase tracking-wider">
              Skills are your shortcut
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic">
              A smarter way to learn.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
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
      <MarqueeText text="Get our Student Pack! " />
    </section>
  );
};

const FeaturesSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-mono uppercase tracking-wider">
          Built for students
        </p>
        <h2 className="font-display text-4xl md:text-5xl italic">
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
          <h2 className="font-display text-4xl md:text-5xl italic">
            Questions? Answers.
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
          <h2 className="font-display text-4xl md:text-6xl italic leading-tight mb-8">
            The smartest thing you can open this semester.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="px-8 py-6 rounded-full bg-foreground text-background">
              Download Dia
            </Button>

            <a href="#" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
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
    <main className="relative min-h-screen">
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
