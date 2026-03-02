"use client";

import { useEffect } from "react";

// Maps section IDs to their cinematic index (matches navLinks in Navbar.tsx)
const CINEMATIC_HASH_MAP: Record<string, number> = {
  "about": 1,
  "how-it-works": 3,
  "our-model": 5,
};

/**
 * Reads window.location.hash on mount and fires the appropriate
 * cinematic-nav event so sections are reachable when navigating
 * from other pages (e.g. /privacy-policy -> /#about).
 */
export function HashNav() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    // Small delay to let the CinematicScrollContainer mount and register listeners
    const timer = setTimeout(() => {
      if (hash in CINEMATIC_HASH_MAP) {
        // Cinematic sections: jump to the correct cinematic index
        window.dispatchEvent(
          new CustomEvent("cinematic-nav", {
            detail: { index: CINEMATIC_HASH_MAP[hash], type: "cinematic" },
          })
        );
      } else if (hash === "partners") {
        // Partners is a normal section outside the cinematic container —
        // fire scroll-to-target so the cinematic system releases scroll lock first
        window.dispatchEvent(
          new CustomEvent("cinematic-nav", {
            detail: { type: "scroll-to-target", targetId: "partners" },
          })
        );
      } else if (hash === "contact") {
        const footer = document.querySelector("footer");
        if (footer) footer.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
