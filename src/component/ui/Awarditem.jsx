import Badge from "./Badge";
import Button from "./Button";
import { Trash2, Award } from "lucide-react";

const Awarditem = ({
  award,
  isEditing,
  deleteAward,
  updateAward,
}) => {
  return (
    <li className="relative pl-8 border-l-2 border-accent pb-6 last:pb-0">
      
      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 w-4 h-4 bg-accent rounded-full -ml-2.5"></div>

      {/* Delete Button */}
      {isEditing && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => deleteAward(award.id)}
          className="absolute top-0 right-0"
        >
          <Trash2 className="h-4 w-4 text-destructive" />
        </Button>
      )}

      {/* Title + Icon */}
      <div className="flex items-start gap-3 mb-2">
        <Award className="h-5 w-5 text-accent mt-1" />

        {isEditing ? (
          <input
            type="text"
            value={award.title}
            onChange={(e) => updateAward(award.id, "title", e.target.value)}
            className="text-lg font-semibold bg-transparent border-b border-border focus:outline-none focus:border-primary w-full"
          />
        ) : (
          <h3 className="text-lg font-semibold text-foreground">
            {award.title}
          </h3>
        )}
      </div>

      {/* Organization + Year */}
      <div className="ml-8 space-y-2">

        {isEditing ? (
          <div className="flex gap-2">
            <input
              type="text"
              value={award.organization}
              onChange={(e) =>
                updateAward(award.id, "organization", e.target.value)
              }
              className="flex-1 text-sm bg-transparent border-b border-border focus:outline-none focus:border-primary text-accent"
            />
            <input
              type="text"
              value={award.year}
              onChange={(e) =>
                updateAward(award.id, "year", e.target.value)
              }
              className="w-20 text-sm bg-transparent border-b border-border focus:outline-none focus:border-primary text-muted-foreground"
            />
          </div>
        ) : (
          <Badge className="text-xs">
            {award.organization} — {award.year}
          </Badge>
        )}

        {/* Description */}
        {isEditing ? (
          <textarea
            value={award.description}
            onChange={(e) =>
              updateAward(award.id, "description", e.target.value)
            }
            className="w-full text-sm bg-transparent border border-border focus:outline-none focus:border-primary p-2 rounded resize-none"
            rows={2}
          />
        ) : (
          <p className="text-sm text-muted-foreground">{award.description}</p>
        )}
      </div>
    </li>
  );
};

export default Awarditem;
