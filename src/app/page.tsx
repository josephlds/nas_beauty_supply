import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GalleryStrip from "@/components/GalleryStrip";
import BrandLogosSection from "@/components/BrandLogosSection";
import BrandsSection from "@/components/BrandsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GalleryStrip />
        <BrandLogosSection />
        <BrandsSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
