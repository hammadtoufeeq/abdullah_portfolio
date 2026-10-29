import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center font-mono text-xs text-muted">
      <p>
        Designed &amp; built by <span className="text-accent">{profile.name}</span> · Next.js + Tailwind CSS
      </p>
      <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}
