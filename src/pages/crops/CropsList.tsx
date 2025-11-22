import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../src/components/ui/Button';
import { Card } from '../../src/components/ui/Card';
export function CropsList() {
  const crops = [{
    id: 1,
    name: 'Wheat',
    area: '5 acres',
    status: 'Growing',
    harvest: '2024-03-15'
  }, {
    id: 2,
    name: 'Rice',
    area: '3 acres',
    status: 'Planted',
    harvest: '2024-04-20'
  }, {
    id: 3,
    name: 'Corn',
    area: '2 acres',
    status: 'Growing',
    harvest: '2024-03-30'
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Crops</h1>
        <Link to="/crops/add">
          <Button>Add Crop</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crops.map(crop => <Card key={crop.id}>
            <h3 className="font-semibold text-lg mb-2">{crop.name}</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Area: {crop.area}</p>
              <p>
                Status: <span className="text-green-600">{crop.status}</span>
              </p>
              <p>Expected Harvest: {crop.harvest}</p>
            </div>
          </Card>)}
      </div>
    </div>;
}