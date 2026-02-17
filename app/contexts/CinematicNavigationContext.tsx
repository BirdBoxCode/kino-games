"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";

interface CinematicNavigationContextType {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  isCinematic: boolean;
  setIsCinematic: (isCinematic: boolean) => void;
  isTransitioning: boolean;
  setIsTransitioning: (isTransitioning: boolean) => void;
  goToSection: (index: number) => void;
  sectionIndices: {
    hero: 0;
    why: 1;
    gamesCinemas: 2;
    how: 3;
    simpleSetup: 4;
    model: 5;
  };
}

const CinematicNavigationContext = createContext<CinematicNavigationContextType | null>(null);

export function useCinematicNavigation() {
  const context = useContext(CinematicNavigationContext);
  if (!context) {
    throw new Error("useCinematicNavigation must be used within CinematicNavigationProvider");
  }
  return context;
}

export function CinematicNavigationProvider({ children }: { children: ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCinematic, setIsCinematic] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sectionIndices = {
    hero: 0,
    why: 1,
    gamesCinemas: 2,
    how: 3,
    simpleSetup: 4,
    model: 5,
  } as const;
  
  const COOLDOWN_MS = 1000;

  const goToSection = useCallback((index: number) => {
      // Re-enter cinematic if needed
      if (!isCinematic) {
        setIsCinematic(true);
        window.scrollTo({ top: 0, behavior: "instant" });
      }
      
      setIsTransitioning(true);
      setActiveIndex(index);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, COOLDOWN_MS);
  }, [isCinematic]);

  return (
    <CinematicNavigationContext.Provider 
      value={{ 
        activeIndex, 
        setActiveIndex, 
        isCinematic, 
        setIsCinematic,
        isTransitioning,
        setIsTransitioning,
        goToSection,
        sectionIndices
      }}
    >
      {children}
    </CinematicNavigationContext.Provider>
  );
}
