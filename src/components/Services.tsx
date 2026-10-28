import { AppWindow, Building2, Layers, MonitorSmartphone, Server, ShoppingBag, Wrench, type LucideIcon } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./ui";
import { services } from "@/data/site";

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  layers: Layers,
  monitor: MonitorSmartphone,
  server: Server,
  building: Building2,
  bag: ShoppingBag,
  wrench: Wrench,
  app: AppWindow,
};

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative bg-night py-28 sm:py-36">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-line" />
      <Container>
        <SectionHeading
          id="services"
          title="What I can build for you"
          intro="Services that come straight from the work I already do, from a first business website to a multi-user web app."
        />

        <ul className="mt-16 grid border-t border-line md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <li
                key={service.title}
                className={`border-b border-line ${i % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"} ${
                  i === services.length - 1 && services.length % 2 === 1 ? "md:col-span-2 md:border-r-0" : ""
                }`}
              >
                <Reveal delay={(i % 2) * 0.08} className="group relative flex gap-5 py-8">
                  <span className="absolute top-0 left-0 h-px w-0 bg-volt transition-[width] duration-500 ease-out-expo group-hover:w-full" />
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-line-strong bg-deep text-volt-soft transition-[background-color,border-color,color] duration-300 group-hover:border-volt/60 group-hover:bg-volt group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-[-0.015em] text-fg">{service.title}</h3>
                    <p className="mt-2 max-w-[52ch] leading-relaxed text-muted">{service.body}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
