"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { GitHubIcon } from "./BrandIcons";
import { ProjectVisual } from "./ProjectVisual";
import { Container, SectionHeading } from "./ui";
import { projects, type Project } from "@/data/projects";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="relative py-28 sm:py-36">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <Container>
        <SectionHeading
          id="work"
          title="Selected work"
          intro="Live client websites, an e-commerce store and a SaaS platform in progress. Each one started with a business need."
        />
        <ul className="mt-20 flex flex-col gap-24 sm:gap-32">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} flip={i % 2 === 1} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  const isLive = project.status === "live";
  const tags = project.stack ?? project.focus ?? [];

  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
    >
      <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        {isLive && project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.name} (opens in a new tab)`}
            className="block rounded-[22px] transition-transform duration-700 ease-out-expo group-hover:-translate-y-1.5"
          >
            <ProjectVisual project={project} />
          </a>
        ) : (
          <div className="transition-transform duration-700 ease-out-expo group-hover:-translate-y-1.5">
            <ProjectVisual project={project} />
          </div>
        )}
      </div>

      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <div className="flex flex-wrap items-center gap-3 text-[13px]">
          <span className="text-volt-soft">{project.category}</span>
          {isLive ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-2.5 py-0.5 text-emerald-200/90">
              <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              Live
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-300/[0.08] px-2.5 py-0.5 text-amber-100/90">
              <span className="size-1.5 rounded-full bg-amber-300" aria-hidden="true" />
              In Development
            </span>
          )}
        </div>

        <h3 className="font-display mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1] font-bold tracking-[-0.035em] text-fg">
          {project.name}
        </h3>
        <p className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-6 space-y-2.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-[15px] text-fg/85">
              <Check className="mt-1 size-4 shrink-0 text-volt-soft" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>

        {tags.length > 0 && (
          <div className="mt-7">
            <p className="sr-only">{project.stack ? "Technology" : "Focus areas"}</p>
            <ul className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <li key={t} className="rounded-full border border-line-strong bg-white/[0.02] px-3 py-1 text-[13px] text-muted">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-5">
          {isLive && project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 border-b border-volt/50 pb-1 text-[15px] font-semibold text-fg transition-colors hover:border-volt-soft hover:text-volt-soft"
            >
              View Live Project
              <span className="sr-only"> (opens in a new tab)</span>
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          ) : (
            <p className="text-[14px] text-dim">Currently being built, so there is no public link yet.</p>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-line-strong pb-1 text-[15px] font-semibold text-muted transition-colors hover:text-fg"
            >
              <GitHubIcon className="size-4" />
              View Code
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </motion.li>
  );
}
