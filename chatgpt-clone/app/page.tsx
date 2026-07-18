import { AmbientMeshBackground } from "@/components/landingpage/background/AmbientMeshBackground";
import { FloatingNavigationBar } from "@/components/landingpage/layout/FloatingNavigationBar";
import { CinematicHeroSection } from "@/components/landingpage/hero/CinematicHeroSection";
import { BentoFeatureGrid } from "@/components/landingpage/features/BentoFeatureGrid";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-primary/30 selection:text-primary-foreground">
      <AmbientMeshBackground />
      <FloatingNavigationBar />
      
      <div className="flex flex-col gap-12 pb-24">
        <CinematicHeroSection />
        <BentoFeatureGrid />
        
        {/* Additional components like Pricing, Enterprise, Footer would orchestrate here following the same BlurReveal modular pattern */}
      </div>
    </main>
  );
}