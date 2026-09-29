import { GradientBlob } from "@/components/shared/GradientBlob";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { GrowthVisual } from "@/components/growth/GrowthVisual";
import { StatsRow } from "@/components/growth/StatsRow";
import { STATS } from "./stats";


// "Your Path to Professional Growth" section
export function GrowthSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      {/* Animated background blobs */}
      <GradientBlob color="lime" className="-left-24 -top-24 h-96 w-96" />
      <GradientBlob color="blue" className="-right-24 top-10 h-96 w-96 animation-delay-2000" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <SectionIntro
            title="Your Path to Professional Growth Starts Here!"
            description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
          >
            <StatsRow stats={STATS} />
          </SectionIntro>
        </Reveal>

        <Reveal delay={150}>
          <GrowthVisual />
        </Reveal>
      </div>
    </section>
  );
}
