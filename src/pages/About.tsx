import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Users, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to revolutionizing HR workflows and making hiring efficient for every organization."
  },
  {
    icon: Users,
    title: "People-First",
    description: "Our platform is designed by HR professionals, for HR professionals. We understand your challenges."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Leveraging cutting-edge AI to automate repetitive tasks and surface the best candidates faster."
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Your data is protected with enterprise-grade security. We never compromise on privacy."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Analytics />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="animate-fade-in">About QuixHR</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
            We're building the future of recruitment automation—empowering HR teams to focus on what truly matters: finding the right talent.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12 border-2 animate-fade-in">
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              At QuixHR, we believe hiring shouldn't be a time-consuming manual process. HR professionals spend countless hours posting jobs across multiple platforms, manually reviewing hundreds of CVs, and struggling to maintain organized candidate pipelines.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our AI-powered platform centralizes job applications from LinkedIn, Naukri, Indeed, and other portals into a single dashboard. With intelligent CV filtering based on job descriptions—not just keywords—and intuitive Kanban-style tracking, we help you identify the best candidates 3x faster while saving 20+ hours monthly.
            </p>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-semibold">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-6 space-y-4 hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-center">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              QuixHR was born from a simple observation: HR teams were drowning in administrative work. After speaking with hundreds of HR professionals, we discovered they spent 60% of their time on repetitive tasks—copying job posts across platforms, manually sorting through CVs, and maintaining spreadsheets to track candidates.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We knew AI could solve this. So we built QuixHR—a platform that automates the busywork and amplifies human decision-making. Today, we're proud to help HR teams across startups and enterprises hire smarter, faster, and more efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-foreground text-background">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Ready to transform your hiring?
          </h2>
          <p className="text-lg opacity-90">
            Join forward-thinking HR teams already using QuixHR
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero-outline" size="lg" asChild className="border-background text-background hover:bg-background hover:text-foreground">
              <Link to="/">Start Free Trial</Link>
            </Button>
            <Button variant="hero" size="lg" asChild className="bg-background text-foreground hover:bg-background/90">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
