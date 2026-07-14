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
  src: "/images/hero-ccare-cuticle-lux.jpg",
  alt: "Beauty product photography from the NAS Beauty Supply portfolio",
};

export const aboutImage = {
  src: "/images/about-felix-lux.jpg",
  alt: "Professional beauty products from the NAS Beauty Supply family of brands",
};

export const contactEmail = "hello@nasbeautysupply.com";
