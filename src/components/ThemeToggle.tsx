
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={cn(
        "rounded-full bg-background/80 backdrop-blur-sm",
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-foreground" />
      ) : (
        <Sun className="h-5 w-5 text-foreground" />
      )}
    </Button>
  );
};

export default ThemeToggle;
