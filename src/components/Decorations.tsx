// Purely decorative shapes for the hero background (hidden from screen readers)

// Faint grid pattern that covers the whole hero
export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}

// Lime squiggle on the left side (hidden on small screens)
export function LimeSquiggle() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-4 top-28 hidden h-32 w-10 rotate-12 rounded-full bg-lime-300 lg:block"
    />
  );
}

// White ring on the bottom left (hidden on small screens)
export function WhiteRing() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-10 left-6 hidden h-28 w-28 rounded-full border-[18px] border-white lg:block"
    />
  );
}

// White squiggle on the right side (hidden on small screens)
export function WhiteSquiggle() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-16 right-8 hidden h-28 w-14 -rotate-12 rounded-full bg-white lg:block"
    />
  );
}
