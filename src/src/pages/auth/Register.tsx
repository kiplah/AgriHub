import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
export function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'farmer'
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/auth/login');
  };
  return <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <span className="text-3xl font-bold text-gray-900">AgriHub</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Create your account
          </h2>
          <p className="text-gray-600 mt-2">
            Join AgriHub and start managing your farm
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Full Name" type="text" placeholder="John Doe" value={formData.name} onChange={e => setFormData({
            ...formData,
            name: e.target.value
          })} required />

            <Input label="Email" type="email" placeholder="you@example.com" value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} required />

            <Input label="Phone Number" type="tel" placeholder="+254 700 000000" value={formData.phone} onChange={e => setFormData({
            ...formData,
            phone: e.target.value
          })} required />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                I am a
              </label>
              <select value={formData.role} onChange={e => setFormData({
              ...formData,
              role: e.target.value
            })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none">
                <option value="farmer">Farmer</option>
                <option value="vendor">Vendor</option>
                <option value="rider">Delivery Rider</option>
              </select>
            </div>

            <Input label="Password" type="password" placeholder="••••••••" value={formData.password} onChange={e => setFormData({
            ...formData,
            password: e.target.value
          })} required />

            <Input label="Confirm Password" type="password" placeholder="••••••••" value={formData.confirmPassword} onChange={e => setFormData({
            ...formData,
            confirmPassword: e.target.value
          })} required />

            <Button type="submit" className="w-full" size="lg">
              Create Account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/auth/login" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>;
}