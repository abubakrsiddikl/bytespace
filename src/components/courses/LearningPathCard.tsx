import Link from "next/link";
import type { LearningPath } from "@/types/course.type";

interface LearningPathCardProps {
  path: LearningPath;
}

// Single category card with a lime icon circle and label
export function LearningPathCard({ path }: LearningPathCardProps) {
  const Icon = path.icon;

  return (
    <Link
      href={"#"}
      className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-5 transition-shadow hover:shadow-md"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 text-slate-900">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-xs font-medium text-slate-700">{path.label}</span>
    </Link>
  );
}
