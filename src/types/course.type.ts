// Single navigation link item
export interface NavLink {
  label: string;
  href: string;
}

// Single partner logo item (icon from /public + brand name)
export interface PartnerLogo {
  name: string;
  // Path relative to the /public folder, e.g. "/globe.svg"
  src: string;
}

// Course card data
export interface Course {
  id: string;
  title: string;
  instructor: string;
  // Path relative to /public, e.g. "/images/courses/course-1.jpg"
  image: string;
  // Must match one of the labels in COURSE_CATEGORIES
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  // Display text for the student count badge, e.g. "5K+"
  students: string;
  price: number;
  priceUnit: string;
}

// Learning path card data (icon is a lucide-react component)
export interface LearningPath {
  id: string;
  label: string;
  icon: import("lucide-react").LucideIcon;
  href: string;
}
