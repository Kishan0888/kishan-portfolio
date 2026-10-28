import { Container, Reveal, SectionHeading } from "./ui";
import { skillGroups } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative bg-night pb-28 sm:pb-36">
      <Container>
        <SectionHeading
          id="skills"
          title="Technical skills"
          intro="The languages, frameworks and tools I use in production work."
        />
        <dl className="mt-16 overflow-hidden rounded-[24px] border border-line bg-ink/60">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 0.04}
              y={12}
              className={`grid gap-4 px-6 py-6 sm:grid-cols-12 sm:items-center sm:px-8 ${i > 0 ? "border-t border-line" : ""}`}
            >
              <dt className="font-display text-lg font-semibold text-fg sm:col-span-4 lg:col-span-3">{group.label}</dt>
              <dd className="sm:col-span-8 lg:col-span-9">
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line-strong bg-deep px-3.5 py-1.5 text-[14px] text-fg/85 transition-[border-color,color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-volt/60 hover:bg-volt/10 hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
