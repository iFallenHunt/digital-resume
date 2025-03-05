
import React from "react";
import { ChevronDown } from "lucide-react";
import AnimatedText from "./AnimatedText";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
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
                  text="Olá, eu sou"
                  className="text-xl text-foreground/80 mb-1"
                  delay={200}
                />
              </div>
              
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl">
                <AnimatedText
                  text="Seu Nome"
                  className="block animate-shimmer"
                  delay={400}
                />
                <AnimatedText
                  text="Desenvolvedor Web"
                  className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-secondary"
                  delay={600}
                />
              </h1>
              
              <AnimatedText
                text="Transformando ideias em experiências digitais excepcionais. Especializado em desenvolvimento front-end com foco em interfaces modernas e intuitivas."
                className="max-w-2xl text-lg text-foreground/70"
                delay={800}
              />
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <AnimatedText delay={1000} text="">
                  <Button size="lg" className="rounded-full px-8">
                    Baixar CV
                  </Button>
                </AnimatedText>
                
                <AnimatedText delay={1200} text="">
                  <a href="#contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full px-8"
                    >
                      Contato
                    </Button>
                  </a>
                </AnimatedText>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse-light" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/50 shadow-xl animate-float">
                  {/* Placeholder for profile image - replace with your own */}
                  <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-5xl font-bold">
                    SN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="scroll-indicator"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={30} />
      </a>
    </section>
  );
};

export default Hero;
