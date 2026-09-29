import { CountUp } from "@/components/shared/CountUp";
import type { Stat } from "@/types";

interface StatsRowProps {
  stats: Stat[];
}

// Row of animated numbers with labels
export function StatsRow({ stats }: StatsRowProps) {
  return (
    <dl className="flex items-center gap-8 sm:gap-10">
      {stats.map((stat) => (
        <div key={stat.id}>
          <dt className="sr-only">{stat.label}</dt>
          <dd className="text-xl font-semibold text-blue-700 sm:text-2xl">
            <CountUp end={stat.value} suffix={stat.suffix} />
          </dd>
          <p className="text-[11px] text-slate-500">{stat.label}</p>
        </div>
      ))}
    </dl>
  );
}
