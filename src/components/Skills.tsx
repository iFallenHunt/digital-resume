
import React from "react";
import ProgressBar from "./ProgressBar";
import AnimatedText from "./AnimatedText";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/utils/translations";

interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

const Skills: React.FC = () => {
  const { language } = useLanguage();

  const skillCategories: SkillCategory[] = [
    {
      name: getTranslation("languagesFrameworks", language),
      skills: [
        { name: "JavaScript", level: 40 },
        { name: "Java", level: 70 },
        { name: "Python", level: 68 },
        { name: "Golang", level: 30 },
        { name: "React", level: 50 },
        { name: "TypeScript", level: 50 }
      ],
    },
    {
      name: getTranslation("cloudDevOps", language),
      skills: [
        { name: "AWS", level: 60 },
        { name: "Azure", level: 30 },
        { name: "Google Cloud", level: 40 },
        { name: "Docker", level: 70 },
        { name: "Github", level: 80 }
      ],
    },
    {
      name: getTranslation("databasesOthers", language),
      skills: [
        { name: "MySQL", level: 60 },
        { name: "PostgreSQL", level: 80 },
        { name: "MariaDB", level: 50 },
        { name: "Apache/Nginx", level: 50 },
        { name: "Supabase/Vercel", level: 40 }
      ],
    },
  ];

  const technologies = [
    "JavaScript", "Java", "Python", "Golang", "React", "TypeScript", 
    "AWS", "Azure", "Google Cloud", "Ubuntu", "CentOS", "Windows", "Mac OS",
    "MySQL", "MariaDB", "PostgreSQL", "Docker", "Github", "Supabase", "Vercel",
    "Apache", "Nginx", "RESTful APIs", "Cloud Computing"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedText
          text={getTranslation("skillsAreas", language)}
          className="section-heading"
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <div key={category.name} className="glass-card p-6 animate-fade-in" style={{ animationDelay: `${200 * index}ms` }}>
              <h3 className="text-xl font-display font-semibold mb-6 text-center">
                {category.name}
              </h3>
              
              {category.skills.map((skill) => (
                <ProgressBar
                  key={skill.name}
                  label={skill.name}
                  percentage={skill.level}
                />
              ))}
            </div>
          ))}
        </div>
        
        <Separator className="my-16" />
        
        <div className="mt-12">
          <AnimatedText
            text={getTranslation("technologiesTools", language)}
            className="text-2xl font-display font-semibold mb-8 text-center"
          />
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <div key={tech} className="animate-fade-in" style={{ animationDelay: `${50 * index}ms` }}>
                <span className="skill-tag">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
