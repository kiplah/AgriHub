import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
export function Products() {
  const categories = [{
    name: 'Pesticides',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600',
    description: 'Effective pest control solutions for healthy crops',
    products: 45
  }, {
    name: 'Seeds',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600',
    description: 'High-quality seeds for maximum yield',
    products: 120
  }, {
    name: 'Fertilizers',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600',
    description: 'Organic and chemical fertilizers for soil enrichment',
    products: 67
  }, {
    name: 'Machines',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600',
    description: 'Modern agricultural equipment and machinery',
    products: 32
  }];
  return <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Explore our comprehensive range of agricultural products designed to
            boost your farm's productivity
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map(category => <div key={category.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {category.products} products available
                  </span>
                  <Link to="/marketplace" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                    Browse
                  </Link>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}