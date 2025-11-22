import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { ArrowLeftIcon, EditIcon, TrashIcon, ActivityIcon, HeartPulseIcon } from 'lucide-react';
import { mockLivestock } from '../../utils/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const mockWeightData = [{
  month: 'Jan',
  weight: 380
}, {
  month: 'Feb',
  weight: 395
}, {
  month: 'Mar',
  weight: 410
}, {
  month: 'Apr',
  weight: 425
}, {
  month: 'May',
  weight: 450
}];
export function LivestockDetails() {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const animal = mockLivestock.find(a => a.id === id);
  if (!animal) {
    return <div className="text-center py-12">
        <p className="text-gray-600">Animal not found</p>
        <Button onClick={() => navigate('/livestock')} className="mt-4">
          Back to Livestock
        </Button>
      </div>;
  }
  return <div className="space-y-6">
      <button onClick={() => navigate('/livestock')} className="flex items-center text-gray-600 hover:text-gray-900">
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Back to Livestock
      </button>

      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            {animal.name}
          </h1>
          <p className="text-gray-600 mt-1">
            {animal.breed} • Tag: {animal.tagNumber}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <EditIcon className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <Button variant="outline" size="sm">
            <TrashIcon className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {animal.image && <Card padding={false}>
              <img src={animal.image} alt={animal.name} className="w-full h-64 object-cover rounded-lg" />
            </Card>}

          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Basic Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Type</p>
                <p className="font-medium text-gray-900">{animal.type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Breed</p>
                <p className="font-medium text-gray-900">{animal.breed}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Age</p>
                <p className="font-medium text-gray-900">{animal.age} years</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Current Weight</p>
                <p className="font-medium text-gray-900">{animal.weight} kg</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Health Status</p>
                <Badge variant={animal.healthStatus === 'healthy' ? 'success' : animal.healthStatus === 'sick' ? 'error' : 'warning'}>
                  {animal.healthStatus}
                </Badge>
              </div>
              <div>
                <p className="text-sm text-gray-600">Last Fed</p>
                <p className="font-medium text-gray-900">
                  {new Date(animal.lastFed).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Weight Growth Chart
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={mockWeightData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="weight" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <ActivityIcon className="w-4 h-4 mr-2" />
                Log Feeding
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <HeartPulseIcon className="w-4 h-4 mr-2" />
                Health Checkup
              </Button>
            </div>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Activity
            </h2>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="text-gray-900 font-medium">Fed - Morning</p>
                <p className="text-gray-600">Today, 8:00 AM</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-900 font-medium">Weight Recorded</p>
                <p className="text-gray-600">Yesterday</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-900 font-medium">Health Checkup</p>
                <p className="text-gray-600">3 days ago</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>;
}