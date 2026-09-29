import { cn } from "@/lib/utils";

interface RevenueCardProps {
  label: string;
  period: string;
  amount: string;
  // Optional small lime badge, e.g. "+12%"
  badge?: string;
  className?: string;
}

// Blue money card used in the creator section
export function RevenueCard({ label, period, amount, badge, className }: RevenueCardProps) {
  return (
    <div
      className={cn(
        "w-36 rounded-lg bg-blue-600 p-3 text-white shadow-lg sm:w-40",
        className
      )}
    >
      <p className="text-[10px] font-medium">{label}</p>
      <p className="text-[8px] text-white/70">{period}</p>
      <p className="mt-1 text-lg font-bold">{amount}</p>
      {badge && (
        <span className="mt-1 inline-block rounded bg-lime-300 px-1.5 py-0.5 text-[8px] font-bold text-slate-900">
          {badge}
        </span>
      )}
    </div>
  );
}
