'use client';
import { useStep } from '@/context/step_context';
import React, { useState } from 'react';

const chargeUnits = ['Hourly', 'Daily', 'Weekly', 'Monthly'];
const yesNoOptions = ['Yes', 'No'];
const opportunityOptions = [
  'Part-time teaching',
  'Full-time teaching',
  'Freelance opportunities',
  'Online-only roles',
];

const Step8 = () => {
  const { nextStep } = useStep();

  const [formData, setFormData] = useState({
    chargeUnit: '',
    minFee: '',
    maxFee: '',
    feeDetails: '',
    totalExperience: '',
    teachingExperience: '',
    onlineExperience: '',
    teachingHoursPerDay: '',
    willingToTravel: '',
    availableOnline: '',
    hasDigitalPen: '',
    helpsWithHomework: '',
    fullTimeTeacher: '',
    interestedIn: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log(formData);
    nextStep();
  };

  const requiredFields = [formData.chargeUnit, formData.minFee];
  const isDisabled = requiredFields.some((f) => !f);

  return (
    <div className="min-h-screen max-w-2xl mx-auto px-4 lg:py-8">
      <h2 className="text-2xl font-semibold mb-6">Teaching Details</h2>

      <div className="space-y-8">
        {/* Fees Section */}
        <div className="p-4 border rounded-lg shadow bg-white space-y-4">
          <h3 className="font-semibold text-lg">Fees</h3>

          <div>
            <label className="block text-sm font-medium mb-1">I charge</label>
            <select
              value={formData.chargeUnit}
              onChange={(e) => handleChange('chargeUnit', e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            >
              <option value="">Select</option>
              {chargeUnits.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Minimum fee</label>
              <input
                type="number"
                value={formData.minFee}
                onChange={(e) => handleChange('minFee', e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Maximum fee</label>
              <input
                type="number"
                value={formData.maxFee}
                onChange={(e) => handleChange('maxFee', e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Fee Details</label>
            <textarea
              rows={3}
              value={formData.feeDetails}
              onChange={(e) => handleChange('feeDetails', e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded resize-none"
              placeholder="Explain how your fee can vary..."
            />
          </div>
        </div>

        {/* Experience Section */}
        <div className="p-4 border rounded-lg shadow bg-white space-y-4">
          <h3 className="font-semibold text-lg">Experience</h3>

          <div>
            <label className="block text-sm font-medium mb-1">Total experience (years)</label>
            <input
              type="text"
              value={formData.totalExperience}
              onChange={(e) => handleChange('totalExperience', e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              placeholder="e.g., 5 years"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Teaching experience (years)</label>
            <input
              type="text"
              value={formData.teachingExperience}
              onChange={(e) => handleChange('teachingExperience', e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              placeholder="e.g., 3 years"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Online teaching experience (years)</label>
            <input
              type="text"
              value={formData.onlineExperience}
              onChange={(e) => handleChange('onlineExperience', e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              placeholder="e.g., 2 years"
            />
          </div>
        </div>

        {/* Availability Section */}
        <div className="p-4 border rounded-lg shadow bg-white space-y-6">
          <h3 className="font-semibold text-lg">Availability</h3>

          <div>
            <label className="block text-sm font-medium mb-1">Teaching hours per day</label>
            <input
              type="text"
              value={formData.teachingHoursPerDay}
              onChange={(e) => handleChange('teachingHoursPerDay', e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              placeholder="e.g., 4 hours"
            />
          </div>

          {[
            { label: 'Willing to travel to students?', field: 'willingToTravel' },
            { label: 'Available for online teaching?', field: 'availableOnline' },
            { label: 'Do you have a digital pen?', field: 'hasDigitalPen' },
            { label: 'Help with homework/assignments?', field: 'helpsWithHomework' },
            { label: 'Currently a full-time teacher?', field: 'fullTimeTeacher' },
          ].map(({ label, field }) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-2">{label}</label>
              <div className="flex gap-4">
                {yesNoOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleChange(field, opt)}
                    className={`px-4 py-2 rounded border ${
                      formData[field as keyof typeof formData] === opt
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Opportunities Section */}
        <div className="p-4 border rounded-lg shadow bg-white space-y-4">
          <h3 className="font-semibold text-lg">Opportunities</h3>
          <select
            value={formData.interestedIn}
            onChange={(e) => handleChange('interestedIn', e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          >
            <option value="">Please select</option>
            {opportunityOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Save */}
        <div className="pt-6">
          <button
            onClick={handleSave}
            disabled={isDisabled}
            className={`px-4 py-2 rounded text-white ${
              isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step8;
