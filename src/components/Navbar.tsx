import { Button } from "@/components/ui/button";
import { Leaf, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b animate-fade-in">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">AgroSense</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#tentang" className="text-foreground hover:text-primary transition-colors font-medium">
              Tentang
            </a>
            <a href="#fitur" className="text-foreground hover:text-primary transition-colors font-medium">
              Fitur
            </a>
            <a href="#tim" className="text-foreground hover:text-primary transition-colors font-medium">
              Tim
            </a>
            <Button variant="default" className="bg-gradient-hero">
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#tentang" className="text-foreground hover:text-primary transition-colors font-medium">
                Tentang
              </a>
              <a href="#fitur" className="text-foreground hover:text-primary transition-colors font-medium">
                Fitur
              </a>
              <a href="#tim" className="text-foreground hover:text-primary transition-colors font-medium">
                Tim
              </a>
              <Button variant="default" className="bg-gradient-hero">
                Hubungi Kami
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
