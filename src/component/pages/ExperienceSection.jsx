import { useState } from "react";
import Button from "../ui/Button"; 
import { Card } from "../ui/Card";
import { Pencil, Plus, Trash2 } from "lucide-react";

export const ExperienceSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [experiences, setExperiences] = useState([
    {
      id: "1",
      company: "Tech Innovations Inc.",
      role: "Senior Developer",
      period: "2022 - Present",
      description:
        "Leading frontend development team and architecting scalable solutions."
    },
    {
      id: "2",
      company: "Digital Solutions Ltd.",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple web applications using React and Node.js."
    },
    {
      id: "3",
      company: "StartUp Ventures",
      role: "Junior Developer",
      period: "2018 - 2020",
      description:
        "Contributed to various projects and learned modern web development practices."
    }
  ]);

  const addExperience = () => {
    const newExp = {
      id: Date.now().toString(),
      company: "New Company",
      role: "New Role",
      period: "Year - Year",
      description: "Description of your role and achievements."
    };
    setExperiences([newExp, ...experiences]);
  };

  const deleteExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const updateExperience = (id, field, value) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Experience</h2>

          <div className="flex gap-2">
            {/* Pencil Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(!isEditing)}
              className="border-gray-300"
            >
              <Pencil className="h-4 w-4 " />
            </Button>

            {isEditing && (
              <Button
                variant="default"
                size="icon"
                onClick={addExperience}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Plus className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="relative">
          {/* Blue Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[3px] bg-blue-500/50 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Blue dot */}
                <div className="absolute left-8 md:left-1/2 w-5 h-5 bg-blue-600 rounded-full -ml-2 mt-6 ring-4 ring-white z-10"></div>

                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  } ml-16 md:ml-0`}
                >
                  <Card className="p-6 shadow-md hover:shadow-xl transition-all relative">
                    
                    {isEditing && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteExperience(exp.id)}
                        className="absolute top-2 right-2 hover:bg-red-100"
                      >
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    )}

                    {/* Company */}
                    {isEditing ? (
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) =>
                          updateExperience(exp.id, "company", e.target.value)
                        }
                        className="text-2xl font-bold mb-2 bg-transparent border-b border-gray-300 focus:border-blue-600 outline-none w-full"
                      />
                    ) : (
                      <h3 className="text-2xl font-bold text-blue-600 mb-2">
                        {exp.company}
                      </h3>
                    )}

                    {/* Role */}
                    {isEditing ? (
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) =>
                          updateExperience(exp.id, "role", e.target.value)
                        }
                        className="text-lg font-semibold mb-1 bg-transparent border-b border-gray-300 focus:border-blue-600 outline-none w-full"
                      />
                    ) : (
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {exp.role}
                      </h4>
                    )}

                    {/* Period */}
                    {isEditing ? (
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) =>
                          updateExperience(exp.id, "period", e.target.value)
                        }
                        className="text-sm mb-3 bg-transparent border-b border-gray-300 focus:border-blue-600 outline-none w-full text-gray-500"
                      />
                    ) : (
                      <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                    )}

                    {/* Description */}
                    {isEditing ? (
                      <textarea
                        value={exp.description}
                        onChange={(e) =>
                          updateExperience(
                            exp.id,
                            "description",
                            e.target.value
                          )
                        }
                        rows={3}
                        className="border border-gray-300 rounded bg-transparent p-2 w-full focus:border-blue-600 outline-none text-gray-700"
                      />
                    ) : (
                      <p className="text-gray-700">{exp.description}</p>
                    )}
                  </Card>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
