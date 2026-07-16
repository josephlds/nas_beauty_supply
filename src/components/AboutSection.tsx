import Image from "next/image";
import { aboutImage } from "@/data/companies";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div>
          <p className="text-[11px] font-medium tracking-[0.3em] text-accent uppercase">
            About Us
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Building brands that endure
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-7 text-muted">
            <p>
              NAS Beauty Supply is a parent company dedicated to acquiring and
              growing brands that embody innovation, quality, and unwavering
              standards. We oversee every facet of brand stewardship — from
              product development to how our brands show up for customers.
            </p>
            <p>
              Our mission is not just a goal; it is a relentless pursuit. Across
              nail care, professional beauty tools, and science-backed wellness,
              we leave no room for compromise.
            </p>
          </div>
          <a
            href="#brands"
            className="group mt-10 inline-flex items-center gap-2 border-b border-accent/40 pb-0.5 text-[13px] font-medium tracking-[0.12em] text-accent uppercase transition-colors hover:border-accent"
          >
            Our Brands
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden bg-stone sm:aspect-[5/6]">
          <Image
            src={aboutImage.src}
            alt={aboutImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
