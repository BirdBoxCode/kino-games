"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function SectionWhy() {
  return (
    <section 
      className="section-why"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '29px',
        padding: '64px 80px',
        height: '100vh',
        minHeight: '964px',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(/section-why-bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'lightgray'
      }}
    >
      {/* Background Overlay */}
      <div 
        className="section-bg-overlay"
        style={{
          position: 'absolute',
          inset: '0',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(86deg, rgba(0,0,0,0.37) 46.51%, rgba(102,102,102,0.37) 97.46%)',
          zIndex: 1
        }}
      />

      {/* Content Block */}
      <div 
        className="content-block"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '30px'
        }}
      >
        {/* Content Wrapper */}
        <div 
          className="content-wrapper"
          style={{
            display: 'flex',
            width: '1280px',
            maxWidth: '100%',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '15px'
          }}
        >
          {/* Content Top */}
          <div 
            className="content-top"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '5px',
              alignSelf: 'stretch'
            }}
          >
            {/* Sub-header */}
            <div
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '24px',
                fontWeight: 400,
                letterSpacing: '0.5px',
                color: '#F9C962'
              }}
            >
              Cinemas & Game Right-Holders
            </div>

            {/* Main Heading */}
            <h2
              style={{
                fontFamily: 'var(--font-garet), Garet, Inter, sans-serif',
                fontSize: '54px',
                fontWeight: 850,
                lineHeight: '110%',
                letterSpacing: '0.7px',
                textTransform: 'uppercase',
                color: '#F6F4F1',
                margin: 0,
                maxWidth: '720px'
              }}
            >
              A NEW STAGE FOR INTERACTIVE CULTURE
            </h2>
          </div>

          {/* Content Bottom */}
          <div 
            className="content-bottom"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            {/* Paragraph */}
            <p
              className="section-p"
              style={{
                width: '800px',
                maxWidth: '100%',
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 500,
                letterSpacing: '0.5px',
                color: '#F6F4F1',
                margin: 0
              }}
            >
              Cinemas become gateways to new audiences, while game creators gain a high-impact marketing platform. Together, they present video games as a cultural experience within iconic cinematic spaces.
            </p>
          </div>
        </div>
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
