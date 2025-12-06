import React from 'react';
import { ViewState } from '../types';
import { CheckCircle, TrendingUp, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden bg-stone-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?q=80&w=2072&auto=format&fit=crop" 
          alt="Smoky Mountains Cabin"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-500/20 border border-forest-400/30 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-forest-100 text-sm font-medium">Accepting New Cabins in East TN</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-8">
            Passive Income,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-300 to-emerald-500">
              Powered by AI.
            </span>
          </h1>
          
          <p className="text-xl text-stone-300 mb-10 leading-relaxed max-w-2xl">
            We co-host your Airbnb using advanced AI to maximize occupancy and revenue. 
            Zero upfront costs. We only get paid when you get paid.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate(ViewState.AI_TOOL)}
              className="px-8 py-4 bg-white text-forest-900 rounded-xl font-bold text-lg hover:bg-stone-100 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <TrendingUp className="w-5 h-5" />
              Free AI Revenue Audit
            </button>
            <button 
              onClick={() => onNavigate(ViewState.CONTACT)}
              className="px-8 py-4 bg-forest-600/90 backdrop-blur-sm text-white rounded-xl font-bold text-lg hover:bg-forest-600 transition-colors border border-forest-500/50 flex items-center justify-center gap-2"
            >
              Start Co-Hosting
            </button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-8 text-stone-400 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-forest-400" />
              <span>No Win, No Fee Model</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-forest-400" />
              <span>24/7 Guest Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-forest-400" />
              <span>Dynamic Pricing Strategy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;