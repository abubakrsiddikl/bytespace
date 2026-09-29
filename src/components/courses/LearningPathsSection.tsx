import { SectionHeading } from "../shared/SectionHeading";
import { LEARNING_PATHS } from "./learning-paths";
import { LearningPathCard } from "./LearningPathCard";

;

// "Explore Diverse Learning Paths" section with category cards
export function LearningPathsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
      <SectionHeading
        title="Explore Diverse Learning Paths at Bytespace"
        description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {LEARNING_PATHS.map((path) => (
          <LearningPathCard key={path.id} path={path} />
        ))}
      </div>
    </section>
  );
}
