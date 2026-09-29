import { cn } from "@/lib/utils";

interface GradientBlobProps {
  color: "lime" | "blue";
  // Use for size, position and animation delay, e.g. "-left-24 top-0 h-96 w-96"
  className?: string;
}

// Soft animated background blob that drifts and slowly changes color
export function GradientBlob({ color, className }: GradientBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full animate-blob",
        color === "lime" ? "blob-lime" : "blob-blue",
        className
      )}
    />
  );
}
