import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const navLinks = [
  { name: "Home", path: "/", section: "home" },
  { name: "About", path: "/about", section: "about" },
  { name: "Services", path: "/services", section: "services" },
  { name: "Projects", path: "/projects", section: "projects" },
  { name: "Contact", path: "/contact", section: "contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section on home page
      if (isHomePage) {
        const sections = navLinks.map(link => link.section);
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const navigateToSection = useCallback((sectionId: string) => {
    if (!sectionId) return;
    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  }, [isHomePage, navigate, scrollToSection]);

  useEffect(() => {
    if (!isHomePage) return;
    const state = (location.state as Record<string, unknown>) || {};
    const scrollTarget = typeof state.scrollTo === "string" ? state.scrollTo : null;

    if (scrollTarget) {
      const timeout = window.setTimeout(() => scrollToSection(scrollTarget), 50);
      const { scrollTo, ...rest } = state;
      navigate(location.pathname, {
        replace: true,
        state: Object.keys(rest).length ? rest : null,
      });

      return () => window.clearTimeout(timeout);
    }
  }, [isHomePage, location, navigate, scrollToSection]);

  const handleNavClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    if (link.section) {
      e.preventDefault();
      navigateToSection(link.section);
      setIsMobileMenuOpen(false);
    }
  };

  const isActive = (link: typeof navLinks[0]) => {
    if (isHomePage) {
      return activeSection === link.section;
    }
    return location.pathname === link.path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong shadow-2xl shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-sm font-medium transition-all hover:text-primary relative group ${
                  isActive(link)
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-transform origin-left ${
                  isActive(link) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            ))}
            <Button 
              size="sm" 
              asChild
              className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            >
              <Link 
                to="/contact" 
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection("contact");
                }}
              >
                Hire Me
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-strong rounded-2xl p-6 space-y-4 animate-fade-in border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => {
                  handleNavClick(e, link);
                  setIsMobileMenuOpen(false);
                }}
                className={`block text-sm font-medium transition-colors hover:text-primary py-2 ${
                  isActive(link)
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full" asChild>
              <Link 
                to="/contact" 
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection("contact");
                  setIsMobileMenuOpen(false);
                }}
              >
                Hire Me
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
