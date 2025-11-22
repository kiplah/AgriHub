import React from 'react';
import { Button } from '../../src/components/ui/Button';
import { Input } from '../../src/components/ui/Input';
export function Checkout() {
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Delivery Information</h2>
          <form className="space-y-4">
            <Input label="Full Name" type="text" required />
            <Input label="Phone Number" type="tel" required />
            <Input label="Address" type="text" required />
            <Input label="City" type="text" required />
            <Input label="Pincode" type="text" required />
          </form>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹500</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹50</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t">
              <span>Total</span>
              <span className="text-green-600">₹550</span>
            </div>
          </div>
          <Button className="w-full">Place Order</Button>
        </div>
      </div>
    </div>;
}