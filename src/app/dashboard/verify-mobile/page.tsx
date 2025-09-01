'use client';
import React, { useState } from 'react';
import { Pencil, Trash2, ShieldCheck } from "lucide-react";
import toast from 'react-hot-toast';

const VerifyMobilePage = () => {
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleVerifyClick = () => {
    setShowOtpModal(true);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === "1234") {  // dummy process
      setIsVerified(true);
      setShowOtpModal(false);
      setOtp('');
      toast.success('Phone number verified!');
    } else {
      toast.error('Invalid OTP');
    }
  };

  return (
    <div className="min-h-screen max-w-screen-md mx-auto flex flex-col items-center space-y-6 bg-gradient-to-br from-gray-50 to-white p-10 text-[#444]">
      
      {/* Alert */}
      <div className="w-full bg-yellow-100 border border-yellow-300 text-yellow-800 px-5 py-4 rounded-xl shadow-sm flex items-center text-[16px]">
        ⚠️ <span className="ml-2">Students can't see your phone. Please verify your phone number to fix this.</span>
      </div>

      {/* Phone Numbers */}
      <h1 className="text-2xl font-bold text-gray-800">📱 Phone Numbers</h1>
      <div className="bg-white shadow-md rounded-xl px-6 py-4 flex items-center gap-4 w-full justify-between">
        <span className="text-lg font-medium text-gray-700">+91-8979532799</span>
        <div className="flex gap-3">
          {!isVerified ? (
            <button 
              onClick={handleVerifyClick}
              className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded shadow-sm text-sm"
            >
              <ShieldCheck size={16}/> Verify
            </button>
          ) : (
            <span className="text-green-600 font-medium flex items-center gap-1">
              <ShieldCheck size={16}/> Verified
            </span>
          )}
          <button className="text-red-600 hover:text-red-700 flex items-center gap-1 text-sm">
            <Trash2 size={16}/> Delete
          </button>
          <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm">
            <Pencil size={16}/> Edit
          </button>
        </div>
      </div>

      {/* Add Phone */}
      <h2 className="text-xl font-semibold text-gray-800 mt-6">➕ Add Phone</h2>
      <div className="flex items-stretch border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <span className="px-3 py-2 bg-gray-100 text-gray-700 text-sm flex items-center">
          +91 India
        </span>
        <input
          type="text"
          placeholder="Number"
          className="px-3 py-2 w-64 outline-none text-sm"
        />
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md">
        Save
      </button>

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Enter OTP</h3>
            <p className="text-sm text-gray-600 mb-4">We sent a 4-digit code to your number.</p>
            <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4">
              <input 
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                maxLength={4}
                className="border border-gray-300 rounded-lg px-4 py-2 outline-none text-center tracking-widest text-lg"
              />
              <div className="flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => { setShowOtpModal(false); setOtp(''); }}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyMobilePage;
