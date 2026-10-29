import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faAward } from "@fortawesome/free-solid-svg-icons";
import { certifications } from "@/data/resume";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export default function Credentials() {
  return (
    <section id="credentials" className="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-36">
      <SectionHeading index="05" eyebrow="Credentials" title="Certifications" italic="& learning" />
      <ul className="border-t-2 border-ink">
        {certifications.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.06} y={16}>
            <li className="group relative flex items-center gap-5 overflow-hidden border-b border-sand-dark py-6">
              <span className="absolute inset-0 -translate-x-full bg-terra transition-transform duration-500 ease-out group-hover:translate-x-0" />
              <span className="relative w-10 font-mono text-sm text-terra transition-colors duration-500 group-hover:text-sand sm:pl-4">
                0{i + 1}
              </span>
              <FontAwesomeIcon
                icon={faAward}
                className="relative h-6 w-6 text-terra transition-all duration-500 group-hover:scale-110 group-hover:text-sand"
              />
              <div className="relative flex-1">
                <p className="font-serif text-xl font-semibold transition-colors duration-500 group-hover:text-sand sm:text-2xl">{c.title}</p>
                <p className="text-sm text-ink-soft transition-colors duration-500 group-hover:text-sand-dark">{c.issuer}</p>
              </div>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="relative mr-4 hidden -translate-x-4 text-sand opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 sm:block"
              />
            </li>
          </FadeIn>
        ))}
      </ul>
    </section>
  );
}
