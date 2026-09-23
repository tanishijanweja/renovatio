import { buttonVariants } from "@renovatio/ui/components/button";
import { Container } from "@renovatio/ui/components/container";
import { Section } from "@renovatio/ui/components/section";
import { cn } from "@renovatio/ui/lib/utils";
import { ArrowUpRight } from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaBehance } from "react-icons/fa6";

import { getFeaturedProjects } from "@/data/projects";

const PROJECTS_HREF: Route = "/projects" as Route;
const BEHANCE_HREF = "https://www.behance.net/nareshvijh";

// Editorial layout — alternating 5/7 split with staggered offsets
const LAYOUTS = [
  {
    span: "lg:col-span-5",
    aspect: "aspect-[4/5]",
    offset: false,
    sizes: "(min-width: 1024px) 40vw, (min-width: 640px) 46vw, 100vw",
  },
  {
    span: "lg:col-span-7",
    aspect: "aspect-[4/3]",
    offset: true,
    sizes: "(min-width: 1024px) 58vw, (min-width: 640px) 46vw, 100vw",
  },
  {
    span: "lg:col-span-7",
    aspect: "aspect-[4/3]",
    offset: true,
    sizes: "(min-width: 1024px) 58vw, (min-width: 640px) 46vw, 100vw",
  },
  {
    span: "lg:col-span-5",
    aspect: "aspect-[4/5]",
    offset: false,
    sizes: "(min-width: 1024px) 40vw, (min-width: 640px) 46vw, 100vw",
  },
] as const;

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <Section id="projects" aria-labelledby="featured-projects-heading">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-eyebrow uppercase text-muted-foreground">
              Featured work
            </p>
            <h2
              id="featured-projects-heading"
              className="mt-6 text-balance font-display text-display-md sm:text-display-lg"
            >
              Selected Projects
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              A selection of recent work — residences, renovations, and
              interiors shaped around how life unfolds.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0 self-start sm:self-auto">
            <Link
              href={PROJECTS_HREF}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              View All Projects
              <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
            </Link>
            <a
              href={BEHANCE_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              View more
              <FaBehance aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:gap-y-16">
          {projects.map((project, index) => {
            const layout = LAYOUTS[index % LAYOUTS.length]!;
            return (
              <li
                key={project.slug}
                className={cn(layout.span, layout.offset && "lg:mt-24")}
              >
                <Link
                  href={`/projects/${project.slug}` as unknown as Route}
                  className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-2xl bg-muted",
                      layout.aspect,
                    )}
                  >
                    <Image
                      src={project.coverImage.src}
                      alt={project.coverImage.alt}
                      fill
                      sizes={layout.sizes}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-balance font-display text-xl text-foreground">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.location}
                      </p>
                    </div>
                    <p className="shrink-0 text-eyebrow uppercase text-muted-foreground/80">
                      {project.category}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}