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
      "Premium nail essentials — cuticle oils, polish removers, and nail treatments — crafted for stronger nails, lasting color, and polished results every day.",
    accent: "#1a1a1a",
    tint: "#f6f1e8",
    surface: "#ffffff",
    chrome: "#f6f1e8",
    image: "/images/brand-ccare-hero.jpg",
    imageAlt: "C Care Beauty premium nail essentials",
  },
  {
    name: "Felix Professional",
    domain: "felixprofessional.com",
    url: "https://felixprofessional.com",
    tagline: "Use what the pros use",
    description:
      "Professional-grade makeup brush cleaner, sanitizer, and conditioner — a rinse-free formula developed with pro MUAs for everyday brush care.",
    accent: "#A36ECC",
    tint: "#f5eef9",
    surface: "#ffffff",
    chrome: "#f3f3f3",
    image: "/images/brand-felix-tin.jpg",
    imageAlt: "Felix Professional brush cleaner bottle and tin",
  },
  {
    name: "Vocks",
    domain: "myvocks.com",
    url: "https://myvocks.com",
    tagline: "Proven. Pure. Trusted.",
    description:
      "Science-backed dietary supplements — including creatine, magnesium, and black seed oil — third-party tested, GMP-certified, and made in the USA.",
    accent: "#242833",
    tint: "#f3f3f3",
    surface: "#ffffff",
    chrome: "#242833",
    image: "/images/brand-vocks-creatine.png",
    imageAlt: "Vocks Creatine Monohydrate supplement",
  },
];

export const heroImages = {
  main: {
    src: "/images/hero-ccare-hero.jpg",
    alt: "C Care Beauty premium nail products hero",
  },
  accent: {
    src: "/images/hero-ccare-oil.png",
    alt: "C Care Beauty Lavender and Chamomile cuticle oil",
  },
};

export const galleryImages = [
  {
    src: "/images/gallery-ccare-hero.jpg",
    alt: "C Care Beauty premium nail essentials",
    className: "col-span-2 row-span-2 min-h-[240px] sm:min-h-[320px]",
  },
  {
    src: "/images/gallery-felix-cleaner.jpg",
    alt: "Felix Professional 16oz makeup brush cleaner",
    className: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "/images/gallery-vocks-creatine.png",
    alt: "Vocks Creatine Monohydrate supplement",
    className: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "/images/gallery-ccare-body-oil.jpg",
    alt: "C Care Beauty nourishing body oils",
    className: "col-span-2 row-span-1 aspect-[2/1]",
  },
];

export const aboutImage = {
  src: "/images/about-felix-spray.jpg",
  alt: "Felix Professional travel size brush cleaner spray",
};
