import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { ArrowLeftIcon, ShoppingCartIcon, StarIcon, TruckIcon, ShieldCheckIcon } from 'lucide-react';
import { mockProducts } from '../../utils/mockData';
export function ProductDetails() {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const product = mockProducts.find(p => p.id === id);
  if (!product) {
    return <div className="text-center py-12">
        <p className="text-gray-600">Product not found</p>
        <Button onClick={() => navigate('/marketplace')} className="mt-4">
          Back to Marketplace
        </Button>
      </div>;
  }
  return <div className="space-y-6">
      <button onClick={() => navigate('/marketplace')} className="flex items-center text-gray-600 hover:text-gray-900">
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Back to Marketplace
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-start justify-between mb-2">
              <h1 className="text-3xl font-semibold text-gray-900">
                {product.name}
              </h1>
              <Badge variant={product.stock > 0 ? 'success' : 'error'}>
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </Badge>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <StarIcon className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                {product.vendor.rating} rating
              </div>
              <span>•</span>
              <span>{product.vendor.name}</span>
            </div>
          </div>

          <div className="border-t border-b border-gray-200 py-4">
            <p className="text-3xl font-bold text-gray-900">
              KES {product.price}
              <span className="text-lg font-normal text-gray-600">
                {' '}
                / {product.unit}
              </span>
            </p>
          </div>

          <p className="text-gray-700">{product.description}</p>

          {/* Quantity Selector */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity ({product.unit})
              </label>
              <div className="flex items-center gap-3">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50">
                  -
                </button>
                <input type="number" value={quantity} onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-20 text-center border border-gray-300 rounded-lg py-2" />
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50">
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <Button size="lg" className="flex-1">
                <ShoppingCartIcon className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                Buy Now
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <TruckIcon className="w-5 h-5 text-emerald-600 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Fast Delivery</p>
                <p className="text-sm text-gray-600">2-3 days delivery</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <ShieldCheckIcon className="w-5 h-5 text-emerald-600 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Quality Assured</p>
                <p className="text-sm text-gray-600">100% fresh guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vendor Info */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          About the Vendor
        </h2>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
            <span className="text-2xl font-semibold text-emerald-700">
              {product.vendor.name.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{product.vendor.name}</h3>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <StarIcon className="w-4 h-4 text-yellow-400 fill-current mr-1" />
              {product.vendor.rating} rating • 150+ products
            </div>
          </div>
          <Button variant="outline" className="ml-auto">
            View Store
          </Button>
        </div>
      </Card>
    </div>;
}