"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LightSweep, contentVariants } from "./ProjectorReveal";

export function SectionModel() {
  return (
    <section
      id="our-model"
      className="relative w-full h-screen min-h-screen flex flex-col justify-center items-start overflow-hidden bg-[#0E0E0E] px-[20px] pt-[160px] pb-[64px] md:px-[80px]"
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        style={{
          background: "linear-gradient(83deg, rgba(0, 0, 0, 0.20) 49.88%, rgba(102, 102, 102, 0.20) 90.57%)"
        }}
      />

      {/* Block Wrapper */}
      <div className="relative z-20 flex flex-col items-start gap-[0px] w-full max-w-[1440px] grow"> 
        {/* Content Wrapper */}
        <div className="flex items-start gap-[10px] w-full relative z-30">
          <LightSweep />

          {/* Content */}
          <motion.div 
            variants={contentVariants}
            className="flex flex-col items-start w-full max-w-[1280px]"
          >
            {/* Content Top */}
            <div className="flex flex-col items-start gap-[5px] self-stretch">
              {/* Section Sub-header */}
              <h3 className="section-sub-header text-[#F6F4F1] font-inter text-[20px] md:text-[24px] font-semibold tracking-[0.5px]">
                How ticket sales are shared
              </h3>
              
              {/* Section Header */}
              <h2 className="section-header font-garet text-[40px] md:text-[54px] font-[850] leading-[110%] tracking-[0.7px] uppercase text-[#F6F4F1]">
                SUPPORTING <span className="text-[#D63A2F]">creators & cinemas</span>
              </h2>

              {/* Copy (p1) */}
              <p className="p1 text-[#F6F4F1] font-inter text-[18px] md:text-[18px] font-medium tracking-[0.5px] mt-2 max-w-[800px]">
                 We provide a platform that connects game developers directly with cinema exhibitors, ensuring fair revenue sharing and simplified licensing.
                 By bridging the gap between interactive entertainment and the big screen, we create new revenue streams and cultural opportunities for everyone involved.
              </p>

              {/* CTA Link */}
              <div 
                style={{
                  display: 'flex',
                  padding: '20px 0',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <Link href="https://catalog.kinogames.eu/" className="flex items-center gap-2 cursor-pointer group no-underline">
                  <span className="font-inter font-bold text-[18px] leading-normal tracking-[0.5px] text-[#F9C962] group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                  <span className="relative font-inter font-bold text-[18px] leading-normal tracking-[0.5px] text-[#F6F4F1]">
                    View our catalogue of games!
                    {/* Right-to-left underline animation */}
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#F6F4F1] scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>


        {/* Hand Image - Moved inside flow to prevent overlap */}
        <motion.div 
          variants={contentVariants}
          className="relative z-20 pointer-events-none w-auto max-w-[900px] h-auto max-h-[40vh] md:max-h-[55vh] self-start -ml-[20px] md:-ml-[80px]"
        >
          <Image
              src="/section-model/hand-image2.png"
              alt="Hand holding ticket"
              width={1271}
              height={572}
              className="w-auto h-auto max-h-[40vh] md:max-h-[55vh] object-contain object-left-bottom"
              priority
          />
        </motion.div>
      </div>
    </section>
  );
}
