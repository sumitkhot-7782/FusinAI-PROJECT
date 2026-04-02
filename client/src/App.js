import React from 'react';

import Login from './pages/Login';
import Signup from './pages/Signup';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import BGRemove from './pages/BGRemove';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Contact from './pages/Contact';
import Support from './pages/Support';
import Download from './pages/Download';

// 1. IMPORT YOUR NEW GENERATE COMPONENT HERE:
import Generate from './pages/Generate'; 

// Keep the other placeholders for now
// const Contact = () => <div className="min-h-screen flex items-center justify-center text-3xl font-bold">Contact Page</div>;
// const Support = () => <div className="min-h-screen flex items-center justify-center text-3xl font-bold">Support Page</div>;
// const Download = () => <div className="min-h-screen flex items-center justify-center text-3xl font-bold">Download Page</div>;
// // 2. THE GENERATE PLACEHOLDER WAS DELETED FROM HERE!

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen font-sans text-gray-900 flex flex-col">
        <Navbar />
        
        {/* flex-grow ensures the footer stays at the bottom */}
        <main className="flex-grow">
          <Routes>
            {/* PUBLIC ROUTES (Anyone can see these) */}
            <Route path="/" element={<Home />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/download" element={<Download />} />

            {/* PROTECTED ROUTES (Only logged-in users can see these) */}
            <Route 
              path="/generate" 
              element={
                <ProtectedRoute>
                  <Generate />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/remove-bg" 
              element={
                <ProtectedRoute>
                  <BGRemove />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>


        <Footer />
      </div>
    </Router>
  );
}

export default App;