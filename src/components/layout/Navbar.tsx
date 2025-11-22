import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Bell, User } from 'lucide-react';
export function Navbar() {
  return <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100">
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/dashboard" className="flex items-center ml-2 lg:ml-0">
              <span className="text-xl font-bold text-green-600">
                AgriConnect
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-md text-gray-600 hover:bg-gray-100 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <Link to="/profile" className="p-2 rounded-md text-gray-600 hover:bg-gray-100">
              <User className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>;
}