import React from "react";
import Experienceitem from  "../ui/Experienceitem"
import experienceData from "../data/experienceData";
import { Pencil } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="bg-gray-100 w-full py-20 px-6 md:px-20">
      {/* Title + Edit Button */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">Experience</h2>

        <button className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-300 transition">
          <Pencil className="h-4 w-4 text-gray-700" />
        </button>
      </div>

      {/* Timeline Layout */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-y-20">
        <div></div>

        {/* Center Line */}
        <div className="hidden md:flex flex-col items-center">
          <div className="w-[2px] h-full bg-gray-300"></div>
        </div>

        <div></div>

        {/* Experience Items */}
        {experienceData.map((item, index) => (
          <React.Fragment key={index}>
            {/* Left Item */}
            <div className="flex justify-start">
              {index % 2 === 0 && <Experienceitem {...item} align="left" />}
            </div>

            {/* Middle Dot */}
            <div className="hidden md:flex justify-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>

            {/* Right Item */}
            <div className="flex justify-end">
              {index % 2 !== 0 && <Experienceitem {...item} align="right" />}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
