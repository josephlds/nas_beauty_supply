import Image from "next/image";
import { companies } from "@/data/companies";

export default function BrandLogosSection() {
  return (
    <section className="border-y border-border bg-surface py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-[11px] font-medium tracking-[0.35em] text-accent uppercase">
          Our family of brands
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-8 sm:gap-x-20">
          {companies.map((company) => (
            <a
              key={company.domain}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 max-w-[180px] items-center justify-center opacity-80 transition-opacity duration-300 hover:opacity-100 sm:h-14 sm:max-w-[220px]"
              aria-label={`Visit ${company.name}`}
            >
              <Image
                src={company.logo}
                alt={company.logoAlt}
                width={160}
                height={48}
                className="max-h-full w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
