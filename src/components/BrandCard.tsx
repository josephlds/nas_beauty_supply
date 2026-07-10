import type { Company } from "@/data/companies";
import SitePreview from "./SitePreview";

interface BrandCardProps {
  company: Company;
}

export default function BrandCard({ company }: BrandCardProps) {
  return (
    <a
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: company.tint,
        border: `1px solid ${company.accent}22`,
      }}
    >
      <SitePreview company={company} />

      <div className="flex flex-1 flex-col p-8">
        <div className="flex items-center justify-between">
          <span
            className="h-px w-8 transition-all duration-500 group-hover:w-12"
            style={{ backgroundColor: company.accent }}
          />
          <span
            className="text-[11px] tracking-[0.15em] uppercase opacity-60"
            style={{ color: company.accent }}
          >
            {company.domain}
          </span>
        </div>

        <h3
          className="mt-6 font-serif text-2xl font-light"
          style={{ color: company.accent }}
        >
          {company.name}
        </h3>
        <p
          className="mt-2 text-[11px] font-medium tracking-[0.25em] uppercase opacity-80"
          style={{ color: company.accent }}
        >
          {company.tagline}
        </p>
        <p className="mt-4 flex-1 text-[14px] leading-7 text-muted">
          {company.description}
        </p>

        <div
          className="mt-6 flex items-center gap-2 text-[13px] opacity-70 transition-opacity group-hover:opacity-100"
          style={{ color: company.accent }}
        >
          <span>Visit website</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </a>
  );
}
