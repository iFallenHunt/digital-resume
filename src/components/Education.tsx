
import React from "react";
import AnimatedText from "./AnimatedText";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  className?: string;
  delay?: number;
}

const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  location,
  period,
  description,
  className,
  delay = 0,
}) => {
  return (
    <AnimatedText text="" delay={delay}>
      <div className={cn("timeline-card", className)}>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold">{degree}</h3>
            <div className="flex items-center text-primary mt-1">
              <GraduationCap size={16} className="mr-2" />
              <span>{institution}</span>
            </div>
            <div className="flex items-center text-muted-foreground mt-1">
              <MapPin size={14} className="mr-2" />
              <span>{location}</span>
            </div>
          </div>
          <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
            <Calendar size={16} className="mr-2" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-foreground/80">{description}</p>
      </div>
    </AnimatedText>
  );
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Formação Acadêmica"
          className="section-heading"
        />

        <div className="mt-12 max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-8 bottom-0 w-0.5 bg-primary/20 ml-6 md:mx-auto md:left-0 md:right-0" />

          <div className="space-y-10 relative">
            <EducationItem
              degree="Mestrado em Ciência da Computação"
              institution="Universidade Federal do Brasil"
              location="São Paulo, Brasil"
              period="2020 - 2022"
              description="Especialização em Inteligência Artificial e Desenvolvimento Web Avançado. Dissertação sobre 'Otimização de Performance em Aplicações React'."
              delay={100}
            />

            <EducationItem
              degree="Bacharelado em Ciência da Computação"
              institution="Universidade Estadual de Tecnologia"
              location="Rio de Janeiro, Brasil"
              period="2016 - 2019"
              description="Currículo focado em desenvolvimento de software, estruturas de dados, algoritmos e engenharia de software. Participação em projetos de pesquisa e extensão."
              delay={300}
            />

            <EducationItem
              degree="Intercâmbio Acadêmico"
              institution="Technical University"
              location="Berlim, Alemanha"
              period="2018 (6 meses)"
              description="Programa de intercâmbio focado em tecnologias emergentes para desenvolvimento web. Participação em workshop internacional de inovação digital."
              delay={500}
            />

            <EducationItem
              degree="Técnico em Informática"
              institution="Instituto Técnico de Tecnologia"
              location="São Paulo, Brasil"
              period="2014 - 2015"
              description="Formação técnica em desenvolvimento de sistemas, redes e infraestrutura de TI. Projeto final de desenvolvimento de sistema para gestão escolar."
              delay={700}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
