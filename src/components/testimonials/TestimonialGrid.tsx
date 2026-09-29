
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import type { Testimonial } from "@/types";
import { Reveal } from "../shared/Reveal";

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

// Responsive grid of testimonial cards, each one fades in with a small delay
export function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Reveal key={testimonial.id} delay={index * 150} className="h-full">
          <TestimonialCard testimonial={testimonial} />
        </Reveal>
      ))}
    </div>
  );
}
