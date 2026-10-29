import { experience } from "@/data/resume";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02. Experience" title="Where I've worked">
      <ol className="relative ml-2 border-l border-line">
        {experience.map((job) => (
          <li key={job.company} className="reveal relative pb-12 pl-8 last:pb-0">
            <span
              className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                job.current ? "border-accent bg-accent shadow-[0_0_12px_#22d3ee]" : "border-accent bg-ink"
              }`}
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-semibold">
                {job.role} <span className="text-accent">@ {job.company}</span>
              </h3>
              <p className="font-mono text-sm text-muted">{job.period}</p>
            </div>
            <ul className="mt-4 space-y-2">
              {job.points.map((p) => (
                <li key={p} className="flex gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
