import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import BrandsSection from "@/components/BrandsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandsSection />
        <ContactSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
