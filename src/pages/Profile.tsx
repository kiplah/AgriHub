import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';
export function Profile() {
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Profile</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">John Farmer</h2>
            <p className="text-gray-600">Farmer ID: AGR-2024-001</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <span>john.farmer@example.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gray-400" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-gray-400" />
            <span>Village Greenfield, District Agri, State 123456</span>
          </div>
        </div>
      </div>
    </div>;
}