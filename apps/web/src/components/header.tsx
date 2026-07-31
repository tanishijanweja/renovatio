"use client";

import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <div className="flex items-center justify-end px-4 py-3 sm:px-6">
      <ModeToggle />
    </div>
  );
}
