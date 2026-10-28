"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroGrid } from "./HeroGrid";
import { StackVisual } from "./StackVisual";
import { Container, buttonGhost, buttonPrimary } from "./ui";
import { heroStack, profile } from "@/data/site";

const ease = [0.16, 1, 0.3, 1] as const;
const headline = ["I", "build", "digital", "products", "that", "move", "businesses", "forward."];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-[72px]"
    >
      <HeroGrid />
      {/* soft light source, top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgb(79_125_255/0.28),transparent_65%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[420px] w-[520px] bg-[radial-gradient(circle_at_0%_100%,rgb(43_79_216/0.18),transparent_70%)]"
      />

      <Container className="relative flex flex-1 flex-col justify-center py-14 lg:py-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-night/70 py-1.5 pr-4 pl-2.5 text-[13px] text-muted backdrop-blur"
            >
              <span className="relative flex size-2">
                <span className="absolute inset-0 rounded-full bg-volt motion-safe:animate-[pulse-ring_2.2s_ease-out_infinite]" />
                <span className="relative size-2 rounded-full bg-volt" />
              </span>
              Full stack developer in {profile.location}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 text-lg font-medium text-fg sm:text-xl"
            >
              {profile.name}
              <span className="mt-1 block text-[15px] font-normal text-muted sm:text-base">{profile.title}</span>
            </motion.p>

            <h1
              id="hero-title"
              className="font-display mt-5 text-[clamp(2.6rem,6.4vw,5.4rem)] leading-[0.95] font-bold tracking-[-0.03em] text-fg"
            >
              {headline.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease, delay: 0.25 + i * 0.06 }}
                  >
                    {word}
                  </motion.span>
                  {i < headline.length - 1 ? " " : null}
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.85 }}
              className="mt-7 max-w-[52ch] text-[17px] leading-relaxed text-muted sm:text-lg"
            >
              I develop responsive websites, e-commerce stores, backend APIs and business applications, and take
              them from the first requirement to a live deployment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a href="#work" className={buttonPrimary}>
                Explore My Work
                <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
              <a href="#contact" className={buttonGhost}>
                Let&apos;s Build Something
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <StackVisual />
          </div>
        </div>
      </Container>

      {/* technology strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative border-t border-line bg-ink/40 backdrop-blur-sm"
      >
        <Container className="flex items-center gap-6 py-5">
          <p className="shrink-0 text-[13px] text-dim">Works with</p>
          <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <ul className="flex w-max gap-10 motion-safe:animate-[marquee_32s_linear_infinite] hover:[animation-play-state:paused]">
              {[...heroStack, ...heroStack].map((tech, i) => (
                <li
                  key={`${tech}-${i}`}
                  aria-hidden={i >= heroStack.length ? true : undefined}
                  className="font-display text-[15px] font-medium whitespace-nowrap text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#about"
            className="hidden shrink-0 items-center gap-2 text-[13px] text-dim transition-colors hover:text-fg sm:flex"
          >
            Scroll
            <span className="relative flex h-7 w-[18px] justify-center rounded-full border border-line-strong">
              <span className="mt-1.5 size-1 rounded-full bg-volt-soft motion-safe:animate-[scroll-dot_1.8s_ease-in-out_infinite]" />
            </span>
          </a>
        </Container>
      </motion.div>
    </section>
  );
}
