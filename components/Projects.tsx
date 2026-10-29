import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { projects } from "@/data/resume";
import { GithubIcon } from "./BrandIcons";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03. Projects" title="Things I've built">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`reveal group flex flex-col rounded-xl border bg-ink-2 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/60 ${
              p.featured ? "border-accent/30" : "border-line"
            }`}
          >
            <div className="flex items-center justify-between">
              <FolderGit2 className="h-8 w-8 text-accent" />
              <div className="flex items-center gap-3 text-muted">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.title} source code`} className="hover:text-accent">
                    <GithubIcon className="h-5 w-5" />
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`} className="hover:text-accent">
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-accent">{p.type}</p>
            <h3 className="mt-2 text-lg font-semibold transition-colors group-hover:text-accent">{p.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="rounded-full bg-ink-3 px-2.5 py-1 font-mono text-xs text-muted">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
