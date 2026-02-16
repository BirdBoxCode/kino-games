"use client";

import { motion, useTransform, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import { LightSweep, contentVariants } from "./ProjectorReveal";

interface HeroSectionProps {
  scrollProgress?: number; // 0-1 value from CinematicScrollContainer
}

export function HeroSection({ scrollProgress = 0 }: HeroSectionProps) {
  const motionProgress = useMotionValue(scrollProgress);
  
  useEffect(() => {
    motionProgress.set(scrollProgress);
  }, [scrollProgress, motionProgress]);

  // Refined phased sequence for SCROLLING (Exit)
  // 1. 0.4 -> 0.7: Content fades
  const contentOpacity = useTransform(motionProgress, [0.4, 0.7], [1, 0]);
  const contentY = useTransform(motionProgress, [0.4, 0.7], [0, -40]);
  
  // 2. 0.4 -> 0.8: Video Blur
  const videoBlur = useTransform(motionProgress, [0.4, 0.8], [0, 10]);
  const videoBlurOpacity = useTransform(motionProgress, [0.4, 0.8], [0, 1]);
  
  // 3. 0.8 -> 1.0: Whole section fades out to reveal next page
  const sectionOpacity = useTransform(motionProgress, [0.8, 1.0], [1, 0]);

  return (
    <motion.section 
      style={{ opacity: sectionOpacity }}
      className="relative h-screen w-full overflow-hidden bg-bg-dark flex flex-col items-start justify-center p-8 md:p-[64px_80px] gap-[24px] self-stretch"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden">
        <iframe
          src="https://customer-ui5gikvnytrm15ts.cloudflarestream.com/a73ce1629b56335532957bb1d618eb95/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-ui5gikvnytrm15ts.cloudflarestream.com%2Fcaaca57da49e26e0f62d5bde3b2b2fb6%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen={true}
        ></iframe>

        
        {/* Cinematic Blur Overlay */}
        <motion.div 
          className="absolute inset-0 z-15 pointer-events-none"
          style={{ 
            opacity: videoBlurOpacity,
            backdropFilter: useTransform(videoBlur, (v) => `blur(${v}px)`),
            backgroundColor: 'rgba(0,0,0,0.2)'
          }}
        />
      </div>

      <motion.div 
        className="relative z-20 flex flex-col justify-center items-start gap-[5px] w-full max-w-[1280px] shrink-0"
        style={{ 
          opacity: contentOpacity,
          y: contentY
        }}
      >
        <LightSweep />
        
        {/* H1 */}
        <motion.h1 
            variants={contentVariants}
            className="flex flex-col items-start m-0"
        >
          <span className="font-garet font-[850] text-[40px] sm:text-[54px] md:text-[64px] leading-[100%] tracking-[2px] uppercase text-[#F6F4F1]">
            NEW MEDIUM.
          </span>
          <span className="font-garet font-[850] text-[40px] sm:text-[54px] md:text-[64px] leading-[100%] tracking-[2px] uppercase text-[#F9C962]">
            NEW AUDIENCE.
          </span>
        </motion.h1>

        <motion.div 
          variants={contentVariants}
          className="flex flex-col items-start gap-[20px] shrink-0 w-full"
        >
          {/* Subheadline */}
          <p className="font-inter font-[400] text-[18px] md:text-[24px] leading-normal tracking-[0.5px] text-[#F6F4F1] w-full max-w-[781px] m-0">
            A new cultural experience bringing video games into cinemas.
          </p>

          {/* Catalogue Link */}
          <Link href="https://catalog.kinogames.eu/" className="flex items-center gap-2 cursor-pointer group no-underline">
            <span className="font-inter font-bold text-[20px] leading-normal tracking-[0.5px] text-[#F9C962] group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
            <span className="relative font-inter font-bold text-[20px] leading-normal tracking-[0.5px] text-[#F6F4F1]">
              View our catalogue
              {/* Right-to-left underline animation */}
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#F6F4F1] scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
