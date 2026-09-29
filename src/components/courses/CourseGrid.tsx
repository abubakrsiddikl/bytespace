import { CourseCard } from "@/components/courses/CourseCard";
import { Course } from "@/types/course.type";


interface CourseGridProps {
  courses: Course[];
}

// Responsive grid of course cards with dotted separators like the design
export function CourseGrid({ courses }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-slate-500">
        No courses found in this category yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3   sm:grid-cols-2 lg:grid-cols-3 ">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
