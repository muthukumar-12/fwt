import React from "react";
import { Slot } from "@radix-ui/react-slot";

// --- VARIANT STYLES ---
const variantClasses = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
outline: `
  border border-violet-500 text-violet-500 
  bg-background 
  hover:bg-violet-50 hover:text-violet-600
`,

  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
 ghost: "text-violetPrimary hover:bg-violetSoft hover:text-violetDark",

  link: "text-primary underline-offset-4 hover:underline"
};

// --- SIZE STYLES ---
const sizeClasses = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10"
};

// --- BASE STYLES ---
const baseClasses = `
  inline-flex items-center justify-center gap-2
  whitespace-nowrap rounded-md text-sm font-medium
  ring-offset-background transition-colors
  focus-visible:outline-none focus-visible:ring-2
  focus-visible:ring-ring focus-visible:ring-offset-2
  disabled:pointer-events-none disabled:opacity-50
  [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
`;

const Button = React.forwardRef(
  ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const finalClasses = `
      ${baseClasses}
      ${variantClasses[variant] || variantClasses.default}
      ${sizeClasses[size] || sizeClasses.default}
      ${className}
    `.trim();

    return <Comp ref={ref} className={finalClasses} {...props} />;
  }
);

Button.displayName = "Button";

export default Button;
