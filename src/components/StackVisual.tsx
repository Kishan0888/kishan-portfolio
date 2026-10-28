"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import type { PointerEvent } from "react";

const layers = [
  { name: "Interface", tech: "React · Next.js", kind: "ui" },
  { name: "API", tech: "Node.js · Express · REST", kind: "api" },
  { name: "Data", tech: "MongoDB · MySQL · Firebase · Supabase", kind: "data" },
] as const;

/** Abstract diagram of the full stack Kishan works across. Tilts gently toward the pointer. */
export function StackVisual() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <div
      className="relative h-[460px] w-full [perspective:1200px]"
      onPointerMove={onMove}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      aria-hidden="true"
    >
      <motion.div style={{ rotateX: rx, rotateY: ry }} className="relative size-full [transform-style:preserve-3d]">
        {/* connecting spine */}
        <div className="absolute top-[70px] bottom-[70px] left-[44px] w-px bg-gradient-to-b from-volt/0 via-volt/50 to-volt/0">
          <span className="absolute left-1/2 size-2 -translate-x-1/2 rounded-full bg-volt-soft shadow-[0_0_14px_4px_rgb(79_125_255/0.6)] motion-safe:animate-[spine_3.2s_ease-in-out_infinite]" />
        </div>

        {layers.map((layer, i) => (
          <motion.div
            key={layer.name}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute h-[124px] rounded-2xl border border-line-strong bg-gradient-to-br from-raised/90 to-night/90 p-5 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.9)] backdrop-blur-md"
            style={{ top: i * 156, z: (2 - i) * 30, left: i * 18, right: (2 - i) * 12 }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex shrink-0 items-center gap-3">
                <span className="grid size-[22px] place-items-center rounded-full border border-volt/60 bg-ink">
                  <span className="size-1.5 rounded-full bg-volt" />
                </span>
                <span className="font-display text-lg font-semibold text-fg">{layer.name}</span>
              </div>
              <span className="min-w-0 truncate text-xs text-dim">{layer.tech}</span>
            </div>
            <div className="mt-4 pl-[34px]">
              {layer.kind === "ui" && (
                <div className="flex gap-2">
                  <div className="h-11 w-[38%] rounded-md border border-line bg-ink/60 p-2">
                    <div className="h-1.5 w-2/3 rounded bg-fg/40" />
                    <div className="mt-1.5 h-1.5 w-1/2 rounded bg-fg/15" />
                    <div className="mt-2 h-2.5 w-10 rounded-full bg-volt/80" />
                  </div>
                  <div className="h-11 flex-1 rounded-md border border-line bg-[linear-gradient(135deg,rgb(79_125_255/0.25),transparent)]" />
                  <div className="h-11 w-[14%] rounded-md border border-line bg-ink/60" />
                </div>
              )}
              {layer.kind === "api" && (
                <div className="space-y-1.5 font-mono text-[11px] leading-none">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-volt/20 px-1.5 py-1 text-volt-soft">GET</span>
                    <span className="h-1.5 w-28 rounded bg-fg/25" />
                    <span className="ml-auto text-emerald-300/80">200</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-white/10 px-1.5 py-1 text-fg/70">POST</span>
                    <span className="h-1.5 w-20 rounded bg-fg/15" />
                    <span className="ml-auto text-emerald-300/80">201</span>
                  </div>
                </div>
              )}
              {layer.kind === "data" && (
                <div className="grid grid-cols-4 gap-1.5">
                  {Array.from({ length: 8 }).map((_, k) => (
                    <div key={k} className={`h-[18px] rounded ${k % 3 === 0 ? "bg-volt/30" : "bg-fg/[0.07]"} border border-line`} />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
