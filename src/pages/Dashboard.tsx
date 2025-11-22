import React from 'react';
import { StatCard } from '../src/components/ui/StatCard';
import { TrendingUp, ShoppingBag, Beef, Sprout } from 'lucide-react';
export function Dashboard() {
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Welcome back! Here's your farm overview.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value="₹2,45,000" change="+12.5%" icon={TrendingUp} />
        <StatCard title="Active Orders" value="24" change="+5" icon={ShoppingBag} />
        <StatCard title="Livestock" value="156" change="+8" icon={Beef} />
        <StatCard title="Crop Yield" value="2.4T" change="+15%" icon={Sprout} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-medium">New order received</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
              <span className="text-green-600 font-medium">₹12,500</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-medium">Livestock health check</p>
                <p className="text-sm text-gray-500">5 hours ago</p>
              </div>
              <span className="text-blue-600 font-medium">Completed</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">Crop harvest scheduled</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
              <span className="text-orange-600 font-medium">Pending</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 transition-colors">
              <ShoppingBag className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium">New Order</p>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 transition-colors">
              <Beef className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Add Livestock</p>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 transition-colors">
              <Sprout className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Add Crop</p>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 transition-colors">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium">View Analytics</p>
            </button>
          </div>
        </div>
      </div>
    </div>;
}