
import React from "react";
import ProgressBar from "./ProgressBar";
import AnimatedText from "./AnimatedText";
import { Separator } from "@/components/ui/separator";

interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Front-end",
      skills: [
        { name: "HTML & CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 }
      ],
    },
    {
      name: "Back-end",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "Firebase", level: 80 },
        { name: "REST APIs", level: 85 }
      ],
    },
    {
      name: "Outros",
      skills: [
        { name: "UI/UX Design", level: 80 },
        { name: "Git & GitHub", level: 85 },
        { name: "Responsividade", level: 95 },
        { name: "Acessibilidade", level: 75 },
        { name: "SEO", level: 70 }
      ],
    },
  ];

  const technologies = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", 
    "Node.js", "Express", "MongoDB", "Firebase", "Git", "GitHub",
    "Figma", "Responsive Design", "REST APIs", "GraphQL", "NextJS", "Redux"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Minhas Habilidades"
          className="section-heading"
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <AnimatedText
              key={category.name}
              text=""
              className="glass-card p-6"
              delay={200 * index}
            >
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
            </AnimatedText>
          ))}
        </div>
        
        <Separator className="my-16" />
        
        <div className="mt-12">
          <AnimatedText
            text="Tecnologias & Ferramentas"
            className="text-2xl font-display font-semibold mb-8 text-center"
          />
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <AnimatedText
                key={tech}
                text=""
                delay={50 * index}
              >
                <span className="skill-tag">
                  {tech}
                </span>
              </AnimatedText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
