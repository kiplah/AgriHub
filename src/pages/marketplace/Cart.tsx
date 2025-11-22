import React from 'react';
import { Button } from '../../src/components/ui/Button';
import { Trash2 } from 'lucide-react';
export function Cart() {
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4 pb-4 border-b">
            <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=100" alt="Product" className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-medium">Organic Fertilizer</h3>
              <p className="text-sm text-gray-600">50kg bag</p>
            </div>
            <div className="text-right">
              <p className="font-bold">₹500</p>
              <button className="text-red-600 hover:text-red-700 mt-2">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total</span>
            <span className="text-2xl font-bold text-green-600">₹500</span>
          </div>
          <Button className="w-full">Proceed to Checkout</Button>
        </div>
      </div>
    </div>;
}