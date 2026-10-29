import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/resume";
import Section from "./Section";

export default function Credentials() {
  return (
    <Section id="credentials" eyebrow="05. Credentials" title="Education & certifications">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="reveal rounded-xl border border-accent/30 bg-ink-2 p-6">
          <GraduationCap className="h-8 w-8 text-accent" />
          <h3 className="mt-5 text-lg font-semibold">{education.degree}</h3>
          <p className="mt-1 text-muted">{education.school}</p>
          <p className="mt-4 font-mono text-sm text-accent">{education.period}</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          {certifications.map((c) => (
            <li key={c.title} className="reveal flex gap-4 rounded-xl border border-line bg-ink-2 p-5">
              <Award className="h-6 w-6 shrink-0 text-accent" />
              <div>
                <p className="font-medium">{c.title}</p>
                <p className="mt-1 text-sm text-muted">{c.issuer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
