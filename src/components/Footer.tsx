import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const isHomePage = location.pathname === "/";

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setIsSubscribing(true);
    
    // Simulate API call - replace with actual integration
    setTimeout(() => {
      console.log("Newsletter signup:", email);
      toast.success("Subscribed! Welcome to our HR insights newsletter.");
      setEmail("");
      setIsSubscribing(false);
    }, 1000);
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      {/* Newsletter Section */}
      <div className="py-12 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center space-y-4">
          <h3 className="text-2xl font-semibold">Stay ahead in HR</h3>
          <p className="text-muted-foreground">
            Get weekly insights on AI-powered hiring, industry trends, and best practices.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" disabled={isSubscribing}>
              {isSubscribing ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          <p className="text-xs text-muted-foreground">
            Join 5,000+ HR professionals. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">QuixHR</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered hiring platform for modern HR teams
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <span className="text-xs">𝕏</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <span className="text-xs">in</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <span className="text-xs">fb</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  {isHomePage ? (
                    <a href="#features" className="hover:text-foreground transition-colors">Features</a>
                  ) : (
                    <Link to="/#features" className="hover:text-foreground transition-colors">Features</Link>
                  )}
                </li>
                <li>
                  {isHomePage ? (
                    <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
                  ) : (
                    <Link to="/#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
                  )}
                </li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Press Kit</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>© 2025 QuixHR. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Status</a>
              <a href="#" className="hover:text-foreground transition-colors">Help Center</a>
              <a href="#" className="hover:text-foreground transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
