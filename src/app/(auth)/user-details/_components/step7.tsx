'use client';
import { useStep } from '@/context/step_context';
import { useFormContext } from '@/context/step_data_context';
 // ✅ assuming you have this
import React from 'react';

const Step7 = () => {
  const { nextStep, prevStep } = useStep();
  const { formData, updateFormData } = useFormContext();

  // make sure default structure exists
  const certifications = formData.certifications?.length
    ? formData.certifications
    : [{ title: '', organization: '', year: '' }];

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...certifications];
    updated[index] = { ...updated[index], [field]: value };
    updateFormData({ certifications: updated });
  };

  const handleAdd = () => {
    updateFormData({
      certifications: [
        ...certifications,
        { title: '', organization: '', year: '' },
      ],
    });
  };

  const handleRemove = (index: number) => {
    const updated = certifications.filter((_, i) => i !== index);
    updateFormData({ certifications: updated });
  };

  const isValid = certifications.every(
    (c) => c.title.trim() && c.organization.trim() && c.year.trim()
  );

  const handleSave = () => {
    if (!isValid) return;
    console.log('✅ Saved Certifications:', certifications);
    nextStep();
  };

  return (
    <div
      className="min-h-screen max-w-2xl mx-auto px-4 lg:py-10"
      data-version="step7-v2"
    >
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Certifications & Achievements
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Add your <span className="font-medium">certifications</span>,{' '}
          <span className="font-medium">awards</span>, or{' '}
          <span className="font-medium">professional achievements</span>.
        </p>

        {certifications.map((c, index) => (
          <div
            key={index}
            className="mb-6 p-4 border rounded-lg bg-gray-50 relative"
          >
            {/* Title */}
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Title / Name</label>
              <input
                type="text"
                value={c.title}
                onChange={(e) => handleChange(index, 'title', e.target.value)}
                placeholder="e.g., TESOL Certification"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Organization */}
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Issuing Organization</label>
              <input
                type="text"
                value={c.organization}
                onChange={(e) => handleChange(index, 'organization', e.target.value)}
                placeholder="e.g., Cambridge University"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Year */}
            <div>
              <label className="block text-sm font-medium mb-1">Year</label>
              <input
                type="text"
                value={c.year}
                onChange={(e) => handleChange(index, 'year', e.target.value)}
                placeholder="e.g., 2021"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Remove button */}
            {certifications.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            )}
          </div>
        ))}

        {/* Add another */}
        <button
          type="button"
          onClick={handleAdd}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-6"
        >
          + Add another certification
        </button>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-6 gap-4">
          <button
            type="button"
            onClick={prevStep}
            className="w-1/3 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Previous
          </button>

          <button
            type="button"
            onClick={handleSave}
            disabled={!isValid}
            className={`w-2/3 py-3 rounded-lg text-white font-medium transition ${
              isValid
                ? 'bg-green-600 hover:bg-green-700 shadow'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {isValid ? 'Save & Continue' : 'Complete all fields to continue'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step7;
