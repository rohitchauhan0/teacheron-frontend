"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { USER_API } from "@/apis/all_api";
import { apiconnector } from "@/utils/api-connector";
import toast from "react-hot-toast";

const ResetPasswordPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // Extract token from query

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {RESET_PASSWORD} = USER_API
  const router = useRouter();

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      alert("Invalid or missing token");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const toastId = toast.loading('Resetting password...');

    try {
        const response = await apiconnector<any>('POST', RESET_PASSWORD, {
            token,
            newPassword: password
        })
        if(response.data.status){
            toast.success(response.data.message)
            router.push('/login')
        }
    } catch (error) {
        console.log(error);
        toast.error('Failed to reset password');
    }

    toast.dismiss(toastId);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Reset Your Password
        </h2>

        {!token ? (
          <p className="text-red-600 text-center">
            ❌ Invalid or missing reset link
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* New Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Re-enter new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-green-700 transition"
            >
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordPage;
