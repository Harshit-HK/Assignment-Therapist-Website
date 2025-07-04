"use client";
import React from "react";

const templates = [
  { title: "Healing Journey", description: "Discover paths to personal growth and emotional wellbeing." },
  { title: "Therapy Sessions", description: "One-on-one therapy tailored to your needs." },
  { title: "Mindfulness", description: "Learn calm and clarity with guided practices." },
  { title: "Couples Counseling", description: "Strengthen your bond and communication." },
  { title: "Stress Relief", description: "Learn tools to manage anxiety and burnout." },
];

const AutoScrollSlider = () => {
  return (
    <section className="relative bg-[rgb(181,219,223)] py-16 overflow-hidden flex justify-center">
      <div className="w-[70%] relative group overflow-hidden">
        {/* Gradient sides */}
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[rgb(181,219,223)] via-[rgb(181,219,223)]/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[rgb(181,219,223)] via-[rgb(181,219,223)]/60 to-transparent z-10 pointer-events-none" />

        {/* Looping Container */}
        <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
          {[...templates, ...templates, ...templates].map((item, index) => (
            <div
              key={index}
              className="min-w-[250px] max-w-[250px] bg-white shadow-md rounded-xl p-6 mx-4 text-center"
            >
              <h3 className="text-lg font-bold text-[#1b464a] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoScrollSlider;
