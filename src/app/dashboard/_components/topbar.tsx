'use client'
import React from 'react';
import { Bell } from 'lucide-react'; 
const Topbar = () => {
  return (
    <div className="w-full bg-white shadow-md px-6 py-5 my-4 rounded-xl flex items-center justify-between">

      <div className="text-xl font-bold text-gray-800">MyApp</div>

      <div className="flex items-center gap-4">

        <div className="relative cursor-pointer">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>


        {/* <Image
          width={40}
          height={40}
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="User"
          className="w-9 h-9 rounded-full object-cover"
        /> */}
      </div>
    </div>
  );
};

export default Topbar;
