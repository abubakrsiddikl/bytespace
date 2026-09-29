"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "./NavLinks";
import { NAV_LINKS } from "./navigation";


// Slide-in menu for small screens (hidden on md and above)
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-72 border-none bg-blue-700 text-white">
        <SheetHeader>
          <SheetTitle className="text-left text-white">ByteSpace</SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col gap-8 px-4">
          {/* Vertical links, close the menu after navigation */}
          <NavLinks
            links={NAV_LINKS}
            className="flex-col items-start gap-5"
            onNavigate={() => setOpen(false)}
          />

          <div className="flex flex-col gap-3">
            <Button
              variant="ghost"
              className="justify-start text-white hover:bg-white/10 hover:text-white"
            >
              Sign In
            </Button>
            <Button className="bg-yellow-400 font-semibold text-blue-900 hover:bg-yellow-300">
              Join Us
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
