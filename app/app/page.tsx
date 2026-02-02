import { HeroSection } from "../components/landing/HeroSection";
import { SectionWhy } from "../components/landing/SectionWhy";
import { WhyGamesSection } from "../components/landing/WhyGamesSection";
import { HowItWorksSection } from "../components/landing/HowItWorksSection";
import { BusinessModelSection } from "../components/landing/BusinessModelSection";
import { PartnersSection } from "../components/landing/PartnersSection";
import { ContactSection } from "../components/landing/ContactSection";
import { CinematicScrollContainer } from "../components/landing/CinematicScrollContainer";

export default function Home() {
  return (
    <main className="min-h-screen bg-kino-black text-kino-silver selection:bg-kino-red selection:text-white">
      <CinematicScrollContainer>
        <HeroSection />
        <SectionWhy />
        <WhyGamesSection />
        <HowItWorksSection />
        <BusinessModelSection />
        <PartnersSection />
        <ContactSection />
      </CinematicScrollContainer>
    </main>
  );
}
