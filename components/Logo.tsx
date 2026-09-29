import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

// Brand logo: small "b" badge + brand name
export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-1.5", className)}>
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-lime-300 text-sm font-extrabold text-blue-700">
        b
      </span>
      <span className="text-base font-bold tracking-tight text-white sm:text-lg">
        ByteSpace
      </span>
    </Link>
  );
}
