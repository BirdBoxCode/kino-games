"use client";

import { motion, useTransform, useMotionValue } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";

interface HeroSectionProps {
  scrollProgress?: number; // 0-1 value from CinematicScrollContainer
}

export function HeroSection({ scrollProgress = 0 }: HeroSectionProps) {
  const motionProgress = useMotionValue(scrollProgress);
  
  useEffect(() => {
    motionProgress.set(scrollProgress);
  }, [scrollProgress, motionProgress]);

  // Refined phased sequence
  // 1. 0 -> 0.4: Arrow turns Gold & Slides
  const arrowColor = useTransform(motionProgress, [0, 0.4], ["#F6F4F1", "#F9C962"]);
  const arrowY = useTransform(motionProgress, [0, 0.4], [0, 15]);
  
  // 2. 0.4 -> 0.8: Content fades & Blur increases
  const contentOpacity = useTransform(motionProgress, [0.4, 0.7], [1, 0]);
  const contentY = useTransform(motionProgress, [0.4, 0.7], [0, -40]);
  const videoBlur = useTransform(motionProgress, [0.4, 0.8], [0, 10]);
  const videoBlurOpacity = useTransform(motionProgress, [0.4, 0.8], [0, 1]);
  
  // 3. 0.8 -> 1.0: Whole section fades out
  const sectionOpacity = useTransform(motionProgress, [0.8, 1.0], [1, 0]);
  const arrowOpacityFinal = useTransform(motionProgress, [0.8, 1.0], [1, 0]);

  // Combined arrow opacity
  const arrowScale = useTransform(motionProgress, [0, 0.15, 0.7], [1, 1.1, 0.9]);

  return (
    <motion.section 
      style={{ opacity: sectionOpacity }}
      className="relative h-screen w-full overflow-hidden bg-bg-dark flex flex-col items-center justify-center p-[64px_80px] gap-[24px]"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden">
        <iframe
          src="https://customer-ui5gikvnytrm15ts.cloudflarestream.com/4a677d3d7f2772a492c90f254f36c73f/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-ui5gikvnytrm15ts.cloudflarestream.com%2F4a677d3d7f2772a492c90f254f36c73f%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
          // "min-w-full min-h-full" ensures it covers the box.
          // "w-[177.77vh]" ensures that if height is limiting (tall screen), width is 16:9 of height.
          // "h-[56.25vw]" ensures that if width is limiting (wide screen), height is 9/16 of width.
          // Centering ensures we crop from middle.
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen={true}
        ></iframe>
        {/* Subtle Static Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        
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

      {/* Content Layer */}
      <motion.div 
        className="relative z-20 flex flex-col justify-center items-start gap-[10px] w-full max-w-[1440px] flex-1"
        style={{ 
          opacity: contentOpacity,
          y: contentY
        }}
      >
        {/* H1 */}
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
        >
          <span className="font-garet font-[850] text-[64px] leading-[100%] tracking-[2px] uppercase text-[#F6F4F1]">
            NEW MEDIUM.
          </span>
          <span className="font-garet font-[850] text-[64px] leading-[100%] tracking-[2px] uppercase text-[#F9C962]">
            NEW AUDIENCE.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="font-inter font-[400] text-[24px] leading-normal tracking-[0.5px] text-[#F6F4F1] w-[781px] max-w-full"
        >
          A new cultural experience bringing video games into cinemas
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, x: "-50%" }}
        animate={{ 
          opacity: scrollProgress === 0 ? 1 : undefined,
          y: scrollProgress === 0 ? [0, 10, 0] : undefined,
          x: "-50%"
        } as any}
        transition={{ 
            opacity: scrollProgress === 0 ? { delay: 1, duration: 1 } : { duration: 0.2 },
            y: scrollProgress === 0 ? { repeat: Infinity, duration: 2, ease: "easeInOut" } : { duration: 0 }
        }}
        style={{
          opacity: arrowOpacityFinal,
          scale: arrowScale,
          y: arrowY,
          color: arrowColor
        }}
        className="absolute bottom-8 left-1/2 z-30 flex flex-col items-center"
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </motion.div>
    </motion.section>
  );
}
