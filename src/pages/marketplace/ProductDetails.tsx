import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../src/components/ui/Button';
export function ProductDetails() {
  const {
    id
  } = useParams();
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Product Details</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600" alt="Product" className="w-full h-96 object-cover rounded-lg" />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Organic Fertilizer</h2>
            <p className="text-3xl font-bold text-green-600 mb-4">₹500</p>
            <p className="text-gray-600 mb-6">
              High-quality organic fertilizer perfect for all types of crops.
              Enriched with essential nutrients to boost plant growth and yield.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <input type="number" min="1" defaultValue="1" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
            </div>

            <Button className="w-full">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>;
}