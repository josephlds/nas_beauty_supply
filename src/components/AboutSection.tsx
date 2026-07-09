import Image from "next/image";
import { aboutImage } from "@/data/companies";

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-accent-light/30">
              <Image
                src={aboutImage.src}
                alt={aboutImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 border border-border bg-accent-light/40 sm:block" />
            <div className="absolute -top-4 -left-4 hidden h-16 w-16 bg-gold/20 sm:block" />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-[11px] font-medium tracking-[0.35em] text-accent uppercase">
              About
            </p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-snug tracking-tight text-foreground sm:text-4xl">
              Building brands
              <br />
              with purpose
            </h2>

            <div className="mt-8 flex gap-8">
              <div>
                <p className="font-serif text-3xl font-light text-accent">3</p>
                <p className="mt-1 text-[11px] tracking-[0.15em] text-muted uppercase">
                  Brands
                </p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="font-serif text-3xl font-light text-gold">1</p>
                <p className="mt-1 text-[11px] tracking-[0.15em] text-muted uppercase">
                  Vision
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-5 text-[15px] leading-7 text-muted">
              <p>
                NAS Beauty Supply is the parent company behind a growing portfolio
                of beauty, professional, and lifestyle brands. We provide the
                foundation that allows each brand to flourish while preserving its
                unique identity.
              </p>
              <p>
                From CCare Beauty&apos;s personal care, to Felix Professional&apos;s
                salon-grade tools, and My Vocks&apos; trend-forward accessories —
                every brand shares one promise: quality you can trust.
              </p>
              <p className="text-foreground/80">
                This is the home of NAS Beauty Supply — your gateway to our family
                of brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
