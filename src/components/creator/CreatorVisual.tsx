import Image from "next/image";

import { RevenueCard } from "@/components/creator/RevenueCard";
import { Squiggle } from "@/components/shared/Squiggle";
import { HappyStudentsCard } from "../FloatingCards";


const PERSON_IMAGE = "/asset/hero-person2.png";

// Left side of the "Create & Manage Courses" section
export function CreatorVisual() {
  return (
    <div className="relative mx-auto h-[400px] w-full max-w-md sm:h-[440px]">
      <Squiggle className="absolute right-6 top-[22%] h-24 w-12 animate-wiggle sm:right-10" />

      <Image
        src={PERSON_IMAGE}
        alt="Course creator holding a tablet"
        width={340}
        height={420}
        className="absolute bottom-0 left-1/2 h-[92%] w-auto -translate-x-1/2 object-contain"
      />

      <RevenueCard
        label="Total Revenue"
        period="July 18"
        amount="$120.29"
        className="absolute left-0 top-6 animate-float"
      />
      <RevenueCard
        label="Year to Date"
        period="2023"
        amount="$1,200.38"
        badge="+12%"
        className="absolute left-0 top-[38%] animate-float animation-delay-2000"
      />

      <HappyStudentsCard className="absolute bottom-6 right-0 animate-float animation-delay-4000" />
    </div>
  );
}
