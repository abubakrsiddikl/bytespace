import { CoursesSection } from "@/components/courses/CoursesSection";
import { LearningPathsSection } from "@/components/courses/LearningPathsSection";
import { CreateManageSection } from "@/components/creator/CreateManageSection";
import { CreatorCtaSection } from "@/components/cta/CreatorCtaSection";
import { GrowthSection } from "@/components/growth/GrowthSection";
import { HeroSection } from "@/components/HeroSection";
import { PartnerLogos } from "@/components/PartnerLogos";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";

// Home page: hero + partner logos strip
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PartnerLogos />
      <CoursesSection />
      <LearningPathsSection />
      <GrowthSection />
      <CreateManageSection />
      <CreatorCtaSection />
      <TestimonialsSection />
    </main>
  );
}
