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
 * Each slide has unique mockup design to avoid visual fatigue
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

  // Different mockup designs for each slide
  const renderMockupContent = () => {
    switch (currentSlide) {
      case 0: // Score GEO - Dashboard with metrics
        return (
          <div className="flex h-[400px] bg-gradient-to-br from-gray-50 to-white">
            {/* Main Dashboard */}
            <div className="flex-1 p-8 space-y-6">
              {/* Header with score */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="h-4 bg-gray-300 rounded w-24" />
                  <div className="text-5xl font-bold">87<span className="text-2xl text-gray-400">/100</span></div>
                </div>
                <div className="w-20 h-20 rounded-full border-8 border-green-400 flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Metrics bars */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="h-3 bg-gray-300 rounded w-20" />
                    <span className="h-3 bg-gray-200 rounded w-8" />
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-blue-400 to-blue-600" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="h-3 bg-gray-300 rounded w-24" />
                    <span className="h-3 bg-gray-200 rounded w-8" />
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-[92%] bg-gradient-to-r from-green-400 to-green-600" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="h-3 bg-gray-300 rounded w-16" />
                    <span className="h-3 bg-gray-200 rounded w-8" />
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-gradient-to-r from-orange-400 to-orange-600" />
                  </div>
                </div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-[16px] border border-purple-200/40 p-3">
                  <div className="h-3 bg-purple-300/60 rounded w-16 mb-2" />
                  <div className="text-2xl font-bold text-purple-600">42</div>
                </div>
                <div className="h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-[16px] border border-blue-200/40 p-3">
                  <div className="h-3 bg-blue-300/60 rounded w-20 mb-2" />
                  <div className="text-2xl font-bold text-blue-600">156</div>
                </div>
              </div>
            </div>

            {/* AI Insights Panel */}
            <div className="w-80 bg-gradient-to-br from-white to-gray-50 p-6 space-y-4 border-l border-gray-200/40">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="h-4 bg-gray-300 rounded w-24" />
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-green-50 rounded-[12px] border border-green-200/40">
                  <div className="h-2 bg-green-300/60 rounded w-full mb-2" />
                  <div className="h-2 bg-green-300/60 rounded w-4/5" />
                </div>
                <div className="p-4 bg-blue-50 rounded-[12px] border border-blue-200/40">
                  <div className="h-2 bg-blue-300/60 rounded w-full mb-2" />
                  <div className="h-2 bg-blue-300/60 rounded w-3/4" />
                </div>
                <div className="p-4 bg-orange-50 rounded-[12px] border border-orange-200/40">
                  <div className="h-2 bg-orange-300/60 rounded w-full mb-2" />
                  <div className="h-2 bg-orange-300/60 rounded w-5/6" />
                </div>
              </div>
            </div>
          </div>
        );

      case 1: // Audit - Report with checklist
        return (
          <div className="h-[400px] bg-gradient-to-br from-gray-50 to-white p-8">
            {/* Audit Report */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="h-6 bg-gray-300 rounded w-48" />
                  <div className="h-4 bg-gray-200 rounded w-32" />
                </div>
                <div className="px-4 py-2 bg-green-100 rounded-full">
                  <div className="h-3 bg-green-600 rounded w-16" />
                </div>
              </div>

              {/* Checklist items */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-white rounded-[16px] border border-gray-200/60">
                  <div className="w-5 h-5 rounded-md bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-300 rounded w-full" />
                    <div className="h-2 bg-gray-200 rounded w-3/4" />
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-[16px] border border-gray-200/60">
                  <div className="w-5 h-5 rounded-md bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-300 rounded w-5/6" />
                    <div className="h-2 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-[16px] border border-orange-200/60">
                  <div className="w-5 h-5 rounded-md bg-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-300 rounded w-full" />
                    <div className="h-2 bg-gray-200 rounded w-4/5" />
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-[16px] border border-gray-200/60">
                  <div className="w-5 h-5 rounded-md bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-300 rounded w-4/5" />
                    <div className="h-2 bg-gray-200 rounded w-3/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2: // Tracking - Timeline view
        return (
          <div className="flex h-[400px] bg-gradient-to-br from-gray-50 to-white">
            {/* Timeline */}
            <div className="flex-1 p-8 space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-5 bg-gray-300 rounded w-32" />
                <div className="h-4 bg-gray-200 rounded w-24" />
              </div>

              {/* Timeline entries */}
              <div className="space-y-4 relative pl-6">
                {/* Vertical line */}
                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200" />

                <div className="relative">
                  <div className="absolute -left-6 w-4 h-4 rounded-full bg-blue-500 border-2 border-white" />
                  <div className="p-4 bg-white rounded-[16px] border border-gray-200/60">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-3 bg-blue-300 rounded w-20" />
                      <div className="h-2 bg-gray-200 rounded w-16" />
                    </div>
                    <div className="h-2 bg-gray-200 rounded w-full mb-1" />
                    <div className="h-2 bg-gray-200 rounded w-4/5" />
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-6 w-4 h-4 rounded-full bg-green-500 border-2 border-white" />
                  <div className="p-4 bg-white rounded-[16px] border border-gray-200/60">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-3 bg-green-300 rounded w-24" />
                      <div className="h-2 bg-gray-200 rounded w-14" />
                    </div>
                    <div className="h-2 bg-gray-200 rounded w-full mb-1" />
                    <div className="h-2 bg-gray-200 rounded w-3/4" />
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-6 w-4 h-4 rounded-full bg-purple-500 border-2 border-white" />
                  <div className="p-4 bg-white rounded-[16px] border border-gray-200/60">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-3 bg-purple-300 rounded w-28" />
                      <div className="h-2 bg-gray-200 rounded w-12" />
                    </div>
                    <div className="h-2 bg-gray-200 rounded w-full mb-1" />
                    <div className="h-2 bg-gray-200 rounded w-5/6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats sidebar */}
            <div className="w-64 bg-gradient-to-br from-white to-gray-50 p-6 space-y-4 border-l border-gray-200/40">
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded-[16px] text-center">
                  <div className="text-3xl font-bold text-blue-600">248</div>
                  <div className="h-2 bg-blue-200 rounded w-16 mx-auto mt-2" />
                </div>
                <div className="p-4 bg-green-50 rounded-[16px] text-center">
                  <div className="text-3xl font-bold text-green-600">+42%</div>
                  <div className="h-2 bg-green-200 rounded w-20 mx-auto mt-2" />
                </div>
                <div className="p-4 bg-purple-50 rounded-[16px] text-center">
                  <div className="text-3xl font-bold text-purple-600">1.2k</div>
                  <div className="h-2 bg-purple-200 rounded w-16 mx-auto mt-2" />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
                        tanse.fr/outils
                      </div>
                    </div>
                  </div>

                  {/* Mockup Interface Content - Varied per slide */}
                  {renderMockupContent()}
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
