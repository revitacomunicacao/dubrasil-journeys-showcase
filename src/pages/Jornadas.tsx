import HeroSection from "@/components/jornadas/HeroSection";
import PainSection from "@/components/jornadas/PainSection";
import SolutionsSection from "@/components/jornadas/SolutionsSection";
import ServicesSection from "@/components/jornadas/ServicesSection";
import MethodSection from "@/components/jornadas/MethodSection";
import TestimonialsSection from "@/components/jornadas/TestimonialsSection";
import FinalCTA from "@/components/jornadas/FinalCTA";
import Footer from "@/components/jornadas/Footer";

const Jornadas = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PainSection />
      <SolutionsSection />
      <ServicesSection />
      <MethodSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Jornadas;
