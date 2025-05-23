import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/utils/translations";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isMobile = useIsMobile();
  const { language } = useLanguage();

  const navItems = [
    { id: "home", label: getTranslation("home", language) },
    { id: "about", label: getTranslation("about", language) },
    { id: "skills", label: getTranslation("skills", language) },
    { id: "experience", label: getTranslation("experience", language) },
    { id: "education", label: getTranslation("education", language) },
    { id: "contact", label: getTranslation("contact", language) }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Find the active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 300;

      sections.forEach((section) => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white/80 dark:bg-slate-900/90 backdrop-blur-lg shadow-sm dark:shadow-slate-900/20"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="font-display text-xl font-bold text-foreground"
          >
            <span className="text-primary">{getTranslation("cvInteractive", language)}</span> 
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      "nav-link py-2",
                      activeSection === item.id && "active"
                    )}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="ml-6 flex items-center gap-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <LanguageToggle />
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              className="p-2 text-foreground"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 dark:bg-slate-900/95 backdrop-blur-sm z-40 flex flex-col justify-center transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="container mx-auto px-4">
          <ul className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <li key={item.id} className="w-full text-center">
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "nav-link text-xl py-2 inline-block",
                    activeSection === item.id && "active"
                  )}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
