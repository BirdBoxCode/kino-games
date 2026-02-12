"use client";

import { motion, useTransform, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface SectionSimpleSetupProps {
  scrollProgress?: number;
}

export function SectionSimpleSetup({ scrollProgress = 0 }: SectionSimpleSetupProps) {
  const motionProgress = useMotionValue(scrollProgress);

  useEffect(() => {
    motionProgress.set(scrollProgress);
  }, [scrollProgress, motionProgress]);

  // Fade out content when scrolling away (0.8 -> 1.0)
  // Matches HeroSection behavior
  const sectionOpacity = useTransform(motionProgress, [0.8, 1.0], [1, 0]);

  // Content fade (0.4 -> 0.7) - Optional if we want it to fade out earlier
  const contentOpacity = useTransform(motionProgress, [0.4, 0.7], [1, 0]);
  const contentY = useTransform(motionProgress, [0.4, 0.7], [0, -40]);

  return (
    <motion.section
      className="relative w-full h-screen min-h-[964px] flex flex-col justify-center items-center overflow-hidden bg-black"
      style={{ opacity: sectionOpacity }}
    >
      {/* Background Image: Dark Cinema */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/dark_cinema.png"
          alt="Dark Cinema Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay from PDF Specs */}
        <div 
          className="absolute inset-0 z-1"
          style={{
            background: "linear-gradient(87deg, rgba(0,0,0,0.71) 49.43%, rgba(0,0,0,0.71) 126.52%)"
          }}
        />
      </div>

      {/* Block Wrapper */}
      <motion.div 
        className="relative z-20 flex flex-col justify-center items-start gap-[40px] h-full w-full max-w-[1440px] px-[20px] md:px-[80px] pt-[160px] pb-[64px]"
        style={{ 
          opacity: contentOpacity,
          y: contentY
        }}
      >
        {/* Content Wrapper */}
        <div className="flex flex-col items-start w-full max-w-[1280px] gap-[40px]">
          
          {/* Content Top */}
          <div className="flex flex-col items-start gap-[5px] self-stretch">
            <h3 className="text-[#F6F4F1] font-inter text-[20px] md:text-[24px] font-semibold tracking-[0.5px]">
              From game to cinema
            </h3>
            <h2 className="font-garet text-[40px] md:text-[54px] font-[850] leading-[110%] tracking-[0.7px] uppercase text-[#F6F4F1]">
              A <span className="text-[#F9C962]">SIMPLE SET UP</span>
            </h2>
            <p className="text-[#F6F4F1] font-inter text-[18px] md:text-[20px] font-medium tracking-[0.5px] max-w-[600px] mt-2">
              Games are transformed into cinema-ready experiences through a simple, flexible setup.
            </p>
            
            {/* CTA Link */}
            <div 
              style={{
                display: 'flex',
                padding: '20px 0',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Link href="/catalogue" className="flex items-center gap-2 cursor-pointer group no-underline">
                <span className="font-inter font-bold text-[20px] leading-normal tracking-[0.5px] text-[#F9C962] group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
                <span className="relative font-inter font-bold text-[20px] leading-normal tracking-[0.5px] text-[#F6F4F1]">
                  Find out more!
                  {/* Right-to-left underline animation */}
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#F6F4F1] scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </span>
              </Link>
            </div>
          </div>

            {/* Schematic Image - Replaces manual SVG/HTML visualization */}
            {/* Styles applied as per user request */}
            {/* content-bottom: flex, w 1327px, h 573px, flex-col, justify-center, items-center, gap 10px, shrink 0 */}
            <div className="relative flex flex-col justify-center items-center gap-[10px] w-full max-w-[1327px] h-auto md:h-[573px] shrink-0 mt-8 md:mt-0">
               <Image 
                 src="/section-simple-setup/schema-image.png"
                 alt="Simple Setup Schematic: Main Screen, Host, Players, Game System, Audience"
                 /* schema-image: w 1229px, h 489px, shrink 0, aspect 284/113 */
                 width={1229}
                 height={489}
                 className="w-full max-w-[1229px] h-auto shrink-0 aspect-[284/113] object-contain"
                 priority
               />
            </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
