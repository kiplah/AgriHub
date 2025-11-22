import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ShoppingBag, TrendingUp, Package, Leaf, Brain, Menu, X } from 'lucide-react';
export function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-900">
      {/* Fixed Navigation with Scroll Effect */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        {/* Top Row: Logo + CTA Buttons */}
        <div className="px-4 sm:px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Leaf className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors ${scrolled ? 'text-green-600' : 'text-green-400'}`} />
              <span className={`text-xl sm:text-2xl font-bold transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                AGROMART
              </span>
            </Link>

            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/auth/register" className={`px-4 lg:px-6 py-2.5 rounded-full font-medium transition-all text-sm lg:text-base ${scrolled ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-500 text-white hover:bg-green-600'}`}>
                Become a Buyer
              </Link>
              <Link to="/auth/register" className={`px-4 lg:px-6 py-2.5 rounded-full font-medium transition-all text-sm lg:text-base ${scrolled ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-500 text-white hover:bg-green-600'}`}>
                Become a Seller
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Separator Line */}
        <div className={`h-px transition-colors ${scrolled ? 'bg-gray-200' : 'bg-white/20'}`}></div>

        {/* Bottom Row: Navigation Links - Desktop */}
        <div className="hidden lg:block px-4 sm:px-6 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-8">
            <Link to="/" className={`font-medium transition-all ${scrolled ? 'text-gray-900 hover:text-green-600 border-b-2 border-green-600' : 'text-white hover:text-green-400 border-b-2 border-green-400'} pb-1`}>
              HOME
            </Link>
            <Link to="/products" className={`font-medium transition-all ${scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-400'}`}>
              PRODUCTS
            </Link>
            <Link to="/services" className={`font-medium transition-all ${scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-400'}`}>
              SERVICES
            </Link>
            <Link to="/about" className={`font-medium transition-all ${scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-400'}`}>
              ABOUT US
            </Link>
            <Link to="/contact" className={`font-medium transition-all ${scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-400'}`}>
              CONTACT US
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className={`lg:hidden border-t ${scrolled ? 'bg-white border-gray-200' : 'bg-green-800 border-green-700'} py-4 px-4`}>
            <div className="flex flex-col gap-4">
              <Link to="/" className={`font-medium py-2 transition-colors ${scrolled ? 'text-gray-900 hover:text-green-600' : 'text-white hover:text-green-400'}`}>
                HOME
              </Link>
              <Link to="/products" className={`font-medium py-2 transition-colors ${scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-400'}`}>
                PRODUCTS
              </Link>
              <Link to="/services" className={`font-medium py-2 transition-colors ${scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-400'}`}>
                SERVICES
              </Link>
              <Link to="/about" className={`font-medium py-2 transition-colors ${scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-400'}`}>
                ABOUT US
              </Link>
              <Link to="/contact" className={`font-medium py-2 transition-colors ${scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-400'}`}>
                CONTACT US
              </Link>
              <div className={`flex flex-col gap-2 pt-4 border-t ${scrolled ? 'border-gray-200' : 'border-green-700'}`}>
                <Link to="/auth/register" className="px-6 py-2.5 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors text-center">
                  Become a Buyer
                </Link>
                <Link to="/auth/register" className="px-6 py-2.5 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors text-center">
                  Become a Seller
                </Link>
              </div>
            </div>
          </div>}
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 sm:pt-40">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-20 md:py-32">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-green-400 text-base sm:text-lg mb-4 sm:mb-6">
              <span>Revolutionizing Agriculture</span>
              <Sprout className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6">
              Welcome to <span className="text-green-400">AgroMart</span>
            </h1>

            <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              Revolutionizing agriculture with innovative solutions, premium
              tools, and sustainable practices. Let's cultivate a thriving
              future for farmers and the planet.
            </p>

            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
              <div className="h-px w-8 sm:w-16 bg-green-400"></div>
              <span className="text-green-400 font-semibold tracking-wider text-xs sm:text-base">
                EMPOWERING FARMERS GLOBALLY
              </span>
              <div className="h-px w-8 sm:w-16 bg-green-400"></div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <Link to="/auth/register" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-green-600 transition-colors shadow-lg text-center">
                Get Started Today
              </Link>
              <Link to="/auth/login" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-green-900 transition-colors text-center">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AgroMart?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Complete agricultural solutions for modern farmers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Marketplace</h3>
              <p className="text-gray-600">
                Buy and sell agricultural products with ease
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Farm Management</h3>
              <p className="text-gray-600">
                Track livestock and crops efficiently
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Tools</h3>
              <p className="text-gray-600">
                Disease detection and yield forecasting
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Logistics</h3>
              <p className="text-gray-600">
                Seamless delivery and order tracking
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-gray-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Everything you need for successful farming
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[{
            name: 'Pesticides',
            image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400'
          }, {
            name: 'Seeds',
            image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400'
          }, {
            name: 'Fertilizers',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400'
          }, {
            name: 'Machines',
            image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400'
          }].map(category => <Link key={category.name} to="/products" className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img src={category.image} alt={category.name} className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white text-xl sm:text-2xl font-bold p-4 sm:p-6">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>)}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Your Farming Experience?
          </h2>
          <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8">
            Join thousands of farmers already using AgroMart to grow their
            business
          </p>
          <Link to="/auth/register" className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-green-600 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-xl">
            Start Your Journey Today
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-8 h-8 text-green-400" />
                <span className="text-xl font-bold">AGROMART</span>
              </div>
              <p className="text-gray-300 text-sm">
                Empowering farmers globally with innovative agricultural
                solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link to="/products" className="hover:text-green-400">
                    Pesticides
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-green-400">
                    Seeds
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-green-400">
                    Fertilizers
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-green-400">
                    Machines
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link to="/about" className="hover:text-green-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-green-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-green-400">
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link to="/contact" className="hover:text-green-400">
                    Help Center
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-800 pt-8 text-center text-gray-300 text-sm">
            <p>&copy; 2024 AgroMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
}