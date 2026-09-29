import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ShapeAnimation = "float" | "wiggle";

interface FloatingShapeProps {
  children: ReactNode;
  // Position and static rotation of the shape, e.g. "left-4 top-6 rotate-90"
  className?: string;
  animation?: ShapeAnimation;
  // Optional delay class so shapes do not move in sync, e.g. "animation-delay-2000"
  delayClassName?: string;
}

const ANIMATION_CLASSES: Record<ShapeAnimation, string> = {
  float: "animate-float",
  wiggle: "animate-wiggle",
};

// Positions a decorative shape and animates it.
// The animation is on the inner element so it never overrides the wrapper rotation.
export function FloatingShape({
  children,
  className,
  animation = "float",
  delayClassName,
}: FloatingShapeProps) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute", className)}>
      <div className={cn(ANIMATION_CLASSES[animation], delayClassName)}>{children}</div>
    </div>
  );
}
