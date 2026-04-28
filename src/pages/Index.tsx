import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import YouDefine from "@/components/landing/YouDefine";
import Packages from "@/components/landing/Packages";
import Integrations from "@/components/landing/Integrations";
import WhyRemvy from "@/components/landing/WhyRemvy";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <Hero />
      <YouDefine />
      <Packages />
      <HowItWorks />
      <Integrations />
      <Problem />
      <WhyRemvy />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
