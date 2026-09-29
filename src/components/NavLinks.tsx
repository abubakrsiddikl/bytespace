"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavLink } from ".";


interface NavLinksProps {
  links: NavLink[];
  className?: string;
  // Called when a link is clicked (used to close the mobile menu)
  onNavigate?: () => void;
}

// Reusable list of navigation links with active state highlighting
export function NavLinks({ links, className, onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={cn("flex items-center gap-6", className)}>
      {links.map((link) => {
        // Home must match exactly, other links match by prefix
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onNavigate}
              className={cn(
                "text-sm font-medium transition-colors",
                isActive ? "text-white" : "text-white/70 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
