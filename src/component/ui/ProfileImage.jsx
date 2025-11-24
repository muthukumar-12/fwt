import React from "react";

const ProfileImage = ({ src, theme = "light" }) => {
  const borderColor =
    theme === "dark"
      ? "border-gray-700"
      : theme === "glass"
      ? "border-white/40"
      : "border-purple-300/60";

  return (
    <div className="relative flex justify-center">
      <div
        className={`w-72 h-72 md:w-96 md:h-96 rounded-full border-8 overflow-hidden shadow-xl ${borderColor}`}
      >
        <img src={src} alt="Profile" className="w-full h-full object-cover" />
      </div>

      <div className="absolute bottom-4 right-4 w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-3xl shadow-lg">
        👋
      </div>
    </div>
  );
};

export default ProfileImage;
