import React, { useState } from 'react';
import { ProductCard } from '../../components/marketplace/ProductCard';
import { Input } from '../../components/ui/Input';
import { SearchIcon, FilterIcon } from 'lucide-react';
import { mockProducts } from '../../utils/mockData';
export function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'Vegetables', 'Dairy', 'Poultry', 'Grains', 'Equipment'];
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Marketplace</h1>
        <p className="text-gray-600 mt-1">
          Browse and purchase agricultural products
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search products..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" />
        </div>

        <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <FilterIcon className="w-5 h-5 mr-2" />
          Filters
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>)}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
      </div>

      {filteredProducts.length === 0 && <div className="text-center py-12">
          <p className="text-gray-600">
            No products found matching your criteria
          </p>
        </div>}
    </div>;
}