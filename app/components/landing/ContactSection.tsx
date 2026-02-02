"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ContactSectionProps {
  scrollProgress?: number;
}

export function ContactSection({ scrollProgress = 0 }: ContactSectionProps) {
  return (
    <motion.section className="relative min-h-screen flex items-center justify-center py-32 px-4 bg-kino-black overflow-hidden">
      {/* Background Bokeh */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-kino-red/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-kino-blue/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <h2 className="font-syne font-bold text-5xl md:text-6xl text-white mb-8">
          Project The Future
        </h2>
        <p className="font-manrope text-lg text-white/60 mb-12 font-light">
          Interested in bringing Kino Games to your venue or showcasing your title? 
          Let’s start the reel.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="mailto:contact@kinogames.com"
              className="inline-block border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-white font-syne font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact Us
            </Link>
        </div>
      </div>
    </motion.section>
  );
}
