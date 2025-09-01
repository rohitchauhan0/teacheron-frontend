'use client'
import { useStep } from '@/context/step_context';
import React from 'react';

const StepTopbar = () => {
  const { currentStep } = useStep();
  const totalSteps = 8;

  return (
    <div className="w-full bg-white py-4">
      <div className="flex flex-col items-center gap-3">
        
        {/* Step Circles */}
        <div className="lg:flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto px-4 no-scrollbar hidden ">
          {Array.from({ length: totalSteps }, (_, index) => {
            const step = index + 1;
            const isActive = currentStep === step;

            return (
              <div
                key={step}
                className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold flex-shrink-0
                  ${isActive 
                    ? 'border-4 border-blue-500 text-blue-600 bg-blue-100' 
                    : 'border-2 border-gray-300 text-gray-500'}
                `}
              >
                {step}
              </div>
            );
          })}
        </div>

        {/* Active Step Display */}
        <div className="text-center text-sm sm:text-base font-semibold text-blue-600 lg:hidden block">
          Step {currentStep} of {totalSteps}
        </div>
      </div>
    </div>
  );
};

export default StepTopbar;
