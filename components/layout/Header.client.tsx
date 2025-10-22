'use client';
import Link from "next/link";
import site from "../../data/site.json";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  const nav = site.nav.filter((n, i) => i < 4); // strictly minimal: 3-4 items

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[var(--bg)]/80 border-b border-black/5">
      <div className="mx-auto max-w-[--container] px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo/logo.png" alt={site.org.brandName} className="h-8 w-8 object-contain" />
          <span className="font-semibold">{site.org.brandName}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm hover:text-[var(--brand)] transition">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border"
          onClick={() => setOpen((o) => !o)}>
          <span className="i">☰</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-[var(--bg)]">
          <div className="mx-auto max-w-[--container] px-4 py-4 grid gap-3">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="py-2" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}