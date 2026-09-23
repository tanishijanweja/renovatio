import { Container } from "@renovatio/ui/components/container";
import { Section } from "@renovatio/ui/components/section";
import { buttonVariants } from "@renovatio/ui/components/button";
import { cn } from "@renovatio/ui/lib/utils";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug, PROJECTS } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found — Renovatio" };
  return {
    title: `${project.name} — Renovatio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const next =
    currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  const details = [
    { label: "Location", value: project.location },
    { label: "Category", value: project.category },
    { label: "Year", value: project.year },
    { label: "Area", value: project.area },
    { label: "Client", value: project.client },
  ] as const;

  return (
    <>
      {/* Back + hero */}
      <Section size="sm" className="pb-0">
        <Container>
          <Link
            href={"/projects" as Route}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={1.5} />
            All Projects
          </Link>
        </Container>
      </Section>

      {/* Hero image */}
      <div className="mx-auto mt-6 max-w-page px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-muted aspect-[16/10] sm:aspect-[16/9]">
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            fill
            priority
            sizes="(min-width: 1280px) 80rem, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Title + meta */}
      <Section size="sm">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Main */}
            <div className="lg:col-span-8">
              <p className="text-eyebrow uppercase text-muted-foreground">
                {project.category} &middot; {project.year}
              </p>
              <h1 className="mt-4 text-balance font-display text-display-md sm:text-display-lg">
                {project.name}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                {project.location}
              </p>
              <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="prose prose-neutral dark:prose-invert mt-8 max-w-2xl">
                <p className="text-pretty leading-relaxed text-foreground/80">
                  {project.story}
                </p>
              </div>

              {project.materials.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.materials.map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border bg-card p-6">
                <h2 className="text-eyebrow uppercase text-muted-foreground">
                  Project details
                </h2>
                <dl className="mt-6 grid gap-4">
                  {details.map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-4 last:border-0 last:pb-0"
                    >
                      <dt className="text-sm text-muted-foreground">{label}</dt>
                      <dd className="text-sm font-medium text-foreground">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <Link
                  href={"/contact" as Route}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "mt-8 w-full",
                  )}
                >
                  Start a similar project
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <Section size="sm" className="pt-0">
          <Container>
            <h2 className="text-eyebrow uppercase text-muted-foreground">
              Gallery
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {project.gallery.map((img) => (
                <div
                  key={img.src}
                  className="relative overflow-hidden rounded-2xl bg-muted aspect-[4/3]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Prev / Next */}
      <Section size="sm" className="border-t border-border">
        <Container>
          <div className="flex items-center justify-between gap-4">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}` as unknown as Route}
                className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <ArrowLeft
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:-translate-x-0.5"
                  strokeWidth={1.5}
                />
                <span className="hidden sm:inline">{prev.name}</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            ) : (
              <span />
            )}

            <Link
              href={"/projects" as Route}
              className="text-eyebrow uppercase text-muted-foreground hover:text-foreground"
            >
              All Projects
            </Link>

            {next ? (
              <Link
                href={`/projects/${next.slug}` as unknown as Route}
                className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <span className="hidden sm:inline">{next.name}</span>
                <span className="sm:hidden">Next</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
