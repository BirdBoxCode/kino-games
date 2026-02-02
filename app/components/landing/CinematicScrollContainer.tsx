"use client";

import { useEffect, useState, useRef, ReactElement, cloneElement } from "react";
import { useScroll, useReducedMotion } from "framer-motion";

interface CinematicScrollContainerProps {
  children: [ReactElement, ReactElement]; // [HeroSection, NextSection]
  scrollBuffer?: number; // Distance in px for the transition
}

export function CinematicScrollContainer({ 
  children, 
  scrollBuffer = 600 
}: CinematicScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollY } = useScroll();

  useEffect(() => {
    if (prefersReducedMotion) {
      // Skip the cinematic effect if user prefers reduced motion
      return;
    }

    const unsubscribe = scrollY.on("change", (latest) => {
      if (!containerRef.current) return;
      
      const containerTop = containerRef.current.offsetTop;
      const scrollPosition = latest - containerTop;
      
      // Calculate progress (0 to 1) based on scroll position
      const progress = Math.max(0, Math.min(1, scrollPosition / scrollBuffer));
      setScrollProgress(progress);
    });

    return () => unsubscribe();
  }, [scrollY, scrollBuffer, prefersReducedMotion]);

  // If reduced motion is preferred, render normally without effects
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  const [heroSection, nextSection] = children;

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section - Sticky during transition */}
      <div 
        className="relative"
        style={{
          position: scrollProgress < 1 ? 'sticky' : 'relative',
          top: 0,
          zIndex: scrollProgress < 1 ? 10 : 1,
        }}
      >
        {/* Pass scroll progress to hero */}
        {cloneElement(heroSection, { scrollProgress } as Partial<{ scrollProgress: number }>)}
      </div>

      {/* Spacer to create scroll distance */}
      <div style={{ height: `${scrollBuffer}px` }} />

      {/* Next Section - Fades in during transition */}
      <div 
        className="relative"
        style={{
          marginTop: `-${scrollBuffer}px`,
          zIndex: 5,
        }}
      >
        {/* Pass scroll progress to next section */}
        {cloneElement(nextSection, { scrollProgress } as Partial<{ scrollProgress: number }>)}
      </div>
    </div>
  );
}
