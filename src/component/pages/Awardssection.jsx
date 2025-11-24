import { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { Pencil, Plus } from "lucide-react";

import { awardsdata as initialData } from "../data/award";
import  AwardItem  from "../ui/Awarditem"; 

export const Awardssection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [awards, setAwards] = useState(initialData);

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
    setAwards(awards.filter((a) => a.id !== id));
  };

  const updateAward = (id, field, value) => {
    setAwards(
      awards.map((a) => (a.id === id ? { ...a, [field]: value } : a))
    );
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Awards & Recognition
          </h2>

          <div className="flex gap-2">
            <Button
              variant="outline"
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
                onClick={addAward}
                className="ml-2 bg-blue-600 text-white hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" /> Add Award
              </Button>
            )}
          </div>
        </div>

        {/* Awards List */}
        <Card className="p-8 glass-effect">
          <ul className="space-y-6">
            {awards.map((award) => (
              <AwardItem
                key={award.id}
                award={award}
                isEditing={isEditing}
                deleteAward={deleteAward}
                updateAward={updateAward}
              />
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
};
