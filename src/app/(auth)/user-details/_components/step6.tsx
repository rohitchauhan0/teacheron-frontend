'use client';
import { useStep } from '@/context/step_context';
import React from 'react';
import { GraduationCap, Calendar, Building, BookOpen, Award, PlusCircle, Trash2 } from 'lucide-react';
import { useFormContext } from '@/context/step_data_context';

const degreeTypes = ['Diploma', "Bachelor's", "Master's", 'PhD', 'Certificate'];
const associations = ['UGC', 'AICTE', 'NAAC', 'Other'];

const Step5 = () => {
  const { nextStep, prevStep } = useStep();
  const { formData, updateFormData } = useFormContext();

  // ✅ Get education from context or start with one empty
  const education = formData.educations.length
    ? formData.educations
    : [
        {
          instituteName: '',
          degreeType: '',
          degreeName: '',
          startDate: '',
          endDate: '',
          association: '',
          speciality: '',
          score: '',
        },
      ];

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...education];
    updated[index][field as keyof typeof updated[number]] = value;
    updateFormData({ educations: updated });
  };

  const handleAdd = () => {
    updateFormData({
      educations: [
        ...education,
        {
          instituteName: '',
          degreeType: '',
          degreeName: '',
          startDate: '',
          endDate: '',
          association: '',
          speciality: '',
          score: '',
        },
      ],
    });
  };

  const handleRemove = (index: number) => {
    updateFormData({
      educations: education.filter((_, i) => i !== index),
    });
  };

  const isFormValid = education.every(
    (e) => e.instituteName && e.degreeType && e.degreeName && e.startDate
  );

  const handleSave = () => {
    if (!isFormValid) return;
    console.log("Saved education:", education);
    nextStep();
  };

  return (
    <div className="min-h-screen max-w-2xl mx-auto px-4 lg:py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <GraduationCap className="w-7 h-7 text-blue-600" /> Education & Certifications
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Add your <span className="font-medium">degrees, diplomas, or certifications</span> 
          that strengthen your profile. You can add multiple entries.
        </p>

        {education.map((entry, index) => (
          <div key={index} className="mb-8 border border-gray-200 rounded-xl p-6 relative bg-gray-50">
            {/* Institution */}
            <div className="mb-4">
              <label className=" text-sm font-medium mb-1 flex items-center gap-2">
                <Building className="w-4 h-4 text-gray-500" /> Institution (with city)
              </label>
              <input
                type="text"
                value={entry.instituteName}
                onChange={(e) => handleChange(index, 'instituteName', e.target.value)}
                placeholder="e.g., Delhi University, New Delhi"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Degree Type */}
            <div className="mb-4">
              <label className="text-sm font-medium mb-1 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-gray-500" /> Degree Type
              </label>
              <select
                value={entry.degreeType}
                onChange={(e) => handleChange(index, 'degreeType', e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Degree Type</option>
                {degreeTypes.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* Degree Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Degree Name</label>
              <input
                type="text"
                value={entry.degreeName}
                onChange={(e) => handleChange(index, 'degreeName', e.target.value)}
                placeholder="e.g., Bachelor of Science in Physics"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Start Date */}
            <div className="mb-4">
              <label className="text-sm font-medium mb-1 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" /> Start Date
              </label>
              <input
                type="date"
                value={entry.startDate}
                onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* End Date */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                End Date <span className="text-gray-400">(Leave blank if ongoing)</span>
              </label>
              <input
                type="date"
                value={entry.endDate}
                onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Association */}
            <div className="mb-4">
              <label className=" text-sm font-medium mb-1 flex items-center gap-2">
                <Award className="w-4 h-4 text-gray-500" /> Association
              </label>
              <select
                value={entry.association}
                onChange={(e) => handleChange(index, 'association', e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Please select</option>
                {associations.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>

            {/* Speciality */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Speciality <span className="text-gray-400">(optional)</span></label>
              <input
                type="text"
                value={entry.speciality}
                onChange={(e) => handleChange(index, 'speciality', e.target.value)}
                placeholder="e.g., Quantum Mechanics, Data Science"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Score */}
            <div>
              <label className="block text-sm font-medium mb-1">Score <span className="text-gray-400">(optional)</span></label>
              <input
                type="text"
                value={entry.score}
                onChange={(e) => handleChange(index, 'score', e.target.value)}
                placeholder="e.g., 8.5 CGPA or 85%"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Remove Button */}
            {education.length > 1 && (
              <button
                onClick={() => handleRemove(index)}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                title="Remove degree"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}

        {/* Add another degree */}
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium mb-6"
        >
          <PlusCircle className="w-5 h-5" /> Add another degree
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
            {isFormValid ? 'Save & Continue' : 'Please complete required fields'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5;
