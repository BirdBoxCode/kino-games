export function HowItWorksSection() {
    const steps = [
      {
        id: "01",
        title: "Curate",
        description: "We select games with strong narrative and visual depth, optimised for the big screen experience."
      },
      {
        id: "02",
        title: "Adapt",
        description: "We tailor the gameplay for a seated audience, turning players into performers and viewers into participants."
      },
      {
        id: "03",
        title: "Showcase",
        description: "We partner with historic venues to host one-night-only interactive screenings."
      }
    ];
  
    return (
      <section className="min-h-screen flex flex-col justify-center py-32 bg-kino-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-20 text-center">
            <h2 className="font-syne font-bold text-3xl text-kino-silver uppercase tracking-widest mb-2">Process</h2>
            <div className="h-0.5 w-12 bg-kino-red mx-auto"></div>
          </div>
  
          <div className="grid md:grid-cols-3 gap-12 relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/10 -z-10" />
  
            {steps.map((step) => (
              <div key={step.id} className="group relative bg-kino-black pt-8">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 w-12 h-12 bg-kino-black border border-white/20 flex items-center justify-center rounded-full z-10 group-hover:border-kino-blue transition-colors">
                    <span className="font-syne text-xs text-white/50">{step.id}</span>
                </div>
                
                <div className="p-8 border border-white/5 hover:border-kino-blue/30 transition-all duration-300 h-full bg-linear-to-b from-white/5 to-transparent">
                  <h3 className="font-syne font-bold text-2xl text-white mb-4 group-hover:text-kino-blue transition-colors">{step.title}</h3>
                  <p className="font-manrope text-white/60 font-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
