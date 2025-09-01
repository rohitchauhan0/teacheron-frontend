'use client';
import React, { useState } from 'react';
import { Upload, Image as ImageIcon, Info } from "lucide-react";
import toast from 'react-hot-toast';

const UploadPhotoPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
     toast.success('Photo uploaded successfully!');
    } else {
      alert("⚠️ Please select a file first.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 py-12">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full flex flex-col items-center">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Profile Photo</h1>

        {/* Info Box */}
        <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg mb-6 text-sm">
          <Info className="mt-0.5 w-5 h-5 shrink-0" />
          <span>
            Teachers with a <strong>clear headshot image</strong> get twice as much response compared to random or no images.
          </span>
        </div>

        {/* Upload Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
          
          {/* Upload Dropzone */}
          <label className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 text-gray-500 cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition">
            {preview ? (
              <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded-full mb-3 shadow-md" />
            ) : (
              <div className="flex flex-col items-center gap-2">
                <ImageIcon className="w-10 h-10 text-gray-400" />
                <span className="text-sm">Click or drag image to upload</span>
              </div>
            )}
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </label>

          {/* Upload Button */}
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition"
          >
            <Upload className="w-4 h-4" /> Upload Image
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPhotoPage;
