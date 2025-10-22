import site from "../../data/site.json";

export default function AboutPage() {
  return (
    <div className="py-[--sectionY]">
      <div className="mx-auto max-w-[--container] px-4"><div className="section-panel prose">
        <h1>About {site.org.brandName}</h1>
        <p>
          We are a Port Elizabeth based real-estate agency specialising in sales and rentals across Summerstrand, Walmer, Humewood, Mill Park and surrounding suburbs.
          Our team combines local knowledge with professional marketing to achieve excellent results.
        </p>
      </div></div>
    </div>
  );
}