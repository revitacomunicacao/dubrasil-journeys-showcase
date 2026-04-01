import Header from "@/components/jornadas/Header";
import HeroSection from "@/components/jornadas/HeroSection";
import PainSection from "@/components/jornadas/PainSection";
import SolutionsSection from "@/components/jornadas/SolutionsSection";
import ServicesSection from "@/components/jornadas/ServicesSection";
import MethodSection from "@/components/jornadas/MethodSection";
import TestimonialsSection from "@/components/jornadas/TestimonialsSection";
import ContactForm from "@/components/jornadas/ContactForm";
import Footer2 from "@/components/jornadas/Footer2";

const Jornadas = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PainSection />
      <SolutionsSection />
      <ServicesSection />
      <MethodSection />
      <ContactForm />
      <Footer2 />
    </div>
  );
};

export default Jornadas;
