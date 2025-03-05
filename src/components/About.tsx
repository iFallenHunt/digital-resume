
import React from "react";
import { BookOpen, Briefcase, Coffee, Heart, Map, User } from "lucide-react";
import AnimatedText from "./AnimatedText";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
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
      <p className="text-foreground/70">{content}</p>
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
            text="Sou um desenvolvedor web apaixonado por criar interfaces modernas e funcionais. Com experiência em React, TypeScript e design responsivo, meu objetivo é construir aplicações que combinam estética e usabilidade."
            className="text-center text-lg text-foreground/80"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatedText
            text=""
            delay={100}
          >
            <InfoCard
              icon={<User size={24} />}
              title="Informações Pessoais"
              content="28 anos, Brasileiro, Disponível para projetos freelance e oportunidades full-time."
            />
          </AnimatedText>

          <AnimatedText
            text=""
            delay={200}
          >
            <InfoCard
              icon={<Map size={24} />}
              title="Localização"
              content="São Paulo, Brasil - Disponível para trabalho remoto em qualquer lugar do mundo."
            />
          </AnimatedText>

          <AnimatedText
            text=""
            delay={300}
          >
            <InfoCard
              icon={<Briefcase size={24} />}
              title="Experiência"
              content="5+ anos em desenvolvimento web, especializado em React, TypeScript e UI/UX."
            />
          </AnimatedText>

          <AnimatedText
            text=""
            delay={400}
          >
            <InfoCard
              icon={<BookOpen size={24} />}
              title="Formação"
              content="Bacharelado em Ciência da Computação, com diversas certificações em desenvolvimento web."
            />
          </AnimatedText>

          <AnimatedText
            text=""
            delay={500}
          >
            <InfoCard
              icon={<Heart size={24} />}
              title="Interesses"
              content="UI/UX Design, Tecnologias Front-end, Acessibilidade, Inteligência Artificial."
            />
          </AnimatedText>

          <AnimatedText
            text=""
            delay={600}
          >
            <InfoCard
              icon={<Coffee size={24} />}
              title="Hobbies"
              content="Fotografia, Leitura, Música, Hiking, Aprender novas tecnologias."
            />
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default About;
