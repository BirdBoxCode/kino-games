"use client";

import Image from "next/image";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { useEffect } from "react";

interface WhyGamesSectionProps {
  scrollProgress?: number;
}

export function WhyGamesSection({ scrollProgress = 0 }: WhyGamesSectionProps) {
  const motionProgress = useMotionValue(scrollProgress);
  
  useEffect(() => {
    motionProgress.set(scrollProgress);
  }, [scrollProgress, motionProgress]);

  // Unified reveal ranges: 0.4 -> 0.8 for content reveal
  const contentOpacity = useTransform(motionProgress, [0, 0.5, 0.9], [1, 1, 0]);
  const contentY = useTransform(motionProgress, [0, 0.5, 0.9], [0, 0, -20]);
  const imageScale = useTransform(motionProgress, [0, 0.5, 0.9], [1, 1, 1.05]);

  return (
    <motion.section 
      style={{ opacity: contentOpacity }}
      className="relative min-h-screen flex flex-col justify-center py-24 px-4 bg-kino-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div 
          style={{ y: contentY }}
          className="z-10"
        >
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-kino-silver mb-8 leading-tight">
            The Cinema Is <br/>
            <span className="text-kino-red">The Ultimate Console</span>
          </h2>
          <div className="space-y-6 text-kino-silver/80 font-manrope text-lg font-light leading-relaxed border-l border-kino-red/30 pl-6">
            <p>
              Video games are cultural masterpieces. They deserve to be experienced with the reverence of a film premiere, not just on a small monitor.
            </p>
            <p>
              Kino Games transforms historic cinemas into interactive arenas, curated for storytelling, art, and community. It’s not e-sports. It’s cinema.
            </p>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div 
          style={{ scale: imageScale }}
          className="relative h-[600px] w-full bg-kino-gray rounded-sm overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700"
        >
           {/* Using the second uploaded image */}
            <Image
              src="/hero/uploaded_image_1_1768817468630.jpg" 
              alt="Cinema Audience"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-linear-to-t from-black to-transparent w-full">
                <span className="font-syne text-kino-gold text-sm tracking-widest uppercase">Exhibit A</span>
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
