import React, { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import {projectsdata as initialData}  from "../data/projectsdata";
import { Pencil, Plus, Trash2, ExternalLink, Github } from "lucide-react";

const Projectssection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [projects, setProjects] = useState(initialData);

  // Add new project
  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      title: "New Project",
      description: "Project description goes here.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["Tag1", "Tag2"],
      liveUrl: "#",
      githubUrl: "#",
    };
    setProjects([...projects, newProject]);
  };

  // Delete project
  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  // Update project field
  const updateProject = (id, field, value) => {
    setProjects(
      projects.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Projects
          </h2>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(!isEditing)}
              className="bg-white/10 hover:bg-white/20"
            >
              <Pencil className="h-4 w-4" />
            </Button>

            {isEditing && (
              <Button
                variant="default"
                onClick={addProject}
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Project
              </Button>
            )}
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover-lift group">

              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                {isEditing ? (
                  <label className="absolute inset-0 flex items-center justify-center bg-black/60 text-white cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const reader = new FileReader();
                        reader.onload = () =>
                          updateProject(project.id, "image", reader.result);
                        reader.readAsDataURL(file);
                      }}
                    />
                    <span className="font-semibold px-4 py-2 bg-black/80 rounded">
                      Upload Image
                    </span>
                  </label>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}

                {/* DELETE BUTTON */}
                {isEditing && (
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => deleteProject(project.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>

              {/* TITLE */}
              <div className="p-4 border-b border-border">
                {isEditing ? (
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) =>
                      updateProject(project.id, "title", e.target.value)
                    }
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none text-xl font-bold"
                  />
                ) : (
                  <h3 className="text-xl font-bold">{project.title}</h3>
                )}
              </div>

              {/* DESCRIPTION + TAGS */}
              <div className="p-4">
                {isEditing ? (
                  <textarea
                    value={project.description}
                    onChange={(e) =>
                      updateProject(project.id, "description", e.target.value)
                    }
                    rows={3}
                    className="w-full bg-transparent border border-border p-2 rounded outline-none focus:border-primary"
                  />
                ) : (
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                )}

                {/* TAGS */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {isEditing ? (
                    <input
                      type="text"
                      value={project.tags.join(", ")}
                      onChange={(e) =>
                        updateProject(
                          project.id,
                          "tags",
                          e.target.value.split(",").map((t) => t.trim())
                        )
                      }
                      className="w-full bg-transparent border border-border p-2 rounded text-sm outline-none focus:border-primary"
                    />
                  ) : (
                    project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))
                  )}
                </div>
              </div>

              {/* FOOTER BUTTONS */}
              {!isEditing && (
                <div className="p-4 border-t border-border flex gap-2">
                  <Button asChild variant="outline" className="flex-1">
                    <a href={project.liveUrl} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2 inline-block" />
                      Live Demo
                    </a>
                  </Button>

                  <Button asChild variant="outline" className="flex-1">
                    <a href={project.githubUrl} target="_blank">
                      <Github className="h-4 w-4 mr-2 inline-block" />
                      Code
                    </a>
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projectssection;
