"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function NewsletterSidebar() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="sticky top-32 hidden lg:block"
      aria-label="Inscription à la newsletter"
    >
      {/* Mac Window Mockup */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.92))",
          backdropFilter: "blur(40px) saturate(180%)",
          WebkitBackdropFilter: "blur(40px) saturate(180%)",
          border: "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: "0 20px 50px -15px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5) inset",
        }}
      >
        {/* Mac Window Header */}
        <div
          className="flex items-center gap-2 px-4 py-3 border-b"
          style={{
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(249, 250, 251, 0.6))",
            borderColor: "rgba(0, 0, 0, 0.06)",
          }}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs font-medium text-gray-600">Newsletter GEO</span>
          </div>
        </div>

        {/* Window Content */}
        <div className="relative p-6">
          {/* Animated gradient background */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.5), rgba(168, 85, 247, 0.4))",
            }}
          />

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: 0.4, damping: 15 }}
              className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
                boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
              }}
            >
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Stay ahead in GEO
            </h3>
            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              Analyses exclusives SEO, GEO et IA directement dans votre inbox
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(22, 163, 74, 0.05))",
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-700">Inscription réussie !</p>
                  <p className="text-xs text-green-600">Vérifiez votre email</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3" aria-label="Formulaire d'inscription à la newsletter">
                <div className="relative">
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    aria-label="Votre adresse e-mail"
                    style={{
                      background: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid rgba(0, 0, 0, 0.08)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 2px rgba(0, 0, 0, 0.02)",
                    }}
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 rounded-xl font-semibold text-white transition-all disabled:opacity-50 text-sm"
                  aria-label={isLoading ? "Inscription en cours..." : "S'abonner à la newsletter gratuitement"}
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
                    boxShadow: "0 4px 16px rgba(99, 102, 241, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Inscription...
                    </span>
                  ) : (
                    "S'abonner gratuitement"
                  )}
                </motion.button>
              </form>
            )}

            {/* Stats */}
            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white"
                    style={{
                      background: `linear-gradient(135deg, hsl(${i * 60}, 70%, 60%), hsl(${i * 60 + 30}, 70%, 50%))`,
                    }}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-600">
                <span className="font-semibold text-indigo-600">2,450+</span> inscrits
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
