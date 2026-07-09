export interface Company {
  name: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  accent: string;
  tint: string;
  image: string;
  imageAlt: string;
}

export const companies: Company[] = [
  {
    name: "CCare Beauty",
    domain: "ccarebeauty.com",
    url: "https://ccarebeauty.com",
    tagline: "Care that shows",
    description:
      "Premium beauty and personal care products crafted for everyday confidence and radiant skin.",
    accent: "#c4a574",
    tint: "#f7f0e6",
    image: "/images/brand-ccare.png",
    imageAlt: "Skincare and beauty products on a minimal surface",
  },
  {
    name: "Felix Professional",
    domain: "felixprofessional.com",
    url: "https://felixprofessional.com",
    tagline: "Professional-grade results",
    description:
      "Salon-quality tools and formulations trusted by stylists and beauty professionals worldwide.",
    accent: "#6b4e5a",
    tint: "#f3ecef",
    image: "/images/brand-felix.png",
    imageAlt: "Professional salon interior with styling chairs",
  },
  {
    name: "My Vocks",
    domain: "myvocks.com",
    url: "https://myvocks.com",
    tagline: "Style from the ground up",
    description:
      "Trend-forward footwear and accessories that complement your look from head to toe.",
    accent: "#d4a5a5",
    tint: "#faf0f0",
    image: "/images/brand-vocks.png",
    imageAlt: "Stylish footwear and fashion accessories",
  },
];

export const heroImages = {
  main: {
    src: "/images/hero-main.png",
    alt: "Elegant beauty products arranged on a soft neutral backdrop",
  },
  accent: {
    src: "/images/hero-accent.png",
    alt: "Close-up of premium cosmetic textures",
  },
};

export const galleryImages = [
  {
    src: "/images/gallery-1.png",
    alt: "Luxury makeup collection",
    className: "col-span-2 row-span-2 min-h-[240px] sm:min-h-[320px]",
  },
  {
    src: "/images/gallery-2.png",
    alt: "Hands applying skincare serum",
    className: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "/images/gallery-3.png",
    alt: "Minimal beauty flat lay",
    className: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "/images/gallery-4.png",
    alt: "Serum and skincare bottles",
    className: "col-span-2 row-span-1 aspect-[2/1]",
  },
];

export const aboutImage = {
  src: "/images/about.png",
  alt: "Modern beauty studio workspace",
};
