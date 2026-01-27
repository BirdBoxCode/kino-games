"use client";

export function PartnersSection() {
    // Placeholder partners
    const partners = ["Cinemas Deluxe", "Indie Game Co", "A24 Games", "Retro Arcade", "Film Institute", "Neon Future"];
  
    return (
      <section className="py-12 bg-kino-black overflow-hidden border-b border-white/5 relative z-10">
        <div className="absolute inset-0 bg-white/2 pointer-events-none" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <div key={i} className="mx-12">
              <span className="font-syne font-bold text-2xl md:text-4xl text-white/20 uppercase tracking-tighter">
                {partner}
              </span>
            </div>
          ))}
        </div>
        
        {/* Tailwind Custom Class needed for marquee in styles, or inline style */}
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>
    );
  }
