import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="font-bold text-xl">QuixHR</div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="hidden md:inline-flex">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
