import FadeIn from "./FadeIn";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  italic,
  light = false,
}: {
  index: string;
  eyebrow: string;
  title: string;
  italic?: string;
  light?: boolean;
}) {
  return (
    <FadeIn className="mb-14">
      <p className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] ${light ? "text-sand" : "text-terra"}`}>
        <span>{index}</span>
        <span className={`h-px w-10 ${light ? "bg-sand" : "bg-terra"}`} />
        <span>{eyebrow}</span>
      </p>
      <h2 className={`mt-4 font-serif text-4xl font-semibold leading-tight sm:text-6xl ${light ? "text-sand" : "text-ink"}`}>
        {title} {italic && <em className={`font-normal ${light ? "text-sand-dark" : "text-terra"}`}>{italic}</em>}
      </h2>
    </FadeIn>
  );
}
