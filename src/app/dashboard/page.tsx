'use client';
import Link from 'next/link';
import React from 'react';
import { Upload, Smartphone, Video, Star, Users, Megaphone, UserPlus, User, Wallet } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen px-6 py-10 flex flex-col items-center max-w-screen-xl mx-auto bg-gray-50">
      
      {/* Notification Banner */}
      <div className="w-full bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 mb-8 rounded-xl flex items-center justify-between shadow">
        <span className="flex items-center gap-2">⚠️ Verification Pending</span>
        <button className="text-xl font-bold text-yellow-800 hover:scale-110 transition">×</button>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center w-full gap-12 mt-10">
        
        {/* Left Section */}
        <div className="flex flex-col items-center space-y-8 w-full lg:w-2/3">
          
          {/* Top Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            <Link href="/dashboard/upload-photo">
              <div className="bg-red-500 text-white text-center py-8 rounded-xl shadow hover:shadow-lg hover:scale-105 transition flex flex-col items-center gap-3">
                <Upload size={28} /> 
                <span className="font-semibold text-lg">Upload Photo</span>
              </div>
            </Link>
            <Link href="/dashboard/verify-mobile">
              <div className="bg-indigo-500 text-white text-center py-8 rounded-xl shadow hover:shadow-lg hover:scale-105 transition flex flex-col items-center gap-3">
                <Smartphone size={28} /> 
                <span className="font-semibold text-lg">Verify Mobile</span>
              </div>
            </Link>
            <Link href="/introduction-video">
              <div className="bg-yellow-400 text-gray-900 text-center py-8 rounded-xl shadow hover:shadow-lg hover:scale-105 transition flex flex-col items-center gap-3">
                <Video size={28} /> 
                <span className="font-semibold text-lg">Intro Video</span>
              </div>
            </Link>
          </div>

          {/* Middle Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
            <Link href="/get-reviews">
              <div className="bg-white text-blue-600 text-center py-8 rounded-xl shadow hover:shadow-lg hover:scale-105 transition flex flex-col items-center gap-3">
                <Star size={26} />
                <span className="font-medium">Get Reviews</span>
              </div>
            </Link>
            <Link href="/refer-earn">
              <div className="bg-white text-blue-600 text-center py-8 rounded-xl shadow hover:shadow-lg hover:scale-105 transition flex flex-col items-center gap-3">
                <Users size={26} />
                <span className="font-medium">Refer & Earn</span>
              </div>
            </Link>
            <Link href="/promote">
              <div className="bg-white text-blue-600 text-center py-8 rounded-xl shadow hover:shadow-lg hover:scale-105 transition flex flex-col items-center gap-3">
                <Megaphone size={26} />
                <span className="font-medium">Promote</span>
              </div>
            </Link>
            <Link href="/invite-friends">
              <div className="bg-white text-blue-600 text-center py-8 rounded-xl shadow hover:shadow-lg hover:scale-105 transition flex flex-col items-center gap-3">
                <UserPlus size={26} />
                <span className="font-medium">Invite Friends</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 gap-6 w-full lg:w-1/3">
          <Link href="/profile">
            <div className="bg-blue-50 text-blue-700 text-center py-10 rounded-xl shadow hover:shadow-lg hover:scale-105 transition flex flex-col items-center gap-3">
              <User size={28} />
              <span className="font-medium text-lg">My Profile</span>
            </div>
          </Link>
          <Link href="/wallet">
            <div className="bg-blue-50 text-blue-700 text-center py-10 rounded-xl shadow hover:shadow-lg hover:scale-105 transition flex flex-col items-center gap-3">
              <Wallet size={28} />
              <span className="font-medium text-lg">0 Coins</span>
            </div>
          </Link>
        </div>


        

      </div>
    </div>
  );
};

export default DashboardPage;
