"use client";

import { useEffect, useState, ReactElement, cloneElement } from "react";
import { useReducedMotion, useMotionValue, useTransform } from "framer-motion";
import { ScrollIndicator } from "./ScrollIndicator";

interface CinematicScrollContainerProps {
  children: ReactElement[];
}

export function CinematicScrollContainer({ 
  children, 
}: CinematicScrollContainerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isCinematic, setIsCinematic] = useState(true);
  const intent = useMotionValue(0); 
  const prefersReducedMotion = useReducedMotion();
  const totalSections = children.length;

  // Sensitivity settings
  const THRESHOLD = 0.4; 
  const INTENT_DAMPING = 1200; 
  const COOLDOWN_MS = 1000; 

  // Move performSwitch logic here so it can be used by both event listener and scroll handler
  const performSwitch = (targetIndex: number) => {
    setIsTransitioning(true);
    setActiveIndex(targetIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, COOLDOWN_MS);
  };

  // Event Listener for programmatic navigation (Navbar)
  useEffect(() => {
    const handleNavRequest = (e: any) => {
      const { index, type } = e.detail;

      if (type === 'cinematic') {
        // If we are currently in Normal Scroll Mode (scrolled past),
        // we must scroll back to top to re-enter cinematic experience.
        if (!isCinematic) {
          setIsCinematic(true);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
        performSwitch(index);
      }
    };

    window.addEventListener('cinematic-nav', handleNavRequest);
    return () => window.removeEventListener('cinematic-nav', handleNavRequest);
  }, [isCinematic]); // Re-bind if isCinematic changes, though mainly we just need access to state setters

  useEffect(() => {
    if (prefersReducedMotion) return;

    if (!isCinematic) {
      document.body.style.overflow = '';
      return;
    }

    // Lock body scroll when cinematic
    document.body.style.overflow = 'hidden';

    let accumulatedDelta = 0;
    let timeoutId: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      if (!isCinematic) return;

      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      const isScrollingDown = e.deltaY > 0;
      const isAtLastSection = activeIndex === totalSections - 1;

      // EXIT CINEMATIC MODE
      // Immediate exit if at last section and scrolling down (and not transitioning)
      if (isAtLastSection && isScrollingDown) {
        setIsCinematic(false);
        document.body.style.overflow = '';
        window.scrollTo({ top: (totalSections - 1) * window.innerHeight, behavior: "instant" });
        return;
      }

      e.preventDefault();
      accumulatedDelta += e.deltaY;
      const currentIntent = Math.max(-1, Math.min(1, accumulatedDelta / INTENT_DAMPING));
      intent.set(currentIntent);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        accumulatedDelta = 0;
        intent.set(0);
      }, 200);

      // Section Switch Logic
      if (Math.abs(currentIntent) >= THRESHOLD) {
        const direction = currentIntent > 0 ? 1 : -1;
        const targetIndex = activeIndex + direction;

        if (targetIndex >= 0 && targetIndex < totalSections) {
          performSwitch(targetIndex);
          accumulatedDelta = 0;
          intent.set(0);
        }
      }
    };

    let touchStart = 0;
    const handleTouchStart = (e: TouchEvent) => {
       touchStart = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!isCinematic) return;

      if (isTransitioning) {
        e.preventDefault();
        return;
      }
      
      const delta = touchStart - e.touches[0].clientY;
      const isSwipingUp = delta > 0;
      const isAtLastSection = activeIndex === totalSections - 1;
      
      // EXIT CINEMATIC MODE
      if (isAtLastSection && isSwipingUp) {
        setIsCinematic(false);
        document.body.style.overflow = '';
        window.scrollTo({ top: (totalSections - 1) * window.innerHeight, behavior: "instant" });
        return; 
      }

      e.preventDefault();
      const currentIntent = Math.max(-1, Math.min(1, delta / 250));
      intent.set(currentIntent);

      if (Math.abs(currentIntent) >= THRESHOLD) {
        const direction = currentIntent > 0 ? 1 : -1;
        const targetIndex = activeIndex + direction;
        
        if (targetIndex >= 0 && targetIndex < totalSections) {
          performSwitch(targetIndex);
          intent.set(0);
        }
      }
    };

    const handleTouchEnd = () => {
      intent.set(0);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeIndex, isTransitioning, totalSections, prefersReducedMotion, intent, isCinematic]);

  // RE-ENTER CINEMATIC MODE
  useEffect(() => {
    if (prefersReducedMotion || isCinematic) return;

    const handleScroll = () => {
      // If user scrolls back UP into the cinematic spacer area
      const threshold = (totalSections - 1) * window.innerHeight - 50; // Buffer
      if (window.scrollY < threshold) {
        setIsCinematic(true);
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isCinematic, prefersReducedMotion, totalSections]);

  const canGoDown = activeIndex < totalSections; // Allow "down" intent even on last section (for exit)
  const canGoUp = activeIndex > 0;
  
  const indicatorProgress = useTransform(intent, (v) => {
    if (v > 0 && !canGoDown) return 0;
    if (v < 0 && !canGoUp) return 0;
    
    // Suppress animation when scrolling DOWN from the last section (Exit)
    // The user requested: "remove the scroll animation... when the user scrolls down"
    if (activeIndex === totalSections - 1 && v > 0) return 0;

    return Math.min(1, Math.abs(v) / THRESHOLD);
  });

  if (prefersReducedMotion) {
    return <div className="flex flex-col">{children}</div>;
  }

  // const isAtLastSection = activeIndex === totalSections - 1; 
  // We remove this check for the indicator so it shows even on the last section

  return (
    <div style={{ height: `${totalSections * 100}vh`, position: 'relative' }}>
      <div 
        className={isCinematic ? "fixed inset-0 overflow-hidden" : "absolute bottom-0 w-full h-screen overflow-hidden"}
        style={{ 
          backgroundColor: '#0E0E0E', 
          touchAction: 'none', 
          zIndex: 100 
        }}
      >
        {children.map((child, index) => {
          const isActive = index === activeIndex;
          return (
            <div 
              key={index}
              className="absolute inset-0"
              style={{ 
                zIndex: isActive ? 50 : 10,
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? 'auto' : 'none',
                transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: isActive ? 'scale(1)' : 'scale(1.05)',
                visibility: isActive ? 'visible' : (index === activeIndex - 1 || index === activeIndex + 1 ? 'visible' : 'hidden')
              }}
            >
              {cloneElement(child, { scrollProgress: isActive ? 0 : 1 } as Record<string, unknown>)}
            </div>
          );
        })}

        {isCinematic && <ScrollIndicator progress={indicatorProgress} />}
      </div>
    </div>
  );
}
