import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faLaptopCode, faRobot, faUsers } from "@fortawesome/free-solid-svg-icons";
import { certifications, education, experience, profile, projects } from "@/data/resume";
import Counter from "./Counter";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const highlights = [
  { icon: faLaptopCode, title: "Full-stack delivery", text: "MERN + Next.js features built, tested and shipped to live client sites." },
  { icon: faRobot, title: "AI integration", text: "AI-powered support chatbots and SBERT-based resume analysis." },
  { icon: faUsers, title: "Team player", text: "Comfortable working with distributed and international teams." },
];

export default function About() {
  const stats = [
    { value: experience.length, suffix: "", label: "Roles held" },
    { value: projects.length, suffix: "+", label: "Projects built" },
    { value: certifications.length, suffix: "", label: "Certifications" },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-36">
      <SectionHeading index="01" eyebrow="About" title="A little" italic="about me" />

      <div className="grid gap-5 md:grid-cols-6">
        <FadeIn className="md:col-span-4">
          <div className="h-full rounded-[2rem] bg-sand-light p-8 ring-1 ring-sand-dark sm:p-10">
            <p className="font-serif text-2xl leading-snug text-ink sm:text-3xl">
              I turn ideas into <em className="text-terra">fast, reliable</em> web products.
            </p>
            <p className="mt-6 leading-relaxed text-ink-soft">{profile.summary}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="md:col-span-2">
          <div className="flex h-full flex-col justify-between rounded-[2rem] bg-terra p-8 text-sand">
            <FontAwesomeIcon icon={faGraduationCap} className="h-9 w-9" />
            <div className="mt-10">
              <p className="font-mono text-xs uppercase tracking-widest text-sand-dark">{education.period}</p>
              <p className="mt-2 font-serif text-2xl font-semibold">{education.degree}</p>
              <p className="mt-1 text-sand/85">{education.school}</p>
            </div>
          </div>
        </FadeIn>

        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={0.1 * i} className="md:col-span-2">
            <div className="group rounded-[2rem] border-2 border-ink p-8 transition-colors duration-500 hover:bg-ink">
              <p className="font-serif text-6xl font-semibold text-terra transition-colors duration-500 group-hover:text-sand">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors duration-500 group-hover:text-sand-dark">
                {s.label}
              </p>
            </div>
          </FadeIn>
        ))}

        {highlights.map((h, i) => (
          <FadeIn key={h.title} delay={0.1 * i} className="md:col-span-2">
            <div className="group h-full rounded-[2rem] bg-sand-light p-8 ring-1 ring-sand-dark transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-24px_rgba(58,26,16,0.5)]">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terra/10 text-terra transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-terra group-hover:text-sand">
                <FontAwesomeIcon icon={h.icon} className="h-5 w-5" />
              </span>
              <p className="mt-6 text-lg font-semibold">{h.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{h.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
