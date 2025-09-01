'use client';
import { useStep } from '@/context/step_context';
import React, { useState } from 'react';
import { CheckCircle2, MapPin, AlertCircle } from 'lucide-react';
import { useFormContext } from '@/context/step_data_context';

const Step2 = () => {
  const { nextStep, prevStep } = useStep();
  const { formData, updateFormData } = useFormContext();

  const [showAlert, setShowAlert] = useState(true);

  const handleNext = () => {
    if (formData.address.trim()) {
      nextStep();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div className="min-h-screen max-w-xl mx-auto px-4 lg:py-10">
      {/* Success Banner */}
      {showAlert && (
        <div className="flex items-center justify-between bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="font-medium">Personal details updated</span>
          </div>
          <button
            className="text-lg font-bold text-green-700 hover:text-green-900"
            onClick={() => setShowAlert(false)}
          >
            ×
          </button>
        </div>
      )}

      <div className="bg-white shadow-lg rounded-2xl p-8 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-blue-500" /> Address
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Your address is <span className="font-medium">publicly visible</span>.  
          Please share your <strong>local area or society name</strong> so students can find your approximate location.
        </p>

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 px-4 py-3 mb-3 rounded">
          <p>ℹ️ Provide only your locality or nearby landmark for better visibility.</p>
        </div>

        {/* Warning Box */}
        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 mb-6 rounded flex items-start gap-2">
          <AlertCircle className="w-5 h-5 mt-0.5" />
          <p className="text-sm">
            <span className="font-semibold">Safety Tip:</span> Do not share your complete residential address for privacy reasons.
          </p>
        </div>

        {/* Location Input */}
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Locality / Area
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. Connaught Place, Delhi"
            autoFocus
          />
          <p className="text-xs text-gray-500 mt-1">
            Example: "MG Road, Gurgaon" or "Andheri West, Mumbai"
          </p>
        </div>

        {/* Postal Code Input (Optional) */}
        {formData.address.trim() && (
          <div className="mb-8">
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Postal Code <span className="text-xs text-gray-500">(optional)</span>
            </label>
            <input
              id="postalCode"
              name="postalCode"
              type="text"
              value={(formData as any).postalCode || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. 110001"
            />
          </div>
        )}

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
            onClick={handleNext}
            disabled={!formData.address.trim()}
            className={`w-1/2 py-3 rounded-lg text-white font-medium transition ${
              formData.address.trim()
                ? 'bg-green-600 hover:bg-green-700 shadow'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {formData.address.trim() ? 'Next' : 'Enter your location'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
