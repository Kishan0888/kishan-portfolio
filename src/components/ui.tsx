"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/** Reveals content once as it scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number } & Omit<HTMLMotionProps<"div">, "children">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, ease, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Section heading: large display title with an optional intro paragraph beside it. */
export function SectionHeading({
  id,
  title,
  intro,
}: {
  id: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
      <h2
        id={`${id}-title`}
        className="font-display text-[clamp(2.4rem,6vw,4.75rem)] font-bold leading-[0.95] tracking-[-0.035em] text-fg lg:col-span-7"
      >
        {title}
      </h2>
      {intro ? (
        <p className="max-w-[46ch] text-base leading-relaxed text-muted sm:text-lg lg:col-span-5 lg:justify-self-end">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export const buttonPrimary =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-volt px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_0_0_1px_rgb(147_172_255/0.35),0_10px_40px_-10px_rgb(79_125_255/0.7)] transition-[transform,box-shadow,background-color] duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-[#5d88ff] hover:shadow-[0_0_0_1px_rgb(147_172_255/0.5),0_16px_50px_-10px_rgb(79_125_255/0.85)] active:translate-y-0 active:scale-[0.98]";

export const buttonGhost =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-white/[0.02] px-6 py-3.5 text-[15px] font-semibold text-fg transition-[transform,border-color,background-color] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-volt-soft/50 hover:bg-white/[0.05] active:translate-y-0 active:scale-[0.98]";
