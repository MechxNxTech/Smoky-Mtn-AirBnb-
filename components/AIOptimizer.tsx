import React, { useState } from 'react';
import { optimizeListing } from '../services/geminiService';
import { OptimizationResult } from '../types';
import { Sparkles, ArrowRight, Loader2, Copy } from 'lucide-react';

const AIOptimizer: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<OptimizationResult | null>(null);
  
  const [formData, setFormData] = useState({
    propertyType: 'Log Cabin',
    location: 'Gatlinburg, TN',
    features: ''
  });

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.features) return;
    
    setLoading(true);
    setResult(null);
    try {
      const data = await optimizeListing(formData.propertyType, formData.location, formData.features);
      setResult(data);
    } catch (err) {
      alert("Something went wrong. Please check your API key configuration or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-forest-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Input */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-forest-600 w-6 h-6" />
              <h2 className="text-3xl font-bold text-stone-900">Free Listing Audit</h2>
            </div>
            <p className="text-stone-600 mb-8 text-lg">
              See what our AI can do for your property instantly. Enter basic details below and get a free optimization preview.
            </p>

            <form onSubmit={handleAnalyze} className="space-y-6 bg-stone-50 p-8 rounded-2xl border border-stone-200 shadow-sm">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Property Type</label>
                <select 
                  className="w-full rounded-lg border-stone-300 shadow-sm focus:border-forest-500 focus:ring-forest-500 p-3"
                  value={formData.propertyType}
                  onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                >
                  <option>Log Cabin</option>
                  <option>A-Frame</option>
                  <option>Condo/Apartment</option>
                  <option>Luxury Estate</option>
                  <option>Tiny Home</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Location</label>
                <select 
                  className="w-full rounded-lg border-stone-300 shadow-sm focus:border-forest-500 focus:ring-forest-500 p-3"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                >
                  <option>Gatlinburg, TN</option>
                  <option>Pigeon Forge, TN</option>
                  <option>Sevierville, TN</option>
                  <option>Wears Valley, TN</option>
                  <option>Townsend, TN</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Key Features & Amenities</label>
                <textarea 
                  rows={4}
                  className="w-full rounded-lg border-stone-300 shadow-sm focus:border-forest-500 focus:ring-forest-500 p-3"
                  placeholder="e.g. 3 bedrooms, hot tub, mountain view, game room with pool table, close to Dollywood..."
                  value={formData.features}
                  onChange={(e) => setFormData({...formData, features: e.target.value})}
                  required
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-forest-700 text-white font-bold py-4 rounded-xl hover:bg-forest-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    Analyzing Market Data...
                  </>
                ) : (
                  <>
                    Generate AI Optimization
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              
              <p className="text-xs text-center text-stone-500 mt-4">
                Powered by Google Gemini AI. No credit card required.
              </p>
            </form>
          </div>

          {/* Right Column: Output */}
          <div className={`transition-opacity duration-500 ${result || loading ? 'opacity-100' : 'opacity-50 blur-sm'}`}>
            <div className="bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden">
              <div className="bg-forest-900 px-6 py-4 flex justify-between items-center">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  AI Generated Strategy
                </h3>
                {result && <span className="text-forest-200 text-xs bg-forest-800 px-2 py-1 rounded">Live Preview</span>}
              </div>
              
              <div className="p-8 space-y-6">
                {!result && !loading && (
                  <div className="text-center py-12 text-stone-400">
                    <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p>Enter property details to see the magic happen.</p>
                  </div>
                )}

                {loading && (
                  <div className="space-y-4 animate-pulse">
                    <div className="h-4 bg-stone-200 rounded w-3/4"></div>
                    <div className="h-32 bg-stone-100 rounded"></div>
                    <div className="h-4 bg-stone-200 rounded w-1/2"></div>
                  </div>
                )}

                {result && (
                  <>
                    <div>
                      <h4 className="text-xs font-bold text-forest-600 uppercase tracking-wider mb-2">Optimized Title</h4>
                      <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-stone-900 font-bold text-lg">
                        {result.title}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-forest-600 uppercase tracking-wider mb-2">Description Hook</h4>
                      <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-stone-700 italic">
                        "{result.description}"
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-forest-600 uppercase tracking-wider mb-2">Pricing Strategy</h4>
                      <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border border-green-100">
                         <div className="bg-white p-2 rounded shadow-sm text-green-700">
                           <DollarSign className="w-4 h-4" />
                         </div>
                         <p className="text-green-900 text-sm">{result.pricingStrategy}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-forest-600 uppercase tracking-wider mb-2">Recommended Amenities</h4>
                      <div className="flex flex-wrap gap-2">
                        {result.amenitiesSuggestions.map((amenity, i) => (
                          <span key={i} className="px-3 py-1 bg-forest-50 text-forest-700 text-xs font-bold rounded-full border border-forest-100">
                            + {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 mt-4">
                      <p className="text-sm text-stone-500 mb-4">
                        This is just a sample. As your co-host, we monitor and update this daily based on real-time demand.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIOptimizer;

// Helper component for Icon
function DollarSign({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
}