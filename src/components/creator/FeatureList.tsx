import { Check } from "lucide-react";
import type { Feature } from "@/types";

interface FeatureListProps {
  features: Feature[];
}

// Checklist with blue check circles
export function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="space-y-3">
      {features.map((feature) => (
        <li key={feature.id} className="flex items-center gap-3 text-xs text-slate-700 sm:text-sm">
          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-600">
            <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
          </span>
          {feature.label}
        </li>
      ))}
    </ul>
  );
}
