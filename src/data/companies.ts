export interface Company {
  name: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  logo: string;
  logoAlt: string;
  image: string;
  imageAlt: string;
}

export interface Pillar {
  title: string;
  description: string;
}

export const companies: Company[] = [
  {
    name: "C Care Beauty",
    domain: "ccarebeauty.com",
    url: "https://ccarebeauty.com",
    tagline: "Elevate your nail routine",
    description:
      "Luxury nail essentials — signature cuticle oils, polish removers, and treatments — crafted for stronger nails, lasting color, and polished results every day.",
    logo: "/images/logos/ccare.png",
    logoAlt: "C Care Beauty — Love yourself",
    image: "/images/Generated Image July 15, 2026 - 1_04AM.jpg",
    imageAlt:
      "C Care Beauty product collection on vanity — cuticle oil, castor oil, cuticle remover, and lip oil",
  },
  {
    name: "Felix Professional",
    domain: "felixprofessional.com",
    url: "https://felixprofessional.com",
    tagline: "Use what the pros use",
    description:
      "Pro-grade makeup brush cleaner, sanitizer, and conditioner — a rinse-free formula developed with MUAs for effortless, everyday brush care.",
    logo: "/images/logos/felix.png",
    logoAlt: "Felix Professional logo",
    image: "/images/Generated Image July 15, 2026 - 1_10AM (1).jpg",
    imageAlt:
      "Felix Professional lifestyle collection — brush cleaner, tin, travel spray, and sponge",
  },
  {
    name: "Vocks",
    domain: "myvocks.com",
    url: "https://myvocks.com",
    tagline: "Proven. Pure. Trusted.",
    description:
      "Science-backed dietary supplements — creatine, magnesium, and black seed oil — third-party tested, GMP-certified, and made in the USA.",
    logo: "/images/logos/vocks.png",
    logoAlt: "Vocks logo",
    image: "/images/Generated Image July 15, 2026 - 1_13AM.jpg",
    imageAlt:
      "Vocks lifestyle collection — creatine, magnesium, black seed oil, and 5-MTHF",
  },
];

export const pillars: Pillar[] = [
  {
    title: "Brand Development",
    description:
      "Our team works from concept to shelf — shaping product lines, packaging, and brand identity so each company in our portfolio can lead in its category.",
  },
  {
    title: "Quality & Compliance",
    description:
      "Integrity is non-negotiable. We hold every brand to clear standards of transparency, safety, and ethical practice across manufacturing and go-to-market.",
  },
  {
    title: "Distribution & Growth",
    description:
      "From inventory to retail and e-commerce, we support the systems that get our brands into the hands of customers — reliably and at scale.",
  },
];

export const heroImage = {
  src: "/images/hero-nas-atmosphere.jpg",
  alt: "Soft morning light in a refined spa interior — the atmosphere of NAS Beauty Supply",
};

export const heroImages = [
  {
    src: "/images/hero/9f3f7c16-ad45-46d9-b567-02d5920530f4.jpeg",
    alt: "NAS Beauty Supply atmosphere",
  },
  {
    src: "/images/hero/Generated Image July 17, 2026 - 3_12AM.jpg",
    alt: "NAS Beauty Supply atmosphere",
  },
  {
    src: "/images/hero/Generated Image July 17, 2026 - 3_13AM.jpg",
    alt: "NAS Beauty Supply atmosphere",
  },
  {
    src: "/images/hero/Generated Image July 17, 2026 - 3_16AM.jpg",
    alt: "NAS Beauty Supply atmosphere",
  },
  {
    src: "/images/hero/Generated Image July 17, 2026 - 3_18AM.jpg",
    alt: "NAS Beauty Supply atmosphere",
  },
];

export const contactEmail = "hello@nasbeautysupply.com";
