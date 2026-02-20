"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function SectionPartners() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect: 
  // Subtle movement: slightly moves up as you scroll
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  // Optional: slight rotation or scale for more dynamic entry
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="relative w-full flex flex-col justify-start items-start overflow-hidden px-[20px] md:px-[80px] py-[64px] gap-[40px] scroll-mt-[120px]"
      style={{
        height: "auto",
        minHeight: "auto",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/section-partners/popcorn-controller.png"
          alt="Popcorn Background"
          fill
          className="object-cover object-center"
          priority={false}
        />
        
        <motion.div
            className="absolute z-0 pointer-events-none"
            style={{
                right: -50,
                top: 0,
                display: 'none',
                y,
                rotate,
                width: 'clamp(250px, 35vw, 500px)',
                height: 'clamp(360px, 50vw, 750px)',
                transformOrigin: 'center center'
            }}
        >
            <div className="relative w-[300px] h-full" style={{ transform: 'rotate(-90deg)' }}> 
                <Image
                src="/section-partners/hand-controller.png"
                alt="Hand Holding Game Controller"
                fill
                className="object-contain object-top-right"
                />
            </div>
        </motion.div>

        {/* Overlay */}
        <div
          className="absolute inset-0 z-1"
          style={{
            background:
              "linear-gradient(97deg, rgba(0, 0, 0, 0.39) 43.14%, rgba(225, 225, 225, 0.08) 87.43%)",
          }}
        />
      </div>



      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col w-full max-w-[1280px]">
        {/* Section Header */}
        <h2 className="section-header font-garet text-[40px] md:text-[48px] font-[850] leading-[110%] tracking-[0.7px] uppercase text-[#F6F4F1] mb-[40px]">
          OUR PARTNERS AND COLLABORATORS
        </h2>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#F6F4F1] opacity-20 mb-[40px]" />

        {/* Cinemas Group */}
        <div className="flex flex-col gap-[32px] w-full mb-[64px] bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10">
          <h3 className="font-inter text-[20px] font-bold tracking-[0.5px] uppercase text-[#F6F4F1] opacity-60">
            Cinemas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-[16px]">
              {[
                { logo: "arcadia 1.png",                          url: "https://www.arcadiacinema.com/" },
                { logo: "Creative Europe Media Logo 1.png",       url: "https://www.creative-europe-media.eu/" },
                { logo: "FEFFS - Logo 1.png",                     url: "https://strasbourgfestival.com/en/" },
                { logo: "KSPJ - Logo 1.png",                      url: "https://kspj.si/en/home/" },
                { logo: "nerdic2 1.png",                          url: "https://nerdic.org/" },
                { logo: "Quai10 - Logo 1.png",                    url: "https://www.quai10.be/" },
                { logo: "savoy.png",                              url: "https://savoy.premiumkino.de/" },
                { logo: "Votiv-DeFrance-Hauptlogo-Schwarz 1.png", url: "https://www.votivkino.at/" },
                { logo: "lab-1-logo-black 1.png",                 url: "https://www.lab-1.nl/en/" },
                { logo: "spiel_fabrique_transparent 1.png",       url: "https://spielfabrique.eu/Thunderfox/" },
              ].map(({ logo, url }, i) => (
                <a
                  key={`cinema-${i}`}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full aspect-video rounded-[12px] flex items-center justify-center overflow-hidden border bg-[#F4EFE8] border-[#00000010] cursor-pointer"
                >
                  <Image
                    src={`/section-partners/partner-logos/${logo}`}
                    alt={logo.split('.')[0]}
                    fill
                    className="object-contain transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-105"
                    style={{ padding: "25px" }}
                  />
                </a>
              ))}

          </div>
        </div>

        {/* Divider */}
        <div className="hidden w-full h-[1px] bg-[#F6F4F1] opacity-20 mb-[40px]" />

        {/* Game Right-holders Group */}
        <div className="hidden flex-col gap-[32px] w-full bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10">
          <h3 className="font-inter text-[20px] font-bold tracking-[0.5px] uppercase text-[#F6F4F1] opacity-60">
            Game Right-holders
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[16px]">
              {/* Placeholders 4x3 = 12 items */}
              {[...Array(12)].map((_, i) => (
                <div 
                  key={`game-placeholder-${i}`} 
                  className="w-full aspect-video rounded-[12px] bg-[#1A1A1A] border border-[#FFFFFF10]" 
                />
              ))}
          </div>
        </div>

      </div>
    </section>
  );
}
