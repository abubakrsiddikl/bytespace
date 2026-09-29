import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/Decorations";

// 404 page: Next.js shows this automatically for any unknown route
export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-blue-700 px-4 py-16 text-center">
      {/* Same faint grid as the hero section */}
      <GridBackground />

      <div className="relative z-10 flex flex-col items-center">
        {/* Big "404" that fades from lime into the blue background */}
        <p
          aria-hidden="true"
          className="bg-gradient-to-b from-lime-300 via-lime-300/70 to-transparent bg-clip-text text-[9rem] font-extrabold leading-none text-transparent sm:text-[14rem] lg:text-[18rem]"
        >
          404
        </p>

        {/* Negative margin pulls the heading up over the faded part of "404" */}
        <h1 className="-mt-10 max-w-xl text-3xl font-bold leading-tight text-white sm:-mt-20 sm:text-4xl md:max-w-2xl md:text-5xl lg:-mt-28">
          <span className="sr-only">Error 404. </span>
          The page you are looking for doesn&rsquo;t exist
        </h1>

        <p className="mt-5 text-xs text-white/80 sm:text-sm">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Button
          asChild
          className="mt-6 rounded-full bg-lime-300 px-6 text-sm font-semibold text-slate-900 transition-transform hover:scale-105 hover:bg-lime-200"
        >
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}
