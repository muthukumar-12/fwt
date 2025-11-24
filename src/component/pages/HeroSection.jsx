import React from "react";
import Heading from "../ui/Heading";
import Subtext from "../ui/Subtext";
import ProfileImage from "../ui/ProfileImage";
import ActionButtons from "../ui/ActionButtons";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-16 md:py-24 px-6 bg-violet-600 text-white">

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left Section */}
        <div className="space-y-8 md:space-y-10 pr-0 md:pr-8">
          <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 transition">
            ✏️
          </button>

          <Heading text="John Doe" />

          <h2 contentEditable className="text-lg md:text-xl lg:text-2xl font-semibold opacity-95 leading-tight outline-none">
            Full Stack Developer & UI/UX Designer
          </h2>

          <Subtext text="Passionate about creating beautiful, functional, and user-centered digital experiences." />

          <ActionButtons />
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end">
          <ProfileImage src="/hero.png" />
        </div>
      </div>
    </section>
  );
}
