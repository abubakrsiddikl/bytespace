import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
}

// Small course category badge (UI/UX Design)
export function CourseBadgeCard({ className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-purple-500 bg-white px-3 py-1.5 shadow-md",
        className
      )}
    >
      <p className="text-xs font-semibold text-slate-800">UI/UX Design</p>
      <p className="text-[10px] text-slate-500">12 Courses · 1,400+ Students</p>
    </div>
  );
}

// Learning progress card with a percentage and progress bar
export function LearningProgressCard({ className }: CardProps) {
  return (
    <div className={cn("w-36 rounded-xl bg-white p-3 shadow-lg", className)}>
      <p className="text-[10px] font-medium text-slate-500">Learning Progress</p>
      <p className="text-2xl font-bold text-slate-900">55%</p>
      <Progress
        value={55}
        className="mt-1 h-1.5 bg-slate-100 [&>div]:bg-yellow-400"
      />
    </div>
  );
}

// Happy students card with avatar stack and rating
export function HappyStudentsCard({ className }: CardProps) {
  const initials = [
  "/asset/student/s1.png",
  "/asset/student/s3.png",
  "/asset/student/s1.png",
  "/asset/student/s3.png",
  "/asset/student/s5.png",

];;

  return (
    <div className={cn("w-40 rounded-xl bg-white p-3 shadow-lg", className)}>
      <p className="text-[10px] font-semibold text-slate-800">Happy Students</p>
      <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-500">
        <span>4.5</span>
        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
      </div>
      <div className="mt-2 flex items-center">
        {initials.map((image) => (
          <Avatar
            key={image}
            className="-ml-1.5 h-6 w-6 border-2 border-white first:ml-0"
          >
             <AvatarImage src={image} alt="" />
            {/* <AvatarFallback className="bg-blue-100 text-[10px] text-blue-700">
              {image}
            </AvatarFallback> */}
          </Avatar>
        ))}
        {/* <span className="ml-1.5 rounded-full bg-yellow-400 px-1.5 py-0.5 text-[9px] font-bold text-blue-900">
          +5K
        </span> */}
      </div>
    </div>
  );
}
