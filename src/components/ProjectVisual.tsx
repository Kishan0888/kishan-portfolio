import Image from "next/image";
import type { Project, ProjectVisualTheme } from "@/data/projects";

/**
 * Shows a real screenshot when `project.image` is set; otherwise an abstract,
 * clearly labelled illustration inside a browser frame. The illustration is
 * never presented as a screenshot of the actual site.
 */
export function ProjectVisual({ project }: { project: Project }) {
  const host = project.url ? new URL(project.url).host : "in development";

  return (
    <div className="relative overflow-hidden rounded-[20px] border border-line-strong bg-night shadow-[0_40px_80px_-40px_rgb(0_0_0/0.9)]">
      {/* browser chrome */}
      <div className="flex items-center gap-3 border-b border-line bg-deep/80 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-fg/15" />
          <span className="size-2.5 rounded-full bg-fg/15" />
          <span className="size-2.5 rounded-full bg-fg/15" />
        </div>
        <div className="mx-auto flex min-w-0 max-w-[260px] flex-1 items-center justify-center gap-1.5 rounded-md bg-ink/70 px-3 py-1 text-[12px] text-dim">
          <span
            className={`size-1.5 shrink-0 rounded-full ${project.status === "live" ? "bg-emerald-400/80" : "bg-amber-300/80"}`}
            aria-hidden="true"
          />
          <span className="truncate">{host}</span>
        </div>
        <span className="w-[42px]" aria-hidden="true" />
      </div>

      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(min-width: 1024px) 680px, 100vw"
            className="size-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
          />
        ) : (
          <>
            <div
              role="img"
              aria-label={`Illustrative visual for ${project.name}, not a screenshot of the site`}
              className="absolute inset-0 transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.04]"
            >
              <Art theme={project.visual} name={project.name} />
            </div>
            <span className="absolute right-3 bottom-3 rounded-full border border-line bg-ink/70 px-2.5 py-1 text-[11px] text-dim backdrop-blur">
              Illustration
            </span>
          </>
        )}
      </div>
    </div>
  );
}

function Art({ theme, name }: { theme: ProjectVisualTheme; name: string }) {
  const base = "absolute inset-0";
  switch (theme) {
    case "network":
      return (
        <div className={`${base} bg-[radial-gradient(circle_at_30%_40%,rgb(79_125_255/0.28),transparent_55%),#070b16]`}>
          <svg viewBox="0 0 400 250" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice">
            <g stroke="rgb(147 172 255 / 0.35)" strokeWidth="0.8">
              {nodes.map(([x, y], i) =>
                nodes.slice(i + 1).map(([x2, y2], j) =>
                  Math.hypot(x - x2, y - y2) < 120 ? <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} /> : null,
                ),
              )}
            </g>
            {nodes.map(([x, y, r], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r={r + 6} fill="rgb(79 125 255 / 0.12)" />
                <circle cx={x} cy={y} r={r} fill={i === 3 ? "#4f7dff" : "#1a2440"} stroke="rgb(147 172 255 / 0.6)" />
              </g>
            ))}
          </svg>
          <Title name={name} sub="Professionals · Opportunities · Admin" />
        </div>
      );
    case "signal":
      return (
        <div className={`${base} bg-[linear-gradient(160deg,#0b1020,#05070d)]`}>
          <svg viewBox="0 0 400 250" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice">
            {Array.from({ length: 9 }).map((_, i) => (
              <path
                key={i}
                d={`M -20 ${170 - i * 9} C 80 ${120 - i * 14}, 160 ${220 - i * 6}, 240 ${140 - i * 10} S 380 ${90 - i * 6}, 430 ${110 - i * 8}`}
                fill="none"
                stroke={i === 4 ? "#4f7dff" : "rgb(147 172 255 / 0.16)"}
                strokeWidth={i === 4 ? 2 : 1}
              />
            ))}
          </svg>
          <Title name={name} sub="Responsive · Cross-device · Fast" />
        </div>
      );
    case "care":
      return (
        <div className={`${base} bg-[radial-gradient(circle_at_75%_35%,rgb(79_125_255/0.22),transparent_50%),#060a14]`}>
          <div className="absolute top-[18%] right-[12%] grid size-[34%] max-h-[120px] max-w-[120px] place-items-center">
            <div className="absolute h-full w-1/3 rounded-lg border border-volt/50 bg-volt/15" />
            <div className="absolute h-1/3 w-full rounded-lg border border-volt/50 bg-volt/15" />
          </div>
          <div className="absolute top-[14%] left-[8%] w-[46%] space-y-2 sm:top-[20%] sm:space-y-2.5">
            {[70, 90, 60].map((wd, i) => (
              <div key={i} className={`items-center gap-2 rounded-lg border border-line bg-white/[0.03] p-1.5 sm:p-2 ${i === 2 ? "hidden sm:flex" : "flex"}`}>
                <span className="size-4 shrink-0 rounded bg-volt/40" />
                <span className="h-1.5 rounded bg-fg/20" style={{ width: `${wd}%` }} />
              </div>
            ))}
          </div>
          <Title name={name} sub="Services · Patient contact" />
        </div>
      );
    case "catalogue":
      return (
        <div className={`${base} bg-[linear-gradient(200deg,#0c1224,#05070d)]`}>
          <div className="absolute inset-x-[8%] top-[14%] grid grid-cols-4 gap-2.5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-lg border border-line bg-white/[0.03] p-1.5">
                <div
                  className={`aspect-square rounded-md ${i === 1 ? "bg-volt/45" : i % 3 === 0 ? "bg-fg/[0.1]" : "bg-volt/[0.12]"}`}
                />
                <div className="mt-1.5 h-1 w-3/4 rounded bg-fg/20" />
              </div>
            ))}
          </div>
          <Title name={name} sub="Storefront · Catalogue · Mobile" />
        </div>
      );
    case "modules":
      return (
        <div className={`${base} bg-[radial-gradient(circle_at_20%_20%,rgb(79_125_255/0.2),transparent_50%),#060912]`}>
          <div className="absolute top-[12%] left-[8%] grid w-[84%] grid-cols-6 grid-rows-3 gap-2" style={{ height: "52%" }}>
            <div className="col-span-2 row-span-3 rounded-lg border border-line bg-white/[0.03] p-2">
              {[0, 1, 2, 3].map((k) => (
                <div key={k} className={`mb-1.5 h-2 rounded ${k === 1 ? "bg-volt/60" : "bg-fg/10"}`} />
              ))}
            </div>
            <div className="col-span-2 rounded-lg border border-volt/40 bg-volt/15" />
            <div className="col-span-2 rounded-lg border border-line bg-white/[0.03]" />
            <div className="col-span-4 row-span-2 rounded-lg border border-dashed border-line-strong bg-white/[0.02]" />
          </div>
          <Title name={name} sub="Modular workflows · Multi-user" />
        </div>
      );
  }
}

function Title({ name, sub }: { name: string; sub: string }) {
  return (
    <div className="absolute right-[8%] bottom-[9%] left-[8%]">
      <p className="font-display text-[clamp(1.25rem,3vw,2.1rem)] leading-none font-bold tracking-[-0.03em] text-fg/90">
        {name}
      </p>
      <p className="mt-2 text-[11px] text-dim sm:text-xs">{sub}</p>
    </div>
  );
}

const nodes: [number, number, number][] = [
  [60, 60, 5],
  [140, 40, 4],
  [120, 110, 6],
  [210, 80, 9],
  [290, 50, 4],
  [330, 120, 6],
  [250, 140, 5],
  [170, 160, 4],
  [70, 150, 4],
  [360, 40, 3],
];
