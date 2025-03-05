
import React from "react";
import AnimatedText from "./AnimatedText";
import { cn } from "@/lib/utils";

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
  return (
    <div className="animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium">{name}</span>
          <span className="text-primary">{level}</span>
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
  const languages = [
    { name: "Português", level: "Nativo", percentage: 100 },
    { name: "Inglês", level: "Fluente", percentage: 90 },
    { name: "Espanhol", level: "Básico", percentage: 40 },
    { name: "Língua Brasileira de Sinais (Libras)", level: "Básico", percentage: 30 }
  ];

  return (
    <section id="languages" className="py-20 bg-section-pattern">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Idiomas"
          className="section-heading"
        />

        <div className="mt-12 max-w-3xl mx-auto glass-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languages.map((language, index) => (
              <LanguageItem
                key={language.name}
                name={language.name}
                level={language.level}
                percentage={language.percentage}
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
