import { companies } from "@/data/companies";
import BrandShowcase from "./BrandShowcase";

export default function BrandsSection() {
  return (
    <section id="brands" className="scroll-mt-20 bg-surface">
      <div className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium tracking-[0.3em] text-accent uppercase">
            Our Brands
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            A portfolio built with purpose
          </h2>
          <p className="mt-6 text-[15px] leading-7 text-muted">
            We are dedicated to brands that embody innovation, inclusivity, and
            unwavering standards. From premium nail care to professional tools
            and science-backed wellness — each brand stands on its own while
            sharing one foundation of quality.
          </p>
        </div>

        <div className="mt-6">
          {companies.map((company, index) => (
            <BrandShowcase
              key={company.domain}
              company={company}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
