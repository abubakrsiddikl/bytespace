import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionIntroProps {
  title: string;
  description: ReactNode;
  // Optional extra content below the text (stats, checklist...)
  children?: ReactNode;
  className?: string;
}

// Left-aligned title + description block (SectionHeading is the centered version)
export function SectionIntro({ title, description, children, className }: SectionIntroProps) {
  return (
    <div className={cn("max-w-lg", className)}>
      <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      <p className="mt-4 text-xs leading-relaxed text-slate-500 sm:text-sm">
        {description}
      </p>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
