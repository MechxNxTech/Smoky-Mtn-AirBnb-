import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend or email service
    console.log("Lead captured:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-24 bg-forest-900 text-center px-4">
        <div className="max-w-lg mx-auto bg-white rounded-3xl p-12 shadow-2xl">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-3xl font-bold text-stone-900 mb-4">Application Received!</h3>
          <p className="text-stone-600 mb-8">
            Thank you for your interest in partnering with us. We'll review your property details and reach out within 24 hours to schedule a consultation.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-forest-600 font-semibold hover:text-forest-800"
          >
            Submit another property
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="text-forest-300 font-bold uppercase tracking-wider mb-2">Launch Today</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready to maximize your rental income?</h3>
            <p className="text-forest-100 text-lg mb-8 leading-relaxed">
              Join the growing number of East Tennessee cabin owners who are earning more while doing less. 
              Fill out the form to see if your property qualifies for our AI-managed co-hosting program.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-forest-400"></div>
                <span>Free professional photography for new sign-ups</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-forest-400"></div>
                <span>Comprehensive listing audit</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-forest-400"></div>
                <span>Revenue forecast report</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h4 className="text-2xl font-bold text-stone-900 mb-6">Partner Application</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase mb-1">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase mb-1">Phone</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all"
                    placeholder="(865) 555-0123"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase mb-1">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase mb-1">Property Address / URL</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all"
                  placeholder="123 Mountain View Rd or Airbnb Link"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase mb-1">Message (Optional)</label>
                <textarea 
                  rows={3}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all"
                  placeholder="Tell us a bit about your goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-forest-600 text-white font-bold py-4 rounded-xl hover:bg-forest-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-forest-600/30 mt-4"
              >
                Apply for Co-Hosting
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;