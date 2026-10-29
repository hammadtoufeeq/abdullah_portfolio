import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { profile } from "@/data/resume";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6">
        <Logo />
        <p className="max-w-md text-sm text-muted">{profile.tagline}</p>
        <div className="flex gap-3">
          {[
            { href: profile.github, icon: faGithub, label: "GitHub" },
            { href: profile.linkedin, icon: faLinkedinIn, label: "LinkedIn" },
            { href: `mailto:${profile.email}`, icon: faEnvelope, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-white/80 ring-1 ring-line transition-all hover:-translate-y-1 hover:bg-orange hover:text-white hover:ring-orange"
            >
              <FontAwesomeIcon icon={s.icon} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
