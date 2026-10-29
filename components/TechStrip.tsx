import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faCss3Alt, faFigma, faGitAlt, faHtml5, faJs, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faLayerGroup, faServer, faWind } from "@fortawesome/free-solid-svg-icons";

const items = [
  { icon: faReact, label: "react" },
  { icon: faLayerGroup, label: "next" },
  { icon: faNodeJs, label: "node" },
  { icon: faServer, label: "express" },
  { icon: faDatabase, label: "mongodb" },
  { icon: faJs, label: "javascript" },
  { icon: faCode, label: "typescript" },
  { icon: faWind, label: "tailwindcss" },
  { icon: faPython, label: "python" },
  { icon: faAws, label: "aws" },
  { icon: faGitAlt, label: "git" },
  { icon: faFigma, label: "figma" },
  { icon: faHtml5, label: "html5" },
  { icon: faCss3Alt, label: "css3" },
];

export default function TechStrip() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-bg-deep py-5">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg-deep to-transparent" />
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center font-mono text-sm" aria-hidden={copy === 1}>
            {items.map((it) => (
              <li key={it.label} className="group flex items-center gap-2.5 px-7 text-muted transition-colors hover:text-mint">
                <FontAwesomeIcon icon={it.icon} className="h-5 w-5 text-mint/70 transition-colors group-hover:text-mint" />
                <span>
                  <span className="text-mint/50">import</span> {it.label}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
