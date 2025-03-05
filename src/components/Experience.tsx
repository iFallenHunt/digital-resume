
import React from "react";
import AnimatedText from "./AnimatedText";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
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
    <div className={cn("timeline-card animate-fade-in", className)} style={{ animationDelay: `${delay}ms` }}>
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
      <ul className="text-foreground/80 list-disc pl-5 space-y-1">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
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
              title="Desenvolvedor Full Stack"
              company="IT Brasil"
              period="Dez 2024 – Fev 2025"
              description={[
                "Desenvolvimento de software",
                "Python, HTML, CSS, JavaScript, Docker, Github",
                "Comunicação com Stakeholders",
                "Coordenação de Times Ágeis",
                "Desenvolvimento e Revisão de Código",
                "Suporte de Infraestrutura em Cloud",
                "Análise e Otimização de Banco de Dados",
                "Garantia de Qualidade e Integração Contínua"
              ]}
              delay={100}
            />

            <ExperienceItem
              title="Desenvolvedor/Product Owner"
              company="Empresa Não Especificada"
              period="Jun 2024 – Dez 2024"
              description={[
                "Desenvolvimento de software",
                "Python, HTML, CSS, JavaScript",
                "Suporte N3",
                "Metodologia Ágil",
                "Suporte a Aplicação SAAS",
                "Banco de Dados",
                "Suporte a infraestrutura de nuvem"
              ]}
              delay={300}
            />

            <ExperienceItem
              title="Analista de Suporte Sênior"
              company="Mercedes-Benz"
              period="Out 2022 – Jun 2024"
              description={[
                "Análise de banco de dados",
                "Troubleshooting em aplicações Java e Python",
                "Administração de servidores",
                "Monitoramento de performance e KPIs",
                "Programação de rotina",
                "Backup",
                "Segurança de acesso",
                "Power BI"
              ]}
              delay={500}
            />

            <ExperienceItem
              title="Analista de Sistemas"
              company="Sópneus"
              period="Mar 2022 - Jul 2022"
              description={[
                "Realização de atividades rotineiras em servidores em nuvem",
                "Troubleshooting em aplicações C# e Python",
                "Identificação de bugs no ERP Sankhya",
                "Banco de dados Oracle Cloud",
                "Manutenção rotineira de hardware",
                "Helpdesk",
                "Criação de metodologias e documentação"
              ]}
              delay={700}
            />

            <ExperienceItem
              title="Analista de Sistemas"
              company="Visual Modas"
              period="Jun 2020 - Mar 2022"
              description={[
                "Realização de atividades rotineiras em servidores físicos e em nuvem",
                "Troubleshooting em aplicações C# e Python",
                "Identificação de bugs no ERP Sankhya",
                "Banco de dados Oracle físico e Cloud",
                "Helpdesk",
                "Criação de metodologias e documentação"
              ]}
              delay={900}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
