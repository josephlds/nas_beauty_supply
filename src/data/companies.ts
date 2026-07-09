export interface Company {
  name: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  accent: string;
}

export const companies: Company[] = [
  {
    name: "CCare Beauty",
    domain: "ccarebeauty.com",
    url: "https://ccarebeauty.com",
    tagline: "Care that shows",
    description:
      "Premium beauty and personal care products crafted for everyday confidence and radiant skin.",
    accent: "#c9a87c",
  },
  {
    name: "Felix Professional",
    domain: "felixprofessional.com",
    url: "https://felixprofessional.com",
    tagline: "Professional-grade results",
    description:
      "Salon-quality tools and formulations trusted by stylists and beauty professionals worldwide.",
    accent: "#8b7355",
  },
  {
    name: "My Vocks",
    domain: "myvocks.com",
    url: "https://myvocks.com",
    tagline: "Style from the ground up",
    description:
      "Trend-forward footwear and accessories that complement your look from head to toe.",
    accent: "#a67c8a",
  },
];
