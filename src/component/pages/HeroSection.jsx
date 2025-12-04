import { useState } from "react";
import Button from "../ui/Button";
import { Pencil } from "lucide-react";

export const HeroSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [heroData, setHeroData] = useState({
    name: "John Doe",
    title: "Full Stack Developer & UI/UX Designer",
    description: "Passionate about creating beautiful, functional, and user-centered digital experiences.",
    imageUrl: "#"
  });

  const handleEdit = (field, value) => {
    setHeroData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-glow rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-white space-y-6 animate-fade-in">
            <Button
              variant="default"
              size="icon"
              onClick={() => setIsEditing(!isEditing)}
              className="mb-4 bg-white/10 hover:bg-white/20"
            >
              <Pencil className="h-4 w-4" />
            </Button>

            {isEditing ? (
              <input
                type="text"
                value={heroData.name}
                onChange={(e) => handleEdit("name", e.target.value)}
                className="text-5xl md:text-7xl font-bold bg-transparent border-b-2 border-white/50 focus:outline-none focus:border-white w-full"
              />
            ) : (
              <h1 className="text-5xl md:text-7xl font-bold editable-section">
                {heroData.name}
              </h1>
            )}

            {isEditing ? (
              <input
                type="text"
                value={heroData.title}
                onChange={(e) => handleEdit("title", e.target.value)}
                className="text-xl md:text-2xl bg-transparent border-b-2 border-white/50 focus:outline-none focus:border-white w-full text-white/90"
              />
            ) : (
              <p className="text-xl md:text-2xl text-white/90 editable-section">
                {heroData.title}
              </p>
            )}

            {isEditing ? (
              <textarea
                value={heroData.description}
                onChange={(e) => handleEdit("description", e.target.value)}
                className="text-lg bg-transparent border-2 border-white/50 focus:outline-none focus:border-white w-full text-white/80 p-2 rounded resize-none"
                rows={3}
              />
            ) : (
              <p className="text-lg text-white/80 max-w-xl editable-section">
                {heroData.description}
              </p>
            )}

            <div className="flex gap-4 pt-4">
              <Button size="lg" variant="secondary" className="hover-lift">
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary hover-lift">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl flex items-center justify-center">
                {isEditing ? (
                  <label className="absolute inset-0 flex items-center justify-center cursor-pointer  text-white">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = () => handleEdit("imageUrl", reader.result);
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="hidden"
                    />
                    <span className="text-white font-semibold px-6 py-3 rounded bg-black bg-opacity-90 border border-white/20 shadow-lg">Choose File</span>
                  </label>
                ) : (
                  <img
                    src={heroData.imageUrl}
                    alt={heroData.name}
                    className="w-full h-full object-cover editable-section"
                  />
                )}
              </div>
               
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
