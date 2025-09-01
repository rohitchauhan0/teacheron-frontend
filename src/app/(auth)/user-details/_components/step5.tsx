'use client';
import { useStep } from '@/context/step_context';
import React, { useState } from 'react';
import { BookOpen, PlusCircle, Trash2 } from 'lucide-react';
import { useFormContext } from '@/context/step_data_context';

const allSubjects = ['Math', 'English', 'Science', 'Physics', 'Chemistry', 'Biology', 'Other'];
const levels = ['Primary', 'Middle School', 'High School', 'Undergraduate', 'Postgraduate'];

const Step4 = () => {
  const { nextStep, prevStep } = useStep();
  const { formData, updateFormData } = useFormContext();
  const [showAlert, setShowAlert] = useState(true);

  // ✅ use subjects directly from context
  const subjects = formData.subjects.length
    ? formData.subjects
    : [{ name: '', fromLevel: '', toLevel: '' }];

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...subjects];

    if (field === 'name') {
      if (value !== 'Other') {
        updated[index].name = value;
      } else {
        updated[index].name = ''; // keep empty until custom filled
      }
    } else {
      updated[index][field as keyof typeof updated[number]] = value;
    }

    updateFormData({ subjects: updated });
  };

  const handleCustomSubject = (index: number, value: string) => {
    const updated = [...subjects];
    updated[index].name = value;
    updateFormData({ subjects: updated });
  };

  const handleAddSubject = () => {
    updateFormData({
      subjects: [...subjects, { name: '', fromLevel: '', toLevel: '' }],
    });
  };

  const handleRemoveSubject = (index: number) => {
    updateFormData({
      subjects: subjects.filter((_, i) => i !== index),
    });
  };

  const isFormValid = subjects.every(
    (s) => s.name && s.fromLevel && s.toLevel
  );

  const handleSave = () => {
    if (!isFormValid) return;
    console.log("Saved subjects:", subjects);
    nextStep();
  };

  return (
    <div className="min-h-screen max-w-xl mx-auto px-4 lg:py-10">
      {/* Success Banner */}
      {showAlert && (
        <div className="flex items-center justify-between bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-sm mb-6">
          <span className="font-medium">Phone number saved successfully</span>
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
          <BookOpen className="w-6 h-6 text-blue-500" /> Subjects You Teach
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Please select the <span className="font-medium">subjects</span> you teach and the{" "}
          <span className="font-medium">levels</span> you cover.  
          This helps students find the right teacher for their learning needs.
        </p>

        {subjects.map((entry, index) => (
          <div
            key={index}
            className="mb-6 p-4 border rounded-lg bg-gray-50 relative"
          >
            {/* Subject */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select
                value={allSubjects.includes(entry.name) ? entry.name : 'Other'}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              >
                <option value="">-- Select Subject --</option>
                {allSubjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              {/* Custom subject input */}
              {(!allSubjects.includes(entry.name) || entry.name === '') &&
                (
                  <input
                    type="text"
                    value={entry.name}
                    onChange={(e) => handleCustomSubject(index, e.target.value)}
                    placeholder="Enter custom subject"
                    className="mt-2 w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
                  />
                )}
            </div>

            {/* From level */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                From Level
              </label>
              <select
                value={entry.fromLevel}
                onChange={(e) => handleChange(index, 'fromLevel', e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              >
                <option value="">-- Select Lowest Level --</option>
                {levels.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
            </div>

            {/* To level */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                To Level
              </label>
              <select
                value={entry.toLevel}
                onChange={(e) => handleChange(index, 'toLevel', e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              >
                <option value="">-- Select Highest Level --</option>
                {levels.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
            </div>

            {/* Remove button */}
            {subjects.length > 1 && (
              <button
                onClick={() => handleRemoveSubject(index)}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                title="Remove subject"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}

        {/* Add another subject */}
        <button
          onClick={handleAddSubject}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium mb-6"
        >
          <PlusCircle className="w-5 h-5" /> Add another subject
        </button>

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
            disabled={!isFormValid}
            className={`w-1/2 py-3 rounded-lg text-white font-medium transition ${
              isFormValid
                ? 'bg-green-600 hover:bg-green-700 shadow'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {isFormValid ? 'Save & Continue' : 'Please complete all fields'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
