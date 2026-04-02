import React from 'react';
import { HelpCircle, MessageCircle, FileText } from 'lucide-react';

const Support = () => {
  const faqs = [
    {
      q: "How many images can I generate for free?",
      a: "Users on the free Starter plan can generate up to 5 high-quality images per day using our standard AI model."
    },
    {
      q: "Is the background remover actually free?",
      a: "Yes! You can remove the background from up to 10 images every single month on the free tier."
    },
    {
      q: "Can I use the generated images commercially?",
      a: "If you are on the Pro or Enterprise plan, you own full commercial rights to the images you generate. Free tier images are for personal use only."
    },
    {
      q: "What do I do if the AI Generator times out?",
      a: "Because we use cloud-based models, sometimes the AI needs 10-20 seconds to 'wake up'. If it fails, just wait a few seconds and click Generate again!"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <HelpCircle size={48} className="text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Help & Support</h1>
          <p className="text-gray-600 text-lg">Everything you need to know about using AI Forge.</p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-xl"><FileText size={24} /></div>
            <div>
              <h3 className="font-bold text-gray-900">Documentation</h3>
              <p className="text-sm text-gray-500">Read our detailed guides</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition">
            <div className="p-4 bg-purple-50 text-purple-600 rounded-xl"><MessageCircle size={24} /></div>
            <div>
              <h3 className="font-bold text-gray-900">Community Chat</h3>
              <p className="text-sm text-gray-500">Join our Discord server</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Support;