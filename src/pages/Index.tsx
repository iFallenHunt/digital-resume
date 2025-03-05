
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  useEffect(() => {
    // Animation on scroll logic
    const animateOnScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-reveal');
      
      animatedElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('revealed');
        }
      });
    };
    
    // Initial check
    animateOnScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
  
  return (
    <div className="bg-background text-foreground antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Languages />
        <Contact />
      </main>
      <footer className="py-8 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} - Lucas Santos. Todos os direitos reservados.
          </p>
          <p className="text-white/70 text-sm mt-1">
            Desenvolvedor Full Stack
          </p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default Index;
