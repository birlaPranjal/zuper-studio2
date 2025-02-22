"use client";
import React from "react";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Zuper Prashant",
    role: "Founder & CEO",
    image: "https://res.cloudinary.com/travelee/image/upload/v1739794557/d441e76a-616a-4030-8bc9-5772963ccc7b.png",
  },
  {
    name: "Zuper Ayushi",
    role: "Co-Founder",
    image: "https://res.cloudinary.com/travelee/image/upload/v1739796809/beca13ac-5d49-4347-8878-77dc4db60160.png",
  },
  {
    name: "Zuper Prateeksha",
    role: "HR & Operations",
    image: "https://res.cloudinary.com/travelee/image/upload/v1739796429/WhatsApp_Image_2025-02-17_at_17.54.44_ec09452f_xy5u1j.jpg",
  }
];

export default function TeamGrid() {
  return (
    <div className="text-white py-6 px-3 md:py-10 md:px-4 lg:px-10 w-[90vw] max-w-6xl">
      <h2 className="text-blue-500 text-xl lg:text-2xl">Our Team</h2>
      <h3 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-2 md:mb-4">Meet Our Team</h3>
      <p className="text-gray-400 mb-8 md:mb-10 max-w-2xl text-sm md:text-base">
        At Magnality Films, we specialize in creating compelling short commercial content. Over the years, we have assembled a talented team.
      </p>

      <div className="flex items-center justify-evenly gap-10 flex-wrap">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center max-w-xs">
            <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden">
              <Image 
                src={member.image} 
                alt={member.name} 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </div>
            <div className="text-center p-2 md:p-3 mt-2 md:mt-4 w-full bg-opacity-80">
              <h4 className="text-lg md:text-xl font-bold mb-1">{member.name}</h4>
              <p className="text-sm md:text-base text-gray-400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}