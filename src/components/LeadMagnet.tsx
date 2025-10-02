import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Download, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call - replace with actual integration
    setTimeout(() => {
      console.log("Lead magnet signup:", email);
      toast.success("Success! Check your email for the guide.");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-muted/50 to-background p-8 md:p-12 shadow-premium animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Download className="h-10 w-10 text-primary" />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                <Sparkles className="h-3 w-3" />
                Free Resource
              </div>
              <h3 className="mb-2">The Future of HR Automation in 2025</h3>
              <p className="text-muted-foreground mb-6">
                Download our comprehensive guide on AI-powered hiring, industry trends, and best practices. 
                Perfect for forward-thinking HR professionals.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Download Free"}
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-3">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LeadMagnet;
