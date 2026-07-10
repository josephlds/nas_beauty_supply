import { companies } from "@/data/companies";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground text-background/60">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <div>
            <p className="text-[11px] font-medium tracking-[0.25em] text-background uppercase">
              NAS Beauty Supply
            </p>
            <p className="mt-4 max-w-xs text-[13px] leading-6">
              Parent company for C Care Beauty, Felix Professional, and Vocks.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-background/40 uppercase">
                Brands
              </p>
              <ul className="mt-4 space-y-2">
                {companies.map((company) => (
                  <li key={company.domain}>
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] transition-colors hover:text-background"
                    >
                      {company.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] text-background/40 uppercase">
                Navigate
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#brands" className="text-[13px] transition-colors hover:text-background">
                    Brands
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-[13px] transition-colors hover:text-background">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-background/10 pt-8">
          <p className="text-[11px] tracking-wide">
            © {year} NAS Beauty Supply
          </p>
          <div className="flex gap-2">
            {companies.map((company) => (
              <span
                key={company.domain}
                className="h-1 w-1 rounded-full bg-background/30"
                style={{ backgroundColor: `${company.accent}99` }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
