"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function SectionPartners() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  // Parallax effect: 
  // Slides UP from below as you scroll down (enter view)
  // Slides DOWN as you scroll up (leave view)
  const y = useTransform(scrollYProgress, [0, 1], ["100%", "-30%"]);
  // Optional: slight rotation or scale for more dynamic entry
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 0]);

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="relative w-full flex flex-col justify-start items-start overflow-hidden px-[20px] md:px-[80px] py-[64px] gap-[40px] scroll-mt-[120px]"
      style={{
        height: "auto",
        minHeight: "auto",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/section-partners/Popcorn.png"
          alt="Popcorn Background"
          fill
          className="object-cover object-center"
          priority={false}
        />
        
        <motion.div
            className="absolute bottom-0 z-0 pointer-events-none"
            style={{
                left: 'calc(20% - 100px)',
                y,
                rotate,
                width: 'clamp(250px, 35vw, 500px)',
                height: 'clamp(400px, 50vw, 750px)',
                transformOrigin: 'bottom left'
            }}
        >
            <div className="relative w-[300px] h-full"> 
                <Image
                src="/section-partners/hand-controller.png"
                alt="Hand Holding Game Controller"
                fill
                className="object-contain object-bottom-left"
                />
            </div>
        </motion.div>

        {/* Overlay */}
        <div
          className="absolute inset-0 z-1"
          style={{
            background:
              "linear-gradient(97deg, rgba(0, 0, 0, 0.39) 43.14%, rgba(225, 225, 225, 0.08) 87.43%)",
          }}
        />
      </div>



      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col gap-[32px] w-full max-w-[1280px]">
        {/* Section Header */}
        <h2 className="font-garet text-[40px] md:text-[54px] font-[850] leading-[110%] tracking-[0.7px] uppercase text-[#F6F4F1]">
          OUR PARTNERS<br />AND COLLABORATORS
        </h2>

        {/* Partner Groups */}
        <div className="flex flex-col md:flex-row gap-[64px] items-start w-full">
          
          {/* Cinemas Group */}
          <div className="flex flex-col gap-[16px] w-full">
            <h3 className="font-inter text-[20px] font-bold tracking-[0.5px] text-[#F6F4F1]">
              Cinemas
            </h3>
            <div className="flex gap-[24px] flex-wrap">
               {/* Placeholders */}
               {[1, 2, 3, 4].map((i) => (
                 <div key={`cinema-${i}`} className="w-[88px] h-[88px] rounded-[8px] bg-[#0E0E0E]" />
               ))}
            </div>
          </div>

          {/* Game Creators Group */}
          <div className="flex flex-col gap-[16px] w-full">
            <h3 className="font-inter text-[20px] font-bold tracking-[0.5px] text-[#F6F4F1]">
              Game Creators
            </h3>
            <div className="flex gap-[24px] flex-wrap">
               {/* Placeholders */}
               {[1, 2, 3, 4].map((i) => (
                 <div key={`game-${i}`} className="w-[88px] h-[88px] rounded-[8px] bg-[#0E0E0E]" />
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
