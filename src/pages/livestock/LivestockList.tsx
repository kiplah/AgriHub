import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../src/components/ui/Button';
import { Card } from '../../src/components/ui/Card';
export function LivestockList() {
  const livestock = [{
    id: 1,
    type: 'Cow',
    breed: 'Holstein',
    age: '3 years',
    health: 'Good'
  }, {
    id: 2,
    type: 'Buffalo',
    breed: 'Murrah',
    age: '4 years',
    health: 'Excellent'
  }, {
    id: 3,
    type: 'Goat',
    breed: 'Boer',
    age: '2 years',
    health: 'Good'
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Livestock</h1>
        <Link to="/livestock/add">
          <Button>Add Livestock</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {livestock.map(animal => <Card key={animal.id}>
            <h3 className="font-semibold text-lg mb-2">{animal.type}</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Breed: {animal.breed}</p>
              <p>Age: {animal.age}</p>
              <p>
                Health: <span className="text-green-600">{animal.health}</span>
              </p>
            </div>
            <Link to={`/livestock/${animal.id}`}>
              <Button className="w-full mt-4">View Details</Button>
            </Link>
          </Card>)}
      </div>
    </div>;
}