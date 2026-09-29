import { CoursesSection } from "@/components/courses/CoursesSection";
import { LearningPathsSection } from "@/components/courses/LearningPathsSection";
import { CreateManageSection } from "@/components/creator/CreateManageSection";
import { GrowthSection } from "@/components/growth/GrowthSection";
import { HeroSection } from "@/components/HeroSection";
import { PartnerLogos } from "@/components/PartnerLogos";

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
    </main>
  );
}
