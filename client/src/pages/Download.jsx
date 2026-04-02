import React from 'react';
import { DownloadCloud, Monitor, Smartphone, Terminal } from 'lucide-react';

const Download = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 text-white">
      <div className="max-w-5xl mx-auto text-center">
        
        <DownloadCloud size={64} className="text-blue-500 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Take AI Forge Anywhere</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          Experience the power of our MERN stack AI tools directly on your desktop or mobile device. Faster generations, offline caching, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Windows */}
          <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition duration-300 flex flex-col items-center">
            <Monitor size={48} className="text-gray-300 mb-6" />
            <h3 className="text-2xl font-bold mb-2">Windows</h3>
            <p className="text-gray-400 text-sm mb-8 text-center">Windows 10 / 11 (64-bit)</p>
            <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition">
              Download .exe
            </button>
          </div>

          {/* Mac */}
          <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-white transition duration-300 flex flex-col items-center">
            <Terminal size={48} className="text-gray-300 mb-6" />
            <h3 className="text-2xl font-bold mb-2">macOS</h3>
            <p className="text-gray-400 text-sm mb-8 text-center">Apple Silicon & Intel</p>
            <button className="w-full py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition">
              Download .dmg
            </button>
          </div>

          {/* Mobile */}
          <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-purple-500 transition duration-300 flex flex-col items-center relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-purple-600 text-xs font-bold px-3 py-1 rounded-full">Coming Soon</div>
            <Smartphone size={48} className="text-gray-300 mb-6" />
            <h3 className="text-2xl font-bold mb-2">Mobile App</h3>
            <p className="text-gray-400 text-sm mb-8 text-center">iOS and Android</p>
            <button disabled className="w-full py-3 bg-gray-700 text-gray-500 font-bold rounded-xl cursor-not-allowed">
              Join Waitlist
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Download;