import React, { useState } from 'react';
import { Menu, X, Mountain, Sparkles } from 'lucide-react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: ViewState.HOME },
    { label: 'Free AI Audit', value: ViewState.AI_TOOL },
    { label: 'Partner With Us', value: ViewState.CONTACT },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate(ViewState.HOME)}
          >
            <div className="bg-forest-700 p-2 rounded-lg group-hover:bg-forest-600 transition-colors">
              <Mountain className="h-6 w-6 text-white" />
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-forest-900 leading-tight">Smoky Mtn <span className="text-forest-600">AI</span></h1>
              <p className="text-xs text-stone-500 font-medium tracking-wider">PREMIER CO-HOSTING</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.value)}
                className={`text-sm font-semibold transition-colors ${
                  currentView === item.value
                    ? 'text-forest-700'
                    : 'text-stone-600 hover:text-forest-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => onNavigate(ViewState.CONTACT)}
              className="bg-forest-700 hover:bg-forest-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-stone-600 hover:text-forest-700 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onNavigate(item.value);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium ${
                  currentView === item.value
                    ? 'bg-forest-50 text-forest-800'
                    : 'text-stone-600 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => {
                onNavigate(ViewState.CONTACT);
                setIsMenuOpen(false);
              }}
              className="w-full mt-4 bg-forest-700 text-white px-4 py-3 rounded-lg font-semibold shadow-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;