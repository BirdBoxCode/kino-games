"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-bg-dark">
      {/* Content Layer */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center text-center px-4">
        {/* H1 */}
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-garet font-normal text-[48px] md:text-[64px] leading-[125%] tracking-[2px] mb-6 text-text-on-dark max-w-5xl"
        >
          When Video Games
          <br />
          Meet the Big Screen
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="font-inter font-medium text-[16px] md:text-[20px] tracking-[2px] text-text-on-dark max-w-2xl mb-10"
        >
          A new cultural experience bringing video games into historic cinemas
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent-teal text-text-on-light border border-accent-teal px-8 py-3 rounded-[6px] font-inter font-medium text-[16px] tracking-[2px] hover:bg-opacity-90 transition-all"
        >
          Discover the Catalogue
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
            opacity: { delay: 1, duration: 1 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" } 
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <ChevronDown size={32} color="#F6F4F1" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
