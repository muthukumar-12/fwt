// src/components/ui/badge.jsx
import React from "react";

export const Badge = ({ children, className = "" }) => {
  return (
    <span
      className={
        `inline-block px-2 py-1 text-xs rounded-full 
         bg-primary/10 text-primary font-medium ` + className
      }
    >
      {children}
    </span>
  );
};

export default Badge;
