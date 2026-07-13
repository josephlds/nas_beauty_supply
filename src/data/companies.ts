export interface Company {
  name: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  accent: string;
  tint: string;
  surface: string;
  chrome: string;
  logo: string;
  logoAlt: string;
  image: string;
  imageAlt: string;
}

export const companies: Company[] = [
  {
    name: "C Care Beauty",
    domain: "ccarebeauty.com",
    url: "https://ccarebeauty.com",
    tagline: "Elevate your nail routine",
    description:
      "Luxury nail essentials — signature cuticle oils, polish removers, and treatments — crafted for stronger nails, lasting color, and polished results every day.",
    accent: "#1a1a1a",
    tint: "#f6f1e8",
    surface: "#ffffff",
    chrome: "#f6f1e8",
    logo: "/images/logos/ccare.png",
    logoAlt: "C Care Beauty — Love yourself",
    image: "/images/brand-ccare-cuticle-lux.jpg",
    imageAlt: "C Care Beauty Lavender & Chamomile cuticle oil",
  },
  {
    name: "Felix Professional",
    domain: "felixprofessional.com",
    url: "https://felixprofessional.com",
    tagline: "Use what the pros use",
    description:
      "Pro-grade makeup brush cleaner, sanitizer, and conditioner — a rinse-free formula developed with MUAs for effortless, everyday brush care.",
    accent: "#A36ECC",
    tint: "#f5eef9",
    surface: "#ffffff",
    chrome: "#f3f3f3",
    logo: "/images/logos/felix.png",
    logoAlt: "Felix Professional logo",
    image: "/images/brand-felix-lux.jpg",
    imageAlt: "Felix Professional brush cleaner bottle and tin",
  },
  {
    name: "Vocks",
    domain: "myvocks.com",
    url: "https://myvocks.com",
    tagline: "Proven. Pure. Trusted.",
    description:
      "Science-backed dietary supplements — creatine, magnesium, and black seed oil — third-party tested, GMP-certified, and made in the USA.",
    accent: "#242833",
    tint: "#f3f3f3",
    surface: "#ffffff",
    chrome: "#242833",
    logo: "/images/logos/vocks.png",
    logoAlt: "Vocks logo",
    image: "/images/brand-vocks-lux.jpg",
    imageAlt: "Vocks Creatine Monohydrate supplement",
  },
];

export const heroImages = {
  main: {
    src: "/images/hero-ccare-cuticle-lux.jpg",
    alt: "C Care Beauty Lavender & Chamomile cuticle oil on marble",
  },
  accent: {
    src: "/images/accent-ccare-cuticle-lux.jpg",
    alt: "C Care Beauty Lavender and Chamomile cuticle oil",
  },
};

export const galleryImages = [
  {
    src: "/images/hero-ccare-cuticle-lux.jpg",
    alt: "C Care Beauty Lavender & Chamomile cuticle oil",
    className: "col-span-2 row-span-2 min-h-[240px] sm:min-h-[320px]",
  },
  {
    src: "/images/gallery-felix-lux.jpg",
    alt: "Felix Professional makeup brush cleaner with brushes",
    className: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "/images/gallery-vocks-lux.jpg",
    alt: "Vocks Creatine Monohydrate with water and scoop",
    className: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "/images/gallery-ccare-cuticle-lux.jpg",
    alt: "Applying C Care Beauty Lavender & Chamomile cuticle oil",
    className: "col-span-2 row-span-1 aspect-[2/1]",
  },
];

export const aboutImage = {
  src: "/images/about-felix-lux.jpg",
  alt: "Felix Professional travel spray brush cleaner in cosmetic bag",
};
