import type { Metadata } from "next";

import { buttonVariants } from "@renovatio/ui/components/button";
import { Container } from "@renovatio/ui/components/container";
import { Section } from "@renovatio/ui/components/section";
import { cn } from "@renovatio/ui/lib/utils";
import { FaBehance } from "react-icons/fa6";

import { FilteredProjects } from "@/components/projects/filtered-projects";
import { PROJECTS } from "@/data/projects";

const BEHANCE_HREF = "https://www.behance.net/nareshvijh";

export const metadata: Metadata = {
  title: "Projects — Renovatio",
  description:
    "A selection of residences, renovations, and interiors shaped around how life unfolds.",
};

export default function ProjectsPage() {
  return (
    <Section aria-labelledby="projects-heading" className="pt-8 sm:pt-10 lg:pt-12">
      <Container>
        {/* Page header */}
        <div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1
              id="projects-heading"
              className="text-balance font-display text-display-md sm:text-display-lg"
            >
              Selected Projects
            </h1>

            <a
              href={BEHANCE_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "shrink-0 self-start sm:self-auto",
              )}
            >
              View more
              <FaBehance aria-hidden="true" className="size-4" />
            </a>
          </div>

          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
            Residences, renovations, and interiors — each shaped by site,
            climate, and the way life unfolds.
          </p>
        </div>

        <div className="mt-10">
          <FilteredProjects projects={PROJECTS} />
        </div>
      </Container>
    </Section>
  );
}
