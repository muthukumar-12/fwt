import React from "react";
import Card from "../ui/Card";
import { BookOpen } from "lucide-react";
import { researchData } from "../data/researchData";

const Researchsection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Research & Publications
        </h2>

        <Card className="p-8 glass-effect">
          <ul className="space-y-6">
            {researchData.map((item) => (
              <li
                key={item.id}
                className="relative pl-8 border-l-2 border-primary pb-6 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full -ml-2.5"></div>

                {/* Title */}
                <div className="flex items-start gap-3 mb-2">
                  <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>

                {/* Publication */}
                <div className="ml-8 space-y-2">
                  <p className="text-sm text-primary italic">
                    {item.publication} ({item.year})
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Card>

      </div>
    </section>
  );
};

export default Researchsection;
