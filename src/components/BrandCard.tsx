import Image from "next/image";
import type { Company } from "@/data/companies";

interface BrandCardProps {
  company: Company;
}

export default function BrandCard({ company }: BrandCardProps) {
  return (
    <a
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden border border-border bg-surface transition-colors duration-500 hover:border-accent/30"
    >
          <div className="relative aspect-[4/3] overflow-hidden bg-accent-light/30">
        <Image
          src={company.image}
          alt={company.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className="absolute inset-0 opacity-20 mix-blend-multiply"
          style={{ backgroundColor: company.accent }}
        />
      </div>

      <div className="flex flex-1 flex-col p-8" style={{ backgroundColor: company.tint }}>
        <div className="flex items-center justify-between">
          <span
            className="h-px w-8 transition-all duration-500 group-hover:w-12"
            style={{ backgroundColor: company.accent }}
          />
          <span className="text-[11px] tracking-[0.15em] text-muted uppercase">
            {company.domain}
          </span>
        </div>

        <h3 className="mt-6 font-serif text-2xl font-light text-foreground">
          {company.name}
        </h3>
        <p
          className="mt-2 text-[11px] font-medium tracking-[0.25em] uppercase"
          style={{ color: company.accent }}
        >
          {company.tagline}
        </p>
        <p className="mt-4 flex-1 text-[14px] leading-7 text-muted">
          {company.description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-[13px] text-foreground/70 transition-colors group-hover:text-accent">
          <span>Visit website</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </a>
  );
}
