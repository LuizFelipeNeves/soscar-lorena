"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className = '', value = 0, max = 100, ...props }, ref) => {
    // Verifica se o valor de max é um número válido maior que 0, caso contrário, define como 100
    const maxValue = typeof max === 'number' && max > 0 ? max : 100;
    // Verifica se o valor é um número válido, caso contrário, define como 0
    const progressValue = typeof value === 'number' && value >= 0 && value <= maxValue ? value : 0;

    return (
      <div
        ref={ref}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-full bg-secondary/20",
          className
        )}
        {...props}
      >
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${(progressValue / maxValue) * 100}%` }}
        />
      </div>
    );
  }
);

Progress.displayName = "Progress";

export { Progress };