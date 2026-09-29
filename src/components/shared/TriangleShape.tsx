import { cn } from "@/lib/utils";

interface TriangleShapeProps {
  className?: string;
}

// Rounded lime triangle. Color comes from text color, so override it with a text-* class.
export function TriangleShape({ className }: TriangleShapeProps) {
  const points = "50,14 90,84 10,84";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      fill="none"
      className={cn("text-lime-300 drop-shadow-md", className)}
    >
      {/* Thick stroke with round joins makes the corners soft */}
      <polygon
        points={points}
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinejoin="round"
      />
      {/* Thin light stroke gives a soft highlight */}
      <polygon
        points={points}
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="3"
        strokeLinejoin="round"
        transform="translate(-2 -2)"
      />
    </svg>
  );
}
