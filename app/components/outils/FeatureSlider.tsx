'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

interface FeatureSliderProps {
  toolName: string;
  slides: Slide[];
}

/**
 * FeatureSlider - The Browser Company (Dia) style
 * "[Tool Name] est fait pour..." carousel with browser window mockups
 */
export default function FeatureSlider({ toolName, slides }: FeatureSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Safety check - ensure slides exist
  if (!slides || slides.length === 0) {
    return null;
  }

  const currentSlideData = slides[currentSlide];
  if (!currentSlideData) {
    return null;
  }

  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-4" style={{ letterSpacing: '-0.02em' }}>
            {toolName} est fait pour...
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black" style={{ letterSpacing: '-0.02em' }}>
                    {currentSlideData.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                    {currentSlideData.subtitle}
                  </p>
                </div>
                <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                  {currentSlideData.description}
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href={currentSlideData.ctaHref} className="inline-flex items-center gap-3 rounded-[20px] bg-black px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:bg-gray-900 shadow-lg hover:shadow-xl">
                    <span>{currentSlideData.ctaText}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              </div>

              {/* Right: Browser Window Mockup */}
              <div className="relative">
                {/* Browser Window Frame - Ultra rounded with thin gray borders */}
                <div className="rounded-[40px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden">
                  {/* Window Controls Bar */}
                  <div className="flex items-center gap-2 px-6 py-4 bg-gray-50/80 border-b border-gray-200/60">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white rounded-lg px-4 py-1.5 text-xs text-gray-500 border border-gray-200/60">
                        {toolName.toLowerCase()}.tanse.fr
                      </div>
                    </div>
                  </div>

                  {/* Mockup Interface Content */}
                  <div className="flex h-[400px] bg-gradient-to-br from-gray-50 to-white">
                    {/* Main Area (Left) */}
                    <div className="flex-1 p-8 space-y-4 border-r border-gray-200/40">
                      <div className="h-6 bg-gray-200/60 rounded-lg w-3/4" />
                      <div className="h-6 bg-gray-200/60 rounded-lg w-full" />
                      <div className="h-6 bg-gray-200/60 rounded-lg w-2/3" />
                      <div className="mt-8 space-y-3">
                        <div className="h-24 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-[20px] border border-gray-200/40" />
                        <div className="h-24 bg-gradient-to-br from-pink-100/50 to-orange-100/50 rounded-[20px] border border-gray-200/40" />
                      </div>
                    </div>

                    {/* AI Panel (Right) */}
                    <div className="w-80 bg-gradient-to-br from-white to-gray-50 p-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
                        <div className="h-4 bg-gray-200/60 rounded w-20" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200/60 rounded w-full" />
                        <div className="h-3 bg-gray-200/60 rounded w-4/5" />
                        <div className="h-3 bg-gray-200/60 rounded w-5/6" />
                      </div>
                      <div className="mt-4 p-4 bg-blue-50/50 rounded-[16px] border border-blue-200/30">
                        <div className="h-2 bg-blue-200/60 rounded w-full mb-2" />
                        <div className="h-2 bg-blue-200/60 rounded w-3/4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4">
                  <button onClick={prevSlide} className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex items-center gap-2">
                    {slides.map((_, index) => (
                      <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-black' : 'w-2 bg-gray-300 hover:bg-gray-400'}`} />
                    ))}
                  </div>

                  <button onClick={nextSlide} className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
