import Image from "next/image";
import type { Company } from "@/data/companies";

interface BrandShowcaseProps {
  company: Company;
  reverse?: boolean;
}

export default function BrandShowcase({
  company,
  reverse = false,
}: BrandShowcaseProps) {
  return (
    <article className="grid items-center gap-10 border-t border-border py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
      <div
        className={`relative aspect-[4/5] overflow-hidden bg-stone sm:aspect-[5/6] ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={company.image}
          alt={company.imageAlt}
          fill
          className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <div className="relative mb-8 h-10 w-40 sm:h-12 sm:w-48">
          <Image
            src={company.logo}
            alt={company.logoAlt}
            fill
            className="object-contain object-left"
            sizes="192px"
          />
        </div>
        <p className="text-[11px] font-medium tracking-[0.25em] text-accent uppercase">
          {company.tagline}
        </p>
        <h3 className="mt-3 font-serif text-3xl tracking-tight text-ink sm:text-4xl">
          {company.name}
        </h3>
        <p className="mt-6 max-w-md text-[15px] leading-7 text-muted">
          {company.description}
        </p>
        <a
          href={company.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-3 border-b border-ink/30 pb-1 text-[12px] font-medium tracking-[0.2em] text-ink uppercase transition-colors hover:border-accent hover:text-accent"
        >
          Visit {company.name}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </article>
  );
}
