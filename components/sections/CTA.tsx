import site from "../../data/site.json";
import QrCode from "../widgets/QrCode.client";
import MapEmbed from "../widgets/MapEmbed.client";

export default function CTA() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="bg-white rounded-2xl p-6 shadow-soft card-hover">
        <p className="text-gray-600">Ready to view a property?</p>
        <h3 className="text-xl font-semibold mt-1">Contact us</h3>
        <div className="mt-4 text-gray-700 grid gap-1">
          <p><strong>Phone:</strong> <a className="underline" href={`tel:${site.contact.phone}`}>{site.contact.phone}</a></p>
          {site.contact.whatsapp ? <p><strong>WhatsApp:</strong> <a className="underline" href={`https://wa.me/${site.contact.whatsapp}`}>{site.contact.whatsapp}</a></p> : null}
          <p><strong>Email:</strong> <a className="underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>
          <p><strong>Address:</strong> {site.contact.address}</p>
        </div>
        <div className="mt-6">
          <QrCode value={site.org.domain + site.routes.listingsRoot} />
        </div>
      </div>
      <div>
        <MapEmbed
          embedSrc={site.contact.mapEmbedSrc}
          query={site.contact.mapQuery}
          title="Map — Estate Elixflare"
          className="w-full"
        />
      </div>
    </div>
  )
}