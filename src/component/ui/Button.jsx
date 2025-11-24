import React from "react";

const variantClasses = {
  default: "bg-white text-gray-900",
  primary: "bg-blue-600 text-white",
  ghost: "bg-transparent",
  destructive: "bg-red-600 text-white",
  outline: "bg-transparent border border-current",
};

const sizeClasses = {
  default: "px-6 py-3",
  icon: "w-10 h-10 p-0 flex items-center justify-center",
};

const Button = ({
  label,
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
  asChild = false,
}) => {
  const base = "rounded-xl font-semibold transition inline-flex items-center justify-center";
  const classes = `${base} ${variantClasses[variant] ?? ""} ${sizeClasses[size] ?? ""} ${className}`.trim();

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${classes} ${children.props.className ?? ""}`.trim(),
      onClick: onClick ?? children.props.onClick,
    });
  }

  return (
    <button onClick={onClick} className={classes}>
      {children ?? label}
    </button>
  );
};

export default Button;
