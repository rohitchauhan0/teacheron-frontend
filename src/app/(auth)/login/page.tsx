'use client';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import Navbar from '@/app/_common_comp/Navbar';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { apiconnector } from '@/utils/api-connector';
import { USER_API } from '@/apis/all_api';
import toast from 'react-hot-toast';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({ identifier: '', password: '' });
  const router = useRouter();
  const { LOGIN_API, BY_GOOGLE } = USER_API

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading('Logging in...');
    try {
      const response = await apiconnector<any>('POST', LOGIN_API, formData);
      if (response.data.status) {
        toast.success('Login successful');
        router.push('/dashboard');
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      console.log(err);
      let errorMessage = 'Login failed';
      if (axios.isAxiosError(err) && err.response && err.response.data && err.response.data.message) {
        errorMessage = err.response.data.message;
      }
      toast.error(errorMessage);
    }
    toast.dismiss(toastId);

  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading('Logging in...');
    try {
      const response = await apiconnector<any>('GET', BY_GOOGLE, formData);
      toast.error('User is not verified')
    } catch (err) {
      let errorMessage = 'Login failed';
      if (axios.isAxiosError(err) && err.response && err.response.data && err.response.data.message) {
        errorMessage = err.response.data.message;
      }
      toast.error(errorMessage);
    }

  };

  return (
    <>
      <Navbar />
      <div className=" flex items-center justify-center  px-4 py-10">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
          <h1 className="text-3xl font-bold text-center text-gray-800">Welcome Back 👋</h1>
          <p className="text-center text-sm text-gray-500 mt-2">Log in to your account</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-2">

            <div>
              <label htmlFor="identifier" className="block text-sm font-medium text-gray-700 mb-1">
                Email or Phone
              </label>
              <input
                type="text"
                name="identifier"
                id="identifier"
                placeholder="Enter your email or phone number"
                value={formData.identifier}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>


            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>


            <div className="text-right text-sm">
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => router.push('/forgot-password')}
              >
                Forgot password?
              </button>
            </div>


            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-full font-semibold hover:bg-gray-900 transition-all"
            >
              Login
            </button>
          </form>


          <div className="my-2 text-center text-sm text-gray-500">OR</div>


          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-3 w-full py-3 bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-all"
          >
            <FcGoogle size={24} />
            <span className="text-gray-700 font-medium">Continue with Google</span>
          </button>


          <div className=' w-full flex items-center justify-center'>
            <Link href={'/register'} className="text-center mx-auto text-sm text-gray-600 mt-6">
              Don&apos;t have an account?{' '}
              <span
                className="text-black underline hover:text-blue-600"
              >
                Sign Up
              </span>
            </Link>
          </div>


          <p className="text-xs text-center text-gray-400 mt-4">
            By continuing, you agree to our{' '}
            <span className="text-black underline cursor-pointer">Terms</span> &{' '}
            <span className="text-black underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
