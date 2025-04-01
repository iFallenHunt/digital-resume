
import React from "react";
import AnimatedText from "./AnimatedText";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/utils/translations";

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
  const { language } = useLanguage();
  return (
    <section id="experience" className="py-20 bg-section-pattern">
      <div className="container mx-auto px-4">
        <AnimatedText
          text={getTranslation("experienceTitle", language)}
          className="section-heading"
        />

        <div className="mt-12 max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-8 bottom-0 w-0.5 bg-primary/20 ml-6 md:mx-auto md:left-0 md:right-0" />

          <div className="space-y-10 relative">
            <ExperienceItem
              title={getTranslation("fullStackDev", language)}
              company="IT Brasil"
              period="Dez 2024 – Fev 2025"
              description={[
                getTranslation("experienceFullStackDesc1", language),
                getTranslation("experienceFullStackDesc2", language),
                getTranslation("experienceFullStackDesc3", language),
                getTranslation("experienceFullStackDesc4", language),
              ]}
              delay={100}
            />

            <ExperienceItem
              title={getTranslation("internDev", language)}
              company="IT Brasil"
              period="Jun 2024 – Dez 2024"
              description={[
                getTranslation("experienceInternDesc1", language),
                getTranslation("experienceInternDesc2", language),
                getTranslation("experienceInternDesc3", language),
                getTranslation("experienceInternDesc4", language),
              ]}
              delay={300}
            />

            <ExperienceItem
              title="Analista de Suporte Sênior"
              company="Mercedes-Benz"
              period="Out 2022 – Jun 2024"
              description={[
                getTranslation("experienceSeniorSupportDesc1", language),
                getTranslation("experienceSeniorSupportDesc2", language),
                getTranslation("experienceSeniorSupportDesc3", language),
                getTranslation("experienceSeniorSupportDesc4", language),
              ]}
              delay={500}
            />

            <ExperienceItem
              title={getTranslation("systemsAnalyst", language)}
              company="Sópneus"
              period="Mar 2022 - Jul 2022"
              description={[
                getTranslation("experienceSystemsAnalyst1Desc1", language),
                getTranslation("experienceSystemsAnalyst1Desc2", language),
                getTranslation("experienceSystemsAnalyst1Desc3", language),
                getTranslation("experienceSystemsAnalyst1Desc4", language),
              ]}
              delay={700}
            />

            <ExperienceItem
              title={getTranslation("systemsAnalyst", language)}
              company="Visual Modas"
              period="Jun 2020 - Mar 2022"
              description={[
                getTranslation("experienceSystemsAnalyst2Desc1", language),
                getTranslation("experienceSystemsAnalyst2Desc2", language),
                getTranslation("experienceSystemsAnalyst2Desc3", language),
                getTranslation("experienceSystemsAnalyst2Desc4", language),
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
