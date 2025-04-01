import React from "react";
import AnimatedText from "./AnimatedText";
import { GraduationCap, Calendar, MapPin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/utils/translations";

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
  const { language } = useLanguage();
  
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
          {language === "pt-BR" ? "Visualizar Certificado" : "View Certificate"} <ExternalLink size={14} className="ml-1" />
        </a>
      )}
    </div>
  );
};

const Education: React.FC = () => {
  const { language } = useLanguage();
  
  const educationItems = [
    {
      degree: language === "pt-BR" ? "Bacharelado, Engenharia de Software" : "Bachelor's Degree, Software Engineering",
      institution: "UNICESUMAR",
      period: "2024 - 2026",
      delay: 100
    },
    {
      degree: language === "pt-BR" ? "Bacharelado, Análise e Desenvolvimento de Sistemas" : "Bachelor's Degree, Systems Analysis and Development",
      institution: "UNICESUMAR",
      period: "2021 - 2024",
      delay: 300
    },
    {
      degree: language === "pt-BR" ? "Certificado, Introdução à Ciência da Computação" : "Certificate, Introduction to Computer Science",
      institution: "HarvardX",
      period: "2024",
      delay: 500
    },
    {
      degree: language === "pt-BR" ? "Certificado, Cloud Computing AWS" : "Certificate, AWS Cloud Computing",
      institution: "Cloud Treinamentos",
      period: "2022",
      delay: 700
    },
    {
      degree: language === "pt-BR" ? "Certificado, Desenvolvimento Java" : "Certificate, Java Development",
      institution: "Rocketseat",
      period: "2023 - 2024",
      delay: 900
    },
    {
      degree: language === "pt-BR" ? "Bootcamp, Desenvolvimento Backend com Java" : "Bootcamp, Backend Development with Java",
      institution: "DIO",
      period: "2024",
      delay: 1100
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedText
          text={getTranslation("educationTitle", language)}
          className="section-heading"
        />

        <div className="mt-12 max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-8 bottom-0 w-0.5 bg-primary/20 ml-6 md:mx-auto md:left-0 md:right-0" />

          <div className="space-y-10 relative">
            {educationItems.map((item, index) => (
              <EducationItem
                key={index}
                degree={item.degree}
                institution={item.institution}
                period={item.period}
                delay={item.delay}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://drive.google.com/drive/folders/1cpuhDyuiExPv1zTLCjGO-mxgZenoeMXP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            {getTranslation("accessCertificates", language)} <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Education;
