
import React from "react";
import { ChevronDown } from "lucide-react";
import AnimatedText from "./AnimatedText";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/utils/translations";

const Hero: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-muted overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-3/5">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block">
                <AnimatedText
                  text={language === "pt-BR" ? "Olá, eu sou" : "Hello, I am"}
                  className="text-xl text-foreground/80 mb-1"
                  delay={200}
                />
              </div>
              
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl">
                <AnimatedText
                  text="Lucas Santos"
                  className="block animate-shimmer"
                  delay={400}
                />
                <AnimatedText
                  text={getTranslation("fullStackDev", language)}
                  className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-secondary"
                  delay={600}
                />
              </h1>
              
              <AnimatedText
                text={language === "pt-BR" 
                  ? "Transformando ideias em soluções práticas e eficientes. Focado em Java, Python e JavaScript com foco em desenvolvimento de software e Cloud Computing."
                  : "Transforming ideas into practical and efficient solutions. Focused in Java, Python, and JavaScript with a focus on software development and Cloud Computing."}
                className="max-w-2xl text-lg text-foreground/70"
                delay={800}
              />
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <div className="animate-fade-in" style={{ animationDelay: '1000ms' }}>
                  <Button size="lg" className="rounded-full px-8">
                    {getTranslation("downloadCV", language)}
                  </Button>
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: '1200ms' }}>
                  <a href="#contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full px-8"
                    >
                      {getTranslation("contact", language)}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse-light" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/50 shadow-xl animate-float">
                  {/* Profile image */}
                  <img 
                    src="/lovable-uploads/6ee29a52-479e-4d61-be25-988ad6412a4b.png" 
                    alt="Lucas Santos" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="scroll-indicator"
        aria-label={language === "pt-BR" ? "Rolar para baixo" : "Scroll down"}
      >
        <ChevronDown size={30} />
      </a>
    </section>
  );
};

export default Hero;
