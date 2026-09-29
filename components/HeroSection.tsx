


import { GridBackground, LimeSquiggle, WhiteRing, WhiteSquiggle } from "./Decorations";
import { HeroVisual } from "./HeroVisual";
import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";

// Full hero section: navbar + heading + search + illustration
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-blue-700">
      {/* Background layers */}
      <GridBackground />
      <LimeSquiggle />
      <WhiteRing />
      <WhiteSquiggle />

      <Navbar />

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
