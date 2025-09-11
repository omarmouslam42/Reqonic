import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // Base
        "flex w-full min-h-[120px] rounded-lg border border-input bg-background dark:bg-input/30",
        "px-4 py-3 text-base md:text-sm leading-relaxed",
        "shadow-sm transition-colors duration-200 ease-in-out outline-none",
        
        // Placeholder + selection
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        
        // Focus
        "focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/50",
        
        // Invalid
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        
        // Disabled
        "disabled:cursor-not-allowed disabled:opacity-50",
        
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
