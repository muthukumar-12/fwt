import { useState } from "react";
import Button from "../ui/Button";
import { Card } from "../ui/Card";
import { Pencil, Plus, Trash2, Award } from "lucide-react";

export const AwardsSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [awards, setAwards] = useState([
    {
      id: "1",
      title: "Best Developer Award",
      organization: "Tech Conference 2023",
      year: "2023",
      description: "Recognized for outstanding contributions to open-source projects."
    },
    {
      id: "2",
      title: "Innovation Excellence",
      organization: "Digital Innovation Summit",
      year: "2022",
      description: "Awarded for developing innovative solutions in web development."
    },
    {
      id: "3",
      title: "Community Leadership Award",
      organization: "Developer Community Forum",
      year: "2021",
      description: "Honored for mentoring and helping junior developers."
    }
  ]);

  const addAward = () => {
    const newAward = {
      id: Date.now().toString(),
      title: "New Award",
      organization: "Organization Name",
      year: "2024",
      description: "Award description."
    };
    setAwards([...awards, newAward]);
  };

  const deleteAward = (id) => {
    setAwards(awards.filter(award => award.id !== id));
  };

  const updateAward = (id, field, value) => {
    setAwards(awards.map(award =>
      award.id === id ? { ...award, [field]: value } : award
    ));
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Awards & Recognition</h2>
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
                 
                onClick={addAward}
              >
                <Plus className="h-4 w-4 mr-2" />Add Award
              </Button>
            )}
          </div>
        </div>

        <Card className="p-8 glass-effect">
          <ul className="space-y-6">
            {awards.map((award) => (
              <li key={award.id} className="relative pl-8 border-l-2 border-accent pb-6 last:pb-0">
                <div className="absolute left-0 top-2 w-4 h-4 bg-accent rounded-full -ml-2.5"></div>
                
                {isEditing && (
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deleteAward(award.id)}
                    className="absolute top-0 right-0"
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                )}

                <div className="flex items-start gap-3 mb-2">
                  <Award className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={award.title}
                      onChange={(e) => updateAward(award.id, "title", e.target.value)}
                      className="text-lg font-semibold bg-transparent border-b border-border focus:outline-none focus:border-primary w-full"
                    />
                  ) : (
                    <h3 className="text-lg font-semibold text-foreground">{award.title}</h3>
                  )}
                </div>

                <div className="ml-8 space-y-2">
                  {isEditing ? (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={award.organization}
                        onChange={(e) => updateAward(award.id, "organization", e.target.value)}
                        placeholder="Organization"
                        className="flex-1 text-sm bg-transparent border-b border-border focus:outline-none focus:border-primary text-accent"
                      />
                      <input
                        type="text"
                        value={award.year}
                        onChange={(e) => updateAward(award.id, "year", e.target.value)}
                        placeholder="Year"
                        className="w-20 text-sm bg-transparent border-b border-border focus:outline-none focus:border-primary text-muted-foreground"
                      />
                    </div>
                  ) : (
                    <p className="text-sm text-accent font-medium">
                      {award.organization} ({award.year})
                    </p>
                  )}

                  {isEditing ? (
                    <textarea
                      value={award.description}
                      onChange={(e) => updateAward(award.id, "description", e.target.value)}
                      className="w-full text-sm bg-transparent border border-border focus:outline-none focus:border-primary p-2 rounded resize-none text-muted-foreground"
                      rows={2}
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground">{award.description}</p>
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
