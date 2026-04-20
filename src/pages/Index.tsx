import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import YouDefine from "@/components/landing/YouDefine";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import Moments from "@/components/landing/Moments";
import Packages from "@/components/landing/Packages";
import WhyRemvy from "@/components/landing/WhyRemvy";
import Integrations from "@/components/landing/Integrations";
import Analytics from "@/components/landing/Analytics";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <YouDefine />
      <Problem />
      <HowItWorks />
      <Moments />
      <Packages />
      <WhyRemvy />
      <Integrations />
      <Analytics />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
