'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "TANSE a transformé notre visibilité sur ChatGPT. En 3 mois, nous sommes passés de 0 à 500 mentions mensuelles. Le ROI est exceptionnel.",
    name: "Sophie Martin",
    role: "CEO, TechFlow",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie"
  },
  {
    id: 2,
    text: "L'audit GEO m'a ouvert les yeux sur des opportunités que je n'avais jamais envisagées. Les recommandations sont ultra-précises et actionnables.",
    name: "Marc Dubois",
    role: "Founder, GrowthLab",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marc"
  },
  {
    id: 3,
    text: "En tant que CMO, j'ai enfin un outil pour mesurer notre présence sur les IA conversationnelles. Les rapports sont clairs et partagés facilement avec l'équipe.",
    name: "Laura Chen",
    role: "CMO, InnovCorp",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Laura"
  },
  {
    id: 4,
    text: "Le tracking en temps réel nous permet d'ajuster notre stratégie immédiatement. Plus besoin d'attendre des semaines pour voir les résultats.",
    name: "Thomas Leroux",
    role: "Head of Marketing, DataSphere",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas"
  },
  {
    id: 5,
    text: "TANSE nous a aidés à dominer notre niche sur Claude et Perplexity. Notre trafic organique a doublé en 6 mois grâce à leur expertise.",
    name: "Julie Rousseau",
    role: "Digital Director, BrandStudio",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julie"
  },
  {
    id: 6,
    text: "L'interface est intuitive, les insights sont pertinents et le support client est réactif. Exactement ce qu'on cherchait pour notre stratégie GEO.",
    name: "David Kim",
    role: "Growth Manager, StartupXYZ",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  },
  {
    id: 7,
    text: "Les recommandations personnalisées de TANSE nous ont permis d'optimiser notre contenu pour les IA. Les résultats sont mesurables et impressionnants.",
    name: "Emma Blanc",
    role: "Content Lead, MediaHub",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
  },
  {
    id: 8,
    text: "Investir dans TANSE était la meilleure décision de l'année. Notre score GEO est passé de 42 à 87 en seulement 4 mois.",
    name: "Alexandre Moreau",
    role: "CEO, FutureTech",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alexandre"
  },
  {
    id: 9,
    text: "Enfin un outil qui comprend vraiment comment fonctionnent les moteurs IA. L'équipe TANSE connaît son sujet sur le bout des doigts.",
    name: "Camille Petit",
    role: "Marketing Director, CloudPro",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Camille"
  },
  {
    id: 10,
    text: "Le prompt tracking nous donne un avantage concurrentiel énorme. Nous savons exactement ce que nos clients demandent aux IA et comment y répondre.",
    name: "Nicolas Bernard",
    role: "VP Sales, SalesTech",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nicolas"
  }
];

/**
 * TestimonialsSection - The Browser Company (Dia) style
 * Infinite marquee with fade effects and smooth animation
 */
export default function TestimonialsSection() {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Title */}
      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a1a1a] mb-16" style={{ letterSpacing: '-0.02em' }}>
        TANSE est pour vous
      </h2>

      {/* Infinite Marquee Container with Fade Effect */}
      <div
        className="relative w-screen -mx-6 md:-mx-0 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <motion.div
          className="flex gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 35.7,
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              className="w-[350px] h-[420px] bg-[#f8f8f8] rounded-[32px] p-10 flex flex-col justify-between shrink-0 border border-[#e5e5e5]"
            >
              {/* Quote Text */}
              <p className="text-[19px] leading-relaxed text-[#1a1a1a]">
                "{testimonial.text}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Role */}
                <div className="flex flex-col">
                  <span className="font-bold text-[15px] text-[#1a1a1a]">
                    {testimonial.name}
                  </span>
                  <span className="text-[13px] text-[#666666]">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lock Icon */}
      <div className="mt-16 flex justify-center">
        <svg
          className="w-8 h-8 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </div>
    </section>
  );
}
