"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VISIBLE_CATEGORY_COUNT } from "./categories";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

// Pill list used to filter courses. Shows a limited number of pills until "+ More" is clicked.
export function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? categories : categories.slice(0, VISIBLE_CATEGORY_COUNT);

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {visible.map((category) => {
        const isActive = category === active;

        return (
          <Button
            key={category}
            type="button"
            variant="outline"
            size="sm"
            onClick={() => onChange(category)}
            className={cn(
              "h-7 rounded-full border-slate-200 px-3 text-[11px] font-medium text-slate-600",
              isActive &&
                "border-lime-300 bg-lime-300 text-slate-900 hover:bg-lime-300"
            )}
          >
            {category}
          </Button>
        );
      })}

      {/* Toggle for the hidden pills */}
      {categories.length > VISIBLE_CATEGORY_COUNT && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setExpanded((prev) => !prev)}
          className="h-7 gap-1 rounded-full px-3 text-[11px] font-semibold text-blue-600 hover:bg-transparent hover:text-blue-700"
        >
          {!expanded && <Plus className="h-3 w-3" />}
          {expanded ? "Show less" : "More"}
        </Button>
      )}
    </div>
  );
}
