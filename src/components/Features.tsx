import { Link, Brain, Kanban } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Link,
    title: "Centralized Applications",
    description: "Post your jobs on LinkedIn, Naukri, Indeed with a single link. All applications flow into one unified dashboard, saving hours of manual tracking.",
  },
  {
    icon: Brain,
    title: "AI-Powered Filtering",
    description: "Our AI analyzes CVs against your JD—not just keywords. Get candidates sorted into Green, Yellow, and Red with detailed reasoning for each decision.",
  },
  {
    icon: Kanban,
    title: "Kanban Pipeline Tracking",
    description: "Visualize your entire hiring process. Drag candidates through stages, collaborate with managers, and never lose track of a promising applicant.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2>Everything you need to hire better</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for modern HR teams who value efficiency and quality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
