import { HeroSection } from "../components/landing/HeroSection";
import { WhyGamesSection } from "../components/landing/WhyGamesSection";
import { HowItWorksSection } from "../components/landing/HowItWorksSection";
import { BusinessModelSection } from "../components/landing/BusinessModelSection";
import { PartnersSection } from "../components/landing/PartnersSection";
import { ContactSection } from "../components/landing/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-kino-black text-kino-silver selection:bg-kino-red selection:text-white">
      <HeroSection />
      <WhyGamesSection />
      <HowItWorksSection />
      <BusinessModelSection />
      <PartnersSection />
      <ContactSection />
    </main>
  );
}
