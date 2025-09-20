'use client'
import { USER_API } from "@/apis/all_api";
import { apiconnector } from "@/utils/api-connector";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const ForgotPassword = () => {
  const {FORGOT_PASSWORD} = USER_API

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleForgotPassword = async() => {
    const toastId = toast.loading('Sending email...');
      try {
        const response = await apiconnector<any>('POST', FORGOT_PASSWORD, formData);
        if(response.data.status){
          toast.success(response.data.message)
        }
      } catch (err) {
        console.log(err);
        let errorMessage = 'Registration failed';
        if (axios.isAxiosError(err) && err.response && err.response.data && err.response.data.message) {
          errorMessage = err.response.data.message;
        }
        toast.error(errorMessage);
      }
      toast.dismiss(toastId);
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Forgot Password?
        </h2>

        {/* Points / Instructions */}
        <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1 mb-6">
          <li>Enter your registered Gmail address.</li>
          <li>We will send you a password reset link.</li>
          <li>Check your inbox and follow the instructions.</li>
        </ul>

        {/* Input */}
        <form className="space-y-4" onSubmit={(e) => {
          e.preventDefault();
          handleForgotPassword();
        }}>
          <div>
            <label
              htmlFor="gmail"
              className="block text-sm font-medium text-gray-700"
            >
              Gmail Address
            </label>
            <input
              type="email"
              id="gmail"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your Gmail"
              className="mt-1 block w-full px-3 py-2 border rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
