'use client';
import { useState } from 'react';
import Navbar from '@/app/_common_comp/Navbar';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { USER_API } from '@/apis/all_api';
import { apiconnector } from '@/utils/api-connector';

const RegisterPage = () => {
  const router = useRouter();
  const { REGISTER_API } = USER_API
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let newValue: string | boolean = value;
    if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
      newValue = e.target.checked;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const validateForm = () => {

    // Name
    if (!formData.name.trim()) {
      alert('Full Name is required.');
      return false;
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Enter a valid email address.');
      return false;
    }



    // Role
    if (!formData.role) {
      alert('Please select a role.');
      return false;
    }

    // Agreement
    if (!formData.agree) {
      alert('You must agree to the terms.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const toastId = toast.loading('Registering...');
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await apiconnector<any>('POST', REGISTER_API, formData);
      if (response.data.status) {
        toast.success('Email has been sent');
        router.push('/email-verify');
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error('Something went wrong');
    }
    toast.dismiss(toastId);
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center px-4 py-10">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
          <h1 className="text-3xl font-bold text-center text-gray-800">Create an Account</h1>
          <p className="text-center text-sm text-gray-500 mt-2">Register to get started</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter a strong password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-black focus:outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be 8+ characters with at least 1 uppercase, 1 number, and 1 special character.
              </p>
            </div>

            {/* Select Role */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                I am a
              </label>
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-black focus:outline-none"
              >
                <option value="">Select</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>

            {/* Checkbox */}
            <div className="flex items-start">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="agree" className="text-sm text-gray-700">
                This is my first and only account with <strong>teacheron.com</strong>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-full font-semibold hover:bg-gray-900 transition-all"
            >
              Sign Up
            </button>
          </form>

          {/* Already have an account */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-black underline hover:text-blue-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
