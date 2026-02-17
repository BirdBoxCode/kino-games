"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface ProjectorRevealProps {
  isActive: boolean;
  children: ReactNode;
  className?: string; // For wrapper styling
}

export function ProjectorReveal({ isActive, children, className = "" }: ProjectorRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeInOut" 
      }
    },
    visible: {
      opacity: [0.65, 1],
      filter: ["blur(10px)", "blur(0px)"],
      scale: [1.03, 1],
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delayChildren: 0.2, 
        staggerChildren: 0.08
      }
    }
  };

  const reducedVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.5 } 
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      variants={prefersReducedMotion ? reducedVariants : containerVariants}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        pointerEvents: isActive ? 'auto' : 'none',
        zIndex: isActive ? 50 : 0 // Ensure active section is on top if needed for complex overlaps
      }}
    >
      {children}
    </motion.div>
  );
}

// Light Sweep Overlay for content
export function LightSweep({ className = "", delay = 0.1 }: { className?: string; delay?: number }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, x: "-20%" },
        visible: {
          x: ["-20%", "120%"],
          opacity: [0, 0.25, 0], // fade in, sweep, fade out
          transition: {
            duration: 0.75,
            delay: delay,
            ease: "easeInOut"
          }
        }
      }}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        background: 'linear-gradient(90deg, transparent, rgba(246,244,241,0.18), transparent)',
        height: '120px', // Fallback, override with className
        width: '100%',
        zIndex: 10,
        filter: 'blur(8px)', // Subtle blur
      }}
    />
  );
}

// Reusable Content Variants for Staggering
export const contentVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 12, 
    scale: 0.98 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
