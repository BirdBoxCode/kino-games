"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LighthouseGalleryProps {
  images: string[];
}

export function LighthouseGallery({ images }: LighthouseGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  return (
    <>
      <div 
        className="lighthouse-images"
        style={{
          display: 'flex',
          height: '150px', 
          padding: '10px',
          gap: '10px',
          width: '100%',
          overflowX: 'auto', 
          scrollbarWidth: 'none',
          alignItems: 'center',
          // Fade effect on the right side
          maskImage: 'linear-gradient(to right, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)'
        }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="lighthouse-image-wrapper"
            style={{
              flex: '1 0 0',
              minWidth: '120px', // Reduced to allow 4 items to fit in ~500px+
              alignSelf: 'stretch',
              borderRadius: '6px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative'
            }}
            whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
            transition={{ duration: 0.3 }}
            onClick={() => openLightbox(index)}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                pointerEvents: 'none' // Prevent drag ghost
              }}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.9)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              style={{
                position: "absolute",
                top: "30px",
                right: "30px",
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
                zIndex: 10001
              }}
            >
              &times;
            </button>

            {/* Previous Button */}
            <button
              onClick={showPrev}
              style={{
                position: "absolute",
                left: "20px",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                color: "white",
                fontSize: "1.5rem",
                cursor: "pointer",
                zIndex: 10001,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(5px)"
              }}
            >
              &#8249;
            </button>

            {/* Main Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                 maxWidth: "90vw",
                 maxHeight: "90vh",
                 position: "relative",
                 zIndex: 10000
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex]}
                alt="Fullscreen view"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  maxHeight: "90vh"
                }}
              />
            </motion.div>

            {/* Next Button */}
            <button
               onClick={showNext}
               style={{
                position: "absolute",
                right: "20px",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                color: "white",
                fontSize: "1.5rem",
                cursor: "pointer",
                zIndex: 10001,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(5px)"
              }}
            >
               &#8250;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
