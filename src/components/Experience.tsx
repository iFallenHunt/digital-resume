
import React from "react";
import AnimatedText from "./AnimatedText";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  companyUrl?: string;
  className?: string;
  delay?: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  description,
  companyUrl,
  className,
  delay = 0,
}) => {
  return (
    <AnimatedText text="" delay={delay}>
      <div className={cn("timeline-card", className)}>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="flex items-center text-primary mt-1">
              <Briefcase size={16} className="mr-2" />
              {companyUrl ? (
                <a 
                  href={companyUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:underline"
                >
                  {company}
                  <ExternalLink size={14} className="ml-1" />
                </a>
              ) : (
                <span>{company}</span>
              )}
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

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-section-pattern">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Experiência Profissional"
          className="section-heading"
        />

        <div className="mt-12 max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-8 bottom-0 w-0.5 bg-primary/20 ml-6 md:mx-auto md:left-0 md:right-0" />

          <div className="space-y-10 relative">
            <ExperienceItem
              title="Desenvolvedor Front-end Sênior"
              company="TechInnovate"
              companyUrl="https://example.com"
              period="Jan 2022 - Presente"
              description="Lidero o desenvolvimento front-end de aplicações web, utilizando React, TypeScript e Tailwind CSS. Implementei melhorias de performance que reduziram o tempo de carregamento em 40% e coordeno um time de 3 desenvolvedores."
              delay={100}
            />

            <ExperienceItem
              title="Desenvolvedor Front-end Pleno"
              company="WebSolutions"
              companyUrl="https://example.com"
              period="Mar 2020 - Dez 2021"
              description="Desenvolvi interfaces responsivas e acessíveis para diversos clientes. Fui responsável pela migração de uma aplicação legada para React, melhorando significativamente a usabilidade e manutenibilidade do código."
              delay={300}
            />

            <ExperienceItem
              title="Desenvolvedor Front-end Júnior"
              company="Digital Agency"
              companyUrl="https://example.com"
              period="Jun 2018 - Fev 2020"
              description="Trabalhei em projetos de desenvolvimento web focados em UI/UX, utilizando HTML, CSS, JavaScript e React. Colaborei com designers para implementar interfaces fiéis aos protótipos."
              delay={500}
            />

            <ExperienceItem
              title="Estagiário de Desenvolvimento"
              company="StartupTech"
              companyUrl="https://example.com"
              period="Jan 2017 - Mai 2018"
              description="Auxiliei no desenvolvimento de websites e aplicações web, realizando tarefas de front-end e back-end básico. Participei de reuniões com clientes e aprendi sobre o ciclo completo de desenvolvimento."
              delay={700}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
