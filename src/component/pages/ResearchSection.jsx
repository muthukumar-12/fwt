import { useState } from "react";
import Button from "../ui/Button";
import { Card } from "../ui/Card";
import { Pencil, Plus, Trash2, BookOpen } from "lucide-react";

export const ResearchSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [research, setResearch] = useState([
    {
      id: "1",
      title: "Machine Learning Applications in Web Development",
      publication: "Journal of Modern Computing",
      year: "2023",
      description: "Exploring the integration of ML models in frontend applications for enhanced user experiences."
    },
    {
      id: "2",
      title: "Scalable Microservices Architecture Patterns",
      publication: "International Conference on Software Engineering",
      year: "2022",
      description: "Best practices for designing and implementing scalable microservices systems."
    },
    {
      id: "3",
      title: "Performance Optimization in React Applications",
      publication: "Web Development Quarterly",
      year: "2022",
      description: "Advanced techniques for improving React application performance and user experience."
    }
  ]);

  const addResearch = () => {
    const newItem = {
      id: Date.now().toString(),
      title: "New Research Title",
      publication: "Publication Name",
      year: "2024",
      description: "Description of the research work."
    };
    setResearch([...research, newItem]);
  };

  const deleteResearch = (id) => {
    setResearch(research.filter(item => item.id !== id));
  };

  const updateResearch = (id, field, value) => {
    setResearch(research.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Research & Publications</h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(!isEditing)}
              className="mb-4 bg-white/10 hover:bg-white/20"
            >
              <Pencil className="h-4 w-4" />
            </Button>
            {isEditing && (
              <Button
                variant="default"
                size="sm"
                className="ml-2 bg-blue-600 text-white hover:bg-blue-700"
                onClick={addResearch}
              >
                <Plus className="h-4 w-4 mr-2" />Add Research
              </Button>
            )}
          </div>
        </div>

        <Card className="p-8 glass-effect">
          <ul className="space-y-6">
            {research.map((item) => (
              <li key={item.id} className="relative pl-8 border-l-2 border-primary pb-6 last:pb-0">
                <div className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full -ml-2.5"></div>
                
                {isEditing && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteResearch(item.id)}
                    className="absolute top-0 right-0"
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                )}

                <div className="flex items-start gap-3 mb-2">
                  <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => updateResearch(item.id, "title", e.target.value)}
                      className="text-lg font-semibold bg-transparent border-b border-border focus:outline-none focus:border-primary w-full"
                    />
                  ) : (
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  )}
                </div>

                <div className="ml-8 space-y-2">
                  {isEditing ? (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={item.publication}
                        onChange={(e) => updateResearch(item.id, "publication", e.target.value)}
                        placeholder="Publication"
                        className="flex-1 text-sm bg-transparent border-b border-border focus:outline-none focus:border-primary text-primary"
                      />
                      <input
                        type="text"
                        value={item.year}
                        onChange={(e) => updateResearch(item.id, "year", e.target.value)}
                        placeholder="Year"
                        className="w-20 text-sm bg-transparent border-b border-border focus:outline-none focus:border-primary text-muted-foreground"
                      />
                    </div>
                  ) : (
                    <p className="text-sm text-primary italic">
                      {item.publication} ({item.year})
                    </p>
                  )}

                  {isEditing ? (
                    <textarea
                      value={item.description}
                      onChange={(e) => updateResearch(item.id, "description", e.target.value)}
                      className="w-full text-sm bg-transparent border border-border focus:outline-none focus:border-primary p-2 rounded resize-none text-muted-foreground"
                      rows={2}
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
};
