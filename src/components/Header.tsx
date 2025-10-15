import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHomePage) {
      e.preventDefault();
      scrollToSection(sectionId);
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="font-bold text-xl hover:opacity-80 transition-opacity">QuixHR</div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {isHomePage ? (
            <>
              <a 
                href="#features" 
                onClick={(e) => handleNavClick(e, "features")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => handleNavClick(e, "pricing")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
            </>
          ) : (
            <>
              <Link 
                to="/#features" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link 
                to="/#pricing" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
            </>
          )}
          <Link 
            to="/about" 
            className={`text-sm transition-colors ${
              location.pathname === "/about" 
                ? "text-foreground font-medium" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm transition-colors ${
              location.pathname === "/contact" 
                ? "text-foreground font-medium" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {isHomePage ? (
              <>
                <a 
                  href="#features" 
                  onClick={(e) => handleNavClick(e, "features")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Features
                </a>
                <a 
                  href="#pricing" 
                  onClick={(e) => handleNavClick(e, "pricing")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Pricing
                </a>
              </>
            ) : (
              <>
                <Link 
                  to="/#features" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  to="/#pricing" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
              </>
            )}
            <Link 
              to="/about" 
              className={`text-sm transition-colors py-2 ${
                location.pathname === "/about" 
                  ? "text-foreground font-medium" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm transition-colors py-2 ${
                location.pathname === "/contact" 
                  ? "text-foreground font-medium" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="flex flex-col space-y-3 pt-4 border-t border-border">
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(false)}>
                Sign In
              </Button>
              <Button size="sm" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
