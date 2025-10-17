import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import PricingFAQ from "@/components/PricingFAQ";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Analytics />
      <Header />
      <Hero />
      <MarqueeBanner />
      <div id="features">
        <Features />
      </div>
      <ProductShowcase />
      <Testimonials />
      <div id="pricing">
        <Pricing />
      </div>
      <PricingFAQ />
      <Footer />
    </div>
  );
};

export default Index;
