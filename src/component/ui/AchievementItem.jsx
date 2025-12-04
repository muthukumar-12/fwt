import Card from "./Card"
import Button from "./Button";
import { Trash2, TrendingUp, Users, Award, Target } from "lucide-react";
import React from "react";

const iconMap = {
  TrendingUp,
  Users,
  Award,
  Target
};

export const AchievementItem = ({
  achievement,
  isEditing,
  deleteAchievement,
  updateAchievement,
}) => {
  const IconComponent = iconMap[achievement.icon] || Target;

  return (
   <Card
  className="
    relative 
    glass-effect 
    shadow-md 
    transition-all duration-300 
    hover:shadow-xl hover:shadow-primary/20 
    hover:-translate-y-2 hover:scale-[1.03]
    rounded-xl
  "
>



      {isEditing && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => deleteAchievement(achievement.id)}
          className="absolute top-2 right-2 z-10"
        >
          <Trash2 className="h-4 w-4 text-destructive" />
        </Button>
      )}

      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <IconComponent className="h-8 w-8 text-primary" />
        </div>

        {isEditing ? (
          <>
            {/* Number */}
            <input
              type="text"
              value={achievement.number}
              onChange={(e) =>
                updateAchievement(achievement.id, "number", e.target.value)
              }
              className="text-4xl font-bold mb-2 bg-transparent border-b border-border focus:outline-none focus:border-primary text-center w-full text-primary"
            />

            {/* Label */}
            <input
              type="text"
              value={achievement.label}
              onChange={(e) =>
                updateAchievement(achievement.id, "label", e.target.value)
              }
              className="text-sm bg-transparent border-b border-border focus:outline-none focus:border-primary text-center w-full text-muted-foreground"
            />

            {/* Icon Selector */}
            <select
              value={achievement.icon}
              onChange={(e) =>
                updateAchievement(achievement.id, "icon", e.target.value)
              }
              className="mt-3 text-xs bg-background border border-border rounded px-2 py-1"
            >
              <option value="TrendingUp">TrendingUp</option>
              <option value="Users">Users</option>
              <option value="Award">Award</option>
              <option value="Target">Target</option>
            </select>
          </>
        ) : (
          <>
            <h3 className="text-4xl font-bold text-primary mb-2">
              {achievement.number}
            </h3>
            <p className="text-muted-foreground">{achievement.label}</p>
          </>
        )}
      </div>
    </Card>
  );
};
