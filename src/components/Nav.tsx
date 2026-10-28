"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "@/data/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in the middle band of the viewport.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    const hero = document.getElementById("top");
    const heroObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setActive(null),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    if (hero) heroObserver.observe(hero);
    return () => {
      observer.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || open
          ? "border-b border-line bg-ink/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-[17px] font-extrabold tracking-[0.06em] text-fg"
          onClick={() => setOpen(false)}
        >
          {profile.wordmark}
          <span className="ml-1 inline-block size-1.5 rounded-full bg-volt align-middle" aria-hidden="true" />
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-line bg-night/60 p-1 backdrop-blur md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="relative">
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full bg-white/[0.08] shadow-[inset_0_0_0_1px_rgb(150_172_224/0.18)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-ink transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white active:scale-[0.97] sm:inline-flex"
          >
            Start a project
          </a>
          <button
            ref={menuButton}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 72px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-ink md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pt-6 pb-10">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.4 }}
                >
                  <a
                    ref={i === 0 ? firstLink : undefined}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-line py-4 font-display text-3xl font-bold tracking-tight text-fg"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-6">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-volt px-6 py-4 font-semibold text-white"
                >
                  Start a project
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
