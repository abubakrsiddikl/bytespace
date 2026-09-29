import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { NAV_LINKS } from "./navigation";
import { MobileMenu } from "./MobileMenu";
import { GridBackground } from "./Decorations";


// Top navigation bar: logo, links, auth actions
export function Navbar() {
  return (
    <header className="relative z-20 w-full bg-blue-700">
      <GridBackground></GridBackground>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Center links: desktop only */}
        <NavLinks links={NAV_LINKS} className="hidden md:flex" />

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Auth buttons: desktop only, mobile uses the sheet menu */}
          <Button
            variant="ghost"
            className="hidden text-sm font-medium text-white hover:bg-white/10 hover:text-white md:inline-flex"
          >
            Sign In
          </Button>
          <Button
            variant="ghost"
            className="hidden text-sm font-medium text-white hover:bg-white/10 hover:text-white md:inline-flex"
          >
            Join Us
          </Button>

          {/* Profile icon button */}
          <Button
            size="icon"
            className="h-8 w-8 rounded-md bg-yellow-400 text-blue-900 hover:bg-yellow-300"
            aria-label="Profile"
          >
            <User className="h-4 w-4" />
          </Button>

          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
