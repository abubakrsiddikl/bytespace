// Animated stat item (e.g. 12K Students)
export interface Stat {
  id: string;
  value: number;
  // Text after the number, e.g. "K" or "+"
  suffix: string;
  label: string;
}

// Single item in a checklist
export interface Feature {
  id: string;
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  // Path relative to /public, e.g. "/images/testimonials/sarah.jpg"
  avatar: string;
}