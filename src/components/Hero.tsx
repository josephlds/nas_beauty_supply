import Image from "next/image";
import { heroImage } from "@/data/companies";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          className="object-cover animate-fade-in"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/45 to-ink/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(15,15,15,0.35)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-32 sm:pb-28 lg:pb-32">
        <h1 className="animate-fade-up font-serif text-[2.75rem] leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[5rem]">
          NAS Beauty Supply
        </h1>
        <p className="animate-fade-up animate-delay-100 mt-5 max-w-lg text-[15px] leading-7 text-white/75 sm:text-base">
          A family of beauty and wellness brands united by quality, craft, and
          lasting standards.
        </p>
        <div className="animate-fade-up animate-delay-200 mt-10">
          <a
            href="#brands"
            className="group inline-flex items-center gap-3 border-b border-white/50 pb-1 text-[13px] font-medium tracking-[0.18em] text-white uppercase transition-colors hover:border-white"
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
      </div>
    </section>
  );
}
