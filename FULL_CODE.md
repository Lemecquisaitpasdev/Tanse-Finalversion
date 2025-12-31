# DIA LANDING PAGE - CODE COMPLET

> Ce fichier contient tout le code source pour reproduire la landing page Dia et la section Blog.

---

## 📦 INSTALLATION

```bash
npm create vite@latest dia-landing -- --template react-ts
cd dia-landing
npm install
npm install @radix-ui/react-slot class-variance-authority clsx lucide-react react-router-dom tailwind-merge tailwindcss-animate
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 📁 STRUCTURE

```
src/
├── components/
│   ├── ui/
│   │   └── button.tsx
│   ├── BlogSection.tsx
│   ├── BrowserMockup.tsx
│   ├── CTASection.tsx
│   ├── FAQSection.tsx
│   ├── FeaturesSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── PixelIcons.tsx
│   ├── SkillsSection.tsx
│   └── ThoughtPartnerSection.tsx
├── pages/
│   ├── Index.tsx
│   ├── Blog.tsx
│   └── NotFound.tsx
├── lib/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🎨 src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap');

@layer base {
  :root {
    --background: 0 0% 96%;
    --foreground: 0 0% 9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 100%;
    --secondary: 0 0% 96%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 92%;
    --muted-foreground: 0 0% 45%;
    --accent: 0 0% 92%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 100%;
    --border: 0 0% 85%;
    --input: 0 0% 85%;
    --ring: 0 0% 9%;
    --radius: 1rem;
    --browser-bg: 0 0% 92%;
    --browser-tab-bg: 0 0% 100%;
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 0 0% 9%;
    --foreground: 0 0% 96%;
    --card: 0 0% 12%;
    --card-foreground: 0 0% 96%;
    --popover: 0 0% 12%;
    --popover-foreground: 0 0% 96%;
    --primary: 0 0% 96%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 15%;
    --secondary-foreground: 0 0% 96%;
    --muted: 0 0% 15%;
    --muted-foreground: 0 0% 65%;
    --accent: 0 0% 15%;
    --accent-foreground: 0 0% 96%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 96%;
    --border: 0 0% 20%;
    --input: 0 0% 20%;
    --ring: 0 0% 83.9%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground antialiased;
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Libre Baskerville', serif;
  }
}

@layer components {
  .font-display {
    font-family: 'Libre Baskerville', serif;
  }

  .font-mono-custom {
    font-family: 'IBM Plex Mono', monospace;
  }

  .gradient-outline {
    background: linear-gradient(
      180deg,
      hsl(25, 95%, 60%) 0%,
      hsl(15, 90%, 55%) 50%,
      hsl(220, 80%, 60%) 100%
    );
  }
}
```

---

## ⚙️ tailwind.config.ts

```ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        browser: {
          bg: "hsl(var(--browser-bg))",
          tab: "hsl(var(--browser-tab-bg))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        display: ["Libre Baskerville", "serif"],
        mono: ["IBM Plex Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "marquee": "marquee 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

---

## 🔧 src/lib/utils.ts

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## 🔘 src/components/ui/button.tsx

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

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
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

---

## 🚀 src/main.tsx

```tsx
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
```

---

## 🌐 src/App.tsx

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
```

---

## 📄 src/pages/Index.tsx

```tsx
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrowserMockup from "@/components/BrowserMockup";
import ThoughtPartnerSection from "@/components/ThoughtPartnerSection";
import SkillsSection from "@/components/SkillsSection";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BrowserMockup />
      <ThoughtPartnerSection />
      <SkillsSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
```

---

## 📄 src/pages/Blog.tsx

```tsx
import BlogSection from "@/components/BlogSection";

const Blog = () => {
  return <BlogSection />;
};

export default Blog;
```

---

## 📄 src/pages/NotFound.tsx

```tsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-display text-6xl mb-4">404</h1>
        <p className="text-muted-foreground mb-8">Page not found</p>
        <Link to="/" className="text-primary hover:underline">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
```

---

## 🧭 src/components/Header.tsx

```tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1.5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 14C4 14 5 13 8 13C11 13 13 15 16 15C19 15 20 14 20 14V4C20 4 19 5 16 5C13 5 11 3 8 3C5 3 4 4 4 4V14Z" fill="currentColor"/>
            <path d="M4 14V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-xl font-semibold tracking-tight">Dia</span>
        </a>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Skills
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Students
          </a>
          <Link to="/blog" className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors">
            Blog
          </Link>
        </nav>
      </div>

      {/* CTA Button */}
      <Button 
        variant="outline" 
        className="rounded-full border-foreground/20 hover:bg-foreground hover:text-background transition-all"
      >
        Join the Waitlist
      </Button>
    </header>
  );
};

export default Header;
```

---

## 🎯 src/components/HeroSection.tsx

```tsx
import { Button } from "@/components/ui/button";
import {
  PixelComputer,
  PixelSearch,
  PixelSmiley,
  PixelQuestion,
  PixelTypewriter,
  PixelGear,
  PixelStar,
  PixelPencil,
} from "./PixelIcons";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Floating Pixel Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left side icons */}
        <PixelSmiley className="absolute left-[10%] top-[25%] w-16 h-16 text-foreground animate-float" style={{ animationDelay: "0s" }} />
        <PixelQuestion className="absolute left-[8%] top-[55%] w-14 h-14 text-foreground animate-float" style={{ animationDelay: "1s" }} />
        <PixelTypewriter className="absolute left-[22%] top-[42%] w-16 h-16 text-foreground animate-float" style={{ animationDelay: "0.5s" }} />
        <PixelComputer className="absolute left-[25%] top-[15%] w-12 h-12 text-foreground animate-float" style={{ animationDelay: "1.5s" }} />
        
        {/* Right side icons */}
        <PixelSearch className="absolute right-[18%] top-[15%] w-16 h-16 text-foreground animate-float" style={{ animationDelay: "0.3s" }} />
        <PixelGear className="absolute right-[8%] top-[30%] w-14 h-14 text-foreground animate-float" style={{ animationDelay: "0.8s" }} />
        <PixelStar className="absolute right-[18%] top-[45%] w-14 h-14 text-foreground animate-float" style={{ animationDelay: "1.2s" }} />
        <PixelPencil className="absolute right-[6%] top-[55%] w-14 h-14 text-foreground animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight italic">
          You don't have to
          <br />
          do it all alone.
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Dia is the AI browser that truly gets you — helping you think deeper, move faster, and level up across the board.
        </p>
        
        <Button 
          className="mt-10 px-8 py-6 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all"
        >
          Download Dia
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
```

---

## 🎨 src/components/PixelIcons.tsx

```tsx
import React from "react";

interface PixelIconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const PixelComputer = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="8" width="40" height="32" fill="currentColor"/>
    <rect x="16" y="12" width="32" height="24" fill="hsl(var(--background))"/>
    <rect x="24" y="40" width="16" height="4" fill="currentColor"/>
    <rect x="20" y="44" width="24" height="4" fill="currentColor"/>
    <rect x="16" y="48" width="32" height="4" fill="currentColor"/>
  </svg>
);

export const PixelSearch = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="16" stroke="currentColor" strokeWidth="6" fill="none"/>
    <rect x="40" y="40" width="16" height="6" transform="rotate(45 40 40)" fill="currentColor"/>
  </svg>
);

export const PixelSmiley = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="4" fill="none"/>
    <rect x="20" y="24" width="8" height="8" fill="currentColor"/>
    <rect x="36" y="24" width="8" height="8" fill="currentColor"/>
    <rect x="20" y="40" width="4" height="4" fill="currentColor"/>
    <rect x="24" y="44" width="16" height="4" fill="currentColor"/>
    <rect x="40" y="40" width="4" height="4" fill="currentColor"/>
  </svg>
);

export const PixelQuestion = ({ className, style }: PixelIconProps) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="44" y="4" width="12" height="8" transform="rotate(45 44 4)" fill="currentColor"/>
    <rect x="12" y="36" width="32" height="12" transform="rotate(-45 12 36)" fill="currentColor"/>
    <rect x="8" y="48" width="4" height="8" fill="currentColor"/>
    <rect x="12" y="52" width="4" height="4" fill="currentColor"/>
    <rect x="40" y="8" width="8" height="4" fill="currentColor"/>
    <rect x="44" y="12" width="8" height="4" fill="currentColor"/>
    <rect x="36" y="12" width="4" height="8" fill="currentColor"/>
  </svg>
);
```

---

## 🖥️ src/components/BrowserMockup.tsx

```tsx
const BrowserMockup = () => {
  const tabs = [
    { icon: "📝", label: "Essay research not..." },
    { icon: "📋", label: "Blackboard.edu" },
    { icon: "🌐", label: "Constantinople" },
    { icon: "🌐", label: "Greek colonisation" },
    { icon: "📰", label: "The Fall of Const..." },
    { icon: "📊", label: "Biology 101" },
    { icon: "🎬", label: "The Deadliest Be..." },
    { icon: "💼", label: "LinkedIn" },
  ];

  return (
    <section className="px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="bg-muted rounded-2xl p-4 shadow-lg">
          {/* Browser Tab Bar */}
          <div className="flex items-center gap-2 pb-3">
            {/* Window controls */}
            <div className="flex items-center gap-1.5 px-2">
              <div className="w-3 h-3 rounded-full bg-foreground/20" />
              <div className="w-3 h-3 rounded-full bg-foreground/20" />
              <div className="w-3 h-3 rounded-full bg-foreground/20" />
            </div>
            
            {/* Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto flex-1">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-card rounded-lg text-xs whitespace-nowrap"
                >
                  <span className="text-sm">{tab.icon}</span>
                  <span className="text-muted-foreground">{tab.label}</span>
                </div>
              ))}
              <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Browser Content */}
          <div className="relative mt-2 min-h-[380px]">
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              {/* Outline Card - Gradient */}
              <div 
                className="rounded-2xl p-5 min-h-[220px] flex flex-col justify-between"
                style={{
                  background: "linear-gradient(180deg, #FF8A4C 0%, #E86A47 35%, #4F7DDE 100%)"
                }}
              >
                <div className="space-y-2">
                  <TabBadge icon="📝" label="Essay research notes" light />
                  <TabBadge icon="📋" label="Blackboard" light />
                </div>
                <div className="text-white">
                  <h3 className="font-mono text-xl font-medium">/outline</h3>
                  <p className="mt-2 font-mono text-sm opacity-90 leading-relaxed">
                    Help structure a quick essay outline for my thesis based on the assignment guidelines
                  </p>
                </div>
              </div>
              
              {/* Cite Card */}
              <div className="bg-card rounded-2xl p-5 border border-border min-h-[220px] flex flex-col justify-between">
                <div className="space-y-2">
                  <TabBadge icon="🌐" label="Constantinople" />
                  <TabBadge icon="🌐" label="Greek colonization" />
                  <TabBadge icon="📰" label="The Fall of Constantinople" />
                </div>
                <div>
                  <h3 className="font-mono text-xl font-medium text-foreground">/cite</h3>
                  <p className="mt-2 font-mono text-sm text-muted-foreground leading-relaxed">
                    Format citations in APA for the attached content & sources
                  </p>
                </div>
              </div>
              
              {/* Flashcards Card */}
              <div className="bg-card rounded-2xl p-5 border border-border min-h-[220px] flex flex-col justify-between">
                <div className="space-y-2">
                  <TabBadge icon="📊" label="Biology 101" />
                  <TabBadge icon="🎬" label="The Deadliest Being on Pla.." />
                </div>
                <div>
                  <h3 className="font-mono text-xl font-medium text-foreground">/flashcards</h3>
                  <p className="mt-2 font-mono text-sm text-muted-foreground leading-relaxed">
                    Create 8-12 study flashcards for me with question on one side, answer on the other
                  </p>
                </div>
              </div>
              
              {/* Job-fit Card */}
              <div className="bg-card rounded-2xl p-5 border border-border min-h-[220px] flex flex-col justify-between">
                <div className="space-y-2">
                  <TabBadge icon="💼" label="LinkedIn" />
                </div>
                <div>
                  <h3 className="font-mono text-xl font-medium text-foreground">/job-fit</h3>
                  <p className="mt-2 font-mono text-sm text-muted-foreground leading-relaxed">
                    Cross-check your resume against any job description to instantly see if you're a good fit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TabBadge = ({ icon, label, light }: { icon: string; label: string; light?: boolean }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
    light 
      ? "bg-white/20 text-white" 
      : "bg-muted text-foreground/80"
  }`}>
    <span>{icon}</span>
    <span>{label}</span>
  </div>
);

export default BrowserMockup;
```

---

## 💭 src/components/ThoughtPartnerSection.tsx

```tsx
import React, { useState } from "react";

interface TabItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GearIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M16 4V8M16 24V28M4 16H8M24 16H28M7.76 7.76L10.59 10.59M21.41 21.41L24.24 24.24M24.24 7.76L21.41 10.59M10.59 21.41L7.76 24.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ScreenIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="24" height="16" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 26H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 22V26" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const PenIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 26L8 20L24 4L28 8L12 24L6 26Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
    <path d="M20 8L24 12" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const TypewriterIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="14" width="24" height="14" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="8" y="18" width="16" height="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M12 4H20V8H12V4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M14 8V14M18 8V14" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const tabs: TabItem[] = [
  {
    id: "tutor",
    icon: <GearIcon />,
    title: "A tutor",
    description: "Highlight anything — a paragraph, a timestamp, a confusing chart — and ask Dia for explanations and answers, directly in your tab."
  },
  {
    id: "buddy",
    icon: <ScreenIcon />,
    title: "A study buddy",
    description: "Your notes, lectures, and readings are already open — Dia helps you turn them into flashcards, quizzes, and custom study guides."
  },
  {
    id: "coach",
    icon: <PenIcon />,
    title: "A writing coach",
    description: "Outline essays, tighten drafts, and pull in the right references — no messy copy-paste, no losing your voice."
  },
  {
    id: "coding",
    icon: <TypewriterIcon />,
    title: "A coding partner",
    description: "Debug, review, and get unstuck faster with feedback right in your flow."
  }
];

const ThoughtPartnerSection = () => {
  const [activeTab, setActiveTab] = useState("tutor");

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-center mb-16 leading-tight">
          A true thought<br />partner, in your tabs.
        </h2>

        <div className="flex flex-col lg:flex-row gap-0">
          {/* Left accordion menu */}
          <div className="w-full lg:w-[350px] flex-shrink-0">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`border-t border-l border-r transition-all cursor-pointer ${
                  index === tabs.length - 1 ? 'border-b' : ''
                } ${
                  activeTab === tab.id
                    ? 'bg-black text-white'
                    : 'bg-background text-foreground hover:bg-muted'
                } ${
                  activeTab === tab.id ? 'border-black' : 'border-border'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="flex items-center gap-4 px-6 py-5">
                  <span className={activeTab === tab.id ? 'text-white' : 'text-foreground'}>
                    {tab.icon}
                  </span>
                  <span className="font-mono text-xl font-medium">{tab.title}</span>
                </div>
                {activeTab === tab.id && (
                  <div className="px-6 pb-6">
                    <p className="font-mono text-sm leading-relaxed opacity-90">
                      {tab.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right mockup area */}
          <div className="flex-1 relative min-h-[400px]">
            <div className="absolute left-0 top-8 w-[65%] h-[350px] bg-muted rounded-lg shadow-lg overflow-hidden">
              <div className="h-8 bg-muted-foreground/10 flex items-center px-3 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-4">
                  <div className="flex gap-1">
                    <div className="px-3 py-1 bg-primary/20 rounded text-xs font-mono">School</div>
                    <div className="px-3 py-1 bg-muted rounded text-xs font-mono">History</div>
                    <div className="px-3 py-1 bg-muted rounded text-xs font-mono">MIT</div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-background h-full">
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded w-3/4" />
                  <div className="h-3 bg-muted rounded w-full" />
                  <div className="h-3 bg-muted rounded w-2/3" />
                  <div className="mt-4 h-32 bg-muted/50 rounded" />
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-0 w-[45%] h-[380px] bg-background border border-border rounded-lg shadow-xl overflow-hidden">
              <div className="h-10 border-b border-border flex items-center justify-between px-4">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-muted rounded text-xs font-mono">/ Recap</span>
                  <span className="px-2 py-1 bg-muted rounded text-xs font-mono">/ Top Quotes</span>
                  <span className="px-2 py-1 bg-muted rounded text-xs font-mono">+ New Skill</span>
                </div>
                <div className="mt-8 flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">How to Speak</p>
                    <p className="text-xs text-muted-foreground">youtube.com/watch...</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-mono text-sm">what is w</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 p-3 bg-muted rounded-full">
                <span className="text-muted-foreground">+</span>
                <div className="flex-1" />
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19V5M5 12l7-7 7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtPartnerSection;
```

---

## ⚡ src/components/SkillsSection.tsx

```tsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Skill {
  id: string;
  icon: React.ReactNode;
  name: string;
  description: string;
}

const CheckIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="32" height="40" stroke="currentColor" strokeWidth="3" fill="none"/>
    <rect x="12" y="8" width="24" height="32" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M16 24L22 30L32 18" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
  </svg>
);

const DollarIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="32" height="24" stroke="currentColor" strokeWidth="3" fill="none"/>
    <rect x="14" y="8" width="4" height="8" fill="currentColor"/>
    <rect x="30" y="8" width="4" height="8" fill="currentColor"/>
    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M24 20V28M22 22H26M22 26H26" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const CiteIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="32" height="40" stroke="currentColor" strokeWidth="3" fill="none"/>
    <rect x="12" y="8" width="24" height="32" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M16 16H32M16 22H32M16 28H28" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const BagIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="16" width="32" height="28" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M16 16V12C16 8 20 4 24 4C28 4 32 8 32 12V16" stroke="currentColor" strokeWidth="3" fill="none"/>
    <rect x="16" y="22" width="16" height="10" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const skills: Skill[] = [
  { id: "fact-check", icon: <CheckIcon />, name: "/fact-check", description: "A one-click fact-checker for students." },
  { id: "job-fit", icon: <DollarIcon />, name: "/job-fit", description: "See if your resume fits this job listing." },
  { id: "cite", icon: <CiteIcon />, name: "/cite", description: "Cite this source in APA, MLA, and Chicago formats." },
  { id: "budget-buddy", icon: <BagIcon />, name: "/budget-buddy", description: "Suggest budget-friendly alternatives for this item." }
];

const SkillsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSkill = () => setCurrentIndex((prev) => (prev + 1) % skills.length);
  const prevSkill = () => setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);

  const currentSkill = skills[currentIndex];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-center mb-16 leading-tight">
          Skills are your<br />shortcut to staying one<br />step ahead in class.
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1 relative">
            <div 
              className="rounded-2xl p-6 min-h-[500px]"
              style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #FF8A4C 30%, #4A90D9 100%)' }}
            >
              <div className="bg-background rounded-lg shadow-2xl overflow-hidden">
                <div className="h-10 bg-muted flex items-center px-3 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex gap-1 ml-4">
                    <div className="px-2 py-1 bg-primary/20 rounded text-[10px] font-mono">School</div>
                    <div className="px-2 py-1 bg-muted-foreground/10 rounded text-[10px] font-mono">Résumé</div>
                    <div className="px-2 py-1 bg-muted-foreground/10 rounded text-[10px] font-mono">Research</div>
                  </div>
                </div>
                <div className="p-6 min-h-[350px]">
                  <div className="flex gap-6">
                    <div className="flex-1 space-y-3">
                      <div className="h-4 bg-muted rounded w-3/4" />
                      <div className="h-4 bg-muted rounded w-full" />
                      <div className="h-4 bg-muted rounded w-2/3" />
                      <div className="mt-6 h-40 bg-muted/50 rounded" />
                    </div>
                    <div className="w-48 border-l border-border pl-4">
                      <div className="flex gap-1 mb-4">
                        <span className="px-2 py-1 bg-muted rounded text-[10px] font-mono">/ {currentSkill.id}</span>
                        <span className="px-2 py-1 bg-muted rounded text-[10px] font-mono">+ New</span>
                      </div>
                      <div className="p-3 bg-muted rounded-lg text-xs">
                        <p className="text-muted-foreground">Ask a question about this page...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={prevSkill} className="p-2 hover:bg-muted rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-[220px] h-[280px]">
              <div className="absolute top-2 left-2 w-full h-full border-2 border-border bg-background rounded-lg" />
              <div className="absolute top-1 left-1 w-full h-full border-2 border-border bg-background rounded-lg" />
              <div className="relative w-full h-full border-2 border-foreground bg-background rounded-lg p-6 flex flex-col">
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-foreground">{currentSkill.icon}</span>
                </div>
                <div className="mt-auto">
                  <h3 className="font-mono text-xl font-bold mb-2">{currentSkill.name}</h3>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">{currentSkill.description}</p>
                </div>
              </div>
            </div>

            <button onClick={nextSkill} className="p-2 hover:bg-muted rounded-full transition-colors border-2 border-primary">
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <div 
            className="py-3 flex items-center gap-4 animate-marquee"
            style={{ background: 'linear-gradient(90deg, #FF00FF 0%, #FF6B4A 25%, #FFD700 50%, #00FFFF 75%, #FF00FF 100%)' }}
          >
            <span className="font-mono text-lg font-bold text-black whitespace-nowrap flex items-center gap-2">
              Get our Student Pack! ➜ ➜ ➜ Get started
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
```

---

## ✨ src/components/FeaturesSection.tsx

```tsx
const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-center mb-4 leading-tight">
          Features so good,<br />they feel illegal
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto font-sans">
          Level up across the board with powerful features that help you stay on top of it all.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Memory Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative bg-[#E8E4DF] rounded-2xl overflow-hidden flex-1 min-h-[350px]">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-[#FF4D4D]" />
              <div className="p-6 pl-20">
                <div className="bg-background rounded-lg shadow-lg p-4 max-w-sm">
                  <div className="space-y-2 text-xs font-mono">
                    <p className="text-muted-foreground">• companies are finally starting to raise prices after months of holding out against new tariffs. <span className="text-primary">axios.com</span></p>
                    <div className="mt-3">
                      <p className="font-bold text-foreground">brooklyn weather today</p>
                      <p className="text-muted-foreground">• high: 84°f, low: 71°f, mostly sunny, humid. <span className="text-primary">accuweather.com</span></p>
                    </div>
                  </div>
                  <div className="mt-3 bg-muted rounded-lg p-3 text-xs">
                    <span className="font-medium">Memories used for this answer</span>
                    <p className="text-muted-foreground">You are based in Brooklyn, NY.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6 mt-4">
              <h3 className="font-display text-2xl font-bold mb-2">Memory</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Keep track of your work across tabs and sessions so you can pick up where you left off.
              </p>
            </div>
          </div>

          {/* Mention Tabs Card */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-background border border-border rounded-2xl p-6 mb-4">
              <h3 className="font-display text-2xl font-bold mb-2">Mention Tabs</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Just @ any open tab in any query to pull them in as powerful context.
              </p>
            </div>
            <div className="bg-[#FFB800] rounded-2xl overflow-hidden flex-1 min-h-[300px] p-6">
              <div className="bg-background rounded-lg shadow-lg p-4">
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-primary/20 text-primary rounded text-[10px] font-mono">School</span>
                  <span className="px-2 py-1 bg-muted rounded text-[10px] font-mono">Abu Dhabi</span>
                  <span className="px-2 py-1 bg-muted rounded text-[10px] font-mono">Berlin</span>
                </div>
                <div className="border border-border rounded-lg p-3">
                  <p className="text-sm text-muted-foreground">◎ which study abroad program is best for comp sci majors?</p>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    <span className="px-2 py-1 bg-primary/10 border border-primary rounded text-[10px] font-mono">Abu Dhabi</span>
                    <span className="px-2 py-1 bg-primary/10 border border-primary rounded text-[10px] font-mono">Berlin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Magazine covers */}
          <div className="lg:col-span-3 bg-[#FFB8D9] rounded-2xl overflow-hidden p-4 min-h-[500px]">
            <div className="space-y-2 text-right">
              <p className="font-mono text-sm font-bold text-pink-900">29 THE RISK ISSUE</p>
              <p className="font-mono text-sm font-bold text-pink-900">Matters Of The Heart ♡</p>
              <p className="font-mono text-sm font-bold text-pink-900">28 The Beauty Issue ☆</p>
              <p className="font-mono text-sm font-bold text-pink-900">27 The Summer Disp...</p>
              <p className="font-mono text-sm font-bold text-pink-900">26 Music To Our Ear...</p>
              <p className="font-mono text-sm font-bold text-pink-900">25 FREAKING OUT !!!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
```

---

## ❓ src/components/FAQSection.tsx

```tsx
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
    { question: "Do students get early access to the beta?", answer: "Yes! Students with a valid .edu email address get priority access to the Dia beta." },
    { question: "Are there any discounts for students?", answer: "Absolutely. We offer a generous student discount — just verify your student status." },
    { question: "What devices are currently supported?", answer: "Dia is currently available for macOS with Apple Silicon (M1 and later)." },
    { question: "Is The Browser Company hiring interns?", answer: "We love working with talented students! Check out our careers page." },
    { question: "I'm a student who loves Dia. How can I get more involved?", answer: "Join our Discord community to connect with other Dia users and share feedback." },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl italic">Questions?<br />Answers.</h2>
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
```

---

## 📣 src/components/CTASection.tsx

```tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl italic leading-tight mb-8">
              The smartest thing<br />you can open<br />this semester.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="px-8 py-6 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90">
                Download Dia
              </Button>
              <a href="#" className="inline-flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors group">
                Dreaming of skills? Join our Discord
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="w-full aspect-[4/3] bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
              <div className="h-10 bg-muted flex items-center px-4 gap-3 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl p-4 h-32" style={{ background: 'linear-gradient(135deg, #FF8A4C 0%, #E86A47 50%, #4F7DDE 100%)' }}>
                  <div className="text-white text-sm font-medium">Outline</div>
                </div>
                <div className="rounded-xl p-4 h-32 bg-[#FFB800]">
                  <div className="text-foreground text-sm font-medium">Cite</div>
                </div>
                <div className="rounded-xl p-4 h-32 bg-[#B8E8D9]">
                  <div className="text-foreground text-sm font-medium">Flashcards</div>
                </div>
                <div className="rounded-xl p-4 h-32 bg-[#FFB8D9]">
                  <div className="text-foreground text-sm font-medium">Job-fit</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FFB800] rounded-xl animate-float" style={{ animationDelay: "0.5s" }}></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#FFB8D9] rounded-xl animate-float" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
```

---

## 🦶 src/components/Footer.tsx

```tsx
const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-foreground">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <span className="font-display text-lg italic">Dia</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Download</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Students</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Changelog</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          </nav>

          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Browser Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---

## 📰 src/components/BlogSection.tsx

```tsx
import { useState } from "react";
import { Search } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Your Tuesday in 2030",
    excerpt: "Or why The Browser Company is being acquired to bring Dia to the masses.",
    date: "SEP 4",
    author: "THE BROWSER COMPANY",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    id: "2",
    title: "The strategy behind Dia's design",
    excerpt: "On familiarity, simplicity, and balancing a novelty budget.",
    date: "JUN 18",
    author: "THE BROWSER COMPANY",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
  },
  {
    id: "3",
    title: "Letter to Arc members 2025",
    excerpt: "On Arc, its future, and the arrival of AI browsers — a moment to answer the largest questions.",
    date: "MAY 27",
    author: "THE BROWSER COMPANY",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=300&h=200&fit=crop",
  },
  {
    id: "4",
    title: "Interoperability: Swift's Super Power",
    excerpt: "Open sourcing our learnings around Windows APIs, COM, C++ and their delightful integration.",
    date: "SEP 21, 2023",
    author: "THE BROWSER COMPANY",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
  },
  {
    id: "5",
    title: "There and back again: the product dilemma",
    excerpt: "Why we changed one of our most important features — then changed it back.",
    date: "AUG 24, 2023",
    author: "THE BROWSER COMPANY",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
  },
];

const tabs = ["Latest", "Top", "Discussions"] as const;
type Tab = typeof tabs[number];

const BlogSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Latest");
  const [email, setEmail] = useState("");

  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <section className="bg-card min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="w-8 h-8 bg-foreground/10 rounded flex items-center justify-center">
            <span className="text-[8px] font-bold text-foreground/60 leading-none">BROWSER<br />COMPANY</span>
          </div>
          <h1 className="font-display text-lg font-bold text-foreground">Keeping Tabs by The Browser Company</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="w-5 h-5 text-foreground/60" />
            </button>
            <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium">Subscribe</button>
            <button className="text-sm text-foreground/60 hover:text-foreground">Sign in</button>
          </div>
        </div>

        <nav className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-8 py-3">
            {["Home", "Archive", "About"].map((item) => (
              <a key={item} href="#" className={`text-sm transition-colors ${item === "Home" ? "text-foreground font-medium border-b-2 border-foreground pb-3 -mb-3" : "text-foreground/60 hover:text-foreground"}`}>
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Featured Post */}
      {featuredPost && (
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{featuredPost.title}</h2>
              <p className="text-foreground/70 text-lg mb-4">{featuredPost.excerpt}</p>
              <p className="text-sm text-muted-foreground">{featuredPost.date} · {featuredPost.author}</p>
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-border" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          {/* Posts List */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-1 bg-muted rounded-full p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 text-sm rounded-full transition-all ${activeTab === tab ? "bg-card text-foreground shadow-sm" : "text-foreground/60 hover:text-foreground"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <button className="p-2 hover:bg-muted rounded-full transition-colors">
                <Search className="w-5 h-5 text-foreground/60" />
              </button>
            </div>

            <div className="space-y-0">
              {regularPosts.map((post, index) => (
                <article key={post.id} className={`py-6 ${index !== regularPosts.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2 hover:underline cursor-pointer">{post.title}</h3>
                      <p className="text-foreground/70 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                      <p className="text-xs text-muted-foreground">{post.date} · {post.author}</p>
                    </div>
                    <div className="w-28 h-20 md:w-36 md:h-24 flex-shrink-0 rounded-md overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button className="mt-8 flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-muted transition-colors">
              See all <span className="text-lg">→</span>
            </button>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Keeping Tabs by The Browser Company</h3>
              <p className="text-sm text-foreground/70 mb-6">We're building a better way to use the internet.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type your email..."
                  className="flex-1 px-4 py-2.5 rounded-l-full border border-border bg-background text-sm placeholder:text-muted-foreground focus:outline-none"
                />
                <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-r-full text-sm font-medium">Subscribe</button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h4 className="text-foreground font-medium mb-6">Keeping Tabs by The Browser Company</h4>
          <div className="space-y-3 text-sm">
            <a href="#" className="block text-foreground hover:underline">About</a>
            <a href="#" className="block text-foreground hover:underline">Archive</a>
            <a href="#" className="block text-foreground hover:underline">Sitemap</a>
          </div>
        </div>
        <div className="bg-muted py-6">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm text-muted-foreground">© 2025 The Browser Company</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default BlogSection;
```

---

## 📝 index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dia - AI Browser for Students</title>
    <meta name="description" content="Dia is the AI browser that truly gets you — helping you think deeper, move faster, and level up across the board." />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## ✅ INSTRUCTIONS POUR CLAUDE CODE

1. Créer le projet avec `npm create vite@latest dia-landing -- --template react-ts`
2. Installer les dépendances listées
3. Copier chaque fichier dans la structure appropriée
4. Configurer les alias `@/` dans `vite.config.ts` et `tsconfig.json`
5. Lancer avec `npm run dev`

**Design tokens clés:**
- Font display: `Libre Baskerville` (serif, italic)
- Font mono: `IBM Plex Mono`
- Font sans: `Inter`
- Animation float: `6s ease-in-out infinite`
- Gradient principal: `#FF8A4C → #E86A47 → #4F7DDE`
