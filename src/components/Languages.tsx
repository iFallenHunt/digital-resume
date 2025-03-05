
import React from "react";
import AnimatedText from "./AnimatedText";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/utils/translations";

interface LanguageItemProps {
  name: string;
  level: string;
  percentage: number;
  delay?: number;
}

const LanguageItem: React.FC<LanguageItemProps> = ({
  name,
  level,
  percentage,
  delay = 0,
}) => {
  const { language } = useLanguage();
  
  const getLocalizedLevel = (level: string) => {
    if (level === "Nativo" || level === "Native") {
      return getTranslation("native", language);
    } else if (level === "Fluente" || level === "Fluent") {
      return getTranslation("fluent", language);
    } else if (level === "Básico" || level === "Basic") {
      return getTranslation("basic", language);
    }
    return level;
  };

  return (
    <div className="animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium">{name}</span>
          <span className="text-primary">{getLocalizedLevel(level)}</span>
        </div>
        <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

const Languages: React.FC = () => {
  const { language } = useLanguage();
  
  const languages = [
    { 
      name: language === "pt-BR" ? "Português" : "Portuguese", 
      level: language === "pt-BR" ? "Nativo" : "Native", 
      percentage: 100 
    },
    { 
      name: language === "pt-BR" ? "Inglês" : "English", 
      level: language === "pt-BR" ? "Fluente" : "Fluent", 
      percentage: 90 
    },
    { 
      name: language === "pt-BR" ? "Espanhol" : "Spanish", 
      level: language === "pt-BR" ? "Básico" : "Basic", 
      percentage: 40 
    },
    { 
      name: language === "pt-BR" ? "Língua Brasileira de Sinais (Libras)" : "Brazilian Sign Language (Libras)", 
      level: language === "pt-BR" ? "Básico" : "Basic", 
      percentage: 30 
    }
  ];

  return (
    <section id="languages" className="py-20 bg-section-pattern">
      <div className="container mx-auto px-4">
        <AnimatedText
          text={getTranslation("languagesTitle", language)}
          className="section-heading"
        />

        <div className="mt-12 max-w-3xl mx-auto glass-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <LanguageItem
                key={lang.name}
                name={lang.name}
                level={lang.level}
                percentage={lang.percentage}
                delay={100 * index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
