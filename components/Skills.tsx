import { Cloud, Code2, Database, Palette, Server, Terminal, type LucideIcon } from "lucide-react";
import { skills } from "@/data/resume";
import Section from "./Section";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  server: Server,
  database: Database,
  terminal: Terminal,
  cloud: Cloud,
  palette: Palette,
};

export default function Skills() {
  return (
    <Section id="skills" eyebrow="04. Skills" title="My toolkit">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => {
          const Icon = icons[s.icon] ?? Code2;
          return (
            <div key={s.group} className="reveal rounded-xl border border-line bg-ink-2 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold">{s.group}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-md border border-line px-3 py-1.5 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
