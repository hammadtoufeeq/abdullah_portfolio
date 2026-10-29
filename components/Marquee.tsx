import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faCss3Alt, faFigma, faGitAlt, faHtml5, faJs, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLayerGroup, faServer, faWind } from "@fortawesome/free-solid-svg-icons";

const items = [
  { icon: faReact, label: "React" },
  { icon: faLayerGroup, label: "Next.js" },
  { icon: faNodeJs, label: "Node.js" },
  { icon: faServer, label: "Express" },
  { icon: faDatabase, label: "MongoDB" },
  { icon: faJs, label: "JavaScript" },
  { icon: faWind, label: "Tailwind" },
  { icon: faPython, label: "Python" },
  { icon: faAws, label: "AWS" },
  { icon: faGitAlt, label: "Git" },
  { icon: faFigma, label: "Figma" },
  { icon: faHtml5, label: "HTML5" },
  { icon: faCss3Alt, label: "CSS3" },
];

export default function Marquee() {
  return (
    // Outer wrapper clips the tilted band so it never causes horizontal scroll
    <div className="overflow-hidden py-4">
      <div className="relative -rotate-1 scale-x-105 overflow-hidden border-y-2 border-ink bg-terra py-5 text-sand">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {items.map((it) => (
                <li key={it.label} className="flex items-center gap-3 px-8 font-serif text-2xl italic">
                  <FontAwesomeIcon icon={it.icon} className="h-6 w-6" />
                  {it.label}
                  <span className="ml-8 text-sand-dark">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
