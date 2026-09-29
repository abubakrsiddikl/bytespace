import Image from "next/image";

import { Squiggle } from "@/components/shared/Squiggle";
import { CourseCard } from "../courses/CourseCard";
import { COURSES } from "../courses/courses";
import { LearningProgressCard } from "../FloatingCards";


// Transparent PNG: put your file at /public/images/growth-person.png
const PERSON_IMAGE = "/asset/hero-person.png";

// Right side of the "Professional Growth" section: course card, person, progress card, squiggle
export function GrowthVisual() {
  return (
    <div className="relative mx-auto h-[400px] w-full max-w-md sm:h-[460px]">
      {/* Squiggle sits behind the person */}
      <Squiggle className="absolute right-2 top-0 h-24 w-12 animate-wiggle sm:right-6" />

      {/* Course preview card (uses the first fake course) */}
      <div className="absolute left-0 top-4 w-52 animate-float overflow-hidden rounded-2xl bg-white shadow-xl sm:w-60">
        <CourseCard course={COURSES[0]} />
      </div>

      <Image
        src={PERSON_IMAGE}
        alt="Smiling instructor holding a laptop"
        width={360}
        height={440}
        className="absolute bottom-0 right-0 h-[85%] w-auto object-contain"
      />

      <LearningProgressCard className="absolute right-0 top-[40%] animate-float animation-delay-2000" />
    </div>
  );
}
