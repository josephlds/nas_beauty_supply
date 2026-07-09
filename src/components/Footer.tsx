import { companies } from "@/data/companies";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-400">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-white uppercase">
              NAS Beauty Supply
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              Parent company for CCare Beauty, Felix Professional, and My Vocks.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase">
              Our Brands
            </p>
            <ul className="mt-4 space-y-2">
              {companies.map((company) => (
                <li key={company.domain}>
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors hover:text-white"
                  >
                    {company.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#brands" className="text-sm transition-colors hover:text-white">
                  Our Brands
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm transition-colors hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-stone-800 pt-8 text-center text-xs text-stone-500">
          © {year} NAS Beauty Supply. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
