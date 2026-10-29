import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 pb-10 pt-4 text-sm text-ink-soft sm:flex-row sm:px-6">
      <p className="font-serif text-lg font-bold italic text-terra">{profile.name}</p>
      <p className="flex items-center gap-1.5">
        Built with <FontAwesomeIcon icon={faHeart} className="h-3 w-3 text-terra" /> using Next.js · © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
