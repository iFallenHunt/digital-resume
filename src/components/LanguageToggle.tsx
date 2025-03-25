
import React from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      onClick={toggleLanguage}
      className={cn(
        "rounded-full bg-background/80 backdrop-blur-sm px-3 h-10 flex items-center justify-center border-primary/20 dark:border-primary/40",
        className
      )}
      aria-label="Toggle language"
    >
      <Globe className="h-5 w-5 text-foreground dark:text-primary" />
      <span className="ml-1 text-xs font-medium dark:text-primary">
        {language === "pt-BR" ? "EN" : "PT"}
      </span>
    </Button>
  );
};

export default LanguageToggle;
