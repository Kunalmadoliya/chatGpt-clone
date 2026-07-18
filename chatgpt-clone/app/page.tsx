import { AmbientMeshBackground } from "@/components/landingpage/background/AmbientMeshBackground";
import { FloatingNavigationBar } from "@/components/landingpage/layout/FloatingNavigationBar";
import { CinematicHeroSection } from "@/components/landingpage/hero/CinematicHeroSection";
import { BentoFeatureGrid } from "@/components/landingpage/features/BentoFeatureGrid";
import { PricingSection } from "@/components/landingpage/pricing/PricingSection";
import { TestimonialsSection } from "@/components/landingpage/testimonials/TestimonialsSection";
import { FAQSection } from "@/components/landingpage/faq/FAQSection";
import { Footer } from "@/components/landingpage/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-primary/30 selection:text-primary-foreground">
      <AmbientMeshBackground />
      <FloatingNavigationBar />
      
      <div className="flex flex-col gap-12">
        <CinematicHeroSection />
        <BentoFeatureGrid />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
}