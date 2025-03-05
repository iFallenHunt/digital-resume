
import React from "react";
import AnimatedText from "./AnimatedText";
import { GraduationCap, Calendar, MapPin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface EducationItemProps {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  description?: string;
  certificateUrl?: string;
  className?: string;
  delay?: number;
}

const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  location,
  period,
  description,
  certificateUrl,
  className,
  delay = 0,
}) => {
  return (
    <div className={cn("timeline-card animate-fade-in", className)} style={{ animationDelay: `${delay}ms` }}>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold">{degree}</h3>
          <div className="flex items-center text-primary mt-1">
            <GraduationCap size={16} className="mr-2" />
            <span>{institution}</span>
          </div>
          {location && (
            <div className="flex items-center text-muted-foreground mt-1">
              <MapPin size={14} className="mr-2" />
              <span>{location}</span>
            </div>
          )}
        </div>
        <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
          <Calendar size={16} className="mr-2" />
          <span>{period}</span>
        </div>
      </div>
      {description && <p className="text-foreground/80">{description}</p>}
      {certificateUrl && (
        <a 
          href={certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:underline mt-2"
        >
          Ver certificado <ExternalLink size={14} className="ml-1" />
        </a>
      )}
    </div>
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
              degree="Bacharelado, Engenharia de Software"
              institution="UNICESUMAR"
              period="2024 - 2026"
              delay={100}
            />

            <EducationItem
              degree="Bacharelado, Análise e Desenvolvimento de Sistemas"
              institution="UNICESUMAR"
              period="2021 - 2024"
              delay={300}
            />

            <EducationItem
              degree="Certificado, CS50's Introduction to Computer Science"
              institution="HarvardX"
              period="2024"
              delay={500}
            />

            <EducationItem
              degree="Certificado, Cloud Upper AWS"
              institution="Cloud Treinamentos"
              period="2022"
              delay={700}
            />

            <EducationItem
              degree="Certificado, Desenvolvimento em Java"
              institution="Rocketseat"
              period="2023 - 2024"
              delay={900}
            />

            <EducationItem
              degree="Bootcamp, Backend com Java"
              institution="DIO"
              period="2024"
              delay={1100}
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            Acessar meus Certificados <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Education;
