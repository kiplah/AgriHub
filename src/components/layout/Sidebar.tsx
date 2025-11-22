import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShoppingCart, Beef, Sprout, Brain, Truck, Package, Settings } from 'lucide-react';
export function Sidebar() {
  const location = useLocation();
  const navigation = [{
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard
  }, {
    name: 'Marketplace',
    href: '/marketplace',
    icon: ShoppingCart
  }, {
    name: 'Livestock',
    href: '/livestock',
    icon: Beef
  }, {
    name: 'Crops',
    href: '/crops',
    icon: Sprout
  }, {
    name: 'ML Tools',
    href: '/ml/disease-detection',
    icon: Brain
  }, {
    name: 'Logistics',
    href: '/logistics',
    icon: Truck
  }, {
    name: 'Orders',
    href: '/orders',
    icon: Package
  }, {
    name: 'Settings',
    href: '/settings',
    icon: Settings
  }];
  return <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:pt-16">
      <div className="flex flex-col flex-1 min-h-0 bg-white border-r border-gray-200">
        <nav className="flex-1 px-4 py-4 space-y-1">
          {navigation.map(item => {
          const Icon = item.icon;
          const isActive = location.pathname.startsWith(item.href);
          return <Link key={item.name} to={item.href} className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                <Icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>;
        })}
        </nav>
      </div>
    </aside>;
}