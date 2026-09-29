import { cn } from "@/lib/utils";

interface CylinderShapeProps {
  className?: string;
}

// White cylinder with a light gray top
export function CylinderShape({ className }: CylinderShapeProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 70 110"
      className={cn("drop-shadow-lg", className)}
    >
      {/* Body */}
      <path d="M5 22 V82 A30 14 0 0 0 65 82 V22 Z" className="fill-white" />
      {/* Top face */}
      <ellipse cx="35" cy="22" rx="30" ry="14" className="fill-slate-200" />
    </svg>
  );
}
