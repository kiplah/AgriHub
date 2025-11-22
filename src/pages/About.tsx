import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Eye, Users, Award } from 'lucide-react';
export function About() {
  return <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About AgroMart
          </h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Empowering farmers with technology and innovation
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p className="text-lg">
              AgroMart was founded with a simple yet powerful vision: to
              revolutionize agriculture through technology and innovation. We
              understand the challenges farmers face daily, and we're committed
              to providing solutions that make farming more efficient,
              profitable, and sustainable.
            </p>
            <p className="text-lg">
              Our platform connects farmers with quality agricultural products,
              advanced farm management tools, and AI-powered insights. We
              believe that every farmer deserves access to the best resources
              and technology to succeed in modern agriculture.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[{
          icon: Target,
          title: 'Mission',
          description: 'Empower farmers with innovative agricultural solutions'
        }, {
          icon: Eye,
          title: 'Vision',
          description: 'A sustainable future for global agriculture'
        }, {
          icon: Users,
          title: 'Community',
          description: 'Building a network of successful farmers'
        }, {
          icon: Award,
          title: 'Excellence',
          description: 'Committed to quality and innovation'
        }].map(value => {
          const Icon = value.icon;
          return <div key={value.title} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>;
        })}
        </div>

        {/* Stats */}
        <div className="bg-green-600 rounded-xl shadow-lg p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">10,000+</p>
              <p className="text-green-100">Active Farmers</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-green-100">Products</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-green-100">Districts Covered</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">95%</p>
              <p className="text-green-100">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}