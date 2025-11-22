import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, TrendingUp, Package, Headphones } from 'lucide-react';
export function Services() {
  const services = [{
    icon: Brain,
    title: 'AI-Powered Analytics',
    description: 'Disease detection, yield forecasting, and soil analysis using advanced machine learning',
    features: ['Crop disease identification', 'Yield prediction', 'Soil health monitoring', 'Growth optimization']
  }, {
    icon: TrendingUp,
    title: 'Farm Management',
    description: 'Complete livestock and crop management system for efficient farm operations',
    features: ['Livestock tracking', 'Crop monitoring', 'Health records', 'Growth analytics']
  }, {
    icon: Package,
    title: 'Logistics & Delivery',
    description: 'Seamless product delivery and order tracking across the region',
    features: ['Real-time tracking', 'Fast delivery', 'Secure packaging', 'Order management']
  }, {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Expert agricultural advice and technical support whenever you need it',
    features: ['Expert consultation', 'Technical support', 'Training programs', 'Community forum']
  }];
  return <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Comprehensive agricultural solutions to help your farm thrive
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(service => {
          const Icon = service.icon;
          return <div key={service.title} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map(feature => <li key={feature} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      {feature}
                    </li>)}
                </ul>
              </div>;
        })}
        </div>
      </div>
    </div>;
}