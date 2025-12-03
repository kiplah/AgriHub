import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
export function Checkout() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    notes: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process order
    navigate('/orders');
  };
  return <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Checkout</h1>
        <p className="text-gray-600 mt-1">Complete your order</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Delivery Information
            </h2>
            <div className="space-y-4">
              <Input label="Full Name" value={formData.fullName} onChange={e => setFormData({
              ...formData,
              fullName: e.target.value
            })} required />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Phone Number" type="tel" value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} required />
                <Input label="Email" type="email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} required />
              </div>
              <Input label="Delivery Address" value={formData.address} onChange={e => setFormData({
              ...formData,
              address: e.target.value
            })} required />
              <Input label="City" value={formData.city} onChange={e => setFormData({
              ...formData,
              city: e.target.value
            })} required />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Notes (Optional)
                </label>
                <textarea value={formData.notes} onChange={e => setFormData({
                ...formData,
                notes: e.target.value
              })} rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="Any special instructions..." />
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Payment Method
            </h2>
            <div className="space-y-3">
              <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="radio" name="payment" className="w-4 h-4 text-emerald-600" defaultChecked />
                <span className="ml-3 font-medium">M-Pesa</span>
              </label>
              <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="radio" name="payment" className="w-4 h-4 text-emerald-600" />
                <span className="ml-3 font-medium">Cash on Delivery</span>
              </label>
            </div>
          </Card>
        </div>

        <div>
          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Order Summary
            </h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>KES 740</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span>KES 200</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold text-gray-900 text-lg">
                <span>Total</span>
                <span>KES 940</span>
              </div>
            </div>
            <Button type="submit" className="w-full" size="lg">
              Place Order
            </Button>
          </Card>
        </div>
      </form>
    </div>;
}