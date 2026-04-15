import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "flex w-full border px-3 py-2 text-sm outline-none placeholder:text-[#8a94a3]",
      className
    )}
    {...props}
  />
));

Input.displayName = "Input";
