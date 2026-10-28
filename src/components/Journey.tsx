"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { Container, Reveal, SectionHeading } from "./ui";
import { education, experience } from "@/data/site";

export function Journey() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading id="experience" title="Experience and education" />
        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-12">
          <Timeline label="Experience">
            {experience.map((job) => (
              <Entry key={job.role} period={job.period} title={job.role} org={job.org}>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="relative pl-4 text-[15px] leading-relaxed text-muted">
                      <span className="absolute top-[0.7em] left-0 size-1 rounded-full bg-dim" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Entry>
            ))}
          </Timeline>
          <Timeline label="Education">
            {education.map((ed) => (
              <Entry key={ed.title} period={ed.period} title={ed.title} org={ed.org} />
            ))}
          </Timeline>
        </div>
      </Container>
    </section>
  );
}

function Timeline({ label, children }: { label: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <div ref={ref}>
      <h3 className="mb-8 text-[15px] font-medium text-volt-soft">{label}</h3>
      <div className="relative">
        <div className="absolute top-2 bottom-2 left-[5px] w-px bg-line" aria-hidden="true" />
        <motion.div
          style={{ scaleY }}
          className="absolute top-2 bottom-2 left-[5px] w-px origin-top bg-gradient-to-b from-volt to-volt-soft/40"
          aria-hidden="true"
        />
        <ol className="space-y-10">{children}</ol>
      </div>
    </div>
  );
}

function Entry({
  period,
  title,
  org,
  children,
}: {
  period: string;
  title: string;
  org: string;
  children?: React.ReactNode;
}) {
  return (
    <li className="relative pl-10">
      <span
        className="absolute top-[7px] left-0 size-[11px] rounded-full border-2 border-volt bg-ink shadow-[0_0_0_4px_rgb(4_6_12)]"
        aria-hidden="true"
      />
      <Reveal y={14}>
        <p className="text-[13px] text-dim">{period}</p>
        <p className="font-display mt-1.5 text-2xl font-semibold tracking-[-0.02em] text-fg">{title}</p>
        <p className="mt-1 text-muted">{org}</p>
        {children}
      </Reveal>
    </li>
  );
}
