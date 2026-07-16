import { companies, pillars } from "@/data/companies";
import BrandShowcase from "./BrandShowcase";

export default function BrandsSection() {
  return (
    <section id="brands" className="scroll-mt-20 bg-surface">
      <div id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 pt-24 sm:pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium tracking-[0.3em] text-accent uppercase">
            About Us
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Building brands that endure
          </h2>
          <div className="mt-6 space-y-5 text-[15px] leading-7 text-muted">
            <p>
              Dedicated to acquiring and growing brands that embody innovation,
              quality, and unwavering standards. We oversee every facet of brand
              stewardship — from product development to how our brands show up
              for customers.
            </p>
            <p>
              Our mission is not just a goal; it is a relentless pursuit. Across
              nail care, professional beauty tools, and science-backed wellness,
              each brand stands on its own while sharing one foundation of
              quality.
            </p>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          {companies.map((company, index) => (
            <BrandShowcase
              key={company.domain}
              company={company}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        <div className="grid gap-10 border-t border-border pt-16 pb-8 sm:pt-20 md:grid-cols-3 md:gap-8 lg:gap-12">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center md:text-left">
              <h3 className="font-serif text-xl tracking-tight text-ink sm:text-2xl">
                {pillar.title}
              </h3>
              <p className="mt-4 text-[14px] leading-7 text-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
