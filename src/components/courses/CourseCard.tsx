import Image from "next/image";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/types/course.type";

interface CourseCardProps {
  course: Course;
}

// Placeholder student avatars
const AVATAR_INITIALS = [
  "/asset/student/s1.png",
  "/asset/student/s3.png",
  "/asset/student/s1.png",
  "/asset/student/s3.png",
  "/asset/student/s5.png",

];

// Small dark chip placed on top of the course image
function StatChip({ label }: { label: string }) {
  return (
    <span className="rounded bg-[#F6F6F699] px-1.5 py-0.5 text-[10px] font-medium text-[#4F4F4F] backdrop-blur-sm">
      {label}
    </span>
  );
}

// Single course card: image with stats, title, rating, instructor, meta row and price
export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="flex flex-col gap-3 bg-white p-3  border border-[#CED0D3] rounded-[24px]">
      {/* Image with stat chips overlay */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg ">
        <Image
          src={course.image}
          alt={course.title}
          // fill
          // sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          width={341}
          height={195}
          className="object-cover"
        />
        <div className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1">
          <StatChip label={`${course.lessons} Lessons`} />
          <StatChip label={course.duration} />
          <StatChip label={`${course.comments} Comments`} />
        </div>
      </div>

      {/* Title + rating */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="line-clamp-1 text-sm font-bold text-slate-900">
          {course.title}
        </h3>
        <span className="flex shrink-0 items-center gap-1 text-[11px] text-slate-500">
          {course.rating}
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        </span>
      </div>

      <p className="-mt-2 text-[10px] text-blue-600"><span className="text-[#4F4F4F]">by </span>{course.instructor}</p>

      {/* Level, students avatars and student count */}
      <div className="flex items-center justify-between gap-2">
        <Badge
          variant="outline"
          className="rounded-md text-[10px] font-medium text-slate-600"
        >
          {course.level}
        </Badge>

        <div className="flex items-center">
          {AVATAR_INITIALS.map((image, index) => (
            <Avatar
              key={`${image}-${index}`}
              className="-ml-1.5 h-8 w-8 border-2 border-white first:ml-0"
            >
              <AvatarImage src={image} alt="" />
              {/* <AvatarFallback className="bg-blue-100 text-[9px] text-blue-700" /> */}
            </Avatar>
          ))}
          {/* <span className="ml-1.5 rounded-full bg-lime-300 px-1.5 py-0.5 text-[9px] font-bold text-slate-900">
            {course.students}
          </span> */}
        </div>
      </div>

      {/* Price */}
      <p className="text-sm font-bold text-blue-700">
        ${course.price}
        <span className="ml-1 text-[10px] font-normal text-slate-400">
          {course.priceUnit}
        </span>
      </p>
    </article>
  );
}
