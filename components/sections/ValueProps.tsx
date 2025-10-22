import site from "../../data/site.json";
import Reveal from "../widgets/Reveal.client";

export default function ValueProps() {
  const items = site.valueProps.slice(0, 3);
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {items.map((it, i) => (
        <Reveal key={i}>
          <div className="bg-white rounded-2xl p-6 shadow-soft card-hover h-full">
            <h3 className="font-semibold text-lg">{it.title}</h3>
            <p className="text-gray-600 mt-2">{it.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}