import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8 p-12 rounded-2xl border border-border bg-card">
          <h2>Ready to transform your hiring?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join modern HR teams who save hours every week with QuixHR's intelligent hiring platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="ghost" size="lg">
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Free forever plan • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
