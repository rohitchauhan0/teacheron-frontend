// src/app/Page.tsx or src/pages/Page.tsx
import React from "react";
import { DUMMY_DATA, LOCATION_DATA } from "@/data/dummy_tutors";
import TutorCard from "./_components/TutorCard";
import Navbar from "@/app/_common_comp/Navbar";

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between px-4 sm:px-6 lg:px-8 py-6 gap-6">
        
        {/* Tutors Section */}
        <div className="flex-1 md:w-3/4 flex flex-col items-center space-y-4">
          {DUMMY_DATA.map((tutor, index) => (
            <TutorCard key={index} tutor={tutor} />
          ))}
        </div>

        {/* Locations Sidebar */}
        <div className="w-full md:w-1/4 bg-white md:bg-transparent rounded-lg shadow md:shadow-none p-4 md:p-0">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 md:mb-4">
            Locations
          </h3>
          <div className="flex flex-wrap md:flex-col gap-3 md:gap-2">
            {LOCATION_DATA.locations.map((location: any, index: number) => (
              <div
                key={index}
                className="text-blue-600 hover:text-blue-800 underline cursor-pointer transition text-sm sm:text-base"
              >
                {location}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
