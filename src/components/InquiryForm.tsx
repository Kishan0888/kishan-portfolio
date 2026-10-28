"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { buttonPrimary } from "./ui";
import { contact, projectTypes } from "@/data/site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

/**
 * No backend or form service is configured, so sending opens the visitor's
 * email app with a prefilled draft addressed to Kishan. Nothing is submitted
 * anywhere and no success is claimed until the visitor sends the email.
 */
export function InquiryForm() {
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const type = String(data.get("type") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Enter your name.";
    if (!email) next.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter an email address like name@company.com.";
    if (message.length < 10) next.message = "Tell me a little about the project (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }

    const subject = `Project inquiry: ${type || "New project"} — ${name}`;
    const body = `Hi Kishan,\n\n${message}\n\nProject type: ${type || "Not specified"}\nName: ${name}\nEmail: ${email}\n`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const field =
    "w-full rounded-xl border border-line-strong bg-ink/70 px-4 py-3.5 text-[15px] text-fg placeholder:text-dim transition-[border-color,box-shadow] duration-200 outline-none focus:border-volt focus:shadow-[0_0_0_4px_rgb(79_125_255/0.18)] aria-[invalid=true]:border-rose-400/70";

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5" aria-describedby={`${uid}-how`}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className="mb-2 block text-sm text-muted">
            Name
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            autoComplete="name"
            className={field}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${uid}-name-err` : undefined}
          />
          {errors.name && (
            <p id={`${uid}-name-err`} className="mt-1.5 text-[13px] text-rose-300">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className="mb-2 block text-sm text-muted">
            Email
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            className={field}
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${uid}-email-err` : undefined}
          />
          {errors.email && (
            <p id={`${uid}-email-err`} className="mt-1.5 text-[13px] text-rose-300">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor={`${uid}-type`} className="mb-2 block text-sm text-muted">
          Project type
        </label>
        <select id={`${uid}-type`} name="type" className={`${field} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239099ad' stroke-width='2.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[position:right_1rem_center] bg-no-repeat pr-10`} defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${uid}-message`} className="mb-2 block text-sm text-muted">
          Message
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={5}
          className={`${field} resize-y`}
          placeholder="What are you building, and what do you need help with?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${uid}-message-err` : undefined}
        />
        {errors.message && (
          <p id={`${uid}-message-err`} className="mt-1.5 text-[13px] text-rose-300">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id={`${uid}-how`} className="max-w-[38ch] text-[13px] leading-relaxed text-dim">
          This opens your email app with the message filled in, ready for you to send.
        </p>
        <button type="submit" className={buttonPrimary}>
          <Mail className="size-4" aria-hidden="true" />
          Open email draft
        </button>
      </div>

      <div aria-live="polite">
        {opened && (
          <div className="flex flex-col gap-3 rounded-xl border border-line-strong bg-deep/70 p-4 text-[14px] text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              Your email app should now show the draft. If nothing opened, email{" "}
              <span className="text-fg">{contact.email}</span> directly.
            </p>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-fg transition-colors hover:border-volt-soft/60"
            >
              {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
              {copied ? "Copied" : "Copy address"}
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
