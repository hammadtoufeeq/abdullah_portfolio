export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="reveal mb-12">
        <p className="font-mono text-sm text-accent">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
