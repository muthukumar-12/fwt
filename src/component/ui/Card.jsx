import React from "react";

// Base Card
export const Card = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`
        rounded-lg 
       
        bg-white 
        text-gray-900 
        shadow-sm
        ${className}
      `}
      {...props}
    />
  );
});

// Card Header
export const CardHeader = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`
        flex 
        flex-col 
        space-y-1.5 
        p-6
        ${className}
      `}
      {...props}
    />
  );
});

// Card Title
export const CardTitle = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={`
        text-2xl 
        font-semibold 
        leading-none 
        tracking-tight
        ${className}
      `}
      {...props}
    />
  );
});

// Card Description
export const CardDescription = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={`
        text-sm 
        text-gray-500
        ${className}
      `}
      {...props}
    />
  );
});

// Card Content
export const CardContent = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`
        p-6 
        pt-0
        ${className}
      `}
      {...props}
    />
  );
});

// Card Footer
export const CardFooter = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`
        flex 
        items-center 
        p-6 
        pt-0
        ${className}
      `}
      {...props}
    />
  );
});
