import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
export function Marketplace() {
  const products = [{
    id: 1,
    name: 'Organic Fertilizer',
    price: 500,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400',
    category: 'Fertilizers',
    description: 'High-quality organic fertilizer for all crops',
    stock: 150,
    unit: 'kg'
  }, {
    id: 2,
    name: 'Wheat Seeds',
    price: 800,
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400',
    category: 'Seeds',
    description: 'Premium wheat seeds with high yield',
    stock: 200,
    unit: 'kg'
  }, {
    id: 3,
    name: 'Pesticide Spray',
    price: 350,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
    category: 'Pesticides',
    description: 'Effective pest control solution',
    stock: 80,
    unit: 'liter'
  }, {
    id: 4,
    name: 'Irrigation System',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400',
    category: 'Equipment',
    description: 'Modern drip irrigation system',
    stock: 25,
    unit: 'set'
  }, {
    id: 5,
    name: 'Tomato Seeds',
    price: 450,
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400',
    category: 'Seeds',
    description: 'Hybrid tomato seeds for greenhouse',
    stock: 120,
    unit: 'kg'
  }, {
    id: 6,
    name: 'Maize Seeds',
    price: 600,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400',
    category: 'Seeds',
    description: 'High-yield maize variety',
    stock: 180,
    unit: 'kg'
  }];
  return <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Marketplace
          </h1>
          <p className="text-gray-600 mt-1">
            Browse and purchase agricultural products
          </p>
        </div>
        <Link to="/marketplace/cart" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center">
          View Cart
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none" />
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {['All', 'Seeds', 'Fertilizers', 'Pesticides', 'Equipment'].map(category => <button key={category} className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${category === 'All' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {category}
            </button>)}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => <Link key={product.id} to={`/marketplace/${product.id}`} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>

            <div className="p-4">
              <div className="mb-2">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-xl font-bold text-green-600">
                    ₹{product.price}
                  </p>
                  <p className="text-xs text-gray-500">per {product.unit}</p>
                </div>
                <button onClick={e => {
              e.preventDefault();
              alert('Added to cart!');
            }} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                  Add to Cart
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                {product.stock > 0 ? `${product.stock} ${product.unit} in stock` : 'Out of stock'}
              </p>
            </div>
          </Link>)}
      </div>
    </div>;
}