import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Zap, Loader2 } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      
      // Send login request to server
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      
      // Save the JWT token to localStorage so the user stays logged in
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Redirect to the home page or generator
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        
        <div className="text-center mb-8">
          <Zap size={40} className="text-black-600 mx-auto mb-2" />
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Log in to continue creating</p>
        </div>

        {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-4 text-center text-sm">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" name="email" required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" name="password" required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={handleChange}
            />
          </div>

          <button 
            type="submit" disabled={loading}
            className="w-full py-3 bg-sky-400 text-white font-bold rounded-xl hover:bg-sky-500 transition flex justify-center items-center"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : 'Log In'}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Don't have an account? <Link to="/signup" className="text-sky-600 font-bold hover:underline">Sign up</Link>
        </p>

      </div>
    </div>
  );
};

export default Login;