import { HeroSection } from "../components/landing/HeroSection";
import { SectionWhy } from "../components/landing/SectionWhy";
import { SectionGamesCinemas } from "../components/landing/SectionGamesCinemas";
import { SectionHow } from "../components/landing/SectionHow";
import { CinematicScrollContainer } from "../components/landing/CinematicScrollContainer";

export default function Home() {
  return (
    <main className="min-h-screen bg-kino-black text-kino-silver selection:bg-kino-red selection:text-white">
      <CinematicScrollContainer>
        <HeroSection />
        <SectionWhy />
        <SectionGamesCinemas />
        <SectionHow />
      </CinematicScrollContainer>
    </main>
  );
}
