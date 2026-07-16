import fs from "node:fs";
import path from "node:path";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandsSection from "@/components/BrandsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function getHeroImages() {
  const heroDir = path.join(process.cwd(), "public", "images", "hero");
  try {
    return fs
      .readdirSync(heroDir)
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort()
      .map((file) => ({
        src: `/images/hero/${file}`,
        alt: "NAS Beauty Supply atmosphere",
      }));
  } catch {
    return [];
  }
}

export default function Home() {
  const heroImages = getHeroImages();

  return (
    <>
      <Header />
      <main>
        <Hero images={heroImages} />
        <BrandsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
