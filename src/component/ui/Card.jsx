import React from "react";

export const Card = ({ className = "", children }) => {
  return (
    <div
      className={`rounded-xl border border-border bg-card text-card-foreground shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
