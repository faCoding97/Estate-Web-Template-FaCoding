import site from "../../data/site.json";
import Reveal from "../widgets/Reveal.client";

export default function Testimonials() {
  const items = site.testimonials.slice(0, 3);
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {items.map((t, i) => (
        <Reveal key={i}>
          <figure className="bg-white rounded-2xl p-6 shadow-soft card-hover h-full">
            <blockquote className="text-gray-700">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-gray-500">— {t.name}{t.role ? `, ${t.role}` : ""}</figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  )
}