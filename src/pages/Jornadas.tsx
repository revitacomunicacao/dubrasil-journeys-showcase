import Header from "@/components/jornadas/Header";
import HeroSection from "@/components/jornadas/HeroSection";
import PainSection from "@/components/jornadas/PainSection";
import SolutionsSection from "@/components/jornadas/SolutionsSection";
import ServicesSection from "@/components/jornadas/ServicesSection";
import MethodSection from "@/components/jornadas/MethodSection";
import FAQ from "@/components/jornadas/FAQ";
import ContactForm from "@/components/jornadas/ContactForm";
import Footer2 from "@/components/jornadas/Footer2";
import { useHomePage } from "@/hooks/use-home-page";

const Jornadas = () => {
  const { data, isLoading, isError, error } = useHomePage();

  return (
    <div className="min-h-screen">
      <Header />

      {isLoading ? (
        <div className="flex min-h-[50vh] items-center justify-center">
          <p className="text-muted-foreground text-lg">Carregando conteúdo…</p>
        </div>
      ) : null}

      {isError ? (
        <div className="flex min-h-[50vh] items-center justify-center px-6">
          <p className="text-destructive text-center text-lg">
            Não foi possível carregar o conteúdo da página.
            {error instanceof Error ? ` ${error.message}` : ""}
          </p>
        </div>
      ) : null}

      {data ? (
        <>
          <HeroSection content={data.banner} />
          <PainSection content={data.pain} />
          <SolutionsSection solutions={data.solutions} />
          <ServicesSection content={data.services} />
          <MethodSection content={data.method} />
          <FAQ content={data.faq} />
        </>
      ) : null}

      <ContactForm />
      <Footer2 />
    </div>
  );
};

export default Jornadas;
