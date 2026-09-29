import Link from "next/link";
import { Button } from "@/components/ui/button";

import { CylinderShape } from "@/components/shared/CylinderShape";
import { FloatingShape } from "@/components/shared/FloatingShape";
import { TriangleShape } from "@/components/shared/TriangleShape";
import { GridBackground } from "../Decorations";
import { GradientBlob } from "../shared/GradientBlob";
import { Squiggle } from "../shared/Squiggle";
import { Reveal } from "../shared/Reveal";


interface CreatorCtaSectionProps {
  // Where the "Join as Creator" button goes
  href?: string;
}

// Blue call-to-action banner for new creators
export function CreatorCtaSection({ href = "/creator/register" }: CreatorCtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-blue-700 py-16 sm:py-20">
      {/* Background: grid + animated lime glow */}
      <GridBackground />
      <GradientBlob color="lime" className="-bottom-40 left-1/4 h-80 w-80 opacity-60" />
      <GradientBlob color="lime" className="-right-24 -top-24 h-72 w-72 animation-delay-4000 opacity-50" />

      {/* Decorative shapes (same lime squiggle as the other sections) */}
      <FloatingShape animation="wiggle" className="-top-2 left-3 sm:left-10">
        <Squiggle className="h-16 w-8 sm:h-28 sm:w-14" />
      </FloatingShape>

      <FloatingShape
        animation="float"
        className="right-24 top-8 hidden rotate-12 sm:block lg:right-40"
        delayClassName="animation-delay-2000"
      >
        <TriangleShape className="h-20 w-20" />
      </FloatingShape>

      <FloatingShape animation="float" className="right-4 top-2 hidden rotate-12 sm:block lg:right-12">
        <CylinderShape className="h-28 w-20" />
      </FloatingShape>

      <FloatingShape animation="wiggle" className="bottom-2 left-0 rotate-90 sm:bottom-6 sm:left-4">
        <Squiggle className="h-16 w-8 sm:h-28 sm:w-14" />
      </FloatingShape>

      <FloatingShape
        animation="wiggle"
        className="-bottom-2 right-4 -rotate-45 sm:bottom-2 sm:right-12"
        delayClassName="animation-delay-2000"
      >
        <Squiggle className="h-16 w-8 sm:h-28 sm:w-14" />
      </FloatingShape>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="mx-auto max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-xs leading-relaxed text-white/80 sm:text-sm">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          <Button
            asChild
            className="mt-8 rounded-full bg-lime-300 px-6 text-sm font-semibold text-slate-900 transition-transform hover:scale-105 hover:bg-lime-200"
          >
            <Link href={href}>Join as Creator</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
