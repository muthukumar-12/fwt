import { useState } from "react";
import Button  from "../ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Pencil, Plus, Trash2, ExternalLink, Github } from "lucide-react";

export const Projectssection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "Business Expansion Plan",
      description: "Developed a strategy to expand into new markets, resulting in a 30% increase in revenue.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      tags: ["Business", "Strategy"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "2",
      title: "Community Fundraiser",
      description: "Organized a local fundraiser event, raising $10,000 for charity.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Event", "Community"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "3",
      title: "Marketing Campaign",
      description: "Led a marketing campaign that increased brand awareness by 50%.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      tags: ["Marketing", "Branding"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "4",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]);

  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      title: "New Project",
      description: "Project description goes here.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["Tag1", "Tag2"],
      liveUrl: "#",
      githubUrl: "#"
    };
    setProjects([...projects, newProject]);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(proj => proj.id !== id));
  };

  const updateProject = (id, field, value) => {
    setProjects(projects.map(proj =>
      proj.id === id ? { ...proj, [field]: value } : proj
    ));
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Projects</h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            {isEditing && (
              <Button
                variant="default"
                size="sm"
                onClick={addProject}
              >
                <Plus className="h-4 w-4 mr-2" /> Add Project
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover-lift group">
              <div className="relative h-48 overflow-hidden">
                {isEditing ? (
                  <label className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black text-white">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = () => updateProject(project.id, "image", reader.result);
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="hidden"
                    />
                    <span className="text-white font-semibold px-6 py-3 rounded bg-black bg-opacity-90 border border-white/20 shadow-lg">
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

                {isEditing && (
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deleteProject(project.id)}
                    className="absolute top-2 right-2"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>

              <CardHeader>
                {isEditing ? (
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => updateProject(project.id, "title", e.target.value)}
                    className="text-xl font-bold bg-transparent border-b border-border focus:outline-none focus:border-primary w-full"
                  />
                ) : (
                  <CardTitle>{project.title}</CardTitle>
                )}
              </CardHeader>

              <CardContent>
                {isEditing ? (
                  <textarea
                    value={project.description}
                    onChange={(e) => updateProject(project.id, "description", e.target.value)}
                    className="w-full bg-transparent border border-border focus:outline-none focus:border-primary p-2 rounded resize-none"
                    rows={3}
                  />
                ) : (
                  <CardDescription>{project.description}</CardDescription>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                  {isEditing ? (
                    <input
                      type="text"
                      value={project.tags.join(", ")}
                      onChange={(e) => updateProject(project.id, "tags", e.target.value.split(",").map(t => t.trim()))}
                      placeholder="Tags (comma separated)"
                      className="w-full bg-transparent border border-border focus:outline-none focus:border-primary p-2 rounded text-sm"
                    />
                  ) : (
                    project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">{tag}</Badge>
                    ))
                  )}
                </div>
              </CardContent>

              {!isEditing && (
                <CardFooter className="gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
