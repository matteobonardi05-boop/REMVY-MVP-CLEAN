import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import HowItWorks from "@/components/landing/HowItWorks";
import Value from "@/components/landing/Value";
import Positioning from "@/components/landing/Positioning";
import Target from "@/components/landing/Target";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Value />
      <Positioning />
      <Target />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
