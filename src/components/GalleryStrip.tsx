import Image from "next/image";
import { galleryImages } from "@/data/companies";

export default function GalleryStrip() {
  return (
    <section className="border-y border-border bg-surface py-4">
      <div className="mx-auto max-w-6xl px-6">
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
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
