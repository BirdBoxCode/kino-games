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

  // Amplify progress so the circle appears immediately (sensitivity 15x)
  // Use absolute value for scale calculation
  const amplifiedProgress = useTransform(motionProgress, (v) => Math.min(Math.abs(v) * 15, 1));
  
  // Smooth out the movement with a spring
  const smoothProgress = useSpring(amplifiedProgress, { stiffness: 400, damping: 30 });

  const activeScale = prefersReducedMotion ? 0 : smoothProgress;
  
  // Rotate chevron based on direction (negative progress = up)
  const rotation = useTransform(motionProgress, (v) => v < 0 ? 180 : 0);

  return (
    <motion.div 
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center justify-center ${className}`}
      style={{ rotate: rotation }}
    >
      {/* Circle Container */}
      <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
        {/* Fill */}
        <motion.div 
          className="absolute inset-0 bg-[#F9C962] rounded-full"
          style={{ 
            scale: activeScale,
          }}
        />
        
        {/* Chevron Icon */}
        <motion.div
          animate={{ y: [0, 3, 0] }}
          transition={{
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
          className="relative z-10 text-[#F6F4F1] opacity-80"
        >
          <ChevronDown size={24} strokeWidth={2} />
        </motion.div>
      </div>
    </motion.div>
  );
}
