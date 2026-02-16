"use client";

import { motion, useTransform, MotionValue, useMotionValue } from "framer-motion";
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
const THRESHOLD = 0.4;

export function ScrollIndicator({ progress, className = "" }: ScrollIndicatorProps) {
  // Ensure we have a MotionValue for transforms
  const motionProgress = useMotionValue(0);
  
  useEffect(() => {
    if (typeof progress === "number") {
      motionProgress.set(progress);
    } else {
      return progress.on("change", (latest) => motionProgress.set(latest));
    }
  }, [progress, motionProgress]);

  // Phase 1: Gold circle appears and chevron changes color (0 -> 0.4)
  // Phase 1: Gold circle appears and chevron changes color (0 -> 0.2) - Faster response
  const circleScale = useTransform(motionProgress, [0, 0.2], [0, 1]);
  const circleOpacity = useTransform(motionProgress, [0, 0.05], [0, 1]);
  const chevronColor = useTransform(motionProgress, [0.1, 0.2], ["#F6F4F1", "#000000"]);
  
  // Phase 2: Fade out at the very end of the transition (Disabled for now as intent reaches 0 after switch)
  // Actually, we can keep it as a safety or if we want it to fade when intent is full.
  const groupOpacity = useTransform(motionProgress, [THRESHOLD, THRESHOLD + 0.1], [1, 1]);

  // Floating effect when at rest
  const floatY = useTransform(motionProgress, [0, 0.05], [10, 0]);

  return (
    <motion.div 
      style={{ opacity: groupOpacity }}
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center h-16 w-16 ${className}`}
    >
      {/* Filled Gold Circle */}
      <motion.div 
        className="absolute rounded-full bg-[#F9C962] pointer-events-none"
        style={{
          width: '100%',
          height: '100%',
          scale: circleScale,
          opacity: circleOpacity
        }}
      />

      {/* Chevron Icon */}
      <motion.div
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        style={{ 
          color: chevronColor as unknown as string,
          y: floatY // This will override the animation slightly or add to it? 
          // Actually, motion.div animate and style.y can conflict.
        }}
        className="relative z-10 flex items-center justify-center"
      >
        <ChevronDown size={32} strokeWidth={2} />
      </motion.div>
    </motion.div>
  );
}
