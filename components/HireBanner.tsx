import FadeIn from "./FadeIn";

export default function HireBanner() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* dark "desk" backdrop with code lines */}
      <div className="absolute inset-0 bg-[#121212]" />
      <div className="absolute inset-0 opacity-[0.15] [background-image:repeating-linear-gradient(0deg,#fff_0_1px,transparent_1px_22px)]" />
      <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange/20 blur-[100px]" />
      <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange/10 blur-[100px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />

      <FadeIn className="relative mx-auto max-w-2xl px-4 text-center">
        <p className="text-sm text-muted">Have any project in mind?</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">I&apos;m Available for Freelancing</h2>
        <a
          href="#contact"
          className="mt-8 inline-block rounded-md bg-orange px-9 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_-10px_rgba(255,91,15,0.9)] transition-all hover:-translate-y-0.5 hover:bg-orange-hover"
        >
          Hire Me!
        </a>
      </FadeIn>
    </section>
  );
}
