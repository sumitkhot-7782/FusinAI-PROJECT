import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully! We will get back to you soon.');
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-white-900 text-lg">Have a question or want to work together? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-lg overflow-hidden border">
          
          {/* Left Side: Contact Info */}
          <div className="bg-gray-600 text-white p-10 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
            <p className="text-blue-100 mb-10">Fill up the form and our team will get back to you within 24 hours.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-blue-300" />
                <span>+91 7757047782</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-blue-300" />
                <span>sumitkhot275@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-300" />
                <span>Kolhapur, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" required className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50" placeholder="Enter Your Full Name " />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" required className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50" placeholder="sample@gmail.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="4" required className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition flex justify-center items-center gap-2">
                <Send size={18} /> Send Message
              </button>
              {status && <p className="text-green-600 text-center font-medium mt-4">{status}</p>}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;