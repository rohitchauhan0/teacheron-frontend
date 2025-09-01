// src/components/TutorCard.tsx
import React from "react";

import { FaMapMarkerAlt, FaLaptop, FaUserFriends } from "react-icons/fa";

// src/types.ts

export interface Tutor {
    id: number;
    name: string;
    subjects: string[];
    bio: string;
    location: string;
    rate: {
      min: number;
      max: number;
      currency: string;
      unit: string;
    };
    experience: {
      online: number;
      inPerson: number;
    };
  }
  
interface Props {
  tutor: Tutor;
}

const TutorCard: React.FC<Props> = ({ tutor }) => {
  const { name, subjects, bio, location, rate, experience } = tutor;

  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-6 max-w-2xl bg-white shadow-sm">
      <h2 className="text-2xl text-blue-600 font-medium mb-2">{name}</h2>

      <div className="flex flex-wrap gap-2 mb-4">
        {subjects.map((subj, index) => (
          <span
            key={index}
            className="text-sm px-3 py-1 border border-gray-400 rounded"
          >
            {subj}
          </span>
        ))}
      </div>

      <p className="text-gray-700 mb-4 text-sm">{bio}</p>

      <div className="flex items-center text-gray-600 flex-wrap gap-x-6 gap-y-2 text-sm">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-1">
          💲 {rate.min}–{rate.max}/{rate.unit}
        </div>
        <div className="flex items-center gap-1">
          <FaLaptop />
          <span>{experience.online}.0 yr.</span>
        </div>
        <div className="flex items-center gap-1">
          <FaUserFriends />
          <span>{experience.inPerson}.0 yr.</span>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
