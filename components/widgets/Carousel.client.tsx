"use client";
import { useEffect, useRef, useState } from "react";
import site from "../../data/site.json";

type Slide = (typeof site.hero.slides)[number];

export default function CarouselClient({
  slides,
  height,
  qrValue,
  qrLabel = "Scan me",
}: {
  slides: Slide[];
  height?: string;
  qrValue?: string;
  qrLabel?: string;
}) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const max = slides.length;

  const go = (i: number) => setIndex((prev) => (i + max) % max);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  useEffect(() => {
    if (prefersReduced) return;
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(
      () => setIndex((i) => (i + 1) % max),
      5500
    );
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [max, prefersReduced]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  // Pause on hover
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || prefersReduced) return;
    const onEnter = () => {
      if (timer.current) {
        window.clearInterval(timer.current);
        timer.current = null;
      }
    };
    const onLeave = () => {
      timer.current = window.setInterval(
        () => setIndex((i) => (i + 1) % max),
        5500
      );
    };
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [max, prefersReduced]);

  return (
    <div ref={wrapRef} className="relative group">
      <div
        className="overflow-hidden rounded-2xl"
        style={{ height: height || "min(60vh, 560px)" }}>
        <div
          className="flex h-full transition-transform duration-700 ease-softer"
          style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((s, i) => (
            <div key={i} className="min-w-full h-full relative">
              <img
                src={s.image}
                alt={s.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative h-full flex items-center">
                <div className="mx-auto max-w-[--container] px-4 text-white">
                  {s.eyebrow ? (
                    <p className="text-sm mb-2 opacity-90">{s.eyebrow}</p>
                  ) : null}
                  <h1 className="text-3xl sm:text-5xl font-bold max-w-2xl">
                    {s.title}
                  </h1>
                  {s.description ? (
                    <p className="mt-3 max-w-xl opacity-90">{s.description}</p>
                  ) : null}
                  {s.primaryCta ? (
                    <a
                      href={s.primaryCta.href}
                      className="inline-flex mt-6 px-5 py-3 rounded-xl bg-[var(--accent)] text-gray-900 hover:opacity-90">
                      {s.primaryCta.label}
                    </a>
                  ) : null}
                </div>
              </div>

              {/* QR داخل اسلایدر */}
            </div>
          ))}
        </div>
      </div>

      {/* کنترل‌های حرفه‌ای: زون‌های لبه با گرادینت و آیکن */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute inset-y-0 left-0 w-[18%] sm:w-[22%] cursor-pointer
                   bg-gradient-to-r from-black/25 to-transparent opacity-0 group-hover:opacity-100
                   transition-opacity duration-300 focus:opacity-100">
        <span
          className="absolute left-3 top-1/2 -translate-y-1/2 inline-grid place-items-center
                     h-10 w-10 rounded-full bg-white/90 backdrop-blur ring-1 ring-black/10 shadow">
          {/* Chevron Left */}
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M15 18l-6-6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </span>
      </button>

      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute inset-y-0 right-0 w-[18%] sm:w-[22%] cursor-pointer
                   bg-gradient-to-l from-black/25 to-transparent opacity-0 group-hover:opacity-100
                   transition-opacity duration-300 focus:opacity-100">
        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 inline-grid place-items-center
                     h-10 w-10 rounded-full bg-white/90 backdrop-blur ring-1 ring-black/10 shadow">
          {/* Chevron Right */}
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M9 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </span>
      </button>

      {/* بولت‌ها */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            aria-pressed={i === index}
            onClick={() => go(i)}
            className={
              "h-2.5 w-2.5 rounded-full ring-1 ring-white/70 " +
              (i === index ? "bg-white" : "bg-white/40")
            }
          />
        ))}
      </div>
    </div>
  );
}
