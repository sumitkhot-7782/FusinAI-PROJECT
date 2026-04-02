import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-400 mb-4">
              <Zap size={28} />
              <span>FusionAI</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering creators with next-generation AI tools. Transform text to images and remove backgrounds seamlessly with the MERN stack.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Product</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/generate" className="hover:text-blue-400 transition">AI Generator</Link></li>
              <li><Link to="/remove-bg" className="hover:text-blue-400 transition">BG Remover</Link></li>
              <li><Link to="/download" className="hover:text-blue-400 transition">Downloads</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Company</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#careers" className="hover:text-blue-400 transition">Careers</a></li>
              <li><Link to="/support" className="hover:text-blue-400 transition">Support & FAQ</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Connect</h3>
            <ul className="space-y-3 text-gray-400 text-sm mb-6">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:amardomale@gmai.com" className="hover:text-blue-400 transition">
                  sumitkhot275@gmail.com
                </a>
              </li>
            </ul>
            
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2026 Sam. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;