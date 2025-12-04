import { useState } from "react";
import { Card, CardContent } from "../ui/Card";
import Button from "../ui/Button";
import { Pencil, Plus, Trash2, TrendingUp, Users, Award, Target } from "lucide-react";

const iconMap = {
  TrendingUp,
  Users,
  Award,
  Target,
};

export const AchievementsGrid = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [achievements, setAchievements] = useState([
    { id: "1", icon: "TrendingUp", number: "50+", label: "Projects Completed" },
    { id: "2", icon: "Users", number: "30+", label: "Happy Clients" },
    { id: "3", icon: "Award", number: "15+", label: "Awards Won" },
    { id: "4", icon: "Target", number: "5+", label: "Years Experience" },
  ]);

  const addAchievement = () => {
    setAchievements([
      ...achievements,
      {
        id: Date.now().toString(),
        icon: "Target",
        number: "0+",
        label: "New Achievement",
      },
    ]);
  };

  const deleteAchievement = (id) => {
    setAchievements(achievements.filter((a) => a.id !== id));
  };

  const updateAchievement = (id, field, value) => {
    setAchievements(
      achievements.map((a) =>
        a.id === id ? { ...a, [field]: value } : a
      )
    );
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Achievements
          </h2>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(!isEditing)}
              className="rounded-lg bg-blue-500 border-blue-300 hover:bg-blue-500 "
            >
              <Pencil className="h-4 w-4" />
            </Button>

            {isEditing && (
              <Button
              variant="default"
                size="sm"
                className="bg-primary text-white rounded-lg hover:bg-primary/90"
                onClick={addAchievement}
              >
                <Plus className="h-4 w-4 mr-2" /> Add
              </Button>
            )}
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item) => {
            const Icon = iconMap[item.icon] || Target;

            return (
              <Card
                key={item.id}
                className="relative rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition bg-white"
              >
                {isEditing && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteAchievement(item.id)}
                    className="absolute top-2 right-2 z-10"
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                )}

                <CardContent className="flex flex-col items-center text-center p-10">
                  {/* ICON CIRCLE */}
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* EDIT MODE */}
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={item.number}
                        onChange={(e) =>
                          updateAchievement(item.id, "number", e.target.value)
                        }
                        className="text-4xl font-bold mb-2 bg-transparent border-b border-border focus:outline-none focus:border-primary text-center w-full text-primary"
                      />

                      <input
                        type="text"
                        value={item.label}
                        onChange={(e) =>
                          updateAchievement(item.id, "label", e.target.value)
                        }
                        className="text-muted-foreground bg-transparent border-b border-border focus:outline-none text-center"
                      />

                      <select
                        value={item.icon}
                        onChange={(e) =>
                          updateAchievement(item.id, "icon", e.target.value)
                        }
                        className="mt-3 text-sm bg-background border border-border rounded px-2 py-1"
                      >
                        <option value="TrendingUp">TrendingUp</option>
                        <option value="Users">Users</option>
                        <option value="Award">Award</option>
                        <option value="Target">Target</option>
                      </select>
                    </>
                  ) : (
                    <>
                      <div className="text-4xl font-bold text-primary mb-1">
                        {item.number}
                      </div>
                      <p className="text-gray-500">{item.label}</p>
                    </>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
