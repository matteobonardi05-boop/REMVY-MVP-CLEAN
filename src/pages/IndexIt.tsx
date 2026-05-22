import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import HowItWorks from "@/components/landing/HowItWorks";
import ServicesCarousel from "@/components/landing/ServicesCarousel";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import FinalCTA from "@/components/landing/FinalCTA";
import SupplierNetworkCTA from "@/components/landing/SupplierNetworkCTA";
import Footer from "@/components/landing/Footer";

const IndexIt = () => {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <WhyChooseUs />
      <FeaturesGrid />
      <HowItWorks />
      <ServicesCarousel />
      <FinalCTA />
      <SupplierNetworkCTA />
      <Footer />
    </main>
  );
};

export default IndexIt;
