import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { TrashIcon, MinusIcon, PlusIcon } from 'lucide-react';
import { mockProducts } from '../../utils/mockData';
export function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([{
    product: mockProducts[0],
    quantity: 2
  }, {
    product: mockProducts[1],
    quantity: 1
  }]);
  const updateQuantity = (productId: string, delta: number) => {
    setCartItems(items => items.map(item => item.product.id === productId ? {
      ...item,
      quantity: Math.max(1, item.quantity + delta)
    } : item));
  };
  const removeItem = (productId: string) => {
    setCartItems(items => items.filter(item => item.product.id !== productId));
  };
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const delivery = 200;
  const total = subtotal + delivery;
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Shopping Cart</h1>
        <p className="text-gray-600 mt-1">
          {cartItems.length} items in your cart
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => <Card key={item.product.id}>
              <div className="flex gap-4">
                <img src={item.product.image} alt={item.product.name} className="w-24 h-24 object-cover rounded-lg" />

                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.product.vendor.name}
                      </p>
                    </div>
                    <button onClick={() => removeItem(item.product.id)} className="text-gray-400 hover:text-red-600">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.product.id, -1)} className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-50">
                        <MinusIcon className="w-4 h-4 mx-auto" />
                      </button>
                      <span className="w-12 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button onClick={() => updateQuantity(item.product.id, 1)} className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-50">
                        <PlusIcon className="w-4 h-4 mx-auto" />
                      </button>
                    </div>

                    <p className="text-lg font-semibold text-gray-900">
                      KES {item.product.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            </Card>)}

          {cartItems.length === 0 && <Card>
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">Your cart is empty</p>
                <Button onClick={() => navigate('/marketplace')}>
                  Continue Shopping
                </Button>
              </div>
            </Card>}
        </div>

        {/* Order Summary */}
        <div>
          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>KES {subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span>KES {delivery}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold text-gray-900">
                <span>Total</span>
                <span>KES {total}</span>
              </div>
            </div>

            <Button className="w-full" size="lg" onClick={() => navigate('/marketplace/checkout')} disabled={cartItems.length === 0}>
              Proceed to Checkout
            </Button>
          </Card>
        </div>
      </div>
    </div>;
}