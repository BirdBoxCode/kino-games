"use client";

import { motion } from "framer-motion";
import { FilmstripGallery } from "./FilmstripGallery";
import { LightSweep, contentVariants } from "./ProjectorReveal";

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
        display: "flex",
        padding: "80px min(80px, 5%)", // Reduced top padding
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "15px", // Reduced gap
        alignSelf: "stretch",
        position: "relative",
        overflow: "hidden",
        height: "100vh", // Enforce full viewport height
        minHeight: "800px",
        // Background from requirements
        backgroundImage: "url(/Lobby.png)", // Updated background image
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "lightgray", // fallback
      }}
    >
      {/* Overlay Darker */}
      <div
        className="overlay-darker"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(82deg, rgba(0, 0, 0, 0.36) 48.86%, rgba(142, 142, 142, 0.00) 72.57%)",
          zIndex: 1,
          pointerEvents: "none",
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
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1440px", // Matches Navbar
          margin: "0 auto",
        }}
      >


        {/* Content Wrapper for BOTH blocks */}
        <div
          className="content"
          style={{
            display: "flex",
            width: "1280px",
            maxWidth: "100%",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "5px",
            position: "relative" // for LightSweep
          }}
        >
          <LightSweep />
          
          {/* =======================
              BLOCK 1: FOR CINEMAS
             ======================= */}
          {/* =======================
              BLOCK 1: FOR CINEMAS
             ======================= */}
          <div
            className="content-row"
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "40px",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {/* Text Column - Now contains Gallery too */}
            <div className="text-column" style={{ flex: "1 1 500px", maxWidth: "100%" }}>
              <motion.h3
                variants={contentVariants}
                className="section-header"
                style={{
                  fontFamily: "Garet, Inter, sans-serif",
                  fontSize: "32px",
                  fontWeight: 850,
                  lineHeight: "110%",
                  letterSpacing: "0.7px",
                  textTransform: "uppercase",
                  color: "#F6F4F1",
                  margin: "0 0 10px 0",
                }}
              >
                FOR <span style={{ color: "#F9C962" }}>CINEMAS</span>
              </motion.h3>

              <div
                className="bullets"
                style={{ 
                  display: "flex", 
                  flexDirection: "column",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(246, 244, 241, 0.1)",
                  borderRadius: "24px",
                  padding: "32px",
                  gap: "0px",
                  width: "100%"
                }}
              >
                <Bullet text="New audiences beyond traditional cinema-goers" />
                <Bullet text="Fresh programming formats" />
                <Bullet text="Cultural relevance in digital art" />
              </div>
              
              {/* Gallery positioned directly under bullets */}
              <motion.div
                variants={contentVariants}
                style={{ width: "100%" }}
              >
                <FilmstripGallery images={cinemasImages} />
              </motion.div>
            </div>
            
            {/* Spacer / Empty Column on Desktop if we want to retain the 'side' look, 
                but user asked for stacking. Actually, user likely meant stacking the *gallery* under the bullets,
                but keeping the two main blocks (Cinemas vs Games) distinct?
                Re-reading: "For both content blocks... move the thumbnail strip so it sits directly UNDER the bullet list panel"
                And: "Desktop (lg+): Use a 2-column layout per block: left column: heading + bullet list card, right column: filmstrip gallery" -> WAIT.
                The previous request said "Desktop: 2-column layout... Right column: filmstrip gallery".
                The NEW request says: "move the thumbnail strip so it sits directly UNDER the bullet list panel... not to the side."
                
                This creates a contradiction or a change of heart.
                "move the thumbnail strip so it sits directly UNDER the bullet list panel (the grey/blur box), not to the side."
                "Thumbnail strip must match the exact width of the grey bullet panel."
                
                This implies a Vertical Stack for each block:
                [ Heading ]
                [ Bullet Box ]
                [ Filmstrip ]
                
                And then likely these blocks are arranged on the page.
                Given the space constraints and "responsive 2-column (desktop)", maybe the user means the two BLOCKS (Cinemas vs Games) should be side-by-side?
                No, they are usually separate sections. 
                
                The user provided a screenshot (which I can't see but description says "match style").
                
                Let's assume the structure for *each* block is:
                <BlockContainer>
                  <Heading />
                  <BulletPanel />
                  <Filmstrip />
                </BlockContainer>
                
                And the page layout puts these blocks... where?
                In the previous code, they were `content-row` (flex).
                The previous code had `Text Column` and `Gallery Column`.
                
                I will consolidate to a single column per block.
                And then maybe lay out the two blocks side-by-side on desktop?
                The original design usually had them stacked vertically with a divider.
                
                "Desktop (lg+): Use a 2-column layout per block..." -> This was the OLD request.
                The NEW request (Step 203) overrides it: "move the thumbnail strip so it sits directly UNDER the bullet list panel... not to the side."
                
                So, single column for the content of the block.
                But what about the page layout?
                If I stack everything vertically, it might be too tall.
                However, if I put the two blocks side-by-side (Cinemas Left, Games Right), that fits the "2-column" idea but applies it to the blocks themselves.
                
                Let's stick to the safe bet:
                Cinemas Block (Top) -> Stacked Content
                Divider
                Games Block (Bottom) -> Stacked Content
                
                Wait, if I do that, the "flex-wrap" container might look empty on the right if I just remove the gallery column.
                The user said "For both content blocks... move the thumbnail strip so it sits directly UNDER the bullet list panel".
                
                So I will perform the merge as shown in my code block above.
                I will remove the separate `gallery-column`.
             */}
             
             {/* Right side image or decoration? The user didn't specify what goes on the right if the gallery moves. 
                 If the gallery moves under the text, the right side is empty.
                 Maybe the user wants the content to be centered or wider?
                 "The thumbnail strip must match the exact width of the grey bullet panel."
                 
                 I'll just let the `text-column` expand or center.
                 I'll remove the `gallery-column` entirely.
              */}
          </div>

          {/* Divider Line */}
          <motion.div
            variants={contentVariants}
            className="divider-line"
            style={{
              width: "100%",
              height: "1px",
              background: "#F6F4F1",
              margin: "20px 0", 
              opacity: 0.5,
            }}
          />

          {/* ==================================
              BLOCK 2: FOR GAME RIGHT-HOLDERS
             ================================== */}
          <div
            className="content-row"
            style={{
              display: "flex",
              alignItems: "flex-start", // changed from center to flex-start
              justifyContent: "space-between",
              gap: "40px",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {/* Text Column - Now contains Gallery too */}
            <div className="text-column" style={{ flex: "1 1 500px", maxWidth: "100%" }}>
              <motion.h3
                variants={contentVariants}
                className="section-header"
                style={{
                  fontFamily: "Garet, Inter, sans-serif",
                  fontSize: "32px",
                  fontWeight: 850,
                  lineHeight: "110%",
                  letterSpacing: "0.7px",
                  textTransform: "uppercase",
                  color: "#F6F4F1",
                  margin: "0 0 10px 0",
                }}
              >
                FOR <span style={{ color: "#F9C962" }}>GAME RIGHT-HOLDERS</span>
              </motion.h3>

              <div
                className="bullets"
                style={{ 
                  display: "flex", 
                  flexDirection: "column",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(246, 244, 241, 0.1)",
                  borderRadius: "24px",
                  padding: "32px",
                  gap: "0px",
                  width: "100%"
                }}
              >
                <Bullet text="New audiences beyond traditional gaming spaces" />
                <Bullet text="Premium cinema venues for launches and events" />
                <Bullet text="Games presented as cultural works on the big screen" />
              </div>
              
               {/* Gallery positioned directly under bullets */}
              <motion.div
                variants={contentVariants}
                style={{ width: "100%" }}
              >
                <FilmstripGallery images={gamesImages} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <motion.div
      variants={contentVariants}
      className="bullet"
      style={{
        display: "flex",
        padding: "10px 0", // Vertical padding only to align with text
        alignItems: "center",
        gap: "10px",
        alignSelf: "stretch",
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
        <path
          d="M23.5605 7.94104C24.1465 8.52675 24.1465 9.47794 23.5605 10.0636L16.0602 17.5607C15.4742 18.1464 14.5226 18.1464 13.9366 17.5607C13.3507 16.975 13.3507 16.0238 13.9366 15.4381L18.8775 10.4994L1.50007 10.4994C0.670345 10.4994 0 9.82936 0 9C0 8.17064 0.670345 7.50059 1.50007 7.50059L18.8775 7.50059L13.9366 2.56189C13.3507 1.97618 13.3507 1.02499 13.9366 0.439281C14.5226 -0.146427 15.4742 -0.146427 16.0602 0.439281L23.5605 7.93635V7.94104Z"
          fill="#F9C962"
        />
      </svg>
      <p
        style={{
          color: "#F6F4F1",
          fontFamily: "Inter, sans-serif",
          fontSize: "18px",
          fontWeight: 400,
          lineHeight: "1.4",
          margin: 0,
        }}
      >
        {text}
      </p>
    </motion.div>
  );
}
