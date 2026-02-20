import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ServicesSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
