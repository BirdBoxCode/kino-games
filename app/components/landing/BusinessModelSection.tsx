"use client";

import { motion, useTransform, useMotionValue } from "framer-motion";
import { useEffect } from "react";

interface BusinessModelSectionProps {
  scrollProgress?: number;
}

export function BusinessModelSection({ scrollProgress = 0 }: BusinessModelSectionProps) {
  const motionProgress = useMotionValue(scrollProgress);
  
  useEffect(() => {
    motionProgress.set(scrollProgress);
  }, [scrollProgress, motionProgress]);

  const yOffset = useTransform(motionProgress, [0, 0.2, 0.8, 1.0], [20, 0, 0, -20]);
    const models = [
      {
        title: "Ticket Sales",
        desc: "Premium event ticketing for live playthroughs and premieres."
      },
      {
        title: "Concessions",
        desc: "Themed food & drink menus inspired by the game worlds."
      },
      {
        title: "Merchandise",
        desc: "Limited edition posters and apparel exclusive to the venue."
      },
      {
        title: "Sponsorship",
        desc: "Brand integrations for pre-show reels and lobby activations."
      }
    ];
  
    return (
      <motion.section 
        style={{ y: yOffset }}
        className="min-h-screen flex flex-col justify-center py-24 px-4 bg-kino-gray"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-syne font-bold text-4xl text-white mb-16 text-center">Business Model</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((item, idx) => (
              <div 
                key={idx}
                className="group p-8 bg-kino-black border border-white/5 hover:border-kino-blue hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 flex flex-col justify-center min-h-[200px]"
              >
                <div className="mb-4 w-2 h-2 bg-kino-red rounded-full group-hover:bg-kino-blue transition-colors" />
                <h3 className="font-syne font-bold text-xl text-white mb-2">{item.title}</h3>
                <p className="font-manrope text-sm text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  }
