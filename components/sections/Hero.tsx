// Hero.tsx
import site from "../../data/site.json";
import CarouselClient from "../widgets/Carousel.client";
import QrCode from "../widgets/QrCode.client";

export default function Hero() {
  return (
    <section className="py-4">
      <div className="mx-auto max-w-[--container] px-4">
        <div className="section-panel p-4">
          <CarouselClient
            slides={site.hero.slides}
            height={site.layout.sliderHeight}
          />
        </div>
      </div>
    </section>
  );
}
