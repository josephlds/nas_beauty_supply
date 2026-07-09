import { companies } from "@/data/companies";
import BrandCard from "./BrandCard";

export default function BrandsSection() {
  return (
    <section id="brands" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.3em] text-stone-500 uppercase">
            Our Portfolio
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-stone-900 sm:text-5xl">
            Brands under NAS Beauty Supply
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            Each brand operates independently while sharing our commitment to
            excellence. Click any brand to visit their website.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company, index) => (
            <BrandCard key={company.domain} company={company} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
