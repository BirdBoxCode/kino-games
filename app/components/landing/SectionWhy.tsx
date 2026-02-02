"use client";

import { motion, useTransform, useMotionValue } from "framer-motion";
import { useEffect } from "react";

interface SectionWhyProps {
  scrollProgress?: number; // 0-1 value from CinematicScrollContainer
}

export function SectionWhy({ scrollProgress = 0 }: SectionWhyProps) {
  const motionProgress = useMotionValue(scrollProgress);
  
  useEffect(() => {
    motionProgress.set(scrollProgress);
  }, [scrollProgress, motionProgress]);

  // Aligned with hero exit phased sequence
  const sectionOpacity = useTransform(motionProgress, [0.5, 0.9], [0, 1]);
  const sectionScale = useTransform(motionProgress, [0.5, 0.9], [0.98, 1]);
  const sectionY = useTransform(motionProgress, [0.5, 0.9], [10, 0]);

  return (
    <motion.section 
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
        backgroundColor: 'lightgray',
        opacity: sectionOpacity,
        scale: sectionScale,
        y: sectionY
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

      {/* Section Title - wrapper for all text content */}
      <div 
        className="section-title"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '10px',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Section Sub-header */}
        <div
          className="section-sub-header"
          style={{
            color: '#F2EFEA',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
            letterSpacing: '0.5px'
          }}
        >
          Cinemas &amp; Game Right-Holders
        </div>

        {/* Conte-wrapper */}
        <div 
          className="conte-wrapper"
          style={{
            display: 'flex',
            width: '1280px',
            maxWidth: '100%',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '5px'
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
            {/* Section Header - split into two colored parts */}
            <h2
              className="section-header"
              style={{
                fontFamily: 'var(--font-garet), Garet, Inter, sans-serif',
                fontSize: '54px',
                fontStyle: 'normal',
                fontWeight: 850,
                lineHeight: '110%',
                letterSpacing: '0.7px',
                textTransform: 'uppercase',
                margin: 0
              }}
            >
              <span style={{ color: '#F9C962' }}>A NEW STAGE FOR</span>
              <br />
              <span style={{ color: '#F6F4F1' }}>INTERACTIVE CULTURE</span>
            </h2>
          </div>

          {/* Bullets */}
          <div 
            className="bullets"
            style={{
              display: 'flex',
              height: '159px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              alignSelf: 'stretch'
            }}
          >
            {/* Bullet 1 */}
            <div 
              className="bullet"
              style={{
                display: 'flex',
                height: '77px',
                padding: '10px',
                alignItems: 'center',
                gap: '10px',
                flexShrink: 0,
                alignSelf: 'stretch'
              }}
            >
              {/* Vector - Arrow SVG */}
              <svg 
                className="vector"
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="24" 
                viewBox="0 0 24 18" 
                fill="none"
                style={{
                  flexShrink: 0
                }}
              >
                <path d="M23.5605 7.94104C24.1465 8.52675 24.1465 9.47794 23.5605 10.0636L16.0602 17.5607C15.4742 18.1464 14.5226 18.1464 13.9366 17.5607C13.3507 16.975 13.3507 16.0238 13.9366 15.4381L18.8775 10.4994L1.50007 10.4994C0.670345 10.4994 0 9.82936 0 9C0 8.17064 0.670345 7.50059 1.50007 7.50059L18.8775 7.50059L13.9366 2.56189C13.3507 1.97618 13.3507 1.02499 13.9366 0.439281C14.5226 -0.146427 15.4742 -0.146427 16.0602 0.439281L23.5605 7.93635V7.94104Z" fill="#F9C962"/>
              </svg>
              
              {/* Point Wrapper */}
              <div 
                className="point-wrapper"
                style={{
                  display: 'flex',
                  paddingBottom: '10px',
                  justifyContent: 'flex-end',
                  alignItems: 'center'
                }}
              >
                <p
                  className="paragraph"
                  style={{
                    width: '569px',
                    height: '47px',
                    maxWidth: '100%',
                    color: '#F6F4F1',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal',
                    letterSpacing: '0.5px',
                    margin: 0
                  }}
                >
                  Cinemas become gateways to new audiences, while game creators gain a high-impact marketing platform.
                </p>
              </div>
            </div>

            {/* Bullet 2 */}
            <div 
              className="bullet"
              style={{
                display: 'flex',
                padding: '10px',
                alignItems: 'center',
                gap: '10px',
                alignSelf: 'stretch'
              }}
            >
              {/* Vector - Arrow SVG */}
              <svg 
                className="vector"
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="24" 
                viewBox="0 0 24 18" 
                fill="none"
                style={{
                  flexShrink: 0
                }}
              >
                <path d="M23.5605 7.94104C24.1465 8.52675 24.1465 9.47794 23.5605 10.0636L16.0602 17.5607C15.4742 18.1464 14.5226 18.1464 13.9366 17.5607C13.3507 16.975 13.3507 16.0238 13.9366 15.4381L18.8775 10.4994L1.50007 10.4994C0.670345 10.4994 0 9.82936 0 9C0 8.17064 0.670345 7.50059 1.50007 7.50059L18.8775 7.50059L13.9366 2.56189C13.3507 1.97618 13.3507 1.02499 13.9366 0.439281C14.5226 -0.146427 15.4742 -0.146427 16.0602 0.439281L23.5605 7.93635V7.94104Z" fill="#F9C962"/>
              </svg>
              
              {/* Point Wrapper */}
              <div 
                className="point-wrapper"
                style={{
                  display: 'flex',
                  paddingRight: '430px',
                  alignItems: 'center'
                }}
              >
                <p
                  className="paragraph"
                  style={{
                    width: '510px',
                    height: '47px',
                    maxWidth: '100%',
                    color: '#F6F4F1',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal',
                    letterSpacing: '0.5px',
                    margin: 0
                  }}
                >
                  Together, they present video games as a cultural experience within iconic cinematic spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
