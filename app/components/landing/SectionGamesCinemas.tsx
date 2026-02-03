"use client";

import { LighthouseGallery } from "./LighthouseGallery";

export function SectionGamesCinemas() {
  const cinemasImages = [
    "/section-cinemas-games/cinema-image1.JPG",
    "/section-cinemas-games/cinema-image2.png",
    "/section-cinemas-games/cinema-image3.png",
    "/section-cinemas-games/cinema-image4.png",
  ];

  const gamesImages = [
    "/section-cinemas-games/game-image1.png",
    "/section-cinemas-games/game-image2.png",
    "/section-cinemas-games/game-image3.png",
    "/section-cinemas-games/game-image4.png",
  ];

  return (
    <section 
      className="section-games-cinemas"
      style={{
        display: 'flex',
        padding: '80px min(80px, 5%)', // Reduced top padding
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '15px', // Reduced gap
        alignSelf: 'stretch',
        position: 'relative',
        overflow: 'hidden',
        height: '100vh', // Enforce full viewport height
        minHeight: '800px',
        // Background from requirements
        backgroundImage: 'url(/section-games-cinemas-bg.jpg)', // Updated background image
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: 'lightgray', // fallback
      }}
    >
      {/* Overlay Darker */}
      <div 
        className="overlay-darker"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(82deg, rgba(0, 0, 0, 0.58) 48.86%, rgba(208, 208, 208, 0.10) 82.27%, rgba(208, 208, 208, 0.07) 93.7%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Content Wrapper */}
      <style jsx>{`
        .content-wrapper {
          padding-left: 16px; 
          padding-right: 16px;
        }
        @media (min-width: 768px) {
          .content-wrapper {
            padding-left: 48px;
            padding-right: 48px;
          }
        }
      `}</style>
      <div 
        className="content-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '10px',
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1440px', // Matches Navbar
          margin: '0 auto',
        }}
      >
        {/* Section Sub Header */}
        <div 
          className="section-sub-header"
          style={{
            color: '#F2EFEA',
            fontFamily: 'Inter, sans-serif',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
            letterSpacing: '0.5px'
          }}
        >
          Cinemas & Game Right-Holders
        </div>

        {/* Content Wrapper for BOTH blocks */}
        <div 
          className="content"
          style={{
             display: 'flex',
             width: '1280px',
             maxWidth: '100%',
             flexDirection: 'column',
             alignItems: 'flex-start',
             gap: '5px'
          }}
        >
          {/* =======================
              BLOCK 1: FOR CINEMAS
             ======================= */}
          <div className="content-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', width: '100%', flexWrap: 'wrap' }}>
            {/* Text Column */}
            <div className="text-column" style={{ flex: '1 1 400px' }}>
              <h2 
                className="section-header"
                style={{
                  fontFamily: 'Garet, Inter, sans-serif',
                  fontSize: 'clamp(32px, 5vw, 54px)',
                  fontWeight: 850,
                  lineHeight: '110%',
                  letterSpacing: '0.7px',
                  textTransform: 'uppercase',
                  color: '#F6F4F1',
                  margin: '0 0 10px 0'
                }}
              >
                FOR <span style={{ color: '#F9C962' }}>CINEMAS</span>
              </h2>

              <div className="bullets" style={{ display: 'flex', flexDirection: 'column',}}>
                <Bullet text="New audiences beyond traditional cinema-goers" />
                <Bullet text="Fresh programming formats" />
                <Bullet text="Cultural relevance in digital art" />
              </div>
            </div>

            {/* Gallery Column */}
            <div className="gallery-column" style={{ flex: '1 1 50%', maxWidth: '50%' }}>
              <LighthouseGallery images={cinemasImages} />
            </div>
          </div>

           {/* Divider Line */}
           <div 
             className="divider-line"
             style={{
               width: '100%',
               height: '1px',
               background: '#F6F4F1',
               margin: '20px 0', // Reduced margin
               opacity: 0.5
             }}
           />

          {/* ==================================
              BLOCK 2: FOR GAME RIGHT-HOLDERS
             ================================== */}
          <div className="content-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', width: '100%', flexWrap: 'wrap' }}>
            {/* Text Column */}
            <div className="text-column" style={{ flex: '1 1 400px' }}>
               <h2 
                className="section-header"
                style={{
                  fontFamily: 'Garet, Inter, sans-serif',
                  fontSize: 'clamp(32px, 5vw, 54px)',
                  fontWeight: 850,
                  lineHeight: '110%',
                  letterSpacing: '0.7px',
                  textTransform: 'uppercase',
                  color: '#F6F4F1',
                  margin: '0 0 10px 0'
                }}
              >
                FOR <span style={{ color: '#F9C962' }}>GAME RIGHT-HOLDERS</span>
              </h2>

              <div className="bullets" style={{ display: 'flex', flexDirection: 'column',}}>
                <Bullet text="New audiences beyond traditional gaming spaces" />
                <Bullet text="Premium cinema venues for launches and events" />
                <Bullet text="Games presented as cultural works on the big screen" />
              </div>
            </div>

            {/* Gallery Column */}
            <div className="gallery-column" style={{ flex: '1 1 50%', maxWidth: '50%' }}>
              <LighthouseGallery images={gamesImages} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <div 
      className="bullet"
      style={{
        display: 'flex',
        padding: '10px 0', // Vertical padding only to align with text
        alignItems: 'center',
        gap: '10px',
        alignSelf: 'stretch'
      }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="18" 
        viewBox="0 0 24 18" 
        fill="none"
        style={{ flexShrink: 0 }}
      >
        <path d="M23.5605 7.94104C24.1465 8.52675 24.1465 9.47794 23.5605 10.0636L16.0602 17.5607C15.4742 18.1464 14.5226 18.1464 13.9366 17.5607C13.3507 16.975 13.3507 16.0238 13.9366 15.4381L18.8775 10.4994L1.50007 10.4994C0.670345 10.4994 0 9.82936 0 9C0 8.17064 0.670345 7.50059 1.50007 7.50059L18.8775 7.50059L13.9366 2.56189C13.3507 1.97618 13.3507 1.02499 13.9366 0.439281C14.5226 -0.146427 15.4742 -0.146427 16.0602 0.439281L23.5605 7.93635V7.94104Z" fill="#F9C962"/>
      </svg>
      <p 
        style={{
          color: '#F6F4F1',
          fontFamily: 'Inter, sans-serif',
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '1.4',
          margin: 0
        }}
      >
        {text}
      </p>
    </div>
  );
}
