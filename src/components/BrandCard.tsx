import type { Company } from "@/data/companies";

interface BrandCardProps {
  company: Company;
  index: number;
}

export default function BrandCard({ company, index }: BrandCardProps) {
  return (
    <a
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-200/50"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className="mb-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-16"
        style={{ backgroundColor: company.accent }}
      />
      <h3 className="font-serif text-2xl text-stone-900">{company.name}</h3>
      <p
        className="mt-1 text-sm font-medium tracking-wide uppercase"
        style={{ color: company.accent }}
      >
        {company.tagline}
      </p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">
        {company.description}
      </p>
      <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-6">
        <span className="text-sm text-stone-500">{company.domain}</span>
        <span className="flex items-center gap-1 text-sm font-medium text-stone-900 transition-transform group-hover:translate-x-1">
          Visit site
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
