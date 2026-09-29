import { cn } from "@/lib/utils";

interface SplitSectionHeadingProps {
  title: string;
  description: string;
  className?: string;
}

// Title on the left and description on the right (stacked on small screens)
export function SplitSectionHeading({
  title,
  description,
  className,
}: SplitSectionHeadingProps) {
  return (
    <div className={cn("grid items-center gap-4 lg:grid-cols-2 lg:gap-12", className)}>
      <h2 className="max-w-sm text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">{description}</p>
    </div>
  );
}
