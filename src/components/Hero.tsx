import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="text-sm font-medium px-4 py-2 rounded-full bg-muted text-foreground border border-border">
              AI-Powered Hiring Platform
            </span>
          </div>
          
          <h1 className="max-w-4xl mx-auto">
            Centralize Your Hiring,
            <br />
            <span className="text-muted-foreground">Amplify Your Results</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            QuixHR brings all your job applications into one place, filters candidates with AI, 
            and streamlines your hiring pipeline with intuitive Kanban boards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="text-base">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base">
              Watch Demo
            </Button>
          </div>

          <div className="pt-8 text-sm text-muted-foreground">
            No credit card required • Free forever plan available
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
