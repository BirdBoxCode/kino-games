import { HeroSection } from "../components/landing/HeroSection";
import { SectionWhy } from "../components/landing/SectionWhy";
import { SectionGamesCinemas } from "../components/landing/SectionGamesCinemas";
import { SectionSimpleSetup } from "../components/landing/SectionSimpleSetup";
import { SectionHow } from "../components/landing/SectionHow";
import { SectionModel } from "../components/landing/SectionModel";
import { SectionPartners } from "../components/landing/SectionPartners";
import { CinematicScrollContainer } from "../components/landing/CinematicScrollContainer";

export default function Home() {
  return (
    <main className="min-h-screen bg-kino-black text-kino-silver selection:bg-kino-red selection:text-white">
      <CinematicScrollContainer>
        <HeroSection />
        <SectionWhy />
        <SectionGamesCinemas />
        <SectionHow />
        <SectionSimpleSetup />
        <SectionModel />
      </CinematicScrollContainer>
      
      <SectionPartners />
    </main>
  );
}
