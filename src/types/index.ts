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