import Image from "next/image";
import { companies, heroImages } from "@/data/companies";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-14">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-light/30 via-background to-background" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex items-start gap-6">
              <div className="mt-2 hidden h-24 w-px bg-gradient-to-b from-accent via-gold to-transparent sm:block" />
              <div>
                <p className="text-[11px] font-medium tracking-[0.35em] text-accent uppercase">
                  Parent Company
                </p>
                <h1 className="mt-5 font-serif text-[2.75rem] leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]">
                  NAS Beauty
                  <span className="block font-light text-muted">Supply</span>
                </h1>
              </div>
            </div>

            <p className="mt-8 max-w-md text-[15px] leading-7 text-muted sm:ml-[1.875rem] sm:pl-6">
              A curated family of beauty and lifestyle brands — united by quality,
              craft, and the pursuit of elegance.
            </p>

            <div className="mt-10 flex items-center gap-6 sm:ml-[1.875rem] sm:pl-6">
              <a
                href="#brands"
                className="inline-flex items-center gap-2 border-b border-accent pb-0.5 text-[13px] font-medium tracking-wide text-accent transition-colors hover:border-gold hover:text-gold"
              >
                View our brands
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="mt-14 flex items-center gap-3 sm:ml-[1.875rem] sm:pl-6">
              {companies.map((company) => (
                <span
                  key={company.domain}
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: company.accent }}
                  title={company.name}
                />
              ))}
              <span className="ml-2 text-[11px] tracking-[0.2em] text-muted uppercase">
                Three brands, one vision
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden bg-accent-light/30">
              <Image
                src={heroImages.main.src}
                alt={heroImages.main.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden aspect-square w-36 overflow-hidden border-4 border-background shadow-lg sm:block lg:-left-10 lg:w-44">
              <Image
                src={heroImages.accent.src}
                alt={heroImages.accent.alt}
                fill
                className="object-cover"
                sizes="176px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
