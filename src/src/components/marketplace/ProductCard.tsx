import React from 'react';
import { Product } from '../../types';
import { ShoppingCartIcon, StarIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
interface ProductCardProps {
  product: Product;
}
export function ProductCard({
  product
}: ProductCardProps) {
  const navigate = useNavigate();
  return <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate(`/marketplace/${product.id}`)}>
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-medium text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.vendor.name}</p>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <StarIcon className="w-4 h-4 text-yellow-400 fill-current mr-1" />
            {product.vendor.rating}
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold text-gray-900">
              KES {product.price}
            </p>
            <p className="text-xs text-gray-500">per {product.unit}</p>
          </div>

          <Button size="sm" onClick={e => {
          e.stopPropagation();
          // Add to cart logic
        }}>
            <ShoppingCartIcon className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>

        <p className="text-xs text-gray-500 mt-2">
          {product.stock > 0 ? `${product.stock} ${product.unit} in stock` : 'Out of stock'}
        </p>
      </div>
    </div>;
}