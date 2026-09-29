"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import type { FooterColumn, FooterLink } from "./footer.types";

// Link columns on the right side of the footer
const FOOTER_COLUMNS: FooterColumn[] = [
  {
    id: "explore",
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/categories" },
      { label: "Business", href: "/courses?category=business" },
      { label: "IT", href: "/courses?category=it" },
      { label: "Design", href: "/courses?category=design" },
    ],
  },
  {
    id: "categories",
    links: [
      { label: "Development", href: "/courses?category=development" },
      { label: "Marketing", href: "/courses?category=marketing" },
      { label: "Photography", href: "/courses?category=photography" },
      { label: "Finance", href: "/courses?category=finance" },
      { label: "Sport", href: "/courses?category=sport" },
    ],
  },
  {
    id: "company",
    links: [
      { label: "Become a Creator", href: "/creator/register" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

// Small links in the bottom bar
const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookies Settings", href: "/cookie-settings" },
];

interface FooterProps {
  // Called with the trimmed email when the newsletter form is submitted
  onSubscribe?: (email: string) => void;
}

// Site footer: logo, newsletter form, link columns and legal bar
export default function Footer({ onSubscribe }: FooterProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubscribe?.(email.trim());
    setEmail("");
  };

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: logo + newsletter */}
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-1.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-lime-300 text-sm font-extrabold text-slate-900">
                b
              </span>
              <span className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                ByteSpace
              </span>
            </Link>

            <p className="mt-4 text-xs text-slate-800">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex items-center gap-3"
            >
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-10 flex-1 rounded-full border-slate-300 bg-white px-4 text-xs text-slate-800 placeholder:text-slate-500"
              />
              <Button
                type="submit"
                className="h-10 rounded-full bg-lime-300 px-6 text-sm font-semibold text-slate-900 hover:bg-lime-200"
              >
                Search
              </Button>
            </form>

            <p className="mt-4 text-[10px] leading-relaxed text-slate-600">
              By subscribing, you agree to our{" "}
              <Link
                href="/privacy-policy"
                className="underline hover:text-slate-900"
              >
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

          {/* Right: link columns (2 per row on mobile, 3 from sm) */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <ul key={column.id} className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-slate-700 transition-colors hover:text-blue-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-slate-200 py-6 text-[10px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-slate-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
