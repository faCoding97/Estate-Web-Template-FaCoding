import site from "../../data/site.json";
import { cn, formatCurrencyZAR } from "../../lib/utils";

export const dynamic = "force-static";

function ListingCard({ l }: { l: (typeof site.listings)[number] }) {
  const price =
    l.status === "For Sale"
      ? l.priceZAR != null
        ? formatCurrencyZAR(l.priceZAR)
        : "Price on request"
      : l.rentPerMonthZAR != null
        ? `${formatCurrencyZAR(l.rentPerMonthZAR)} / month`
        : "Rent on request";
  return (
    <article className="rounded-2xl overflow-hidden bg-white shadow-soft card-hover reveal">
      <img src={l.image} alt={l.title} className="w-full h-56 object-cover" />
      <div className="p-4 grid gap-3">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-2 py-1 text-xs rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
            {l.status}
          </span>
          <span className="text-sm text-gray-500">{l.suburb}</span>
        </div>
        <h3 className="text-lg font-semibold leading-snug">{l.title}</h3>
        <div className="text-[var(--brand)] font-bold text-xl">{price}</div>
        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          {l.bedrooms ? <span>🛏 {l.bedrooms} bed</span> : null}
          {l.bathrooms ? <span>🛁 {l.bathrooms} bath</span> : null}
          {l.parking ? <span>🚗 {l.parking} parking</span> : null}
          {l.areaSqm ? <span>📐 {l.areaSqm} m²</span> : null}
        </div>
        <a
          href="/#contact"
          className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[var(--brand)] text-white hover:opacity-90 transition">
          View details
        </a>
      </div>
    </article>
  );
}

export default function ListingsPage() {
  return (
    <div className="py-[--sectionY]">
      <div className="mx-auto max-w-[--container] px-4">
        <div className="section-panel mb-8">
          <header>
            <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
              All Listings
            </h1>
            <p className="text-gray-600">
              Browse sales and rentals across Gqeberha (Port Elizabeth).
            </p>
            <div className="section-divider" />
          </header>
        </div>
        <div className="section-panel">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.listings.map((l) => (
              <ListingCard key={l.id} l={l} />
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-8">
          Disclaimer: Prices, availability and details are subject to change
          without notice. Images may be illustrative. This is not legal or
          financial advice.
        </p>
      </div>
    </div>
  );
}
