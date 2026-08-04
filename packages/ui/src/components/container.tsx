import { cn } from "@renovatio/ui/lib/utils";
import * as React from "react";

type ContainerSize = "narrow" | "page" | "wide" | "full";

function Container({
  className,
  size = "page",
  ...props
}: React.ComponentProps<"div"> & { size?: ContainerSize }) {
  return (
    <div
      data-slot="container"
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        size === "narrow" && "max-w-narrow",
        size === "page" && "max-w-page",
        size === "wide" && "max-w-wide",
        size === "full" && "max-w-none",
        className,
      )}
      {...props}
    />
  );
}

export { Container };
