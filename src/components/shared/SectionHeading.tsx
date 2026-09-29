import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

// Reusable centered section title with an optional description
export function SectionHeading({ title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-xs text-slate-500 sm:text-sm">{description}</p>
      )}
    </div>
  );
}
