import { cn } from "@/lib/utils";

interface SquiggleProps {
  className?: string;
}

// Lime snake-like squiggle. Color comes from text color, so override it with a text-* class.
export function Squiggle({ className }: SquiggleProps) {
  // One S-curve path reused for the body and the highlight
  const path =
    "M30 8 C58 12 58 30 30 36 C2 42 2 60 30 66 C58 72 58 90 30 96 C12 100 12 110 30 114";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 122"
      fill="none"
      className={cn("pointer-events-none text-lime-300 drop-shadow-md", className)}
    >
      {/* Main thick body */}
      <path d={path} stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
      {/* Thin light stroke gives a soft 3D highlight */}
      <path
        d={path}
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="3"
        strokeLinecap="round"
        transform="translate(-2 -2)"
      />
    </svg>
  );
}
