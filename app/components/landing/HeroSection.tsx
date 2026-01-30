"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-bg-dark flex flex-col items-center justify-center p-[64px_80px] gap-[24px]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <iframe
          src="https://customer-ui5gikvnytrm15ts.cloudflarestream.com/4a677d3d7f2772a492c90f254f36c73f/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-ui5gikvnytrm15ts.cloudflarestream.com%2F4a677d3d7f2772a492c90f254f36c73f%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
          className="w-full h-full object-cover scale-125" // Slight scale to ensure no edges if aspect ratio differs slightly, mimicking cover
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen={true}
        ></iframe>
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      {/* Content Layer */}
      <div className="relative z-20 flex flex-col justify-center items-start gap-[10px] w-full max-w-[1440px] flex-1">
        {/* H1 */}
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
        >
          <span className="font-garet font-[850] text-[64px] leading-[100%] tracking-[2px] uppercase text-[#F6F4F1]">
            NEW MEDIUM.
          </span>
          <span className="font-garet font-[850] text-[64px] leading-[100%] tracking-[2px] uppercase text-[#F9C962]">
            NEW AUDIENCE.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="font-inter font-[400] text-[24px] leading-normal tracking-[0.5px] text-[#F6F4F1] w-[781px] max-w-full"
        >
          A new cultural experience bringing video games into cinemas
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, x: "-50%" }}
        animate={{ opacity: 1, y: [0, 10, 0], x: "-50%" }}
        transition={{ 
            opacity: { delay: 1, duration: 1 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" } 
        }}
        className="absolute bottom-8 left-1/2 z-30"
      >
        <ChevronDown size={32} color="#F6F4F1" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
