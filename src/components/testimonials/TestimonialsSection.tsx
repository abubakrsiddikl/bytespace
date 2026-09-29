
import { SplitSectionHeading } from "@/components/shared/SplitSectionHeading";
import { TestimonialGrid } from "@/components/testimonials/TestimonialGrid";
import { GradientBlob } from "../shared/GradientBlob";
import { Reveal } from "../shared/Reveal";
import { TESTIMONIALS } from "./testimonials";


// "Discover What Our Community Is Saying" section
export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      {/* Animated background blobs */}
      <GradientBlob color="lime" className="-right-24 top-32 h-[28rem] w-[28rem]" />
      <GradientBlob color="blue" className="-left-32 bottom-0 h-96 w-96 animation-delay-2000" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SplitSectionHeading
            title="Discover What Our Community Is Saying"
            description="At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators."
          />
        </Reveal>

        <div className="mt-10">
          <TestimonialGrid testimonials={TESTIMONIALS} />
        </div>
      </div>
    </section>
  );
}
