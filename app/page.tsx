import AllGenres from "@/components/homepage/all-genres";
import HeroSection from "@/components/homepage/hero-section";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AllGenres />
      <div className="flex-1"></div>
    </main>
  );
}
