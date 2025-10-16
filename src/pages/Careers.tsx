import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Clock, Heart, Zap, Users, Globe } from "lucide-react";

const Careers = () => {
  const values = [
    {
      icon: Globe,
      title: "Remote-First",
      description: "Work from anywhere in the world with flexible hours that fit your lifestyle."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Push boundaries with cutting-edge AI technology and shape the future of HR."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Join a diverse team of talented individuals who support each other's growth."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "We believe in sustainable work practices and prioritize your well-being."
    }
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build scalable AI-powered recruitment solutions using React, Node.js, and modern cloud technologies."
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create beautiful, intuitive user experiences that help HR teams work more efficiently."
    },
    {
      id: 3,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Help our customers achieve their hiring goals and build lasting relationships."
    },
    {
      id: 4,
      title: "ML Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Develop and optimize machine learning models for resume screening and candidate matching."
    },
    {
      id: 5,
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Create compelling content that educates and engages HR professionals worldwide."
    },
    {
      id: 6,
      title: "Sales Development Representative",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      description: "Connect with HR leaders and help them discover how QuixHR can transform their hiring."
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Health, dental, and vision insurance",
    "401(k) with company match",
    "Unlimited PTO",
    "Professional development budget",
    "Latest tech equipment",
    "Quarterly team retreats",
    "Parental leave"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Analytics />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 animate-fade-in">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Join Our Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Help us revolutionize hiring with AI. We're looking for passionate individuals who want to make a real impact.
            </p>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Culture</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're building more than just software—we're creating an environment where everyone can thrive.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-lg text-muted-foreground">
                Find your next opportunity and grow with us.
              </p>
            </div>
            <div className="space-y-4">
              {openPositions.map((position) => (
                <Card key={position.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                        <CardDescription className="text-base mb-4">
                          {position.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {position.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </span>
                        </div>
                      </div>
                      <Button className="md:mt-0">Apply Now</Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits & Perks</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We invest in our team's success and well-being with comprehensive benefits.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6">
                  <p className="font-medium">{benefit}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Don't See the Right Role?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and tell us how you'd like to contribute.
            </p>
            <Button size="lg" variant="outline">
              Send General Application
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
