import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base style
        "flex w-full min-w-0 rounded-lg border border-input bg-background dark:bg-input/30",
        "h-12 px-4 py-2 text-base md:text-sm",
        "shadow-sm transition-colors duration-200 ease-in-out outline-none",

        // File input style
        "file:inline-flex file:h-8 file:rounded-md file:border-0 file:bg-primary/10 file:px-3 file:text-sm file:font-medium file:text-foreground",

        // Placeholder + selection
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",

        // Focus
        "focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/50",

        // Invalid state
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",

        // Disabled state
        "disabled:cursor-not-allowed disabled:opacity-50",

        className
      )}
      {...props}
    />
  );
}

export { Input };
