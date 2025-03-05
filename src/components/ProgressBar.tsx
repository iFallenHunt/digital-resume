
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  percentage: number;
  label: string;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  percentage, 
  label,
  className 
}) => {
  const [width, setWidth] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setWidth(percentage);
          }, 300);
          if (progressRef.current) {
            observer.unobserve(progressRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [percentage]);

  return (
    <div className={cn("mb-6", className)} ref={progressRef}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
