import { cn } from "@renovatio/ui/lib/utils";
import type { Project } from "@/data/projects";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

interface FilteredProjectsProps {
  projects: Project[];
}

// Mixed editorial aspects — sequential for visual rhythm in masonry
const ASPECTS = [
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[4/5]",
  "aspect-[3/4]",
] as const;

export function FilteredProjects({ projects }: FilteredProjectsProps) {
  return (
    <div className="columns-1 gap-6 sm:gap-8 md:columns-2">
      {projects.map((project, index) => {
        const aspect = ASPECTS[index % ASPECTS.length]!;
        return (
          <div key={project.slug} className="mb-6 break-inside-avoid sm:mb-8">
            <Link
              href={`/projects/${project.slug}` as unknown as Route}
              className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl bg-muted",
                  aspect,
                )}
              >
                <Image
                  src={project.coverImage.src}
                  alt={project.coverImage.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-balance font-display text-xl leading-tight text-foreground">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.location} — {project.year}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
