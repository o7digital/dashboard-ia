import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none disabled:opacity-50",
          variant === "outline" ? "border bg-transparent" : "",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
