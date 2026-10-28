import { ArrowUp } from "lucide-react";
import { Container } from "./ui";
import { contact, profile } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-6 text-[14px] text-dim sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-[15px] font-extrabold tracking-[0.06em] text-fg">{profile.wordmark}</p>
          <p className="mt-1">
            © 2026 {profile.name}. Full Stack Developer, {profile.location}.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <a href={`mailto:${contact.email}`} className="transition-colors hover:text-fg">
            Email
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
            GitHub
          </a>
          <a href="#top" className="inline-flex items-center gap-1.5 text-fg transition-colors hover:text-volt-soft">
            Back to top <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
