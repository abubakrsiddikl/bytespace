import {
  Briefcase,
  Camera,
  Code2,
  Laptop,
  Megaphone,
  Palette,
} from "lucide-react";
import type { LearningPath } from "@/types/course.type";

// Category cards shown in the "Explore Diverse Learning Paths" section
export const LEARNING_PATHS: LearningPath[] = [
  { id: "design", label: "Design", icon: Palette, href: "/courses?category=design" },
  { id: "development", label: "Development", icon: Code2, href: "/courses?category=development" },
  { id: "it-software", label: "IT & Software", icon: Laptop, href: "/courses?category=it-software" },
  { id: "business", label: "Business", icon: Briefcase, href: "/courses?category=business" },
  { id: "marketing", label: "Marketing", icon: Megaphone, href: "/courses?category=marketing" },
  { id: "photography", label: "Photography", icon: Camera, href: "/courses?category=photography" },
];
