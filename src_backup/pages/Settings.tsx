import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { BellIcon, LockIcon, GlobeIcon, CreditCardIcon } from 'lucide-react';
export function Settings() {
  return <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account preferences</p>
      </div>

      {/* Notifications */}
      <Card>
        <div className="flex items-start gap-4">
          <div className="p-3 bg-emerald-50 rounded-lg">
            <BellIcon className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">Notifications</h3>
            <p className="text-sm text-gray-600 mb-4">
              Manage how you receive notifications
            </p>

            <div className="space-y-3">
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">
                  Email notifications
                </span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-emerald-600 rounded" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">SMS notifications</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-emerald-600 rounded" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Order updates</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-emerald-600 rounded" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Marketing emails</span>
                <input type="checkbox" className="w-4 h-4 text-emerald-600 rounded" />
              </label>
            </div>
          </div>
        </div>
      </Card>

      {/* Security */}
      <Card>
        <div className="flex items-start gap-4">
          <div className="p-3 bg-emerald-50 rounded-lg">
            <LockIcon className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">Security</h3>
            <p className="text-sm text-gray-600 mb-4">
              Manage your password and security settings
            </p>

            <div className="space-y-3">
              <Button variant="outline" size="sm">
                Change Password
              </Button>
              <Button variant="outline" size="sm">
                Enable Two-Factor Authentication
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Language */}
      <Card>
        <div className="flex items-start gap-4">
          <div className="p-3 bg-emerald-50 rounded-lg">
            <GlobeIcon className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">
              Language & Region
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Set your preferred language and region
            </p>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Language
                </label>
                <select className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                  <option>English</option>
                  <option>Swahili</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Currency
                </label>
                <select className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                  <option>KES (Kenyan Shilling)</option>
                  <option>USD (US Dollar)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Payment */}
      <Card>
        <div className="flex items-start gap-4">
          <div className="p-3 bg-emerald-50 rounded-lg">
            <CreditCardIcon className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">
              Payment Methods
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Manage your payment options
            </p>

            <Button variant="outline" size="sm">
              Add Payment Method
            </Button>
          </div>
        </div>
      </Card>

      {/* Danger Zone */}
      <Card>
        <h3 className="font-semibold text-red-600 mb-4">Danger Zone</h3>
        <div className="space-y-3">
          <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
            Deactivate Account
          </Button>
          <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
            Delete Account
          </Button>
        </div>
      </Card>
    </div>;
}