import React from "react";
import Experienceitem from  "../ui/Experienceitem"
import experienceData from "../data/experienceData";
import { Pencil } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="bg-gray-100 w-full py-16 px-4 md:px-20">
      {/* Title + Edit Button */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">Experience</h2>

        <button className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-300 transition">
          <Pencil className="h-4 w-4 text-gray-700" />
        </button>
      </div>

      {/* Timeline Layout */}
      <div className="relative">
        {/* center vertical line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gray-300" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-4">

        {/* Experience Items */}
        {experienceData.map((item, index) => (
          <React.Fragment key={index}>
            {/* Left Item */}
            <div className="flex justify-start">
              {index % 2 === 0 && <Experienceitem {...item} align="left" />}
            </div>

            {/* Middle Dot */}
            <div className="hidden md:flex justify-center items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full z-30 ring-4 ring-white/50 shadow-sm"></div>
            </div>

            {/* Right Item */}
            <div className="flex justify-end">
              {index % 2 !== 0 && <Experienceitem {...item} align="right" />}
            </div>
          </React.Fragment>
        ))}
        </div>
      </div>
    </section>
  );
}
