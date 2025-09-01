import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Check Your Email
        </h1>
        <p className="text-gray-600 text-base">
          We have sent a verification link to your registered email address. 
          Please check your inbox and follow the instructions to continue.
        </p>
      </div>
    </div>
  );
};

export default Page;
