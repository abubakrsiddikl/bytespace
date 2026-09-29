import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

// Single testimonial card: avatar, name, role and quote
export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, role, quote, avatar } = testimonial;

  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Falls back to the first letter if the image is missing */}
      <Avatar className="h-12 w-12 ring-2 ring-lime-300">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback className="bg-blue-100 text-sm font-semibold text-blue-700">
          {name.charAt(0)}
        </AvatarFallback>
      </Avatar>

      <h3 className="mt-3 text-sm font-semibold text-slate-900">{name}</h3>
      <p className="text-[11px] text-blue-600">{role}</p>

      <blockquote className="mt-4 text-xs leading-relaxed text-slate-600">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </article>
  );
}
