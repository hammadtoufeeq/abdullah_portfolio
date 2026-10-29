import FadeIn from "./FadeIn";

// Code-comment style section title, e.g.  02. // experience  →  git log --career
export default function SectionHeading({ index, file, title }: { index: string; file: string; title: string }) {
  return (
    <FadeIn className="mb-12">
      <p className="font-mono text-sm text-muted">
        <span className="text-mint">{index}.</span> {"// "}
        {file}
      </p>
      <h2 className="mt-3 flex items-center gap-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="text-mint">&gt;</span>
        {title}
        <span className="hidden h-px flex-1 bg-gradient-to-r from-line to-transparent sm:block" />
      </h2>
    </FadeIn>
  );
}
