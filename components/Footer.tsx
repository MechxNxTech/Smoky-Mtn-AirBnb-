import React from 'react';
import { Mountain, Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <Mountain className="w-6 h-6" />
              <span className="text-xl font-bold">Smoky Mtn AI</span>
            </div>
            <p className="text-sm max-w-sm mb-6">
              Revolutionizing short-term rental management in East Tennessee with Artificial Intelligence. 
              Maximizing owner revenue while delivering 5-star guest experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="mailto:hello@smokymtnai.com" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-forest-400">Full Service Co-Hosting</a></li>
              <li><a href="#" className="hover:text-forest-400">Listing Optimization</a></li>
              <li><a href="#" className="hover:text-forest-400">Pricing Strategy</a></li>
              <li><a href="#" className="hover:text-forest-400">Guest Communication</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Areas Served</h4>
            <ul className="space-y-2 text-sm">
              <li>Gatlinburg, TN</li>
              <li>Pigeon Forge, TN</li>
              <li>Sevierville, TN</li>
              <li>Wears Valley, TN</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-xs text-center">
          <p>&copy; {new Date().getFullYear()} Smoky Mountain AI Co-Hosting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;