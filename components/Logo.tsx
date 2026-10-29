// "Abdullah" wordmark — the second "a" is set in orange bars, echoing the "Cod≡r" style
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" aria-label="Abdullah — home" className={`flex items-center text-2xl font-bold tracking-tight ${className}`}>
      Abdull
      <span className="mx-[2px] inline-flex h-[0.62em] w-[0.5em] flex-col justify-between" aria-hidden="true">
        <span className="h-[3px] bg-orange" />
        <span className="h-[3px] bg-orange" />
        <span className="h-[3px] bg-orange" />
      </span>
      h
    </a>
  );
}
