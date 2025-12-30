'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

/**
 * SiteHeader - Exact Dia-style navigation
 * Ultra-minimal header positioned top-left with subtle blur
 * Hides on scroll down, shows on scroll up
 */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Track scroll direction
  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state for blur effect
      setScrolled(currentScrollY > 20);

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/forfaits-geo-seo', label: 'Facturation' },
    { href: '/agence-geo-paris-lyon', label: 'Nos Valeurs' },
    { href: '/geo', label: 'GEO' },
    { href: '/blog-seo-geo', label: 'Blog' },
    { href: '/contact-audit-gratuit', label: 'Contact' },
  ];

  return (
    <>
      {/* Desktop & Mobile Header - Top Left like Dia */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: hidden ? 0 : 1,
          y: hidden ? -100 : 0
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-6 z-50"
      >
        <nav
          className={`rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#f5f5f5]/95 backdrop-blur-xl'
              : 'bg-[#f5f5f5]/90 backdrop-blur-lg'
          } px-5 py-3 shadow-sm`}
        >
          <div className="flex items-center gap-6">
            {/* Logo - Simple black text like Dia */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
            >
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L14 7L7 14L0 7L7 0Z" fill="white"/>
                </svg>
              </div>
              <span className="text-[15px] font-semibold text-black hidden sm:block">
                TANSE
              </span>
            </Link>

            {/* Desktop Navigation - Simple like Dia */}
            <div className="hidden md:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-normal text-[#5a5a5a] hover:text-black transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#5a5a5a] hover:text-black transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-20 left-6 right-6 z-50 md:hidden"
            >
              <div className="bg-[#f5f5f5]/95 backdrop-blur-xl rounded-[20px] shadow-lg overflow-hidden">
                <div className="p-3 space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2.5 text-[15px] font-normal text-[#5a5a5a] hover:text-black hover:bg-white/60 rounded-xl transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
