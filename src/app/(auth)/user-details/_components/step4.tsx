'use client';
import { useStep } from '@/context/step_context';
import React, { useState } from 'react';
import { CheckCircle2, Phone } from 'lucide-react';
import { useFormContext } from '@/context/step_data_context';

// Minimal country list
const countries = [
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
];

const Step3 = () => {
  const { nextStep, prevStep } = useStep();
  const { formData, updateFormData } = useFormContext();

  const [showAlert, setShowAlert] = useState(true);

  const currentCountry =
    countries.find((c) => c.code === formData.countryCode) || countries[0];

  const isValidPhone = formData.phoneNumber?.trim().length >= 6;

  const handleSave = () => {
    if (isValidPhone) {
      console.log("Saved phone:", formData.phoneNumber, "Country:", formData.countryCode);
      nextStep();
    }
  };

  return (
    <div className="min-h-screen max-w-xl mx-auto px-4 lg:py-10">
      {/* Success Banner */}
      {showAlert && (
        <div className="flex items-center justify-between bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-sm mb-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="font-medium">Address saved successfully</span>
          </div>
          <button
            className="text-lg font-bold text-green-700 hover:text-green-900"
            onClick={() => setShowAlert(false)}
          >
            ×
          </button>
        </div>
      )}

      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <Phone className="w-6 h-6 text-blue-500" /> Phone Number
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Please provide your active phone number. This will be used for{" "}
          <span className="font-medium">student communication and verification</span>.
          Your number will <span className="text-red-500 font-medium">not</span> be visible to the public.
        </p>

        {/* Phone Input with Country Selector */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Add Phone
          </label>
          <div className="flex items-center space-x-4 w-full">
            {/* Country Dropdown */}
            <select
              value={formData.countryCode}
              onChange={(e) => {
                const selected = countries.find((c) => c.code === e.target.value);
                if (selected) {
                  updateFormData({
                    countryCode: selected.code,
                    dialCode: selected.dialCode,
                  });
                }
              }}
              className="border border-gray-300 px-3 py-2 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 w-1/3"
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} ({c.dialCode})
                </option>
              ))}
            </select>

            {/* Phone Input */}
            <div className="flex flex-1">
              <div className="bg-gray-100 border border-gray-300 text-gray-700 px-3 py-2 flex items-center">
                {formData.dialCode}
              </div>
              <input
                type="tel"
                placeholder="Enter phone number"
                value={formData.phoneNumber}
                onChange={(e) => updateFormData({ phoneNumber: e.target.value })}
                className="flex-1 border border-gray-300 px-3 py-2 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Example: {formData.dialCode} 9876543210
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={prevStep}
            className="w-1/2 py-3 rounded-lg text-gray-700 font-medium border border-gray-300 hover:bg-gray-100 transition"
          >
            Previous
          </button>

          <button
            onClick={handleSave}
            disabled={!isValidPhone}
            className={`w-1/2 py-3 rounded-lg text-white font-medium transition ${
              isValidPhone
                ? "bg-green-600 hover:bg-green-700 shadow"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {isValidPhone ? "Save & Continue" : "Enter a valid phone number"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
