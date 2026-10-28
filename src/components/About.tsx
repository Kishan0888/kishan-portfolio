import { Container, Reveal } from "./ui";
import { profile } from "@/data/site";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Current role", value: "Full Stack Developer, SEO Web Technology" },
  { label: "Since", value: "December 2024" },
  { label: "Education", value: "B.Tech, Computer Science and Engineering (2024)" },
  { label: "Core stack", value: "MERN, Next.js, Shopify" },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-28 sm:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2
              id="about-title"
              className="font-display text-[clamp(2.4rem,6vw,4.75rem)] font-bold leading-[0.95] tracking-[-0.035em]"
            >
              About
            </h2>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal>
              <p className="font-display text-[clamp(1.5rem,2.8vw,2.25rem)] leading-[1.22] font-medium tracking-[-0.02em] text-fg">
                I&apos;m Kishan, a full stack developer who builds websites and web applications around how a business
                actually works.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 grid gap-6 text-[17px] leading-relaxed text-muted sm:grid-cols-2">
              <p>
                At SEO Web Technology I design, develop and deploy live client websites, web applications and backend
                APIs, using React, Next.js and Node.js with MongoDB, MySQL, Firebase and Supabase on the data side.
              </p>
              <p>
                My projects usually start with a business need rather than a spec: a diagnostic centre that patients
                should find easily, a brand that needs an online store, a professional community that needs a way to
                post and manage opportunities. I turn those requirements into working features.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="mt-14 grid border-t border-line sm:grid-cols-2">
                {facts.map((fact, i) => (
                  <div
                    key={fact.label}
                    className={`flex flex-col gap-1 border-b border-line py-5 sm:pr-6 ${
                      i % 2 === 1 ? "sm:border-l sm:pl-6" : ""
                    } ${i === facts.length - 1 ? "sm:col-span-2 sm:border-l-0 sm:pl-0" : ""}`}
                  >
                    <dt className="text-[13px] text-dim">{fact.label}</dt>
                    <dd className="text-fg">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
