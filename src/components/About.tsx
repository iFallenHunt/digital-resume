
import React from "react";
import { BookOpen, Briefcase, Coffee, Heart, Map, User, Mail, Phone, Globe, Github, Linkedin, MessageCircle } from "lucide-react";
import AnimatedText from "./AnimatedText";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/utils/translations";

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
  const { language } = useLanguage();

  return (
    <section id="about" className="py-20 bg-section-pattern">
      <div className="container mx-auto px-4">
        <AnimatedText
          text={getTranslation("aboutMe", language)}
          className="section-heading"
        />

        <div className="max-w-3xl mx-auto mt-8 mb-16">
          <AnimatedText
            text={getTranslation("aboutDescription", language)}
            className="text-center text-lg text-foreground/80"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <InfoCard
              icon={<User size={24} />}
              title={getTranslation("personalInfo", language)}
              content={`Lucas Santos, ${getTranslation("fullStackDev", language)} ${language === "pt-BR" ? "com mais de 10 anos de experiência em TI." : "with over 10 years of IT experience."}`}
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <InfoCard
              icon={<Map size={24} />}
              title={getTranslation("location", language)}
              content={`Hortôlandia, SP, Brasil - ${getTranslation("hybridRemote", language)}`}
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <InfoCard
              icon={<MessageCircle size={24} />}
              title={getTranslation("phone", language)}
              content={
                <a
                  href="https://wa.me/+5516981080083"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  +55 (16) 9 8108-0083
                </a>
              }
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <InfoCard
              icon={<Mail size={24} />}
              title={getTranslation("email", language)}
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
              title={getTranslation("linkedin", language)}
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
              title={getTranslation("github", language)}
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
