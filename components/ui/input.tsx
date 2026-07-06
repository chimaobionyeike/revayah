import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "h-12 w-full rounded-[14px] border border-emerald/15 bg-white px-4 text-base text-foreground shadow-none transition placeholder:text-muted/70 focus:border-emerald focus:outline-none focus:ring-4 focus:ring-emerald/10",
      className
    )}
    {...props}
  />
));

Input.displayName = "Input";

export { Input };
