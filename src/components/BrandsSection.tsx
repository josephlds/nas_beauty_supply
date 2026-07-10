import { companies } from "@/data/companies";
import BrandCard from "./BrandCard";

export default function BrandsSection() {
  return (
    <section id="brands" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-medium tracking-[0.35em] text-accent uppercase">
              Portfolio
            </p>
            <h2 className="mt-4 font-serif text-3xl font-light tracking-tight text-foreground sm:text-4xl">
              Our brands
            </h2>
          </div>
          <p className="max-w-xs text-[14px] leading-7 text-muted">
            Each brand stands on its own — click a card to visit the live
            website. Previews show the actual storefront.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <BrandCard key={company.domain} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
