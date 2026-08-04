"use client";

import { Button, buttonVariants } from "@renovatio/ui/components/button";
import { Container } from "@renovatio/ui/components/container";
import { cn } from "@renovatio/ui/lib/utils";
import { Menu, X } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import * as React from "react";

import { ModeToggle } from "./mode-toggle";

const NAV_LINKS = [
  { label: "Home", href: "/" as Route },
  { label: "Projects", href: "/projects" as Route },
  { label: "Services", href: "/services" as Route },
  { label: "About", href: "/about" as Route },
  { label: "Contact", href: "/contact" as Route },
] as const;

const BOOKING_HREF: Route = "/contact" as Route;

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <Container>
        <div className="flex h-16 items-center justify-between gap-8">
          <Link
            href="/"
            className="font-display text-xl tracking-tight transition-colors hover:text-muted-foreground"
          >
            Renovatio
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 md:flex"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <Link
              href={BOOKING_HREF}
              className={cn(
                buttonVariants({ size: "sm" }),
                "hidden md:inline-flex",
              )}
            >
              Book a Consultation
            </Link>
            <Button
              ref={triggerRef}
              type="button"
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-border md:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <Container>
          <nav aria-label="Mobile" className="flex flex-col py-2">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                {label}
              </Link>
            ))}
            <Link
              href={BOOKING_HREF}
              onClick={closeMenu}
              className={cn(buttonVariants({ size: "lg" }), "mt-2")}
            >
              Book a Consultation
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}
