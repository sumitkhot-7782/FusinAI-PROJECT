import React, { useState } from 'react';
import axios from 'axios';
import { Sparkles, Image as ImageIcon, Loader2 } from 'lucide-react';

const Generate = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!prompt) return;

    try {
      setLoading(true);
      setError('');
      setImage(null);

      // Call our Node.js backend
      const response = await axios.post('http://localhost:5000/api/ai/generate', {
        prompt: prompt
      });

      setImage(response.data.photo);
    } catch (err) {
      setError('Failed to generate image. The AI might be warming up, try again!');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Sparkles className="text-blue-600" size={36} />
            AI Image Studio
          </h1>
          <p className="text-gray-600">Describe what you want to see, and watch the magic happen.</p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleGenerate} className="bg-white p-6 rounded-2xl shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="A futuristic city cyberpunk style, neon lights, highly detailed..."
              className="flex-1 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !prompt}
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 disabled:bg-blue-300 transition duration-300 flex items-center justify-center min-w-[160px]"
            >
              {loading ? <Loader2 className="animate-spin" size={24} /> : 'Generate'}
            </button>
          </div>
          {error && <p className="text-red-500 mt-4 text-center font-medium">{error}</p>}
        </form>

        {/* Image Display Area */}
        <div className="bg-white rounded-2xl shadow-md p-8 min-h-[400px] flex items-center justify-center border-2 border-dashed border-gray-200">
          {loading ? (
            <div className="flex flex-col items-center text-gray-500">
              <Loader2 className="animate-spin mb-4 text-blue-600" size={48} />
              <p className="text-lg animate-pulse">Summoning your vision...</p>
              <p className="text-sm mt-2 text-gray-400">(This can take 10-20 seconds on the free tier)</p>
            </div>
          ) : image ? (
            <div className="flex flex-col items-center">
              <img src={image} alt={prompt} className="rounded-xl shadow-lg max-h-[500px] object-contain mb-6" />
              <a 
                href={image} 
                download={`ai-forge-${Date.now()}.jpg`}
                className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
              >
                Download Image
              </a>
            </div>
          ) : (
            <div className="flex flex-col items-center text-gray-400">
              <ImageIcon size={64} className="mb-4 opacity-50" />
              <p className="text-lg">Your creation will appear here</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Generate;