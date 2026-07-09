import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandsSection from "@/components/BrandsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandsSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
