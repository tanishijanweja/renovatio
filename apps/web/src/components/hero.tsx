"use client";

import { buttonVariants } from "@renovatio/ui/components/button";
import { Container } from "@renovatio/ui/components/container";
import { cn } from "@renovatio/ui/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Slide {
  src: string;
  alt: string;
  project: string;
  location: string;
}

// All slides intentionally reuse the one available asset until real
// project photography is added. Swap `src` per slide as images arrive.
const SLIDES: Slide[] = [
  {
    src: "/work/renov-1.png",
    alt: "Double-height living space with floor-to-ceiling glazing",
    project: "Sunder Nagar Residence",
    location: "New Delhi",
  },
  {
    src: "/work/renov-2.png",
    alt: "Terracotta-screened courtyard house at dusk",
    project: "Mehrauli Courtyard House",
    location: "New Delhi",
  },
  {
    src: "/work/renov-3.png",
    alt: "Minimal concrete and teak interior with indirect lighting",
    project: "Lodhi Colony Apartment",
    location: "New Delhi",
  },
  {
    src: "/work/renov-4.png",
    alt: "Stone-clad weekend retreat set into a forested hillside",
    project: "Kasauli Retreat",
    location: "Himachal Pradesh",
  },
  {
    src: "/work/renov-5.png",
    alt: "Boutique hotel lobby with handcrafted brass fixtures",
    project: "The Sarai Hotel",
    location: "Jaipur",
  },
] as const;

const AUTOPLAY_MS = 6000;

const PROJECTS_HREF: Route = "/projects" as Route;
const BOOKING_HREF: Route = "/contact" as Route;

const STATS = [
  { value: "20+", label: "Years in practice" },
  { value: "120+", label: "Projects delivered" },
] as const;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function pad(n: number) {
  return String(n).padStart(2, "0");
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function Hero() {
  const [current, setCurrent] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = React.useRef<HTMLElement>(null);

  const total = SLIDES.length;

  const goTo = React.useCallback((index: number) => {
    setCurrent((index + total) % total);
  }, [total]);

  const next = React.useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = React.useCallback(() => goTo(current - 1), [current, goTo]);

  // Autoplay
  React.useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, next]);

  // Keyboard navigation when section is focused
  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    section.addEventListener("keydown", handleKey);
    return () => section.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const slide = SLIDES[current];

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      className="relative isolate overflow-hidden bg-background"
      style={{ height: "calc(100svh - 4rem)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* ------------------------------------------------------------------ */}
      {/* Slides — crossfade via opacity transition                           */}
      {/* ------------------------------------------------------------------ */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {slide.project}, {slide.location} — slide {pad(current + 1)} of {pad(total)}
      </div>

      {SLIDES.map((s, i) => (
        <div
          key={i}
          role="group"
          aria-roledescription="slide"
          aria-label={`${pad(i + 1)} of ${pad(total)}: ${s.project}`}
          aria-hidden={i !== current}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            i === current ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* ------------------------------------------------------------------ */}
      {/* Fixed gradient overlay — bottom dark, top clear                    */}
      {/* ------------------------------------------------------------------ */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 pointer-events-none"
      />
      {/* Subtle left vignette keeps left-side text readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none"
      />

      {/* ------------------------------------------------------------------ */}
      {/* Main content                                                        */}
      {/* ------------------------------------------------------------------ */}
      <Container className="relative h-full">
        <div className="flex h-full flex-col justify-end pb-10 pt-20">

          {/* Eyebrow */}
          <p className="text-eyebrow uppercase tracking-widest text-white/60">
            Since 2006&ensp;&bull;&ensp;New Delhi
          </p>

          {/* Accent rule */}
          <div aria-hidden="true" className="mt-4 h-px w-8 bg-white/30" />

          {/* Headline */}
          <h1
            id="hero-heading"
            className="mt-4 max-w-3xl text-balance font-display text-display-lg text-white sm:text-display-xl"
          >
            Timeless spaces,
            <br />
            thoughtfully designed.
          </h1>

          {/* Subheading */}
          <p className="mt-4 max-w-lg text-pretty text-sm text-white/70 sm:text-base">
            Renovatio is a New Delhi architecture and interior studio crafting
            minimal, enduring spaces for the way life unfolds.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href={PROJECTS_HREF} className={buttonVariants({ size: "lg" })}>
              View Projects
            </Link>
            <Link
              href={BOOKING_HREF}
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              Book a Consultation
            </Link>
          </div>

          {/* ----------------------------------------------------------------
              Bottom bar: stats (left) | project info + controls (right)
          ---------------------------------------------------------------- */}
          <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between">

            {/* Stats */}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="font-display text-display-sm text-white">
                    {value}
                  </span>
                  <span className="text-eyebrow uppercase tracking-widest text-white/50">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Project label + carousel controls */}
            <div className="flex flex-col items-start gap-3 sm:items-end">
              {/* Current project name + location */}
              <div className="text-right">
                <p
                  key={`name-${current}`}
                  className="text-sm font-medium text-white animate-in fade-in duration-500"
                >
                  {slide.project}
                </p>
                <p
                  key={`loc-${current}`}
                  className="text-eyebrow uppercase tracking-widest text-white/50 animate-in fade-in duration-500"
                >
                  {slide.location}
                </p>
              </div>

              {/* Controls + counter */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous project"
                  className="flex size-8 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  <ChevronLeft className="size-4" strokeWidth={1.5} />
                </button>

                {/* Counter */}
                <span className="min-w-[3.5rem] text-center text-eyebrow uppercase tracking-widest text-white/60">
                  {pad(current + 1)}&thinsp;/&thinsp;{pad(total)}
                </span>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next project"
                  className="flex size-8 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  <ChevronRight className="size-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
