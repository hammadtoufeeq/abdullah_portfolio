import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { profile } from "@/data/resume";

// Social icons in their original brand colours (GitHub uses its white mark for dark backgrounds)
const socials = [
  { label: "GitHub", href: profile.github, icon: faGithub, color: "#ffffff", hoverText: "#0a0a0a" },
  { label: "LinkedIn", href: profile.linkedin, icon: faLinkedinIn, color: "#0A66C2", hoverText: "#ffffff" },
  { label: "Email", href: `mailto:${profile.email}`, icon: faEnvelope, color: "#EA4335", hoverText: "#ffffff" },
];

export default function SocialLinks({ size = "md" }: { size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-11 w-11" : "h-10 w-10";
  return (
    <>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={s.label}
          style={{ "--brand": s.color, "--brand-text": s.hoverText } as React.CSSProperties}
          className={`flex ${box} items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--brand)_45%,transparent)] bg-[color-mix(in_srgb,var(--brand)_10%,transparent)] text-[var(--brand)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--brand)] hover:text-[var(--brand-text)] hover:shadow-[0_10px_25px_-8px_var(--brand)]`}
        >
          <FontAwesomeIcon icon={s.icon} className="h-4 w-4" />
        </a>
      ))}
    </>
  );
}
