"use client";

import { useEffect, useState, useRef, ReactElement, cloneElement } from "react";
import { useScroll, useReducedMotion } from "framer-motion";

import { ScrollIndicator } from "./ScrollIndicator";

interface CinematicScrollContainerProps {
  children: ReactElement[];
  scrollBuffer?: number;
}

export function CinematicScrollContainer({ 
  children, 
  scrollBuffer = 800 // Increased for smoother multi-section feel
}: CinematicScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [globalProgress, setGlobalProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollY } = useScroll();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const unsubscribe = scrollY.on("change", (latest) => {
      if (!containerRef.current) return;
      
      const containerTop = containerRef.current.offsetTop;
      const scrollPosition = latest - containerTop;
      
      const totalBuffer = (children.length - 1) * scrollBuffer;
      const progress = Math.max(0, Math.min(1, scrollPosition / totalBuffer));
      setGlobalProgress(progress);
    });

    return () => unsubscribe();
  }, [scrollY, scrollBuffer, prefersReducedMotion, children.length]);

  if (prefersReducedMotion) {
    return <div className="flex flex-col">{children}</div>;
  }

  // Calculate which transition we are in
  const totalSections = children.length;
  const totalSegments = totalSections - 1;
  
  const rawSegmentIndex = globalProgress * totalSegments;
  const currentSegmentIndex = Math.min(Math.floor(rawSegmentIndex), totalSegments - 1);
  
  // Progress within the current active transition (0 to 1)
  const segmentProgress = rawSegmentIndex - currentSegmentIndex;

  return (
    <div 
      ref={containerRef} 
      className="relative"
      style={{ height: `calc(100vh + ${(totalSections - 1) * scrollBuffer}px)` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-bg-dark">
        {/* Render all sections but only keep current ones visible/active */}
        {children.map((child, index) => {
          let opacity = 0;
          let zIndex = 1;
          let pointerEvents: 'auto' | 'none' = 'none';

          if (index === currentSegmentIndex) {
            // Fading out
            opacity = 1 - segmentProgress;
            zIndex = 20;
            pointerEvents = segmentProgress < 0.5 ? 'auto' : 'none';
          } else if (index === currentSegmentIndex + 1) {
            // Fading in
            opacity = segmentProgress;
            zIndex = 10;
            pointerEvents = segmentProgress >= 0.5 ? 'auto' : 'none';
          }

          // Special case: First section at start, last section at end
          if (globalProgress === 0 && index === 0) { opacity = 1; zIndex = 20; pointerEvents = 'auto'; }
          if (globalProgress === 1 && index === totalSections - 1) { opacity = 1; zIndex = 30; pointerEvents = 'auto'; }

          return (
            <div 
              key={index}
              className="absolute inset-0"
              style={{ 
                opacity,
                zIndex,
                pointerEvents,
                transition: 'opacity 0.1s linear' // Tiny smoothing for segment jitter
              }}
            >
              {cloneElement(child, { 
                scrollProgress: index === currentSegmentIndex ? segmentProgress : (index === currentSegmentIndex + 1 ? segmentProgress : 0) 
              } as Record<string, unknown>)}
            </div>
          );
        })}

        {/* Global Scroll Indicator - Only visible during active transitions */}
        {globalProgress < 1 && (
          <ScrollIndicator progress={segmentProgress} />
        )}
      </div>
    </div>
  );
}
