import { CreatorVisual } from "@/components/creator/CreatorVisual";
import { FeatureList } from "@/components/creator/FeatureList";
import { GradientBlob } from "@/components/shared/GradientBlob";

import { SectionIntro } from "@/components/shared/SectionIntro";
import { CREATOR_FEATURES } from "./features";
import { Reveal } from "@/components/shared/Reveal";

// "Create & Manage Courses Easily" section
export function CreateManageSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      {/* Animated background blobs */}
      <GradientBlob color="blue" className="-left-32 top-0 h-96 w-96" />
      <GradientBlob color="lime" className="-bottom-24 left-0 h-96 w-96 animation-delay-4000" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Text comes first on mobile, visual is moved to the left on large screens */}
        <Reveal>
          <SectionIntro
            title="Create & Manage Courses Easily."
            description={
              <>
                <strong className="font-semibold text-slate-800">ByteSpace</strong>{" "}
                supports individuals or entities in the creation, publication, and
                administration of educational courses.
              </>
            }
          >
            <FeatureList features={CREATOR_FEATURES} />
          </SectionIntro>
        </Reveal>

        <Reveal delay={150} className="lg:order-first">
          <CreatorVisual />
        </Reveal>
      </div>
    </section>
  );
}
