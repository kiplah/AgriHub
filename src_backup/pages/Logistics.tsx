import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { TruckIcon, MapPinIcon, ClockIcon, PackageIcon } from 'lucide-react';
export function Logistics() {
  const deliveries = [{
    id: 'd1',
    orderId: 'o1',
    status: 'in_transit',
    pickupLocation: 'Green Valley Farm, Nakuru',
    deliveryLocation: '123 Farm Road, Nairobi',
    estimatedTime: '2 hours',
    rider: {
      name: 'John Kamau',
      phone: '+254 712 345678'
    }
  }, {
    id: 'd2',
    orderId: 'o2',
    status: 'pending',
    pickupLocation: 'Happy Hens Farm, Kiambu',
    deliveryLocation: '456 Green Street, Nakuru',
    estimatedTime: '4 hours',
    rider: null
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Logistics & Delivery
          </h1>
          <p className="text-gray-600 mt-1">
            Track deliveries and manage logistics
          </p>
        </div>
        <Button>
          <PackageIcon className="w-4 h-4 mr-2" />
          Request Delivery
        </Button>
      </div>

      {/* Active Deliveries */}
      <div className="space-y-4">
        {deliveries.map(delivery => <Card key={delivery.id}>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <TruckIcon className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-semibold text-gray-900">
                    Delivery #{delivery.id}
                  </h3>
                  <Badge variant={delivery.status === 'in_transit' ? 'info' : 'warning'}>
                    {delivery.status === 'in_transit' ? 'In Transit' : 'Pending'}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPinIcon className="w-4 h-4 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Pickup
                      </p>
                      <p className="text-sm text-gray-600">
                        {delivery.pickupLocation}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPinIcon className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Delivery
                      </p>
                      <p className="text-sm text-gray-600">
                        {delivery.deliveryLocation}
                      </p>
                    </div>
                  </div>

                  {delivery.rider && <div className="flex items-start gap-2 pt-2 border-t border-gray-200">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Rider: {delivery.rider.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {delivery.rider.phone}
                        </p>
                      </div>
                    </div>}
                </div>
              </div>

              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <ClockIcon className="w-4 h-4" />
                  <span className="text-sm">ETA: {delivery.estimatedTime}</span>
                </div>
                <Button variant="outline">Track Delivery</Button>
              </div>
            </div>
          </Card>)}
      </div>

      {/* Map Placeholder */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Delivery Map
        </h2>
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPinIcon className="w-12 h-12 mx-auto mb-2" />
            <p>Map integration coming soon</p>
          </div>
        </div>
      </Card>
    </div>;
}