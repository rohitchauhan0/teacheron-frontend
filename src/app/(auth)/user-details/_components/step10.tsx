'use client';
import { useState } from 'react';
import { useStep } from '@/context/step_context';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { apiconnector } from '@/utils/api-connector';
import { USER_API } from '@/apis/all_api';
import { useFormContext } from '@/context/step_data_context';

const Step10 = () => {
 

  const {REGISTER_TEACHER_API} = USER_API
  const router = useRouter()
  const { formData, updateFormData } = useFormContext();


  const handleSubmit = async(e: React.FormEvent) => {
    const toastId = toast.loading('Uploading...');
    e.preventDefault();
    try{
      const response = await apiconnector<any>('POST', REGISTER_TEACHER_API, formData);
      toast.success('Your request has been submitted', {
        id: toastId,
      });
      router.push('/dashboard')
    }catch(err){
      console.log(err);
    }

    // if (!file) {
    //   alert('Please upload your ID proof');
    //   return;
    // }

    // console.log({
    //   docType,
    //   fileName: file.name,
    // });

   

    // Continue to next step
    // nextStep();
  };

  return (
    <div className="min-h-screen max-w-xl mx-auto px-4 lg:py-8 flex flex-col items-center ">
      <h2 className="text-2xl font-semibold mb-2">You have completed your profile</h2>
      <p>Our team will review your profile and get back to you within 24 hours</p>

      {/* <p className="text-sm text-gray-700 mb-1">Please upload proof for the following:</p>
      <ul className="list-disc pl-6 text-sm text-gray-700 mb-6">
        <li>You are a citizen of India OR</li>
        <li>You are in India</li>
      </ul> */}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Document Type Dropdown */}
        {/* <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Document Type</label>
          <select
            value={docType}
            onChange={(e) => setDocType(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          >
            <option value="Aadhar card">Aadhar card</option>
            <option value="PAN card">PAN card</option>
            <option value="Passport">Passport</option>
            <option value="Voter ID">Voter ID</option>
          </select>
        </div> */}

        {/* File Upload Section */}
        {/* <div className="border border-dashed border-gray-300 p-4 rounded text-center">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Upload ID Proof
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mx-auto"
          />
          <p className="text-xs text-gray-500 mt-2">Drag & Drop Files</p>
          {file && (
            <p className="text-sm text-green-700 mt-1">Selected: {file.name}</p>
          )}
        </div> */}

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="bg-green-600  text-white px-4 py-2 rounded"
          >
            Submit for review
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step10;
