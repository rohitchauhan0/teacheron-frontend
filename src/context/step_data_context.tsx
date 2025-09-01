'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1️⃣ Define Types
type Subject = {
  name: string;
  fromLevel: string;
  toLevel: string;
};

type Education = {
  instituteName: string;
  degreeType: string;
  degreeName: string;
  startDate: string;
  endDate: string;
  association: string;
  speciality: string;
  score: string;
};

type Experience = {
  organizationName: string;
  designation: string;
  startDate: string;
  endDate: string;
  association: string;
  responsibility: string;
};

type Expectation = {
  chargeType: string;
  minFee: string;
  maxFee: string;
  feeDetails: string;
  totalExp: string;
  totalTeachingExp: string;
  onlineTeachingExp: string;
  availabilityHours: string;
  willingToTravel: boolean;
  avlForOnlineTeaching: boolean;
  haveDigitalPen: boolean;
  helpWithAssignments: boolean;
  fullTimeEmployee: boolean;
  opportunity: string;
  profileDesc: string;
};

type Certification = {
    title: string;
    organization: string;
    year: string;
  };

// 2️⃣ Define Main Form Data
type FormData = {
  step8: { chargeUnit: string; minFee: string; maxFee: string; teachingHoursPerDay: string; feeDetails: string; totalExperience: string; teachingExperience: string; onlineExperience: string; willingToTravel: string; availableOnline: string; hasDigitalPen: string; helpsWithHomework: string; fullTimeTeacher: string; interestedIn: string; };
  currentRole: string;
  gender: string;
  dateOfBirth: string;
  address: string;
  phoneNumber: string;
  countryCode: string;  // NEW
  dialCode: string; 
  subjects: Subject[];
  educations: Education[];
  experience: Experience[];
  expectation: Expectation[];
  certifications: Certification[];
};

// 3️⃣ Initial Data
const initialFormData: FormData = {
    currentRole: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    phoneNumber: "",
    countryCode: "", // NEW
    dialCode: "",
    subjects: [],
    educations: [],
    experience: [],
    expectation: [],
    certifications: [],
    step8: {
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
        interestedIn: ''
    }
};

// 4️⃣ Context Type
type FormContextType = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  updateFormData: (newData: Partial<FormData>) => void;
};

// 5️⃣ Create Context
const FormContext = createContext<FormContextType | undefined>(undefined);

// 6️⃣ Provider
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState<number>(1);

  // function to update only part of formData
  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  return (
    <FormContext.Provider
      value={{ formData, setFormData, currentStep, setCurrentStep, updateFormData }}
    >
      {children}
    </FormContext.Provider>
  );
};

// 7️⃣ Custom Hook
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used inside FormProvider");
  }
  return context;
};
