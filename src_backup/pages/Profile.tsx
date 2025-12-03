import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { UserIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export function Profile() {
  const [formData, setFormData] = useState({
    name: 'John Farmer',
    email: 'john@example.com',
    phone: '+254 712 345678',
    location: 'Nakuru, Kenya',
    bio: 'Passionate farmer with 10 years of experience in sustainable agriculture.'
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save profile logic
  };
  return <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">My Profile</h1>
        <p className="text-gray-600 mt-1">Manage your account information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture */}
        <Card>
          <div className="text-center">
            <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserIcon className="w-16 h-16 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-900">{formData.name}</h3>
            <p className="text-sm text-gray-600 mt-1">Farmer</p>
            <Button variant="outline" size="sm" className="mt-4">
              Change Photo
            </Button>
          </div>
        </Card>

        {/* Profile Form */}
        <div className="lg:col-span-2">
          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Personal Information
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Full Name" value={formData.name} onChange={e => setFormData({
              ...formData,
              name: e.target.value
            })} />

              <Input label="Email" type="email" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} />

              <Input label="Phone Number" type="tel" value={formData.phone} onChange={e => setFormData({
              ...formData,
              phone: e.target.value
            })} />

              <Input label="Location" value={formData.location} onChange={e => setFormData({
              ...formData,
              location: e.target.value
            })} />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea value={formData.bio} onChange={e => setFormData({
                ...formData,
                bio: e.target.value
              })} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" />
              </div>

              <div className="flex gap-3">
                <Button type="submit">Save Changes</Button>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>

      {/* Stats */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Account Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-gray-600">Total Orders</p>
            <p className="text-2xl font-semibold text-gray-900">24</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Livestock</p>
            <p className="text-2xl font-semibold text-gray-900">15</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Crops</p>
            <p className="text-2xl font-semibold text-gray-900">8</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Member Since</p>
            <p className="text-2xl font-semibold text-gray-900">2023</p>
          </div>
        </div>
      </Card>
    </div>;
}