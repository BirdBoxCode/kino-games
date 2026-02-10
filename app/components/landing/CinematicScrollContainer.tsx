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
  const intent = useMotionValue(0); // -1 to 1
  const prefersReducedMotion = useReducedMotion();
  const totalSections = children.length;

  // Sensitivity settings
  const THRESHOLD = 0.4; // How much intent is needed to trigger switch
  const INTENT_DAMPING = 1200; // Larger = slower accumulation for wheel
  const COOLDOWN_MS = 1000; // Prevent rapid-fire skips

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Lock body scroll when component mounts
    document.body.style.overflow = 'hidden';

    let accumulatedDelta = 0;
    let timeoutId: NodeJS.Timeout;
    let hasUnlocked = false;

    const unlockScroll = () => {
      if (hasUnlocked) return;
      hasUnlocked = true;
      document.body.style.overflow = '';
      
      // Jump to the normal content
      const normalContent = document.getElementById('home-normal-scroll');
      if (normalContent) {
        normalContent.scrollIntoView({ behavior: 'auto' });
      }
    };

    const performSwitchLocal = (targetIndex: number) => {
      setIsTransitioning(true);
      setActiveIndex(targetIndex);
      
      // Cooldown to prevent multi-skip
      setTimeout(() => {
        setIsTransitioning(false);
      }, COOLDOWN_MS);
    };

    const handleWheel = (e: WheelEvent) => {
      // If we have unlocked, we might need to re-lock if scrolling up from the top
      // But for now, let's keep it simple: once unlocked, we rely on normal scroll
      // untill the user scrolls back up entirely (which is tricky with this hybrid approach).
      // For this specific request: "Only AFTER the user reaches SectionModel, the NEXT scroll should exit"
      
      if (hasUnlocked) {
        // If we are unlocked, we just let normal scrolling happen.
        // Optional: Re-lock if we scroll back up to the top of home-normal-scroll?
        // The user didn't explicitly ask for re-locking, just "scrolling UP... should re-enter cinematic mode only if needed".
        return;
      }

      const isScrollingDown = e.deltaY > 0;
      const isAtLastSection = activeIndex === totalSections - 1;
      
      if (isAtLastSection && isScrollingDown) {
        unlockScroll();
        return;
      }

      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      e.preventDefault();

      // Accumulate intent
      accumulatedDelta += e.deltaY;
      const currentIntent = Math.max(-1, Math.min(1, accumulatedDelta / INTENT_DAMPING));
      intent.set(currentIntent);

      // Reset accumulation if user stops scrolling for a bit (decay feel)
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        accumulatedDelta = 0;
        intent.set(0);
      }, 200);

      // Check threshold
      if (Math.abs(currentIntent) >= THRESHOLD) {
        const direction = currentIntent > 0 ? 1 : -1;
        const targetIndex = activeIndex + direction;

        if (targetIndex >= 0 && targetIndex < totalSections) {
          performSwitchLocal(targetIndex);
          accumulatedDelta = 0;
          intent.set(0);
        }
      }
    };

    // Touch support
    let touchStart = 0;
    const handleTouchStart = (e: TouchEvent) => {
       touchStart = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (hasUnlocked) return;

      const delta = touchStart - e.touches[0].clientY;
      
      // If at last section and swiping up (scrolling down), unlock and allow normal scroll
      const isSwipingUp = delta > 0;
      const isAtLastSection = activeIndex === totalSections - 1;
      
      if (isAtLastSection && isSwipingUp) {
        unlockScroll();
        return; 
      }
      
      if (isTransitioning) {
        e.preventDefault();
        return;
      }
      
      e.preventDefault();
      // Touch sensitivity
      const currentIntent = Math.max(-1, Math.min(1, delta / 250));
      intent.set(currentIntent);

      if (Math.abs(currentIntent) >= THRESHOLD) {
        const direction = currentIntent > 0 ? 1 : -1;
        const targetIndex = activeIndex + direction;
        if (targetIndex >= 0 && targetIndex < totalSections) {
          performSwitchLocal(targetIndex);
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
      // Cleanup: unlock scroll and remove listeners
      document.body.style.overflow = '';
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeIndex, isTransitioning, totalSections, prefersReducedMotion, intent]);

  // Map intent to 0-1 for the ScrollIndicator (only shows if we have sections left/prev)
  const canGoDown = activeIndex < totalSections - 1;
  const canGoUp = activeIndex > 0;
  const indicatorProgress = useTransform(intent, (v) => {
    if (v > 0 && !canGoDown) return 0;
    if (v < 0 && !canGoUp) return 0;
    return Math.min(1, Math.abs(v) / THRESHOLD);
  });

  if (prefersReducedMotion) {
    return <div className="flex flex-col">{children}</div>;
  }

  // Check if we're at the last section
  const isAtLastSection = activeIndex === totalSections - 1;

  return (
    <>
      {/* Spacer to push normal content down */}
      <div style={{ height: `${totalSections * 100}vh` }} />
      
      {/* Fixed cinematic container */}
      <div className="fixed inset-0 overflow-hidden" style={{ backgroundColor: '#0E0E0E', touchAction: 'none', zIndex: 100 }}>
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

        {/* Global Scroll Indicator - hide when at last section */}
        {!isAtLastSection && <ScrollIndicator progress={indicatorProgress} />}
      </div>
    </>
  );
}
