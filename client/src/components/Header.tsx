import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MedullaLogo } from "@/lib/icons";
import { Menu, X } from "lucide-react";
import { useScrollTo } from "@/hooks/use-scroll-to";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-md py-0" 
          : "bg-white/90 backdrop-blur-sm shadow-sm py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <MedullaLogo className="h-8 w-auto" />
              </a>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <a 
                href="#tools" 
                className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                onClick={(e) => { e.preventDefault(); scrollToSection("tools"); }}
              >
                Tools
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                onClick={(e) => { e.preventDefault(); scrollToSection("testimonials"); }}
              >
                Testimonials
              </a>
              <a 
                href="#faq" 
                className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                onClick={(e) => { e.preventDefault(); scrollToSection("faq"); }}
              >
                FAQ
              </a>
              <a 
                href="#about" 
                className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
              >
                About
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="default" 
              className="hidden md:inline-flex hover:shadow-lg transition-all" 
              asChild
            >
              <a 
                href="#waitlist" 
                onClick={(e) => { e.preventDefault(); scrollToSection("waitlist"); }}
              >
                Join Waitlist
              </a>
            </Button>
            <button
              type="button"
              className="md:hidden bg-white/50 backdrop-blur-sm p-2 rounded-md text-gray-500 hover:text-primary hover:bg-gray-100 transition-colors"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-white/95 backdrop-blur-sm shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#tools"
            className="text-gray-500 hover:text-primary block px-3 py-2 text-base font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("tools");
              setIsMobileMenuOpen(false);
            }}
          >
            Tools
          </a>
          <a
            href="#testimonials"
            className="text-gray-500 hover:text-primary block px-3 py-2 text-base font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("testimonials");
              setIsMobileMenuOpen(false);
            }}
          >
            Testimonials
          </a>
          <a
            href="#faq"
            className="text-gray-500 hover:text-primary block px-3 py-2 text-base font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("faq");
              setIsMobileMenuOpen(false);
            }}
          >
            FAQ
          </a>
          <a
            href="#about"
            className="text-gray-500 hover:text-primary block px-3 py-2 text-base font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
              setIsMobileMenuOpen(false);
            }}
          >
            About
          </a>
          <a
            href="#waitlist"
            className="bg-primary text-white block px-3 py-2 text-base font-medium rounded-md hover:bg-primary/90 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("waitlist");
              setIsMobileMenuOpen(false);
            }}
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
