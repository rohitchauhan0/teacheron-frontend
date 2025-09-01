'use client'
import { useStep } from '@/context/step_context';
import React, { useState, useEffect } from 'react';
import { User, Briefcase, Calendar } from 'lucide-react';
import { useFormContext } from '@/context/step_data_context';

const Step1 = () => {
  const { nextStep } = useStep();
  const { formData, updateFormData } = useFormContext();

  const [isFormValid, setIsFormValid] = useState(false);

  // ✅ Validate when formData changes
  useEffect(() => {
    const { currentRole, gender, dateOfBirth } = formData;
    setIsFormValid(!!(currentRole && gender && dateOfBirth));
  }, [formData]);

  // ✅ Update context properly
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value }); // update only changed field
  };

  return (
    <div className="min-h-screen max-w-xl mx-auto px-4 lg:py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Basic Details</h2>
        <p className="text-sm text-gray-600 mb-8">
          We need a few details to personalize your profile and improve your experience.
        </p>

        <form className="space-y-6 w-full" onSubmit={(e) => e.preventDefault()}>
          {/* Current Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Briefcase className="inline-block w-4 h-4 mr-1" />
              Speciality, Strength or Current Role
            </label>
            <input
              type="text"
              name="currentRole"
              placeholder="e.g. Math Teacher, Software Engineer, Physics Specialist"
              value={formData.currentRole}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-xs text-gray-500 mt-1">
              Tell us your expertise or your current position so others know how to connect with you.
            </p>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="inline-block w-4 h-4 mr-1" />
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              This helps us personalize your experience. You can choose "Other" if you prefer.
            </p>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline-block w-4 h-4 mr-1" />
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-xs text-gray-500 mt-1">
              Your date of birth helps us calculate your age group for better recommendations.
            </p>
          </div>

          {/* Next Step Button */}
          <div className="pt-4">
            <button
              type="button"
              disabled={!isFormValid}
              onClick={nextStep}
              className={`w-full py-3 rounded-lg text-white font-medium transition ${
                isFormValid
                  ? 'bg-green-600 hover:bg-green-700 shadow'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              {isFormValid ? 'Next' : 'Complete all fields to continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;
