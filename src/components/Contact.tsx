import { ArrowUpRight, Mail, Phone, type LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "./BrandIcons";
import { InquiryForm } from "./InquiryForm";
import { Container, Reveal } from "./ui";
import { contact } from "@/data/site";

type Channel = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon | ComponentType<{ className?: string }>;
  external?: boolean;
};

const channels: Channel[] = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: "WhatsApp", value: contact.phoneDisplay, href: contact.whatsappHref, icon: WhatsAppIcon, external: true },
  { label: "Phone", value: contact.phoneDisplay, href: contact.phoneHref, icon: Phone },
  { label: "LinkedIn", value: contact.linkedinLabel, href: contact.linkedin, icon: LinkedInIcon, external: true },
  { label: "GitHub", value: contact.githubLabel, href: contact.github, icon: GitHubIcon, external: true },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden py-28 sm:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-200px] left-1/2 -z-10 h-[700px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgb(79_125_255/0.22),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(rgb(150_172_224/0.12)_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000,transparent)]"
      />
      <Container>
        <Reveal>
          <h2
            id="contact-title"
            className="font-display max-w-[13ch] text-[clamp(2.9rem,8vw,6.75rem)] leading-[0.9] font-bold tracking-[-0.04em] text-fg"
          >
            Have an idea? Let&apos;s make it real.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[56ch] text-lg leading-relaxed text-muted">
            Whether you run a business, are a founder with a product in mind, or need changes to a site you already
            have, tell me what you&apos;re working on and we can talk it through.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal delay={0.1} className="lg:col-span-5">
            <ul className="border-t border-line">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-4 border-b border-line py-5 transition-colors"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-[background-color,border-color,color] duration-300 group-hover:border-volt group-hover:bg-volt group-hover:text-white">
                        <Icon className="size-[18px]" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[13px] text-dim">{c.label}</span>
                        <span className="block truncate text-[16px] text-fg transition-colors group-hover:text-volt-soft">
                          {c.value}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="size-5 shrink-0 text-dim transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
                        aria-hidden="true"
                      />
                      {c.external && <span className="sr-only"> (opens in a new tab)</span>}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-7">
            <div className="rounded-[24px] border border-line-strong bg-night/80 p-6 shadow-[0_40px_100px_-50px_rgb(79_125_255/0.45)] backdrop-blur-xl sm:p-8">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-fg">Send a project inquiry</h3>
              <p className="mt-2 mb-7 text-[15px] text-muted">A few details help me reply with useful next steps.</p>
              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
