export default function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center px-2 py-1 text-xs rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">{children}</span>;
}