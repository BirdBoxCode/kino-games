import Image from "next/image";

export function WhyGamesSection() {
  return (
    <section className="relative py-24 px-4 bg-kino-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="z-10">
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-kino-silver mb-8 leading-tight">
            The Cinema Is <br/>
            <span className="text-kino-red">The Ultimate Console</span>
          </h2>
          <div className="space-y-6 text-kino-silver/80 font-manrope text-lg font-light leading-relaxed border-l border-kino-red/30 pl-6">
            <p>
              Video games are cultural masterpieces. They deserve to be experienced with the reverence of a film premiere, not just on a small monitor.
            </p>
            <p>
              Kino Games transforms historic cinemas into interactive arenas, curated for storytelling, art, and community. It’s not e-sports. It’s cinema.
            </p>
          </div>
        </div>

        {/* Visual Content - Placeholder for now using one of the uploaded images */}
        <div className="relative h-[600px] w-full bg-kino-gray rounded-sm overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
           {/* Using the second uploaded image */}
            <Image
              src="/hero/uploaded_image_1_1768817468630.jpg" 
              alt="Cinema Audience"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-linear-to-t from-black to-transparent w-full">
                <span className="font-syne text-kino-gold text-sm tracking-widest uppercase">Exhibit A</span>
            </div>
        </div>
      </div>
    </section>
  );
}
