"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CategoryFilter } from "@/components/courses/CategoryFilter";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { COURSE_CATEGORIES, FEATURED_CATEGORY } from "./categories";
import { COURSES } from "./courses";

// Courses section: heading, category filter and course grid
export function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState(FEATURED_CATEGORY);

  // "Featured" shows everything, other pills filter by category
  const filteredCourses = useMemo(
    () =>
      activeCategory === FEATURED_CATEGORY
        ? COURSES
        : COURSES.filter((course) => course.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeading
        title="Discover Your Passion, Build Your Skills"
        description="At Bytespace Courses, we bring you life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />

      <div className="mt-8">
        <CategoryFilter
          categories={COURSE_CATEGORIES}
          active={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      <div className="mt-10">
        <CourseGrid courses={filteredCourses} />
      </div>
    </section>
  );
}
