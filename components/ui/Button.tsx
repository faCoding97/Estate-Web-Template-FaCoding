import { cn } from "../../lib/utils";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary"|"ghost" };

export default function Button({ className, variant="primary", ...props }: Props) {
  const base = "inline-flex items-center justify-center px-4 py-2 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = variant === "primary"
    ? "bg-[var(--brand)] text-white hover:opacity-90 focus:ring-[var(--brand)]"
    : "bg-transparent text-[var(--brand)] hover:bg-[var(--brand)]/10 focus:ring-[var(--brand)]";
  return <button className={cn(base, styles, className)} {...props} />;
}