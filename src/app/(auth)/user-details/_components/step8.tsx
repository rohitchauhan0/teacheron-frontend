'use client';
import { useStep } from '@/context/step_context';
import { useFormContext } from '@/context/step_data_context';
import React from 'react';

const chargeUnits = ['Hourly', 'Daily', 'Weekly', 'Monthly'];
const yesNoOptions = ['Yes', 'No'];
const opportunityOptions = [
  'Part-time teaching',
  'Full-time teaching',
  'Freelance opportunities',
  'Online-only roles',
];

const Step8 = () => {
  const { nextStep, prevStep } = useStep();
  const { formData, updateFormData } = useFormContext();

  const data = formData.step8 || {
    chargeUnit: '',
    minFee: '',
    maxFee: '',
    teachingHoursPerDay: '',
    feeDetails: '',
    totalExperience: '',
    teachingExperience: '',
    onlineExperience: '',
    willingToTravel: '',
    availableOnline: '',
    hasDigitalPen: '',
    helpsWithHomework: '',
    fullTimeTeacher: '',
    interestedIn: '',
  };

  const handleChange = (field: string, value: string) => {
    updateFormData({
      step8: { ...data, [field]: value },
    });
  };

  const handleSave = () => {
    console.log('✅ Saved Step8:', data);
    nextStep();
  };

  const requiredFields = [data.chargeUnit, data.minFee];
  const isDisabled = requiredFields.some((f) => !f);

  return (
    <div
      className="min-h-screen max-w-2xl mx-auto px-4 lg:py-8"
      data-version="step8-context"
    >
      <h2 className="text-2xl font-semibold mb-6">Teaching Details</h2>

      <div className="space-y-8">
        {/* Fees Section */}
        <div className="p-4 border rounded-lg shadow-sm bg-white space-y-4">
          <h3 className="font-semibold text-lg">Fees</h3>

          <div>
            <label className="block text-sm font-medium mb-1">I charge</label>
            <select
              value={data.chargeUnit}
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
                value={data.minFee}
                onChange={(e) => handleChange('minFee', e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Maximum fee</label>
              <input
                type="number"
                value={data.maxFee}
                onChange={(e) => handleChange('maxFee', e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Fee Details</label>
            <textarea
              rows={3}
              value={data.feeDetails}
              onChange={(e) => handleChange('feeDetails', e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              placeholder="Explain how your fee can vary..."
            />
          </div>
        </div>

        {/* Experience Section */}
        <div className="p-4 border rounded-lg shadow-sm bg-white space-y-4">
          <h3 className="font-semibold text-lg">Experience</h3>

          <div>
            <label className="block text-sm font-medium mb-1">
              Years of total experience
            </label>
            <input
              type="text"
              value={data.totalExperience}
              onChange={(e) => handleChange('totalExperience', e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              placeholder="e.g. 5 years"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Years of total teaching experience
            </label>
            <input
              type="text"
              value={data.teachingExperience}
              onChange={(e) => handleChange('teachingExperience', e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              placeholder="e.g. 3 years"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Years of online teaching experience
            </label>
            <input
              type="text"
              value={data.onlineExperience}
              onChange={(e) => handleChange('onlineExperience', e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              placeholder="e.g. 2 years"
            />
          </div>
        </div>

        {/* Availability Section */}
        <div className="p-4 border rounded-lg shadow-sm bg-white space-y-6">
          <h3 className="font-semibold text-lg">Availability</h3>

          <div>
            <label className="block text-sm font-medium mb-1">
              How many hours do you teach each day?
            </label>
            <input
              type="text"
              value={data.teachingHoursPerDay}
              onChange={(e) => handleChange('teachingHoursPerDay', e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              placeholder="e.g. 4 hours"
            />
          </div>

          {[
            { label: 'Are you willing to travel to student?', field: 'willingToTravel' },
            { label: 'Available for online teaching?', field: 'availableOnline' },
            { label: 'Do you have a digital Pen?', field: 'hasDigitalPen' },
            { label: 'Do you help with homework and assignments?', field: 'helpsWithHomework' },
            { label: 'Are you currently a full-time teacher?', field: 'fullTimeTeacher' },
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
                      data[field as keyof typeof data] === opt
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
        <div className="p-4 border rounded-lg shadow-sm bg-white space-y-4">
          <h3 className="font-semibold text-lg">Opportunities</h3>
          <select
            value={data.interestedIn}
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

        {/* Save & Navigation */}
        <div className="flex items-center justify-between gap-4 pt-6">
          <button
            type="button"
            onClick={prevStep}
            className="px-4 py-2 rounded border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Previous
          </button>

          <button
            type="button"
            onClick={handleSave}
            disabled={isDisabled}
            className={`px-6 py-2 rounded text-white font-medium transition ${
              isDisabled
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 shadow'
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
