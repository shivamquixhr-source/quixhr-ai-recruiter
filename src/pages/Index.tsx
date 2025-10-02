import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import PricingFAQ from "@/components/PricingFAQ";
import LeadMagnet from "@/components/LeadMagnet";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Analytics />
      <Header />
      <Hero />
      <Stats />
      <Features />
      <ProductShowcase />
      <Testimonials />
      <Pricing />
      <PricingFAQ />
      <LeadMagnet />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
