import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image as ImageIcon, Users, Check, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6"
        >
          Unleash Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Imagination</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Transform your words into stunning visual art in seconds. Powered by cutting-edge AI technology, our platform brings your wildest ideas to life.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
         
         <div className="flex flex-wrap items-center justify-center gap-4">
  <Link
    to="/generate"
    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-full text-lg font-bold hover:bg-blue-700 shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center gap-2"
  >
    
    Start Generating Images
  </Link>

  <Link
    to="/remove-bg"
    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-full text-lg font-bold hover:bg-blue-700 shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center gap-2"
  >
    Background Removal
  </Link>
</div>


        </motion.div>
      </section>

      {/* 2. IMAGE GALLERY / CAROUSEL (Horizontal Scroll) */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center">
          <h2 className="text-3xl font-bold text-orange-800 flex items-center justify-center gap-2">
            <ImageIcon className="text-purple-600" /> Recent Creations
          </h2>
        </div>
        
        {/* Scrollable Container */}
        <div className="flex overflow-x-auto gap-6 pb-8 px-4 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {/* Placeholder Images */}
          {[
            "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=500&q=80",
            "https://magai.co/wp-content/uploads/2025/02/magai-featured-photo-gen-ai-images-scaled.jpg",
            "https://imgd.aeplcdn.com/664x374/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-13.jpeg?isig=0&q=80",
          ].map((src, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="min-w-[300px] h-[290px] snap-center rounded-2xl overflow-hidden shadow-md flex-shrink-0 cursor-pointer"
            >
              <img src={src} alt={`AI Art ${index}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. TESTIMONIALS SECTION */}
      <section className="py-20 bg-gray-50 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 flex items-center justify-center gap-2">
            <Users className="text-blue-600" /> Loved by Creators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
            <p className="text-gray-600 italic mb-4">"This AI is incredible! It understood exactly what I wanted and generated a masterpiece in seconds. My web projects look so much better now."</p>
            <h4 className="font-bold text-gray-900">- Sarah Jenkins</h4>
            <span className="text-sm text-blue-600">Graphic Designer</span>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
            <p className="text-gray-600 italic mb-4">"I use the background removal tool every single day for my e-commerce store. It is fast, accurate, and completely changed my workflow."</p>
            <h4 className="font-bold text-gray-900">- Marcus Doe</h4>
            <span className="text-sm text-blue-600">Store Owner</span>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
            <p className="text-gray-600 italic mb-4">"The MERN stack integration is flawless. As a developer, I appreciate how clean and snappy the interface is while generating complex images."</p>
            <h4 className="font-bold text-gray-900">- Elena Rodriguez</h4>
            <span className="text-sm text-blue-600">Software Engineer</span>
          </div>
        </div>
      </section>






      {/* 4. PRICING SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Choose the perfect plan to unleash your creativity. No hidden fees, cancel anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            
            {/* Tier 1: Free */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
              <p className="text-gray-500 mb-6">Perfect for trying out the tools.</p>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-gray-900">$0</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-700"><Check className="text-green-500" size={20} /> 5 AI Images per day</li>
                <li className="flex items-center gap-3 text-gray-700"><Check className="text-green-500" size={20} /> Standard resolution</li>
                <li className="flex items-center gap-3 text-gray-700"><Check className="text-green-500" size={20} /> 10 Background removals</li>
                <li className="flex items-center gap-3 text-gray-400"><Check className="text-gray-300" size={20} /> No commercial license</li>
              </ul>
              <Link to="/signup" className="block w-full py-3 px-4 bg-white text-gray-900 font-bold border border-gray-300 rounded-xl hover:bg-gray-100 transition text-center">
                Get Started
              </Link>
            </motion.div>

            {/* Tier 2: Pro (Colored & Highlighted) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 border border-blue-500 shadow-2xl relative transform md:-translate-y-4"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                <Star size={14} /> MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
              <p className="text-blue-100 mb-6">Everything you need for daily creation.</p>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-white">$18</span>
                <span className="text-blue-200">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white"><Check className="text-blue-300" size={20} /> Unlimited AI Images</li>
                <li className="flex items-center gap-3 text-white"><Check className="text-blue-300" size={20} /> 4K Ultra-High resolution</li>
                <li className="flex items-center gap-3 text-white"><Check className="text-blue-300" size={20} /> Unlimited BG removals</li>
                <li className="flex items-center gap-3 text-white"><Check className="text-blue-300" size={20} /> Full commercial license</li>
              </ul>
              <Link to="/signup" className="block w-full py-3 px-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition text-center shadow-lg hover:shadow-xl">
                Upgrade to Pro
              </Link>
            </motion.div>

            {/* Tier 3: Enterprise */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-lg hover:shadow-xl transition text-white"
            >
              <h3 className="text-2xl font-bold mb-2">Pro Creator</h3>
              <p className="text-gray-400 mb-6">For teams and large-scale projects.</p>
              <div className="mb-6">
                <span className="text-5xl font-extrabold">$49</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300"><Check className="text-purple-400" size={20} /> Everything in Premium</li>
                <li className="flex items-center gap-3 text-gray-300"><Check className="text-purple-400" size={20} /> API Access (10k req/mo)</li>
                <li className="flex items-center gap-3 text-gray-300"><Check className="text-purple-400" size={20} /> Priority 24/7 Support</li>
                <li className="flex items-center gap-3 text-gray-300"><Check className="text-purple-400" size={20} /> Custom AI model training</li>
              </ul>
              <Link to="/contact" className="block w-full py-3 px-4 bg-gray-800 text-white font-bold border border-gray-700 rounded-xl hover:bg-gray-700 transition text-center">
                Contact Sales
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
