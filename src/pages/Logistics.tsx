import React from 'react';
import { Truck, MapPin } from 'lucide-react';
export function Logistics() {
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Logistics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Truck className="w-5 h-5 text-green-600" />
            Active Shipments
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <p className="font-medium">Shipment #SHP-001</p>
              <p className="text-sm text-gray-600">50kg Organic Fertilizer</p>
              <p className="text-sm text-gray-500">ETA: 2 hours</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="font-medium">Shipment #SHP-002</p>
              <p className="text-sm text-gray-600">25kg Wheat Seeds</p>
              <p className="text-sm text-gray-500">ETA: 1 day</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-green-600" />
            Delivery Locations
          </h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map view coming soon</p>
          </div>
        </div>
      </div>
    </div>;
}