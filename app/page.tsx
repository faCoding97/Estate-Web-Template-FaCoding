import site from "../data/site.json";
import Hero from "../components/sections/Hero";
import ValueProps from "../components/sections/ValueProps";
import ListingsSection from "../components/sections/PortfolioOrMenu";
import Features from "../components/sections/Features";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";

export default function Page() {
  return (
    <>
      <Hero />
      <section id="why-us" aria-labelledby="why-us-heading" className="anchor-section py-[--sectionY]">
        <div className="mx-auto max-w-[--container] px-4">
          <div className="section-panel">
            <h2 id="why-us-heading" className="section-title">Why Work With Us</h2>
            <div className="section-divider" />
            <div className="mt-6"><ValueProps /></div>
          </div>
        </div>
      </section>

      <section id="listings" aria-labelledby="listings-heading" className="anchor-section py-[--sectionY] bg-white/70">
        <div className="mx-auto max-w-[--container] px-4">
          <div className="section-panel">
            <h2 id="listings-heading" className="section-title">Featured Listings</h2>
            <div className="section-divider" />
            <div className="mt-6"><ListingsSection featuredOnly /></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="features-heading" className="anchor-section py-[--sectionY]">
        <div className="mx-auto max-w-[--container] px-4">
          <div className="section-panel">
            <h2 id="features-heading" className="section-title">Our Services</h2>
            <div className="section-divider" />
            <div className="mt-6"><Features /></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="testimonials-heading" className="anchor-section py-[--sectionY] bg-white/70">
        <div className="mx-auto max-w-[--container] px-4">
          <div className="section-panel">
            <h2 id="testimonials-heading" className="section-title">What Clients Say</h2>
            <div className="section-divider" />
            <div className="mt-6"><Testimonials /></div>
          </div>
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-heading" className="anchor-section py-[--sectionY]">
        <div className="mx-auto max-w-[--container] px-4">
          <div className="section-panel">
            <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
            <div className="section-divider" />
            <div className="mt-6"><FAQ /></div>
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-heading" className="anchor-section py-[--sectionY] bg-white/70">
        <div className="mx-auto max-w-[--container] px-4">
          <div className="section-panel">
            <h2 id="contact-heading" className="section-title">Book a Viewing</h2>
            <div className="section-divider" />
            <div className="mt-6"><CTA /></div>
          </div>
        </div>
      </section>
    </>
  );
}