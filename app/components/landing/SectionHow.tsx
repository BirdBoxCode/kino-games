"use client";

import React from "react";
import { motion } from "framer-motion";
import { LightSweep, contentVariants } from "./ProjectorReveal";

export function SectionHow() {
  return (
    <>
      <style jsx global>{`
        @media (max-width: 768px) {
          .section-how {
            padding: 40px 20px !important;
            height: auto !important;
            min-height: auto !important;
          }
          .bullet-trail-wrapper {
            gap: 40px !important;
          }
          .trail-item {
            margin-left: 0 !important;
            align-self: flex-start !important;
            width: 100%;
          }
          .squiggle-frame-2, .squiggle-frame-3 {
            padding: 0 !important;
            justify-content: flex-start !important;
          }
          .how-p1, .how-p2, .how-p3, .how-p3-corrected {
            margin-left: 0 !important;
            padding-left: 0 !important;
            max-width: 100% !important;
          }
          .section-how h2 {
            font-size: 32px !important;
          }
        }
      `}</style>
      <section 
        id="how-it-works"
        className="section-how"
        style={{
          display: 'flex',
          // height: '964px', // base
          minHeight: '964px', // responsive
          height: '100vh', 
          padding: '64px 0', // Vertical padding only
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', // Center content
          gap: '29px',
          alignSelf: 'stretch',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url(/section-how-bg.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: '#222', // fallback
        }}
      >
      {/* Overlay */}
      <div 
        className="overlay"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(86deg, rgba(0, 0, 0, 0.25) 49.69%, rgba(102, 102, 102, 0.00) 91.5%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Content Wrapper */}
      <div 
        className="content-wrapper px-[20px] md:px-[80px]"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '20px',
          width: '100%',
          maxWidth: '1440px', // Matches Navbar
          margin: '0 auto',
          height: '100%', 
          justifyContent: 'center'
        }}
      >
        <LightSweep />

        {/* Section Top: subheader + main title */}
        <div className="section-top">
          <motion.h3 variants={contentVariants} className="text-[#F6F4F1] font-inter text-[20px] md:text-[24px] font-semibold tracking-[0.5px]">
            From game to cinema
          </motion.h3>
           <motion.h2 
            variants={contentVariants}
            style={{
              fontFamily: 'Garet, Inter, sans-serif',
              fontSize: '48px',
              fontWeight: 850,
              lineHeight: '110%',
              letterSpacing: '0.7px',
              textTransform: 'uppercase',
              color: '#F9C962', // 'HOW' is yellow, rest white is typical but request says "HOW DOES IT WORK?"
            }}
          >
            <span style={{ color: '#F9C962' }}>HOW</span> <span style={{ color: '#F6F4F1' }}>DOES IT WORK?</span>
          </motion.h2>
        </div>

        {/* Content Bottom */}
        <div 
          className="content-bottom"
          style={{
            display: 'flex',
            padding: '10px 0',
            alignItems: 'flex-start',
            gap: '10px',
            width: '100%'
          }}
        >
          <div 
            className="bullet-trail-wrapper"
            style={{
              display: 'flex',
              width: '100%',
              maxWidth: '1280px',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '15px'
            }}
          >
            {/* Trail Item 1 */}
            <motion.div variants={contentVariants} className="trail-item" style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
              <div 
                className="squiggle-frame1"
                style={{
                  display: 'flex',
                  padding: '0', 
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px', // Fixed width for alignment
                  flexShrink: 0
                }}
              >
                <div style={{ transform: 'scale(0.8)' }}>
                   <Squiggle1 />
                </div>
              </div>
              <div className="how-p1" style={{ maxWidth: '500px' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#F6F4F1', margin: 0 }}>
                  <span style={{ fontWeight: 700 }}>Games are adapted for the cinema environment.</span><br/>
                  <span style={{ fontWeight: 500 }}>Simple formats designed specifically for large screens and shared spaces.</span>
                </p>
              </div>
            </motion.div>

            {/* Trail Item 2 - Staggered Left Margin for Visual Trail Effect */}
            <motion.div variants={contentVariants} className="trail-item" style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center', marginLeft: '40px' }}> 
              <div 
                className="squiggle-frame-2"
                style={{
                   display: 'flex',
                   padding: '0',
                   justifyContent: 'center',
                   alignItems: 'center',
                   width: '120px', // Wider frame for this squiggle
                   flexShrink: 0
                }}
              >
                 <div style={{ transform: 'scale(0.8)' }}>
                  <Squiggle2 />
                 </div>
              </div>
              <div className="how-p2" style={{ maxWidth: '500px' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#F6F4F1', margin: 0 }}>
                  <span style={{ fontWeight: 700 }}>Designed to fit existing cinemas.</span><br/>
                  <span style={{ fontWeight: 500 }}>Screen, sound, and interaction work within standard cinema infrastructure.</span>
                </p>
              </div>
            </motion.div>

            {/* Trail Item 3 - More Staggered */}
            <motion.div variants={contentVariants} className="trail-item" style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center', marginLeft: '80px' }}>
               <div 
                 className="squiggle-frame-3"
                 style={{
                    display: 'flex',
                    padding: '0',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '60px',
                    flexShrink: 0
                 }}
               >
                 <div style={{ transform: 'scale(0.8)' }}>
                   <Squiggle3 />
                 </div>
               </div>
               <div className="how-p3" style={{ maxWidth: '500px' }}>
                   <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#F6F4F1', margin: 0 }}>
                    <span style={{ fontWeight: 500 }}>Browse our catalogue of games, decide how long you want it for, plug in and play.</span>
                   </p>
               </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
    </>
  );
}

function Squiggle1() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="97" viewBox="0 0 33 97" fill="none">
      <path d="M19.6413 96.1284C20.7382 96.2579 21.7325 95.4737 21.862 94.3767L23.9728 76.5009C24.1024 75.404 23.3181 74.4097 22.2212 74.2802C21.1242 74.1506 20.13 74.9349 20.0004 76.0318L18.1241 91.9214L2.23454 90.0451C1.13759 89.9156 0.143338 90.6999 0.0138055 91.7968C-0.115725 92.8938 0.668522 93.888 1.76547 94.0175L19.6413 96.1284ZM29.7764 0.442383L27.8259 0.884804C29.8382 9.75612 27.8792 16.5714 24.3337 22.7182C22.5392 25.8292 20.3381 28.767 17.9987 31.7329C15.6872 34.6636 13.1998 37.6703 10.99 40.7655C6.53464 47.0059 2.9198 53.9831 3.27503 62.8996C3.62825 71.7657 7.89061 82.1769 18.3055 95.3808L19.8758 94.1422L21.4461 92.9036C11.29 80.0278 7.57774 70.4184 7.27186 62.7404C6.96799 55.1129 10.0096 49.0227 14.2454 43.0897C16.3812 40.0983 18.7481 37.2418 21.1394 34.2101C23.5029 31.2136 25.8532 28.0896 27.7986 24.7168C31.7329 17.896 34.0077 10.0554 31.7268 -3.81706e-05L29.7764 0.442383Z" fill="#F9C962"/>
    </svg>
  );
}

function Squiggle2() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="79" height="75" viewBox="0 0 79 75" fill="none">
      <path d="M63.7753 74.3819C62.9384 75.1027 61.6756 75.0086 60.9547 74.1716L49.2084 60.5326C48.4876 59.6956 48.5818 58.4328 49.4187 57.712C50.2557 56.9911 51.5185 57.0853 52.2393 57.9223L62.6805 70.0459L74.8041 59.6047C75.6411 58.8839 76.9039 58.9781 77.6247 59.815C78.3455 60.652 78.2514 61.9148 77.4144 62.6356L63.7753 74.3819ZM1.86426 0.723633L3.72864 -0.000307945C7.02136 8.47952 12.4566 13.0341 18.8333 16.1472C22.0606 17.7228 25.5283 18.9274 29.1263 20.078C32.6815 21.215 36.4249 22.3166 39.9878 23.6469C47.1711 26.3288 54.0697 30.0916 58.7614 37.6823C63.4266 45.23 65.7151 56.2447 64.4647 73.0152L62.4702 72.8665L60.4757 72.7178C61.6951 56.364 59.3989 46.3216 55.3589 39.7854C51.3454 33.292 45.4181 29.944 38.5887 27.3942C35.1453 26.1085 31.5857 25.0641 27.9079 23.8879C24.2728 22.7254 20.5774 21.4499 17.0784 19.7417C10.0026 16.2873 3.7321 11.0593 -0.0001214 1.44757L1.86426 0.723633Z" fill="#F9C962"/>
    </svg>
  );
}

function Squiggle3() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="97" viewBox="0 0 28 97" fill="none">
      <path d="M19.8413 96.6497C20.9437 96.7184 21.8931 95.8804 21.9618 94.778L23.0813 76.8128C23.15 75.7104 22.312 74.761 21.2096 74.6923C20.1072 74.6236 19.1578 75.4616 19.0891 76.5641L18.094 92.5331L2.12493 91.538C1.0225 91.4692 0.0731131 92.3073 0.00441225 93.4097C-0.0642862 94.5121 0.773718 95.4615 1.87615 95.5302L19.8413 96.6497ZM24.6719 0.549805L22.7489 1.09936C25.2484 9.84589 23.6692 16.759 20.4688 23.0924C18.8491 26.2979 16.8137 29.3528 14.6418 32.4435C12.4958 35.4975 10.1784 38.637 8.14306 41.8497C4.03947 48.3268 0.815823 55.4932 1.66336 64.3764C2.50611 73.2094 7.33744 83.3691 18.4663 95.9771L19.9657 94.6536L21.4651 93.3301C10.6129 81.0354 6.37509 71.6458 5.64528 63.9965C4.92027 56.3975 7.62058 50.1484 11.522 43.9904C13.4891 40.8855 15.6946 37.9025 17.9146 34.7433C20.1088 31.6207 22.2829 28.3716 24.0389 24.8964C27.5902 17.8686 29.4281 9.91422 26.5949 0.000249209L24.6719 0.549805Z" fill="#F9C962"/>
    </svg>
  );
}
