"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface FilmstripGalleryProps {
  images: string[];
}

export function FilmstripGallery({ images }: FilmstripGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  }, [images.length]);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, showNext, showPrev]);

  return (
    <>
      {/* Filmstrip Container Wrapper to control width/position */}
      <div className="relative w-full group/gallery">
        {/* Scroll Left Button */}
        <button
          onClick={() => scrollContainerRef.current?.scrollBy({ left: -200, behavior: "smooth" })}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white/70 hover:text-[#F9C962] transition-all opacity-0 group-hover/gallery:opacity-100 disabled:opacity-0"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-[6px] py-2 w-full scrollbar-hide items-center px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="group relative shrink-0 snap-start cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-black/20"
              style={{ width: "140px", height: "90px" }}
              whileHover={{ borderColor: "rgba(249, 201, 98, 0.8)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="140px"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
              
              {/* Icon - Always visible on mobile, hover on desktop */}
              <div className="absolute top-2 right-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                <Maximize2 size={16} className="text-[#F9C962] drop-shadow-md" />
              </div>
            </motion.div>
          ))}
          
          {/* Spacer to allow scrolling the last item fully into view if needed, though px-1 helps */}
          <div className="w-1 shrink-0" />
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={() => scrollContainerRef.current?.scrollBy({ left: 200, behavior: "smooth" })}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white/70 hover:text-[#F9C962] transition-all opacity-0 group-hover/gallery:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons (Desktop) */}
            <button
              onClick={showPrev}
              className="absolute left-4 z-50 hidden md:flex items-center justify-center p-4 text-white/50 hover:text-[#F9C962] transition-colors"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={showNext}
              className="absolute right-4 z-50 hidden md:flex items-center justify-center p-4 text-white/50 hover:text-[#F9C962] transition-colors"
            >
              <ChevronRight size={48} />
            </button>

            {/* Main Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full h-full max-w-7xl max-h-[85vh] p-4 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex]}
                alt="Fullscreen view"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
            
            {/* Mobile Swipe Hint or Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
