import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCodeBranch, faHeart } from "@fortawesome/free-solid-svg-icons";
import { profile } from "@/data/resume";

// VS Code-style status bar used as the footer
export default function StatusBar() {
  return (
    <footer className="border-t border-line bg-surface font-mono text-[11px] text-muted">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5 text-mint">
            <FontAwesomeIcon icon={faCodeBranch} className="h-3 w-3" /> main
          </span>
          <span className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faCircleCheck} className="h-3 w-3 text-mint" /> 0 errors
          </span>
        </div>
        <span className="flex items-center gap-1.5">
          © {new Date().getFullYear()} {profile.name} · built with <FontAwesomeIcon icon={faHeart} className="h-3 w-3 text-mint" /> Next.js
        </span>
        <span className="hidden sm:inline">UTF-8 · TypeScript</span>
      </div>
    </footer>
  );
}
