import { cn } from "../../lib/utils";

export default function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("bg-white rounded-2xl shadow-soft card-hover", className)}>{children}</div>;
}