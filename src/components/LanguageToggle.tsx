
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
      size="icon"
      onClick={toggleLanguage}
      className={cn(
        "rounded-full bg-background/80 backdrop-blur-sm",
        className
      )}
      aria-label="Toggle language"
    >
      <Globe className="h-5 w-5 text-foreground" />
      <span className="ml-2 sr-only md:not-sr-only md:ml-2 text-xs font-medium">
        {language === "pt-BR" ? "EN" : "PT"}
      </span>
    </Button>
  );
};

export default LanguageToggle;
