import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, LogOut, User as UserIcon } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();

  // 1. Check if the user is logged in by looking in localStorage
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  // 2. Create the Logout function
  const handleLogout = () => {
    // Clear the memory
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Send them back to the login page
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-black-600">
          <Zap size={28} className="text-black-600" />
          <span>FusionAI</span>
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <Link to="/" className="hover:text-blue-600 transition duration-300">Home</Link>
         
          <Link to="/contact" className="hover:text-blue-600 transition duration-300">Contact</Link>
          <Link to="/support" className="hover:text-blue-600 transition duration-300">Support</Link>
          <Link to="/download" className="hover:text-blue-600 transition duration-300">Download</Link>
        </div>

        {/* Right: Dynamic Authentication Buttons */}
        <div className="flex space-x-4 items-center">
          {user ? (
            /* --- WHAT TO SHOW IF LOGGED IN --- */
            <>
              <div className="hidden md:flex items-center gap-2 text-gray-700 font-medium mr-2">
                <UserIcon size={20} className="text-blue-600" />
                {/* This will grab just your first name */}
                <span>Hi, {user.name.split(' ')[0]}</span> 
              </div>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition duration-300 font-medium"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            /* --- WHAT TO SHOW IF NOT LOGGED IN --- */
            <>
              <Link to="/login" className="px-5 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition duration-300 font-medium">
                Login
              </Link>
              <Link to="/signup" className="px-5 py-2 bg-sky-400 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-medium">
                Sign Up
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;