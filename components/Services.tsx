import React from 'react';
import { Bot, DollarSign, Calendar, MessageSquare, BarChart3, Lock } from 'lucide-react';

const Services: React.FC = () => {
  const features = [
    {
      icon: <Bot className="w-6 h-6 text-white" />,
      title: "AI-Powered Optimization",
      desc: "Our algorithms constantly tweak your listing titles, descriptions, and photos to rank higher in Airbnb search results."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-white" />,
      title: "Dynamic Revenue Pricing",
      desc: "We don't guess. We analyze thousands of data points daily to set the perfect price for every single night."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "24/7 Guest Communication",
      desc: "We respond to inquiries in under 5 minutes on average, day or night, securing bookings before competitors do."
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Calendar Management",
      desc: "Complete synchronization across platforms to prevent double bookings while maximizing occupancy rates."
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: "Risk-Free Partnership",
      desc: "No setup fees. No monthly retainers. Our commission is purely performance-based. We earn when you earn."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Monthly Performance Reports",
      desc: "Detailed breakdowns of your earnings, occupancy rates, and market comparisons sent directly to your inbox."
    }
  ];

  return (
    <div className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-forest-600 font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Us?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
            We Handle Everything. You Handle the Profits.
          </h3>
          <p className="text-lg text-stone-600">
            Traditional property management is outdated. We combine local Smokies expertise with cutting-edge artificial intelligence to outperform the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-forest-700 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-forest-700/20 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3">{feature.title}</h4>
              <p className="text-stone-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;