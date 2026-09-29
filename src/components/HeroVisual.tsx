import Image from "next/image";
import { CourseBadgeCard, HappyStudentsCard, LearningProgressCard } from "./FloatingCards";


// Bottom part of the hero: lime circle, person image and floating cards
export function HeroVisual() {
  return (
    <div className="relative mx-auto mt-10 h-72 w-full max-w-2xl sm:h-80 md:h-96">
      {/* Big lime circle behind the person */}
      <div
        aria-hidden="true"
        className="absolute bottom-[-50%] left-1/2 h-[120%] w-[85%] -translate-x-1/2 rounded-full bg-gradient-to-b from-lime-300 to-green-400"
      />

      {/* Hero person image: place your file at /public/images/hero-person.png */}
      <Image
        src="/asset/hero-person.png"
        alt="Smiling student holding a laptop"
        width={320}
        height={380}
        priority
        className="absolute bottom-0 left-1/2 h-full w-auto -translate-x-1/2 object-contain"
      />

      {/* Floating cards: hidden on very small screens to avoid overlap */}
      <CourseBadgeCard className="absolute left-2 top-4 hidden sm:block md:left-6" />
      <LearningProgressCard className="absolute right-0 top-16 hidden sm:block md:right-4" />
      <HappyStudentsCard className="absolute bottom-6 left-0 hidden sm:block md:left-2" />
    </div>
  );
}
