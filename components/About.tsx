import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faFolderOpen, faGraduationCap, faLaptopCode, faRobot, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { certifications, education, experience, profile, projects } from "@/data/resume";
import Counter from "./Counter";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import Window from "./Window";

const highlights = [
  { icon: faLaptopCode, title: "Full-stack delivery", text: "MERN + Next.js features built, tested and shipped to live client sites." },
  { icon: faRobot, title: "AI integration", text: "AI-powered support chatbots and SBERT-based resume analysis." },
  { icon: faUsers, title: "Team player", text: "Comfortable with distributed and international teams." },
];

export default function About() {
  const stats = [
    { icon: faCodeBranch, value: experience.length, suffix: "", label: "roles" },
    { icon: faFolderOpen, value: projects.length, suffix: "+", label: "projects" },
    { icon: faGraduationCap, value: certifications.length, suffix: "", label: "certs" },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading index="01" file="about" title="cat README.md" />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <FadeIn>
          <Window title="README.md" bodyClassName="p-6 sm:p-8">
            <p className="flex items-center gap-2 font-mono text-sm text-muted">
              <FontAwesomeIcon icon={faMarkdown} className="h-4 w-4 text-mint" /> README.md
            </p>
            <h3 className="mt-4 font-mono text-2xl font-bold">
              <span className="text-mint"># </span>
              {profile.name}
            </h3>
            <p className="mt-4 leading-relaxed text-muted">{profile.summary}</p>

            <h4 className="mt-8 font-mono font-semibold">
              <span className="text-mint">## </span>education
            </h4>
            <div className="mt-3 rounded-lg border-l-2 border-mint bg-surface px-4 py-3 font-mono text-sm">
              <p className="text-fg">{education.degree}</p>
              <p className="text-muted">
                {education.school} <span className="text-mint">·</span> {education.period}
              </p>
            </div>
          </Window>
        </FadeIn>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08}>
                <div className="group rounded-xl border border-line bg-surface p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-mint/60 hover:shadow-[0_0_30px_-12px_#2ee6a6]">
                  <FontAwesomeIcon icon={s.icon} className="h-4 w-4 text-mint" />
                  <p className="mt-2 font-mono text-3xl font-bold text-fg">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="font-mono text-xs text-muted">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {highlights.map((h, i) => (
            <FadeIn key={h.title} delay={0.1 + i * 0.08}>
              <div className="group flex gap-4 rounded-xl border border-line bg-surface p-5 transition-all duration-300 hover:border-mint/60">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line bg-bg-deep text-mint transition-all duration-300 group-hover:bg-mint group-hover:text-bg-deep">
                  <FontAwesomeIcon icon={h.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono font-semibold">{h.title}</p>
                  <p className="mt-1 text-sm text-muted">{h.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
