import FadeIn from "./FadeIn";

// Centered section title with the dashed orange connector line from the reference design
export default function SectionTitle({ title, text }: { title: string; text: string }) {
  return (
    <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
      <span className="mx-auto mb-5 block h-12 w-px bg-[repeating-linear-gradient(to_bottom,var(--color-orange)_0_6px,transparent_6px_12px)]" />
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{text}</p>
    </FadeIn>
  );
}
