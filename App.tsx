import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AIOptimizer from './components/AIOptimizer';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ViewState } from './types';

function App() {
  // Use simple state routing for a Landing Page experience
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.AI_TOOL:
        return (
          <>
            <div className="bg-forest-900 pt-20 pb-12 text-center text-white">
              <h1 className="text-4xl font-bold mb-4">AI Listing Audit</h1>
              <p className="text-forest-200">Test drive our technology completely free.</p>
            </div>
            <AIOptimizer />
            <Services />
            <ContactForm />
          </>
        );
      case ViewState.CONTACT:
        return (
          <>
            <ContactForm />
            <Services />
          </>
        );
      case ViewState.HOME:
      default:
        return (
          <>
            <Hero onNavigate={setCurrentView} />
            <Services />
            <AIOptimizer />
            <ContactForm />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;