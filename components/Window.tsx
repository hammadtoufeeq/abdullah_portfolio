// macOS-style editor / terminal window chrome
export default function Window({
  title,
  children,
  className = "",
  bodyClassName = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-bg-deep shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
        <span className="h-3 w-3 rounded-full bg-mint/80" />
        <span className="ml-3 truncate font-mono text-xs text-muted">{title}</span>
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
