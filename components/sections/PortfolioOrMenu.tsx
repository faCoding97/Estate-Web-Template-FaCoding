import site from "../../data/site.json";
import { formatCurrencyZAR } from "../../lib/utils";
import Reveal from "../widgets/Reveal.client";

export default function ListingsSection({
  featuredOnly = false,
}: {
  featuredOnly?: boolean;
}) {
  const items = featuredOnly ? site.listings.slice(0, 6) : site.listings;
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((l) => {
          const price =
            l.status === "For Sale"
              ? l.priceZAR != null
                ? formatCurrencyZAR(l.priceZAR)
                : "Price on request"
              : l.rentPerMonthZAR != null
                ? `${formatCurrencyZAR(l.rentPerMonthZAR)} / month`
                : "Rent on request";
          return (
            <Reveal key={l.id}>
              <article className="bg-white rounded-2xl overflow-hidden shadow-soft card-hover">
                <img
                  src={l.image}
                  alt={l.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 grid gap-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2 py-1 text-xs rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
                      {l.status}
                    </span>
                    <span className="text-sm text-gray-500">{l.suburb}</span>
                  </div>
                  <h3 className="font-semibold">{l.title}</h3>
                  <div className="text-[var(--brand)] font-bold">{price}</div>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    {l.bedrooms ? <span>🛏 {l.bedrooms} bed</span> : null}
                    {l.bathrooms ? <span>🛁 {l.bathrooms} bath</span> : null}
                    {l.parking ? <span>🚗 {l.parking} parking</span> : null}
                    {l.areaSqm ? <span>📐 {l.areaSqm} m²</span> : null}
                  </div>
                  <a
                    href="/listings"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[var(--brand)] text-white hover:opacity-90 transition">
                    View details
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-6">
        <a
          href="/listings"
          className="inline-flex items-center px-4 py-2 rounded-xl border hover:bg-black/5">
          Browse all listings
        </a>
      </div>
    </div>
  );
}
