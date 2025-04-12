import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MedullaLogo } from "@/lib/icons";
import { useScrollTo } from "@/hooks/use-scroll-to";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-md py-0" 
          : "bg-white/90 backdrop-blur-sm shadow-sm py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <MedullaLogo className="h-8 w-auto" />
            </a>
          </div>
          <Button 
            variant="default" 
            className="hover:shadow-lg transition-all" 
            onClick={() => scrollToSection("waitlist")}
          >
            Download the App now
          </Button>
        </div>
      </div>
    </header>
  );
}