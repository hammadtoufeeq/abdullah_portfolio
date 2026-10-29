import { Bot, Code2, Users } from "lucide-react";
import { experience, profile, projects, certifications } from "@/data/resume";
import Section from "./Section";

const highlights = [
  { icon: Code2, title: "Full-stack delivery", text: "MERN + Next.js apps built, tested and shipped to live client sites." },
  { icon: Bot, title: "AI integration", text: "AI-powered support chatbots and SBERT-based resume analysis." },
  { icon: Users, title: "Team player", text: "Comfortable with distributed and international teams." },
];

export default function About() {
  const stats = [
    { value: `${experience.length}`, label: "Roles" },
    { value: `${projects.length}+`, label: "Projects" },
    { value: `${certifications.length}`, label: "Certifications" },
  ];

  return (
    <Section id="about" eyebrow="01. About" title="About me">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="reveal space-y-6 lg:col-span-3">
          <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-line bg-ink-2 p-5 text-center">
                <p className="text-3xl font-bold text-accent">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <ul className="reveal space-y-4 lg:col-span-2">
          {highlights.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4 rounded-xl border border-line bg-ink-2 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="mt-1 text-sm text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
