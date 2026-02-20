"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LightSweep, contentVariants } from "./ProjectorReveal";

export function SectionModel() {
  return (
    <section
      id="our-model"
      className="relative w-full flex flex-col overflow-hidden px-[20px] md:px-[80px] pt-[120px] md:pt-[160px]"
      style={{
        backgroundImage: 'url(/section-model/cinema-lobby.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'lightgray',
        height: '100vh',
        minHeight: '800px',
        overflowY: 'hidden',
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        style={{
          background: "linear-gradient(83deg, rgba(0, 0, 0, 0.20) 49.88%, rgba(102, 102, 102, 0.20) 90.57%)"
        }}
      />

      {/* ── TOP: text content, full-width, top-left ── */}
      <div className="relative z-20 w-full max-w-[1440px] flex items-start gap-[10px]">
        <LightSweep />

        <motion.div
          variants={contentVariants}
          className="flex flex-col items-start gap-[20px] w-full md:pr-[calc(50vw-20px)] xl:pr-[620px]"
        >
          {/* Section Sub-header */}
          <h3 style={{ color: '#F6F4F1', fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: 'normal', letterSpacing: '0.5px', margin: 0 }}>
            How ticket sales are shared
          </h3>

          {/* Section Header */}
          <h2 className="section-header font-garet text-[40px] md:text-[48px] font-[850] leading-[110%] tracking-[0.7px] uppercase text-[#F6F4F1] whitespace-normal xl:whitespace-nowrap" style={{ margin: 0 }}>
            SUPPORTING <span className="text-[#D63A2F]">creators &amp; cinemas</span>
          </h2>

          {/* Grey card: body + CTA */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(246, 244, 241, 0.1)',
              borderRadius: '24px',
              padding: '20px 32px',
              maxWidth: '680px',
            }}
          >
            <p className="p1 text-[#F6F4F1] font-inter text-[18px] font-medium tracking-[0.5px]" style={{ margin: 0 }}>
              We provide a platform that connects game developers directly with cinema exhibitors, ensuring fair revenue sharing and simplified licensing.
              By bridging the gap between interactive entertainment and the big screen, we create new revenue streams and cultural opportunities for everyone involved.
            </p>

            {/* CTA Link */}
            <div style={{ display: 'flex', padding: '20px 0 0 0', justifyContent: 'flex-start', alignItems: 'center', gap: '10px' }}>
              <Link href="https://catalog.kinogames.eu/" className="flex items-center gap-2 cursor-pointer group no-underline">
                <span className="font-inter font-bold text-[18px] leading-normal tracking-[0.5px] text-[#F9C962] group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
                <span className="relative font-inter font-bold text-[18px] leading-normal tracking-[0.5px] text-[#F6F4F1]">
                  View our catalogue of games!
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#F6F4F1] scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── BOTTOM: large ticket image, anchored bottom-right, grows leftward ── */}
      <motion.div
        variants={contentVariants}
        className="absolute bottom-0 right-0 z-20 pointer-events-none"
        style={{ width: 'clamp(360px, 48vw, 840px)' }}
      >
        <Image
          src="/section-model/ticketswap2.png"
          alt="TicketSwap – ticket held by hand"
          width={1271}
          height={572}
          className="w-full h-auto object-contain object-bottom-right"
          priority
        />
      </motion.div>

    </section>
  );
}
