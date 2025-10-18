import { Link, Brain, Kanban } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Link,
    title: "Hire the Best Instantly",
    description: "Our AI analyzes entire job descriptions not just keywords to rank candidates into Green, Yellow, and Red with clear reasons. Spend time only on top talent.",
  },
  {
    icon: Brain,
    title: "All Application one Dashboard",
    description: "Stop juggling job portals. QuixHR gives you one link to collect every application from LinkedIn, Naukri, and Indeed organized in a single, powerful dashboard.",
  },
  {
    icon: Kanban,
    title: "Track & Manage Effortlessly",
    description: "Visualize your hiring pipeline. Drag and drop candidates through custom stages and keep your team aligned no messy sheets, just total clarity.",
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
