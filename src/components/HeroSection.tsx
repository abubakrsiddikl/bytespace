


import { GridBackground } from "./Decorations";
import { HeroVisual } from "./HeroVisual";
import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";
import { FloatingShape } from "./shared/FloatingShape";
import { GradientBlob } from "./shared/GradientBlob";
import { Squiggle } from "./shared/Squiggle";

// Full hero section: navbar + heading + search + illustration
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-blue-700">
      {/* Background layers */}
      <GridBackground />
      <FloatingShape animation="wiggle" className="left-4 top-28 hidden lg:block">
        {/* <div aria-hidden="true" className="h-32 w-10 rotate-12 rounded-full bg-lime-300" /> */}
            <Squiggle className="h-16 w-8 sm:h-28 sm:w-14" />
      </FloatingShape>
      <FloatingShape animation="float" className="bottom-10 left-6 hidden lg:block">
        <div aria-hidden="true" className="h-28 w-28 rounded-full border-[18px] border-white" />
      </FloatingShape>
      <FloatingShape animation="wiggle" className="bottom-16 right-8 hidden lg:block">
        <div aria-hidden="true" className="h-28 w-14 -rotate-12 rounded-full bg-white" />
      </FloatingShape>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-10 text-center sm:px-6 sm:pt-14 lg:px-8">
        <h1 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Get Access to Hundreds Courses Available
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-xs text-white/80 sm:text-sm">
          Unlock your creativity, gain valuable knowledge, and grow your business
          with our wide range of courses.
        </p>

        <div className="mt-8">
          <SearchBar />
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
