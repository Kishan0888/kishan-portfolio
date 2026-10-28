"use client";

import { motion } from "motion/react";
import { Container, SectionHeading } from "./ui";
import { processSteps } from "@/data/site";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="relative overflow-hidden bg-night py-28 sm:py-36">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-line" />
      <Container>
        <SectionHeading
          id="process"
          title="How a project runs"
          intro="Four steps from first conversation to a live site, so you always know what happens next."
        />

        <div className="relative mt-20">
          {/* connecting line: vertical on mobile, horizontal on desktop */}
          <div aria-hidden="true" className="absolute top-0 bottom-0 left-[23px] w-px bg-line md:top-[23px] md:right-0 md:bottom-auto md:left-0 md:h-px md:w-full" />
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[23px] left-0 hidden h-px w-full origin-left bg-gradient-to-r from-volt via-volt-soft to-volt/20 md:block"
          />

          <ol className="relative grid gap-12 md:grid-cols-4 md:gap-8">
          {processSteps.map((step, i) => (
            <motion.li
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex gap-6 md:flex-col md:gap-0"
            >
              <span className="font-display relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-volt/60 bg-ink text-[15px] font-bold text-volt-soft shadow-[0_0_0_6px_var(--color-night)]">
                {step.n}
              </span>
              <div className="md:mt-8 md:pr-4">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-fg">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
              </div>
            </motion.li>
          ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
