import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, MenuIcon, SearchIcon } from 'lucide-react';
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  return <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">AgriHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/marketplace" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Marketplace
            </Link>
            <Link to="/livestock" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Livestock
            </Link>
            <Link to="/crops" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Crops
            </Link>
            <Link to="/ml/disease-detection" className="text-gray-700 hover:text-emerald-600 transition-colors">
              ML Tools
            </Link>
            <Link to="/logistics" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Logistics
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-emerald-600 transition-colors">
              <SearchIcon className="w-5 h-5" />
            </button>
            <button onClick={() => navigate('/marketplace/cart')} className="p-2 text-gray-600 hover:text-emerald-600 transition-colors relative">
              <ShoppingCartIcon className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-600 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button onClick={() => navigate('/profile')} className="p-2 text-gray-600 hover:text-emerald-600 transition-colors">
              <UserIcon className="w-5 h-5" />
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-gray-600">
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-3">
            <Link to="/marketplace" className="block text-gray-700 hover:text-emerald-600">
              Marketplace
            </Link>
            <Link to="/livestock" className="block text-gray-700 hover:text-emerald-600">
              Livestock
            </Link>
            <Link to="/crops" className="block text-gray-700 hover:text-emerald-600">
              Crops
            </Link>
            <Link to="/ml/disease-detection" className="block text-gray-700 hover:text-emerald-600">
              ML Tools
            </Link>
            <Link to="/logistics" className="block text-gray-700 hover:text-emerald-600">
              Logistics
            </Link>
          </div>
        </div>}
    </nav>;
}