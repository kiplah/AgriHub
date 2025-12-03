import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PackageIcon, TruckIcon, CheckCircleIcon } from 'lucide-react';
import { mockOrders } from '../utils/mockData';
import { useNavigate } from 'react-router-dom';
export function Orders() {
  const navigate = useNavigate();
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'success';
      case 'shipped':
        return 'info';
      case 'processing':
        return 'warning';
      default:
        return 'default';
    }
  };
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">My Orders</h1>
        <p className="text-gray-600 mt-1">Track and manage your orders</p>
      </div>

      <div className="space-y-4">
        {mockOrders.map(order => <Card key={order.id}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <PackageIcon className="w-5 h-5 text-gray-400" />
                  <h3 className="font-semibold text-gray-900">
                    Order #{order.id}
                  </h3>
                  <Badge variant={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                </div>

                <p className="text-sm text-gray-600 mb-2">
                  {order.items.length} items • Placed on{' '}
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>

                <p className="text-sm text-gray-700">
                  Delivery to: {order.deliveryAddress}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-xl font-semibold text-gray-900">
                    KES {order.total}
                  </p>
                </div>

                <Button variant="outline" onClick={() => navigate(`/orders/${order.id}`)}>
                  View Details
                </Button>
              </div>
            </div>

            {/* Order Items Preview */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex gap-3 overflow-x-auto">
                {order.items.map((item, i) => <div key={i} className="flex-shrink-0 flex items-center gap-2 p-2 bg-gray-50 rounded">
                    <img src={item.product.image} alt={item.product.name} className="w-12 h-12 object-cover rounded" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-gray-600">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>)}
              </div>
            </div>
          </Card>)}
      </div>

      {mockOrders.length === 0 && <Card>
          <div className="text-center py-12">
            <PackageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">
              You haven't placed any orders yet
            </p>
            <Button onClick={() => navigate('/marketplace')}>
              Start Shopping
            </Button>
          </div>
        </Card>}
    </div>;
}