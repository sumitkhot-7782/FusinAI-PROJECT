import React, { useState } from 'react';
import axios from 'axios';
import { Eraser, UploadCloud, Loader2, Download } from 'lucide-react';

const BGRemove = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); // Show preview instantly
      setResultImage(null);
    }
  };

  // Send to backend
  const handleRemoveBackground = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      setLoading(true);
      setError('');
      
      // ✅ CHANGED: Now uses the environment variable instead of localhost!
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/ai/remove-bg`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setResultImage(response.data.photo);
    } catch (err) {
      setError('Failed to process image. Make sure it is a clear photo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Eraser className="text-purple-600" size={36} />
            Magic Background Eraser
          </h1>
          <p className="text-gray-600">Upload any image and remove the background instantly with AI.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Column: Upload */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl p-8 bg-gray-50 hover:bg-gray-100 transition relative">
              {preview ? (
                <img src={preview} alt="Original" className="max-h-[300px] rounded-lg object-contain" />
              ) : (
                <div className="text-center">
                  <UploadCloud size={64} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 mb-2">Drag and drop or click to upload</p>
                </div>
              )}
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>

            {/* Right Column: Result */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-purple-200 rounded-2xl p-8 bg-purple-50">
              {loading ? (
                <div className="flex flex-col items-center text-purple-600">
                  <Loader2 className="animate-spin mb-4" size={48} />
                  <p className="font-medium animate-pulse">Erasing background...</p>
                </div>
              ) : resultImage ? (
                <div className="flex flex-col items-center">
                  {/* The transparent background grid makes the PNG pop */}
                  <div className="bg-[url('https://t3.ftcdn.net/jpg/03/35/13/14/360_F_335131435_DrHIQjlOKlu3GCXVkFkP0A5w4ZgW1qUf.jpg')] bg-repeat rounded-lg mb-6 shadow-md">
                    <img src={resultImage} alt="No Background" className="max-h-[300px] object-contain" />
                  </div>
                  <a 
                    href={resultImage} 
                    download="transparent-bg.png"
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition"
                  >
                    <Download size={20} /> Download PNG
                  </a>
                </div>
              ) : (
                <div className="text-center text-gray-400">
                  <Eraser size={64} className="mx-auto mb-4 opacity-50" />
                  <p>Result will appear here</p>
                </div>
              )}
            </div>

          </div>

          {/* Action Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleRemoveBackground}
              disabled={!selectedFile || loading}
              className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 disabled:bg-gray-300 transition duration-300 w-full md:w-auto min-w-[200px]"
            >
              Remove Background Now
            </button>
          </div>
          {error && <p className="text-red-500 mt-4 text-center font-medium">{error}</p>}
        </div>

      </div>
    </div>
  );
};

export default BGRemove;
