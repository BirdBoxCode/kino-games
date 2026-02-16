"use client";

import { motion, useTransform, MotionValue, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";

interface ScrollIndicatorProps {
  progress: number | MotionValue<number>;
  className?: string;
}

/**
 * A cinematic scroll indicator that reacts to scroll progress.
 * As progress increases (0 -> 0.4):
 * - A gold circle fills in from the center.
 * - The white chevron turns black.
 * At the end of the transition (0.8 -> 1.0):
 * - The entire indicator fades out.
 */
export function ScrollIndicator({ progress, className = "" }: ScrollIndicatorProps) {
  const motionProgress = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => {
    if (typeof progress === "number") {
      motionProgress.set(progress);
    } else {
      return progress.on("change", (latest) => motionProgress.set(latest));
    }
  }, [progress, motionProgress]);

  // Amplify progress so the bar fills up quickly (sensitivity 3x)
  const amplifiedProgress = useTransform(motionProgress, (v) => Math.min(v * 3, 1));
  
  // Smooth out the movement with a spring
  const smoothProgress = useSpring(amplifiedProgress, { stiffness: 400, damping: 30 });

  const activeScale = prefersReducedMotion ? 0 : smoothProgress;

  return (
    <motion.div 
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center justify-end ${className}`}
    >
      {/* Vertical Progress Bar */}
      {/* Track */}
      <div className="relative w-[8px] h-[56px] rounded-full border border-[#F6F4F1]/30 bg-black/20 backdrop-blur-sm overflow-hidden">
        {/* Fill */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-full bg-[#F9C962] rounded-full"
          style={{ 
            scaleY: activeScale,
            originY: 1 
          }}
        />
      </div>

      {/* Chevron Icon */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="text-[#F6F4F1] opacity-80 -mt-[3px]"
      >
        <ChevronDown size={28} strokeWidth={2} />
      </motion.div>
    </motion.div>
  );
}
