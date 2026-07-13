import Image from "next/image";
import { galleryImages } from "@/data/companies";

export default function GalleryStrip() {
  return (
    <section className="border-y border-border bg-surface py-6 sm:py-8">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-5 text-[11px] font-medium tracking-[0.3em] text-muted uppercase">
          Featured across our brands
        </p>
        <div className="grid auto-rows-fr grid-cols-4 gap-2 sm:gap-3">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className={`relative overflow-hidden bg-accent-light/30 ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2a2420]/15 to-transparent opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
