"use client";

import { Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";

import GridBackground from "@/components/grid-background";
import { socialLinks } from "@/components/socials";

const EMAIL = "nareshvijh@gmail.com";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex flex-col items-center justify-center px-6 pb-16 text-center">
      <GridBackground />

      <motion.div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_5%,transparent)_0%,transparent_55%)]" />
        <motion.div
          className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, 48, 0], y: [0, 24, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, -48, 0], y: [0, -24, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        variants={container}
        initial={reduce ? false : "hidden"}
        animate="show"
        className="flex flex-col items-center"
      >
        <motion.p
          variants={item}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border bg-background/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Coming Soon
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl font-extrabold tracking-tight text-balance sm:text-6xl"
        >
          Renovatio Architects
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 max-w-xl text-base text-muted-foreground text-pretty sm:text-lg"
        >
          Architect, Interior Designer &amp; 3D Visualizer
        </motion.p>

        <motion.p variants={item} className="mt-10 max-w-md text-pretty">
          Our new website is taking shape. We&rsquo;ll be here soon &mdash; stay
          tuned.
        </motion.p>

        <motion.a
          variants={item}
          href={`mailto:${EMAIL}`}
          whileHover={{ scale: reduce ? 1 : 1.04 }}
          whileTap={{ scale: reduce ? 1 : 0.97 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {EMAIL}
        </motion.a>

        <motion.nav
          variants={item}
          className="mt-10 flex items-center gap-5"
          aria-label="Social media"
        >
          {socialLinks.map(({ name, href, icon: Icon, hoverClass }) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              whileHover={{ y: reduce ? 0 : -3, scale: reduce ? 1 : 1.15 }}
              whileTap={{ scale: reduce ? 1 : 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className={`text-muted-foreground transition-colors ${hoverClass}`}
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.nav>
      </motion.div>
    </div>
  );
}
