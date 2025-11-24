import React from "react";

const Button = ({ label, variant = "primary", onClick }) => {
  const styles =
    variant === "primary"
      ? "bg-white text-gray-900 shadow hover:shadow-lg"
      : "bg-white/20 text-white hover:bg-white/30";

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold transition ${styles}`}
    >
      {label}
    </button>
  );
};

export default Button;
