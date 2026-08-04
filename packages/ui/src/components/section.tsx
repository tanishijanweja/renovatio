import { cn } from "@renovatio/ui/lib/utils";
import * as React from "react";

type SectionSize = "sm" | "default" | "lg";

function Section({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"section"> & { size?: SectionSize }) {
  return (
    <section
      data-slot="section"
      data-size={size}
      className={cn(
        "relative",
        size === "sm" && "py-10 sm:py-12",
        size === "default" && "py-16 sm:py-20 lg:py-24",
        size === "lg" && "py-24 sm:py-28 lg:py-36",
        className,
      )}
      {...props}
    />
  );
}

export { Section };
