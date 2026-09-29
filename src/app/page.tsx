
import { CoursesSection } from "@/components/courses/CoursesSection";
import { LearningPathsSection } from "@/components/courses/LearningPathsSection";
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
    </main>
  );
}
