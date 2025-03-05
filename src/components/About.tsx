
import React from "react";
import { BookOpen, Briefcase, Coffee, Heart, Map, User, Mail, Phone, Globe, Github, Linkedin } from "lucide-react";
import AnimatedText from "./AnimatedText";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  content,
  className,
}) => {
  return (
    <div
      className={cn(
        "glass-card p-5 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="text-foreground/70">{content}</div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-section-pattern">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Sobre Mim"
          className="section-heading"
        />

        <div className="max-w-3xl mx-auto mt-8 mb-16">
          <AnimatedText
            text="Sou apaixonado por tecnologia e por transformar ideias em soluções práticas e eficientes. Profissional com mais de 10 anos de experiência em TI, tenho formação sólida em análise de sistemas e engenharia de software. Minha especialidade é o desenvolvimento de software em Java, Python e Javascript, com uma boa dose de Git, SQL e conhecimento robusto em Cloud Computing e APIs RESTful."
            className="text-center text-lg text-foreground/80"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <InfoCard
              icon={<User size={24} />}
              title="Informações Pessoais"
              content="Lucas Santos, Desenvolvedor Full Stack com mais de 10 anos de experiência em TI."
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <InfoCard
              icon={<Map size={24} />}
              title="Localização"
              content="Campinas, SP, Brasil - Disponível para trabalho híbrido ou remoto."
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <InfoCard
              icon={<Phone size={24} />}
              title="Telefone"
              content="+55 (16) 9 8108-0083"
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <InfoCard
              icon={<Mail size={24} />}
              title="Email"
              content={
                <a
                  href="mailto:lukas_santos.silva@hotmail.com"
                  className="hover:text-primary transition-colors"
                >
                  lukas_santos.silva@hotmail.com
                </a>
              }
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
            <InfoCard
              icon={<Linkedin size={24} />}
              title="LinkedIn"
              content={
                <a
                  href="https://www.linkedin.com/in/santos-lucas96dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  santos-lucas96dev
                </a>
              }
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <InfoCard
              icon={<Github size={24} />}
              title="GitHub"
              content={
                <a
                  href="https://github.com/iFallenHunt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  iFallenHunt
                </a>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
