
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted px-4">
      <div className={cn(
        "glass-card p-10 md:p-16 max-w-md w-full text-center",
        "animate-scale-in"
      )}>
        <div className="mb-6 text-9xl font-display font-bold bg-gradient-to-br from-primary to-secondary/70 bg-clip-text text-transparent">
          404
        </div>
        
        <h1 className="text-2xl md:text-3xl font-display font-bold mb-4">
          Página não encontrada
        </h1>
        
        <p className="text-foreground/70 mb-8">
          Ops! A página que você está procurando parece ter desaparecido.
        </p>
        
        <Link to="/">
          <Button size="lg" className="w-full">
            Voltar ao início
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
