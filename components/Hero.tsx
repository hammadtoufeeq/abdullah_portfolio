import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/data/resume";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/70 px-3 py-1 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to opportunities
          </span>

          <p className="mt-8 font-mono text-accent">Hi, my name is</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-7xl">{profile.name}.</h1>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-muted sm:text-5xl">
            {profile.role} <span className="text-accent">({profile.stack})</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.tagline}</p>

          <p className="mt-4 flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" /> {profile.location}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-ink transition hover:brightness-110"
            >
              View my work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3 font-semibold text-fg transition hover:border-accent hover:text-accent"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <div className="flex items-center gap-2">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-md p-3 text-muted transition hover:text-accent">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-md p-3 text-muted transition hover:text-accent">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
