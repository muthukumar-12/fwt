import React from "react";

const Experienceitem = ({ company, role, date, description, align = "left" }) => {
  return (
    <div
      className={`w-full md:w-[1000px] p-4 bg-white rounded-2xl shadow-md border z-20
      ${align === "left" ? "md:ml-0" : "md:ml-auto"}`}
    >
      <h3 contentEditable className="text-xl font-semibold text-blue-600 outline-none">
        {company}
      </h3>

      <p contentEditable className="text-md font-semibold text-gray-800 mt-1 outline-none">
        {role}
      </p>

      <p contentEditable className="text-sm text-gray-500 mt-0.5 outline-none">
        {date}
      </p>

      <p contentEditable className="text-gray-600 mt-2 outline-none">
        {description}
      </p>
    </div>
  );
};

export default Experienceitem;
