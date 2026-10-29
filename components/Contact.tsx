import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/resume";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Contact() {
  const items = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: profile.location },
  ];

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
      <div className="reveal">
        <p className="font-mono text-sm text-accent">06. What&apos;s next?</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Let&apos;s work together</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          I&apos;m open to full-time roles, internships and freelance projects. Whether you have a question or just
          want to say hi, my inbox is always open.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-flex items-center gap-2 rounded-md bg-accent px-8 py-4 font-semibold text-ink transition hover:brightness-110"
        >
          <Mail className="h-5 w-5" /> Say hello
        </a>

        <ul className="mt-12 flex flex-col items-center justify-center gap-4 text-sm text-muted sm:flex-row sm:gap-8">
          {items.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              {href ? (
                <a href={href} className="inline-flex items-center gap-2 break-all transition-colors hover:text-accent">
                  <Icon className="h-4 w-4 shrink-0 text-accent" /> {label}
                </a>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <Icon className="h-4 w-4 text-accent" /> {label}
                </span>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-line p-3 text-muted transition hover:border-accent hover:text-accent">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-line p-3 text-muted transition hover:border-accent hover:text-accent">
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
