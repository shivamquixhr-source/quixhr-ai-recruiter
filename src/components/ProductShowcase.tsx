import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 animated-grid opacity-30"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="h-4 w-4" />
            See QuixHR in action
          </div>
          <h2>Hiring made simple with AI</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how QuixHR transforms your recruitment workflow in under 30 seconds
          </p>
        </div>

        {/* Product Mockup */}
        <div className="relative max-w-5xl mx-auto animate-fade-in">
          {/* Device Frame */}
          <Card className="border-2 border-border shadow-premium overflow-hidden">
            {/* Browser Chrome */}
            <div className="bg-muted border-b border-border p-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
              </div>
              <div className="flex-1 mx-4 bg-background rounded px-3 py-1 text-xs text-muted-foreground border border-border">
                app.quixhr.com/dashboard
              </div>
            </div>
            
            {/* Product Screenshot Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-muted to-background p-8 flex items-center justify-center">
              <div className="w-full h-full border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-4">
                <Sparkles className="h-12 w-12 text-muted-foreground animate-pulse-slow" />
                <div className="text-center space-y-2">
                  <div className="text-lg font-semibold">Product Demo Video</div>
                  <div className="text-sm text-muted-foreground">
                    Interactive walkthrough coming soon
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Floating elements for visual interest */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Feature highlights below mockup */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          {[
            { title: "Instant Setup", desc: "Get started in minutes" },
            { title: "AI-Powered", desc: "Smart candidate filtering" },
            { title: "Team Collaboration", desc: "Built for teams" }
          ].map((item, index) => (
            <div 
              key={index}
              className="text-center space-y-2 p-4 rounded-lg hover:bg-background transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
