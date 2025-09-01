// context/StepContext.tsx
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type StepContextType = {
  currentStep: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const setStep = (step: number) => setCurrentStep(step);
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <StepContext.Provider value={{ currentStep, setStep, nextStep, prevStep }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = (): StepContextType => {
  const context = useContext(StepContext);
  if (!context) throw new Error('useStep must be used within a StepProvider');
  return context;
}; 