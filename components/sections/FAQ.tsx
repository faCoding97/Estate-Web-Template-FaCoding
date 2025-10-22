import site from "../../data/site.json";
import Reveal from "../widgets/Reveal.client";

export default function FAQ() {
  const items = site.faq.slice(0, 6);
  return (
    <div className="grid gap-4">
      {items.map((f, i) => (
        <Reveal key={i}>
          <details className="bg-white rounded-2xl p-4 shadow-soft card-hover">
            <summary className="font-medium cursor-pointer">{f.q}</summary>
            <p className="text-gray-700 mt-2">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  )
}