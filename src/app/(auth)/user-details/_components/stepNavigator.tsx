
import { useStep } from '@/context/step_context';
import React from 'react';


const StepNavigator = () => {
  const { currentStep, nextStep, prevStep, setStep } = useStep();

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h2 className="text-2xl font-bold">Current Step: {currentStep}</h2>

      <div className="flex gap-3">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded">
          Previous
        </button>
        <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded">
          Next
        </button>
        <button onClick={() => setStep(1)} className="px-4 py-2 bg-green-500 text-white rounded">
          Reset
        </button>
      </div>
    </div>
  );
};

export default StepNavigator;
