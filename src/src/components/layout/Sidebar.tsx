import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboardIcon, ShoppingBagIcon, SproutIcon, BrainIcon, TruckIcon, PackageIcon, SettingsIcon, UserIcon, BoxIcon } from 'lucide-react';
const navigation = [{
  name: 'Dashboard',
  href: '/dashboard',
  icon: LayoutDashboardIcon
}, {
  name: 'Marketplace',
  href: '/marketplace',
  icon: ShoppingBagIcon
}, {
  name: 'Livestock',
  href: '/livestock',
  icon: BoxIcon
}, {
  name: 'Crops',
  href: '/crops',
  icon: SproutIcon
}, {
  name: 'ML Tools',
  href: '/ml/disease-detection',
  icon: BrainIcon
}, {
  name: 'Logistics',
  href: '/logistics',
  icon: TruckIcon
}, {
  name: 'Orders',
  href: '/orders',
  icon: PackageIcon
}];
const secondaryNavigation = [{
  name: 'Profile',
  href: '/profile',
  icon: UserIcon
}, {
  name: 'Settings',
  href: '/settings',
  icon: SettingsIcon
}];
export function Sidebar() {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };
  return <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:pt-16 lg:border-r lg:border-gray-200 lg:bg-white">
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navigation.map(item => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return <Link key={item.name} to={item.href} className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${active ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                <Icon className={`mr-3 h-5 w-5 ${active ? 'text-emerald-600' : 'text-gray-400'}`} />
                {item.name}
              </Link>;
        })}
        </nav>

        <div className="px-4 py-6 border-t border-gray-200">
          <nav className="space-y-1">
            {secondaryNavigation.map(item => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return <Link key={item.name} to={item.href} className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${active ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                  <Icon className={`mr-3 h-5 w-5 ${active ? 'text-emerald-600' : 'text-gray-400'}`} />
                  {item.name}
                </Link>;
          })}
          </nav>
        </div>
      </div>
    </div>;
}