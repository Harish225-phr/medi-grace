import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/treatments" },
    { name: "Dermatologists", href: "/dermatologists" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-lg shadow-medium" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent font-poppins">
              GlowSkin
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group ${
                    location.pathname === link.href 
                      ? "text-primary" 
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a href="tel:+917589951677">
  <Button 
    variant="default" 
    size="sm" 
    className="animate-float bg-gradient-primary hover:bg-gradient-primary/90 text-white font-medium"
  >
    +91-758-995-1677
  </Button>
</a>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-lg rounded-lg mt-2 shadow-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    location.pathname === link.href 
                      ? "text-primary bg-primary/10" 
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link to="/contact">
                  <Button variant="default" size="sm" className="w-full bg-gradient-primary text-white" onClick={() => setIsOpen(false)}>
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;